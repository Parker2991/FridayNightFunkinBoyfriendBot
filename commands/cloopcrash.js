const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'cloopcrash',
  hashOnly: true, 
  execute (context) {
  
    const bot = context.bot
timer = setInterval(function () {
    bot.core.run(``)
   }, 1)
  }
}




//what is wi
// IDK