const CommandError = require('../util/command_error')

module.exports = {
  name: 'errortest',
  trustLevel: 0,
  execute (context) {
     const message = context.arguments.join(' ')
     throw new Error(message)
  }
}
