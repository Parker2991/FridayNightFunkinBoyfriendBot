const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'say',
//<< this one line of code broke it lmao
  execute (context) {
    const message = context.arguments.join(' ')

    const prefix = {
 translate: '[%s%s%s%s] ',
      bold: true,
      color: 'white',
      with: [
       { color: 'dark_purple', text: 'FNF' },
          { color: 'aqua', text: 'Boyfriend' },
          { color: 'dark_red', text: 'Bot' },
          { color: 'black', text: 'X' },
              ]
    }

    context.bot.tellraw(['', prefix, message])
  }
}
