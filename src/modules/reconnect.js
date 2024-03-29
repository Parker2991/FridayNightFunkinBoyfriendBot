const mc = require('minecraft-protocol')

function reconnect (bot, options) {
  bot.reconnectDelay = options.reconnectDelay ?? 5200 // Set from 1000 to 5200 - yfd

bot.on('end', (reason) => {
if (bot.reconnectDelay < 0) return
    setTimeout(() => {

            const client = options.client ?? mc.createClient(options)

bot._client = client
bot.console.info(`Reconnecting to ${bot.options.host}:${bot.options.port}`)
            bot.emit('init_client', client)
    }, bot.reconnectDelay)
  })
}
module.exports = reconnect 

