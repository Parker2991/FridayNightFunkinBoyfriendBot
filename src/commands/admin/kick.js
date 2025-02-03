const CommandError = require('../../util/command_error');


module.exports = {
  data: {
    name: "kick",
    description: "kick a player from the server",
    aliases: [

    ],
    trustLevel: 2,
    usages: [
      "invalidstring",
      "item"
    ]
  },
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const config = context.config;

    if (!args && !args[0] && !args[1] && !args[2]) return;
    switch (args[1]?.toLowerCase()) {
      case "invalidstring":
        bot.exploits.crashes.invalidString(args[2]);
        bot.chat.message(`crashing ${args[2]}`)
      break;
      case "item":
        bot.exploits.kicks.item(args[2]);
        bot.chat.message(`kicking ${args[2]}`)
      break;
      default:
        throw new CommandError('invalid argument')
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const config = context.config;

    if (!args && !args[0] && !args[1] && !args[2]) return;
    switch (args[0]?.toLowerCase()) {
      case "invalidstring":
        bot.exploits.crashes.invalidString(args[1]);
        bot?.discord?.message?.reply(`crashing ${args[1]}`)
      break;
      case "item":
        bot.exploits.kicks.item(args[1]);
        bot?.discord?.message?.reply(`kicking ${args[1]}`)
      break;
      default:
        throw new CommandError('invalid argument')
    }
  }
}