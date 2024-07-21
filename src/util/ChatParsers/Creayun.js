const ChatMessage = require('prismarine-chat')('1.20.2');
const util = require('util');
function creayun (messageobj, data) {
  const stringify = message => new ChatMessage(message).toString()
  const message = stringify(messageobj);
  const playerWithPrefix = /^(.*?) (\S*?) » (.*?)$/;
  const playerWithoutPrefix = /^(\S*?) » (.*?)$/
  if (playerWithPrefix.test(message)) {
    let match = message.match(playerWithPrefix)
    const sender = data.players.find((player) => player.uuid === player.uuid)
    if (!sender) return undefined
    return { sender, contents: match[3], type: 'minecraft:chat'};
  }
}
module.exports = creayun;
