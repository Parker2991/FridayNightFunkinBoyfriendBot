const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'memusage',
//<< this one line of code broke it lmao
   description:['check the bots memusage'],
   trustLevel: 0,
        aliases:['memoryusage', 'memused','memoryused'],
usage:[
"on",
"off"
],
  execute (context) {
    const bot = context.bot
    const source = context.source
    const args = context.arguments
    if (!args && !args[0] && !args[1] && !args[2] && !args[3] && !args[4] ) return 
          switch (args[0]) {
      case 'on':
    bot.memusage.on()
      
      source.sendFeedback({text: 'Memusage is now enabled', color:'green'}) 
          break
        case 'off':
          bot.memusage.off()
        / source.sendFeedback({text:'Memusage is now disabled', color:'red'})
        
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
