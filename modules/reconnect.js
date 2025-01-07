const mc = require('minecraft-protocol')

function inject (bot, options) {
  bot.reconnectDelay = options.reconnectDelay ?? 1000

  bot.on('end', () => {
    if (bot.reconnectDelay < 0) return

    bot._client = mc.createClient(options)
    bot.emit('init_client', bot._client)
  })
}

module.exports = inject
