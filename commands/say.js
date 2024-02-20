const CommandError = require('../CommandModules/command_error')
const buildstring = process.env['buildstring']
const foundation = process.env['FoundationBuildString']
module.exports = {
  name: 'say',
//<< this one line of code broke it lmao
   description:['make me say something in custom chat'],
  execute (context) {

    const message = context.arguments.join(' ')
const bot = context.bot

    const prefix = {
    translate: '[%s%s%s] \u203a %s',
    bold: false,
    color: 'white',
    with: [
     { color: 'dark_purple', text: 'FNF', bold:true },
        { color: 'aqua', text: 'Boyfriend', bold:true },
        { color: 'dark_red', text: 'Bot', bold:true},

        { color: 'green', text: `${message}` }
      ]
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