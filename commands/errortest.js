const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'errortest',

  execute (context) {
     const message = context.arguments.join(' ')
    throw new Error(message)
  }
}
