
const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'spambot',
hashOnly:true,
  execute (context) {
 const randomstring = require('randomstring')
const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
  host: context.bot.options.host,
 
  username: randomstring.generate(16),
 
})
 bot.on('login', async () => {
 setInterval(function () {
    bot.chat(`${Math.floor(Math.random() * 255) + 1}.${Math.floor(Math.random() * 255) + 1}.${Math.floor(Math.random() * 255) + 1}.${Math.floor(Math.random() * 255) + 1} anyone like doxing?`)
      return
   }, 100)
 
        
});


  }
}
