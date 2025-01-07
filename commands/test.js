const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'test',

  execute (context) {
    if (context.arguments.length !== 0) {
      const argumentList = []

      for (const argument of context.arguments) {
        if (argumentList.length !== 0) argumentList.push(' ')
        argumentList.push(argument)
      }

      context.source.sendFeedback({ text: 'Hello, world! Arguments: ', extra: argumentList }, false)
      return
    }

    context.source.sendFeedback('Hello, world!', false)
  }
}
