const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'cnscmd',
consoleOnly: true,
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')

    
    bot.chat('*' + message)  
  }
}
