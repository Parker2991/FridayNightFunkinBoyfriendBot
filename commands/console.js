const CommandError = require('../CommandModules/command_error')
const buildstring = process.env['buildstring']
const foundation = process.env['FoundationBuildString']
module.exports = {
  name: 'console',
consoleOnly:true,
        hashOnly:true,
        description:['no :)'],
  // description:['make me say something in custom chat'],
  execute (context) {

    const message = context.arguments.join(' ')
const bot = context.bot

    const prefix = {
       translate: '[%s] %s \u203a %s',
     color:'gray',
        with: [
          { 
                  text: 'FNFBoyfriendBot Console', color:'#00FFFF'
          
          
          },
          { 
                  selector: `${bot.username}`, color:'#00FFFF',
           clickEvent: { action: 'suggest_command', value:  '~help' } 
          },
          { 
                  text: '', 
                  extra: [`${message}`],
                  color:'white'
          },

        ],
         hoverEvent: { action:"show_text", value: 'FNF Sky is a fangirl but a simp for boyfriend confirmed??'},
        clickEvent: bot.options.Core.customName ? { action: 'open_url', value:  bot.options.Core.customName } : undefined,
      }

bot.tellraw([prefix])
  }
}
//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 

// Parker, why is hashing just random characters???
//wdym