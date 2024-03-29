const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'core',
   description:['make me run a command in core'],
        aliases:['cb','corerun','run','commandblockrun','cbrun'],
     trustLevel: 0,
usage:["<command/message>"],
  execute (context) {
  const bot = context.bot
   // const client = context.client
          const args = context.arguments
          const source = context.source
    const message = context.arguments.join(' ')
            // if (args.length === 0){
//source.sendFeedback({translate:"Too few Arguments!", color:"red"})
if (message.startsWith('/')) {
      bot.core.run(message.substring(1))
      return
    }
    bot.core.run(message)  
  
   
          }
  }
