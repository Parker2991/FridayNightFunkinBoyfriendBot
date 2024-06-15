const CommandError = require('../CommandModules/command_error')
const { stylize } = require('../util/eval_colors')
const util = require('util')
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'servereval',
  description:['run code unisolated'],
  trustLevel: 2,
  aliases:['svreval'],
  usage: ['<js code>'],
  execute (context) {
    const bot = context.bot;
    const source = context.source; 
    const args = context.arguments;
    const script = args.slice(1).join(' ');
    if (!args && !args[0] && !args[1] && !args[2] && !args[3] && !args[4] ) return 
    try {
     if (bot.options.useChat || bot.options.useChat) {
       bot.chat(bot.getMessageAsPrismarine({ text: util.inspect(eval(script), { stylize }).substring(0, 32700) })?.toMotd().replaceAll('§','&'))
     } else {
       bot.sendFeedback({ text: util.inspect(eval(script), { stylize }).substring(0, 32700) })
       bot.sendFeedback({ text: `Script input: ${script}` })
     }
    } catch (err) {
      if (bot.options.isCreayun || bot.options.useChat) {
        bot.chat(`&4${err.message}`)
      } else {
     bot.sendFeedback({ text: err.message, color: 'red' })
      }
     }
   },
   discordExecute (context) {
     const bot = context.bot;
     const args = context.arguments;
     const source = context.source;
     try {
       let Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(bot.getMessageAsPrismarine('```js\n' + util.inspect(eval(args.join(' '))) + '```')?.toMotd())
       bot.discord.Message.reply({ embeds: [Embed] })
     } catch (e) {
        let Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.error}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(e.toString())
        bot.discord.Message.reply({ embeds: [Embed] })
     }
   }
 }