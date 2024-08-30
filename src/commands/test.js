const CommandError = require('../util/command_error');
module.exports = {
  name: 'test',
  trustLevel: 0,
  aliases: [
  ],
  description: 'Make me say something',
  usages: [
    "error stack <message>",
    "error message <message>",
    "message <message>"
  ],
  execute (context) {
    const bot = context.bot
    const args = context.arguments;
    if (!args && !args[0] && !args[1]) return
    switch (args[0]) {
      case 'error':
        switch (args[1]) {
          case 'stack':
            throw new Error(args.slice(2).join(' '));
          break
          case 'message':
            throw new CommandError(args.slice(2).join(' '));
          break
        }
//        throw new Error(args.slice(1).join(' '));
      break;
      case "message":
        bot.tellraw("@a", [
          {
            text: `Hello, World!, Player: ${bot.getMessageAsPrismarine(context.source.player.displayName ?? context.source.player.profile.name)?.toMotd()}§r`,
            color: 'gray',
            bold: false
          },
          {
            text: ` Args: ${args.slice(1).join(' ')}`,
            color: 'gray',
            bold: false,
          }
        ])
      break;
    }
  }
}
