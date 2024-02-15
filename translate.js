const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'translate',
//<< this one line of code broke it lmao
   description:['<language 1> <language 2> <message>'],
        aliases:['translation'],
   trustLevel: 0,
  async execute (context) {
    const { translate } = require('@vitalets/google-translate-api')
    const message = context.arguments.join(' ')
const bot = context.bot
    const args = context.arguments
    //const amonger = args.slice(1).join(' ');
    const source = context.source
   const ChatMessage = require('prismarine-chat')(bot.options.version)
          try {
        const res = await translate(args.slice(3).join(''),{from:args[0],to:args[1]})
        if(!bot.options.Core.enabled){
                bot.chat(ChatMessage.fromNotch([{ text: 'Result: ', color: 'gold' }, { text: res.text, color: 'green' }]).toMotd().replaceAll('§', '&'))
        }else{
                  bot.tellraw([{ text: 'Result: ', color: 'gold' }, { text: res.text, color: 'green' }])
        }
        } catch (e) {
                  if (!bot.options.Core.enabled){
                       bot.chat(ChatMessage.fromNotch({ text: e.toString(), color: 'red' }).toMotd().replaceAll('§', '&'))   
                  }else{
        source.sendFeedback({ text: e.toString(), color: 'red' })
      }
          }
    },
  
  }

//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 

// Parker, why is hashing just random characters???
//wdym
