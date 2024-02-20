const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'sudo',
  description:['make a player say or run something'],

  execute (context) {
    
    const bot = context.bot
const message = context.arguments.join(' ')
    
      bot.core.run('sudo ' + message)
      
    
  }
}
