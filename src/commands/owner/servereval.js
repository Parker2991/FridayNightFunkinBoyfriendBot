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
      } else if (bot.options.mode === "savageFriends") {
        bot.core.run(`minecraft:tellraw @a ${JSON.stringify(util.inspect(eval(script), { stylize }).substring(0, 32700))}`)
//        bot.tellraw('@a', `${util.inspect(eval(script), { stylize }).substring(0, 32700)}`);
//        bot.chat.message(bot.getMessageAsPrismarine({ text: util.inspect(eval(script), { stylize }).substring(0, 32700) })?.toMotd().replaceAll('§','&'))
      } else {
        bot.tellraw(`@a[name="${source.player.profile.name}"]`, { 
          text: `${util.inspect(eval(script), { stylize }).substring(0, 32700)}`
        });
      }
    } catch (e) {
      throw new CommandError(e.toString())
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    try {
      bot?.discord?.message?.reply(`\`\`\`js\n${util.inspect(eval(args.join(' '))).toString().substring(0, 1980)}\`\`\``);
    } catch (e) {
      throw new CommandError(e.toString());
    }
  }
}
