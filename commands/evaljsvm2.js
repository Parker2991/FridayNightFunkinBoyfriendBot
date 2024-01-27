const { VM } = require('vm2')
const util = require('util')
const { stylize } = require('../util/eval_colors')

const options = {
  timeout: 1000
}
let vm = new VM(options)

module.exports = {
  name: 'evaljsvm2',
trustLevel: 1,
        description:['old evaljs code'],
        aliases:['evaljsold', 'evalvm2', 'evalold'],
  execute (context) {
    const source = context.source
    const args = context.arguments
          const bot = context.bot
          const ChatMessage = require('prismarine-chat')(bot.options.version)
         
     const cmd = {
 translate: '[%s] ',
      bold: false,
      color: 'white',
      with: [
        { color: 'dark_green', text: 'EvalJS Cmd'},
              ]
    }
          
         //  throw new CommandError('temp disabled')
     if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
    switch (args[1]) {
      case 'run':
        try {
          const output = vm.run(args.slice(2).join(' '))
if (bot.options.Core.CorelessMode){
        bot.chat(ChatMessage.fromNotch([cmd, { text: util.inspect(output, { stylize }) }]).toMotd().replaceAll('§', '&'))
}else
          source.sendFeedback([cmd, { text: util.inspect(output, { stylize }) }])
        } catch (e) {
          if(!bot.options.Core.CorelessMode){
          bot.chat(ChatMessage.fromNotch([cmd, { text: e.stack, color: 'black' }]).toMotd().replaceAll('§', '&'))        
          }else{
                source.sendFeedback([cmd, { text: e.stack, color: 'black' }])
        }
        }
        break
      case 'reset':
        vm = new VM(options)
if(bot.options.Core.CorelessMode){
bot.chat(ChatMessage.fromNotch([cmd, { text: 'Successfully reset the eval context', color: 'green' }]).toMotd().replaceAll('§', '&'))
}else{
       source.sendFeedback([cmd, { text: 'Successfully reset the eval context', color: 'green' }])
}
        break
        default:
                    if(bot.options.Core.CorelessMode){
                            bot.chat(ChatMessage.fromNotch([cmd, { text: 'Invalid option!', color: 'dark_red' }]).toMotd().replaceAll('§', '&'))
                    }else{
        source.sendFeedback([cmd, { text: 'Invalid option!', color: 'dark_red' }])
        
    }
  }
  }
  }