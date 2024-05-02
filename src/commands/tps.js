const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'tpsbar',
//<< this one line of code broke it lmao
   description:['tps'],
      trustLevel: 0,
        aliases:['tickspersecondbar', 'tickspersecond', 'tps'],
usage:["on","off"],
  execute (context) {
    const bot = context.bot
    const source = context.source
    const args = context.arguments
    if (bot.options.isCreayun) {
      throw new CommandError('Cannot execute command because isCreayun is active!')
    } else {
    switch (args[0]) {
      case 'on': 
       bot.tps.on()
    
      bot.sendFeedback({text: 'TPSBar is now enabled', color:'green'}) 
    
            break
        case 'off':
      
                    bot.tps.off()
          bot.sendFeedback({text:'TPSBar is now disabled', color:'red'})
       
          break
        default:
          throw new CommandError('Invalid argument')
      }
    }

  }
}
//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 

// Parker, why is hashing just random characters???
//wdym
