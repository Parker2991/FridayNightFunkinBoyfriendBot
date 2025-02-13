const CommandError = require('../../util/command_error');
const { EmbedBuilder } = require('discord.js');
module.exports = {
  data: {
    name: 'kick',
    trustLevel: 1,
    aliases: [
    ],
    description: 'kick or crash players',
    usages: [
      "invalidstring <player>",
      "item <player>"
    ],
  },
  execute (context) {
    const bot = context.bot
    const args = context.arguments;
    if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
    if (bot.options.useChat || bot.options.isSavage || bot.options.isCreayun) throw new CommandError('Cannot execute command due to smth in the config being enabled');

    switch (args[1]) {
      case 'invalidstring':
        bot.exploits.crashes.invalidString(`${args.slice(2).join(' ')}`);
      break
      case 'item':
        bot.exploits.kicks.item(`${args.slice(2).join(' ')}`)
      break
      default:
        bot.chat.message(bot.getMessageAsPrismarine({ translate: "command.unknown.argument", color: "dark_red" })?.toMotd().replaceAll("§","&"))
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    if (bot.options.useChat || bot.options.isSavage || bot.options.isCreayun) throw new CommandError('Cannot execute command!');
    switch (args[0]) {
      case "invalidstring":
        bot.exploits.crashes.invalidString(`${args.slice(1).join(' ')}`)
      break
      case 'item':
        bot.exploits.kicks.item(`${args.slice(1).join(' ')}`)
      break
      default:
        throw new CommandError('Invalid argument');
    }
  }
}
