const mc = require('minecraft-protocol');
const usernameGen = require('../util/usernameGen');
function reconnect (bot, options) {
  bot.reconnectDelay = options.reconnectDelay ?? 5200 // Set from 1000 to 5200 - yfd
  bot.usernameGen = options.usernameGen ?? false
  bot.on('end', (reason) => {
  if (bot.reconnectDelay < 0) return
     setTimeout(() => {
       if (bot.options.usernameGen) {
          bot._client.end()
//          bot.options.username = usernameGen()
          client = options.client ?? mc.createClient(options, bot.options.username = usernameGen(), options.selfcare)
       } else {
          client = options.client ?? mc.createClient(options, options.selfcare)
       }
       bot._client = client
       bot.console.info(`Reconnecting to ${bot.options.host}:${bot.options.port}`)
       bot?.discord?.channel?.send('Reconnecting to `' + bot.options.host + ':' + bot.options.port + '`')
       bot.emit('init_client', client)
    }, bot.reconnectDelay)
    bot.emit('reconnect', bot._client.end())
  })
}
module.exports = reconnect;

