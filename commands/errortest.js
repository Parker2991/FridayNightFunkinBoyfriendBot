const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'errortest',

  execute (context) {
     const message = context.arguments.join(' ')
  context.source.sendFeedback('hint hover your mouse over the error')
    throw new Error(message)

  }
}
