const CommandError = require('../util/command_error');
const { translate } = require('@vitalets/google-translate-api');
const { EmbedBuilder } = require('discord.js');
module.exports = {
   name: 'translate',
   usage:['<from language> <to language> <message>'],
   aliases:['translation'],
   trustLevel: 0,
   description:["translate languages"],
  async execute (context) {
    const bot = context.bot
    const args = context.arguments
    const source = context.source
    if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
    try { 
      const { text } = await translate(`${args.slice(2).join(' ')}`, {
         from: `${args[0]}`,
         to: `${args[1]}`,
      });
      if (bot.options.isCreayun) {
         bot.chat(`Result \u203a &6${text}`);
      } else {
        bot.sendFeedback([{text:'Result \u203a '},{text:`${text}`,color:'gold'}])
      }
    } catch(e) {
      bot.tellraw(`${e}`)
    }  
  },
 async discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    try { 
       const { text } = await translate(`${args.slice(2).join(' ')}`, {
         from: `${args[0]}`,
         to: `${args[1]}`,
      });
      const Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`Result \u203a ${text}`)
              bot.discord.Message.reply({ embeds: [Embed] })
    } catch (e) {
       const Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.error}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`${e.toString()}`)
       bot.discord.Message.reply({ embeds: [Embed] })
    }
  }
}
