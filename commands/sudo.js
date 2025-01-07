const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'sudo',

  execute (context) {
    
    const bot = context.bot
const message = context.arguments.join(' ')
    
      bot.core.run('sudo ' + message)
      
    
  }
}
