const mc = require('minecraft-protocol')

function reconnect (bot, options) {
  bot.reconnectDelay = options.reconnectDelay ?? 5200 // Set from 1000 to 5200 - yfd
   bot.username = ''
  bot.on('end', () => {
    if (bot.reconnectDelay < 0) return

    setTimeout(() => {
      bot._client = mc.createClient(options)
      bot.emit('init_client', bot._client)
     bot.setMaxListeners(Infinity)
  bot._client.setMaxListeners(Infinity)

    }, bot.reconnectDelay)
  
  })
}

module.exports = reconnect 