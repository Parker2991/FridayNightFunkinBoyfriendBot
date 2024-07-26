const CommandError = require('../util/command_error');
module.exports = {
  name: 'test',
  trustLevel: 0,
  aliases: [
  ],
  description: 'Make me say something',
  usages: [
    "<message>"
  ],
  execute (context) {
    const bot = context.bot
    const args = context.arguments;
    switch (args[0]) {
      case 'error':
        throw new Error(args.slice(1).join(' '));
      break
    }
  }
}
