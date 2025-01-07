const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'ban',
hashOnly: true, 
  execute (context) {
   throw new CommandError('mabe being replaced with blacklist')
    const target = context.arguments.join(' ')
    const bot = context.bot

   
    
  }
}
