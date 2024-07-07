const CommandError = require('../util/command_error')

module.exports = {
  name: 'test',
  trustLevel: 0,
  execute (context) {
    if (context.arguments.length !== 0) {
      const argumentList = []

      for (const argument of context.arguments) {
        if (argumentList.length !== 0) argumentList.push(' ')
        argumentList.push(argument)
      }

      bot.tellraw({ text: 'Hello, world! Arguments: ', extra: argumentList }, false)
      return
    }

    bot.tellraw('Hello, world!', false)
  }
}
