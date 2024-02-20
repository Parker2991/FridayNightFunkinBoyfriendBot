
const { chatPacketListener, parsePlayerMessages } = require('../../util/chat')
const minecraftVersionToNumber = require('../../util/minecraftVersionToNumber')
function inject (bot, client, target) {
  function listener (packet) {
    chatPacketListener(packet, target, minecraftVersionToNumber(target.version) >= 1.10)
  }
  target.on('systemChat', listener)
  target.on('chat', listener)

  target.on('message', (message, packet) => {
    parsePlayerMessages(message, packet, target)
  })
};

module.exports = { inject }
