const { containsIllegalCharacters } = require('../util/containsIllegalCharacters')
const { chatPacketListener, parsePlayerMessages } = require('../util/chat')
const minecraftVersionToNumber = require('../util/minecraftVersionToNumber')

function inject (bot, dcclient, config) {
  bot.chatQueue = []
  bot._chatQueue = []

  const _chatQueueInterval = setInterval(() => {
    if (bot.chatQueue.length !== 0) {
      if (containsIllegalCharacters(bot.chatQueue[0])) {
        bot.chatQueue.shift()
        return
      };
     
      for (const subMessage of bot.chatQueue[0].split('\n')) {
        if (!subMessage) return
        let smallMsg
        for (let i = 0; i < subMessage.length; i += config.chat.messageLength) {
          smallMsg = subMessage.substring(i, i + config.chat.messageLength)
          bot._chatQueue.push(smallMsg)
        }
      }
      bot.chatQueue.shift()
    }
  }, 0)

  const chatQueueInterval = setInterval(function () {
    if (bot._chatQueue.length !== 0) {
      if (bot._chatQueue[0].startsWith('/') && minecraftVersionToNumber(bot.version) >= 1.19) {
        // totallynotskidded™️ from mineflayer
        const command = bot._chatQueue[0].slice(1)
        const timestamp = BigInt(Date.now())
        bot._client.write('chat_command', {
          command,
          timestamp,
          salt: 0n,
          argumentSignatures: [],
          signedPreview: false,
          messageCount: 0,
          acknowledged: Buffer.alloc(3),
          previousMessages: []
        })
      } else {
        bot._client.chat(bot._chatQueue[0])
      }

      bot._chatQueue.shift()
    }
  }, 450)

  bot.chat = (message) => {
    bot.chatQueue.push(String(message))
  }

  bot.on('end', () => {
    clearInterval(chatQueueInterval)
    clearInterval(_chatQueueInterval)
  })

  function listener (packet) {
    chatPacketListener(
      packet,
      bot,
      minecraftVersionToNumber(bot.version) >= 1.19
    )
  }
  // TODO: support playerChat (formattedMessage doesn't exist on kaboom so prefixes like [OP] doesn't appear)
  // bot._client.on('playerChat', listener)
  bot._client.on('systemChat', listener)
  bot._client.on('chat', listener)

  bot.on('message', (message, parsedMessage) => parsePlayerMessages(message, parsedMessage, bot))
}

module.exports = { inject }
