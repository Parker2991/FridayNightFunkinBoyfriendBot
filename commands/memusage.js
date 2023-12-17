const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'memusage',
//<< this one line of code broke it lmao
   description:['tps'],
        hashOnly:false,
        consoleOnly:false,
        ownerOnly:false,
        aliases:['memoryusage', 'memused','memoryused'],
  execute (context) {
    const bot = context.bot
    const source = context.source
    const args = context.arguments
    switch (args[0]) {
      case 'on':
    bot.memusage.on()
      
      //source.sendFeedback({text: 'TPSBar is now enabled', color:'green'}) 
          break
        case 'off':
          bot.memusage.off()
         // source.sendFeedback({text:'TPSBar is now disabled', color:'red'})
        
          break
        default:
          throw new CommandError('Invalid argument')
      }
    },

  }

//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 

// Parker, why is hashing just random characters???
//wdym