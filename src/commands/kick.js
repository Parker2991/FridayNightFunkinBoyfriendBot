const CommandError = require('../util/command_error');
const { EmbedBuilder } = require('discord.js');
module.exports = {
  name: 'kick',
  trustLevel: 2,
  aliases: [
  ],
  description: 'kick or crash players',
  usages: [
    "invalidstring <player>",
  ],
  execute (context) {
    const bot = context.bot
    const args = context.arguments;
    if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
    if (bot.options.useChat ?? bot.options.isSavage ?? bot.options.isCreayun) throw new CommandError('Cannot execute command due to smth in the config being enabled');

    switch (args[1]) {
      case 'invalidstring':
        bot.core.run(`minecraft:tellraw ${args.slice(2).join(' ')} ${JSON.stringify(bot.exploits.invalidString)}`)
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
        bot.core.run(`minecraft:tellraw ${args.slice(1).join(' ')} ${JSON.stringify(bot.exploits.invalidString)}`)
      break
    }
  }
}
