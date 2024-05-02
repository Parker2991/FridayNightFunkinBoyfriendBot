const CommandError = require('../CommandModules/command_error')
const ud = require('../util/urban')
module.exports = {
  name: 'urban',
  description:['urban dictionary'],
  aliases:['urbandictionary'],
  trustLevel: 0,
  usage:[
    "all <definition>",
    "single <definition>",
  ],
  async execute (context) {
    const source = context.source
    const args = context.arguments
    const bot = context.bot
    const cmdPrefix = [
      { text: '[', color: 'dark_gray' },
      { text: 'Urban', color: '#B72A00' },
      { text: '] ', color: 'dark_gray'}
    ]    
/*      for (const def of definitions) {
        bot.tellraw([cmdPrefix, { text: def.example.replaceAll('\r',''), color: 'dark_gray' }]) 
        bot.tellraw([cmdPrefix, { text: def.definition.replaceAll("\r", ""), color: 'dark_gray' }]) 
      }*/
    switch(args[0]) {
      case 'all':
          try {     
          let definitions = await ud.define(args.slice(1).join(' '))
          for (const def of definitions) {
            bot.tellraw([cmdPrefix, { text: def.example.replaceAll('\r',''), color: 'dark_gray' }])
            bot.tellraw([cmdPrefix, { text: def.definition.replaceAll("\r", ""), color: 'dark_gray' }])
          }
          bot.tellraw([cmdPrefix,{text:`Definition: ${definitions[0].word}`, color:'dark_gray'}])
          bot.tellraw([cmdPrefix,{text:`Author: ${definitions[0].author}`, color:'dark_gray'}])
        //source.sendFeedback(results[0].thumbs_down)
          bot.tellraw([cmdPrefix,{text:`👍  ${definitions[0].thumbs_up}  | 👎  ${definitions[0].thumbs_down}`, color:'gray'}])
          } catch (e) {
            bot.sendError(`${e.toString()}`)
          }
          break
       case 'single':
          ud.define(args.slice(1).join(' '), (error, results) => {
            if (error) {
               bot.tellraw([cmdPrefix,`${error.message}`])
               return
            }
            bot.tellraw('define (callback)')

            Object.entries(results[0]).forEach(([key, prop]) => {
              bot.tellraw([cmdPrefix,`${key}: ${prop}`])
            })
          })
          break
      default: 
      bot.sendError('invalid argument')
    }
  }
}

