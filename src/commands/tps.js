const CommandError = require('../CommandModules/command_error')
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'tpsbar',
  description:['tps'],
  trustLevel: 0,
  aliases:['tickspersecondbar', 'tickspersecond', 'tps'],
  usage:["on","off"],
  execute (context) {
    const bot = context.bot
    const source = context.source
    const args = context.arguments
    if (bot.options.isCreayun || bot.options.useChat) {
      throw new CommandError('Cannot execute command because isCreayun or useChat is active!')
    } else {
    switch (args[0]) {
      case 'on': 
       bot.tps.on()
       bot.sendFeedback([{ text: 'TPSBar is now', color: 'dark_gray' },{ text: ' enabled', color: 'green' }]) 
            break
        case 'off':
          bot.tps.off()
          bot.sendFeedback([{ text: 'TPSBar is now ', color: 'dark_gray' },{ text: 'disabled', color: 'red' }])
          break
        default:
          throw new CommandError('Invalid argument')
      }
    }
  }, 
  discordExecute (context) {
   const bot = context.bot;
   const args = context.arguments;
   const source = context.source;
   if (bot.options.isCreayun || bot.options.useChat) {
      throw new CommandError('Cannot execute command because isCreayun or useChat is active!')
    } else {
    switch (args[0]) {
      case 'on': 
       bot.tps.on()
//       bot.sendFeedback([{ text: 'TPSBar is now', color: 'dark_gray' },{ text: ' enabled', color: 'green' }]) 
         let Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`TPSBar is now enabled`)
         bot.discord.Message.reply({ embeds: [Embed] })
         break
        case 'off':
          bot.tps.off()
          let Embed1 = new EmbedBuilder()
                  .setColor('#00FFFF')
                  .setTitle(`${this.name} Command`)
                  .setDescription(`TPSBar is now disabled`)
          bot.discord.Message.reply({ embeds: [Embed1] })
          break
        default:
          throw new CommandError('Invalid argument')
      }
    }
  }
}
//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 

// Parker, why is hashing just random characters???
//wdym