const CommandError = require('../CommandModules/command_error')
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'memusage',
//<< this one line of code broke it lmao
   description:['check the bots memusage'],
   trustLevel: 0,
   aliases:['memoryusage', 'memused','memoryused'],
   usage:[
    "on",
    "off"
   ],
  execute (context) {
    const bot = context.bot
    const source = context.source
    const args = context.arguments
    if (!args && !args[0] && !args[1] && !args[2] && !args[3] && !args[4] ) return 
    switch (args[0]) {
      case 'on':
        bot.memusage.on()  
        bot.sendFeedback([{ text: 'Memusage is now ', color: 'dark_gray' },{ text: 'enabled', color: 'green' }]) 
          break
        case 'off':
          bot.memusage.off()
          bot.sendFeedback([{ text: 'Memusage is now ', color: 'dark_gray'},{ text: 'disabled', color:'red' }])
          break
        default:
          throw new CommandError('Invalid argument')
      }
    },
    discordExecute (context) {
      const bot = context.bot; 
      const args = context.arguments;
      switch (args[0]) {
      case 'on':
        bot.memusage.on()  
        let Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`Memusage is now enabled`)
        bot.discord.Message.reply({ embeds: [Embed] })
          break
        case 'off':
          bot.memusage.off()
          let Embed1 = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`Memusage is now disabled`)
              bot.discord.Message.reply({ embeds: [Embed1] })
          break
        default:
          throw new CommandError('Invalid argument')
      }
    }
  }
/*
const Embed = new EmbedBuilder()
                  .setColor('#00FFFF')
                  .setTitle(`${this.name} Command`)
                  .setDescription(`${bot.getMessageAsPrismarine(`Players: (` + bot.players.length + ')')?.toString()}` + `${bot.getMessageAsPrismarine('\n')?.toString()}` + `${bot.getMessageAsPrismarine(component)?.toString()}`)
              bot.discord.Message.reply({embeds: [Embed]})

*/