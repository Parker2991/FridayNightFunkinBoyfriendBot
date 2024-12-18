const CommandError = require('../../util/command_error.js');
const { stylize } = require('../../util/stylizeEval');
const util = require('util');
module.exports = {
  data: {
    name: 'servereval',
    trustLevel: 3,
    aliases: [
      "se"
    ],
    description: 'run code unisolated',
    usages: [
      "<code>",
    ],
  },
  execute (context) {
    const bot = context.bot;
    const source = context.source;
    const config = context.config;
    const discordClient = context.discordClient;
    const args = context.arguments;
    const script = args.slice(1).join(' ');
    const { MessageBuilder } = require('prismarine-chat')(bot.options.version);
    try {
      if (source.sources.console) {
        bot.console.log(bot.getMessageAsPrismarine({ text: util.inspect(eval(args.join(' ')), { stylize })})?.toAnsi())
      } else if (bot.options.useChat || bot.options.isSavage) {
        bot.chat.message(bot.getMessageAsPrismarine({ text: util.inspect(eval(script), { stylize }).substring(0, 32700) })?.toMotd().replaceAll('§','&'))
      } else {
        bot.tellraw(`@a[name="${source.player.profile.name}"]`, new MessageBuilder()
          .setText(util.inspect(eval(script), { stylize }).substring(0, 32700))
        )
/*        bot.tellraw(`@a[name="${source.player.profile.name}"]`, [
          {
            text: util.inspect(eval(script), { stylize }).substring(0, 32700),
            hoverEvent: {
              action: 'show_text',
              contents: [{
                text: 'click here to copy the code input',
                color: 'gray'
              }]
            },
            clickEvent: {
              action: 'copy_to_clipboard',
              value: `${script}`
            }
          }
        ]);*/
      }
    } catch (e) {
      throw new CommandError(e.toString())
    }
  }
}
