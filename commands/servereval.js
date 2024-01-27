const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'servereval',
   description:['no'],
  trustLevel: 2,
        aliases:['svreval'],
  async execute (context, arguments, selector) {
    const bot = context.bot
   // const args = context.arguments.join(' ')
const source = context.source 
   // throw new CommandError('temp disabled')
    const { stylize } = require('../util/eval_colors')
    const util = require('util')
    const args = context.arguments
       const ChatMessage = require('prismarine-chat')(bot.options.version)   
    const script = args.slice(1).join(' ');
    //bot.chat(ChatMessage.fromNotch(message).toMotd().replaceAll('\xa7', '&'))
          if (!args && !args[0] && !args[1] && !args[2] && !args[3] && !args[4] ) return 
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}//ChatMessage.fromNotch(await sleep(500) ).toMotd().replaceAll('§', '&')`
          try {
        if(source.sources.console){
                bot.console.info({ text: util.inspect(eval(args.slice(0).join(' ')), { stylize }).substring(0, 32700) })
                bot.console.info({ text: `Script input: ${script}` })
        } else
                  if(!bot.options.Core.CorelessMode && !source.sources.console){
         
                bot.chat(ChatMessage.fromNotch(await sleep(500) ?? { text: util.inspect(eval( args.slice(1).join(' ')), { stylize }).substring(0, 32700) }).toMotd().replaceAll('§', '&'))
        }else {
        
        //{ text: util.inspect(eval(script), { stylize }).substring(0, 32700) }
  source.sendFeedback({ text: util.inspect(eval(script), { stylize }).substring(0, 32700) })
           source.sendFeedback({ text: `Script input: ${script}` })
        }
        } catch (err) {
     if(!bot.options.Core.enabled &&  !source.sources.console){
           bot.chat(`&4${err.message}`)  
     }else if(source.sources.console){
bot.console.warn({ text: err.message, color: 'red' })
     } else {
        source.sendFeedback({ text: err.message, color: 'red' })
         source.sendFeedback({ text: `Script input: ${script}` })
}
}
  }
}


/*  try {
        bot.tellraw({ text: util.inspect(eval(context.arguments.slice().join(' ')), { stylize }).substring(0, 32700) })
      } catch (err) {
        bot.tellraw({ text: util.inspect(err).replaceAll('runner', 'runner'), color: 'red' })
      }
      */