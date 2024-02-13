function inject (bot, options) {
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
      if (bot._chatQueue[0].startsWith('/') && minecraftVersionToNumber(bot.version) >= 1.20) {

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
      minecraftVersionToNumber(bot.version) >= 1.20
    )
  }
}

 module.exports = inject             
