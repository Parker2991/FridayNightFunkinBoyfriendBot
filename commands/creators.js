const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'creator',

  execute (context, prefix) {
    const message = context.arguments.join(' ')
const Creators = {
 translate: '[%s%s%s%s%s%s]',
      bold: false,
      color: 'white',
      with: [
       { color: 'dark_red', text: 'Parker' },
         { color: 'black', text: '2991' },
             { color: 'white', text: ',' },
             { color: 'dark_green', text: ' _ChipMC_' },
             { color: 'white', text: ',' },
             { color: 'yellow', text: ' chayapak' },
        
          ]
    }
  context.source.sendFeedback(['Thank you to all that helped! ', Creators])
  }
}
