const CommandError = require('../util/command_error.js');
const { stylize } = require('../util/stylizeEval');
const util = require('util');
module.exports = {
  name: 'servereval',
  trustLevel: 2,
  aliases: [
  ],
  description: 'run code unisolated',
  usages: [
    "<code>",
  ],
  execute (context) {
    const bot = context.bot;
    const source = context.source;
    const config = context.config;
    const discordClient = context.discordClient;
    const args = context.arguments;
    const script = args.slice(1).join(' ');
    try {
      if (source.sources.console) {
        bot.console.logs(bot.getMessageAsPrismarine({ text: util.inspect(eval(args.join(' ')), { stylize })})?.toAnsi())
      } else if (bot.options.useChat ?? bot.options.isSavage) {
        bot.chat.message(bot.getMessageAsPrismarine({ text: util.inspect(eval(script), { stylize }).substring(0, 32700) })?.toMotd().replaceAll('§','&'))
      } else {
        bot.tellraw(`@a[name="${source.player.profile.name}"]`, [
                   {
                     text: util.inspect(eval(script), { stylize }).substring(0, 32700)
                   }
        ]);
      }
    } catch (e) {
      throw new CommandError(e.toString())
    }
  }
}
