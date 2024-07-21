const CommandError = require('../util/command_error')

module.exports = {
  name: 'core',
  trustLevel: 0,
  aliases: [
    "cb",
    "corerun",
    "commandcorerun",
  ],
  description: 'run commands in core!',
  usages: [
    "<command>",
  ],
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
    if (message.startsWith('/')) {
      bot.core.run(message.substring(1))
      return
    }
    bot.core.run(message)
  }
}
