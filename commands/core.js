const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'core',
   description:['make me run a command in core'],
        hashOnly:false,
        consoleOnly:false,
  execute (context) {
  const bot = context.bot
    const client = context.client
    const message = context.arguments.join(' ')
if (message.startsWith('/')) {
      bot.core.run(message.substring(1))
      return
    }
    bot.core.run(message)  
  
   
       
  }
}