const mc = require('minecraft-protocol')

function inject (bot, options) {
  bot.reconnectDelay = options.reconnectDelay ?? 5200 // Set from 1000 to 5200 - yfd

  bot.on('end', () => {
    if (bot.reconnectDelay < 0) return

    bot._client = mc.createClient(options)
    bot.emit('init_client', bot._client)
  })
}

module.exports = inject
