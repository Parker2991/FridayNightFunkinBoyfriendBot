const CommandError = require('../../util/command_error')

module.exports = {
  data: {
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
  },
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ');
    bot.core.run(message)
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    bot.core.run(args.join(' '));
  }
}
