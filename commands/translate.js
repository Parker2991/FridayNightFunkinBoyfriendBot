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
    const amonger = args.slice(1).join(' ');
    const source = context.source
    try {
        const res = await translate(args.slice(2).join(' '), { from: args.slice(1).join(' '), to: args[1] })
        bot.tellraw([{ text: 'Result: ', color: 'gold' }, { text: res.text, color: 'green' }])
      } catch (e) {
        source.sendFeedback({ text: e, color: 'red' })
      }
    },
  
  }

//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 

// Parker, why is hashing just random characters???
//wdym