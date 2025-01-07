const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'console',
  consoleOnly: true,

  execute (context) {
    const message = context.arguments.join(' ')

    const prefix = {
 translate: '[%s%s%s%s][%s] ',
      bold: true,
      color: 'gray',
      with: [
       { color: 'dark_purple', text: 'FNF' },
          { color: 'aqua', text: 'Boyfriend' },
          { color: 'dark_red', text: 'Bot' },
          { color: 'black', text: 'X' },
          { color: 'dark_green', text: 'Console' },
              ]
    }

    context.bot.tellraw(['', prefix, message])
  }
}
