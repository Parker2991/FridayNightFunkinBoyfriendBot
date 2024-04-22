const mc = require('minecraft-protocol')

function reconnect (bot, options) {
  bot.reconnectDelay = options.reconnectDelay ?? 5200 // Set from 1000 to 5200 - yfd
  bot.usernameGen = options.usernameGen ?? false
   function username() {
              const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890\\!@#$%^*(){}[]|\;:,<.>/?&'; 
              let username = '';
              for (let i = 0; i < 9; i++) {
                  const randomIndex = Math.floor(Math.random() * characters.length);
                  username += characters[randomIndex];
              }
              return username;
          }
bot.on('end', (reason) => {
if (bot.reconnectDelay < 0) return
    setTimeout(() => {
   if (bot.options.usernameGen) {
//     client = options.client ?? mc.createClient({username:username()}, options) 
//   let e = bot.options.username = username()
  bot._client.end()
  bot.options.username = username()
    client = options.client ?? mc.createClient(options, bot.options.username = username())
     }else {
     client = options.client ?? mc.createClient(options)
     }
bot._client = client
bot.console.info(`Reconnecting to ${bot.options.host}:${bot.options.port}`)
            bot.emit('init_client', client)
    }, bot.reconnectDelay)
  })
}
module.exports = reconnect;

