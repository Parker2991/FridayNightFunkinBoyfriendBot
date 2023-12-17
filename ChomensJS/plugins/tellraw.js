function inject (bot, dcclient, config) {
  const ChatMessage = require('prismarine-chat')(bot.version)
  bot.tellraw = function (selector, message) {
    if (bot.options.useChat && selector === '@a') {
      bot.chat(ChatMessage.fromNotch(message).toMotd().replaceAll('\xa7', '&'))
      return
    }
    bot.core.run(`minecraft:tellraw ${selector} ${JSON.stringify(message)}`)
  }
};

module.exports = { inject }
