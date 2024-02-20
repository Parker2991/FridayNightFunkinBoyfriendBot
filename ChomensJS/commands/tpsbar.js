const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'tpsbar',
  alias: ['tps'],
  description: 'Shows the server\'s TPS using Minecraft bossbar',
  usage: '<on|off>',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    switch (args[0]) {
      case 'on':
        bot.tps.on()
        bot.tellraw(selector, [
          {
            text: 'TPSBar is now ',
            color: 'white'
          },
          {
            text: 'enabled',
            color: 'green'
          }
        ])
        break
      case 'off':
        bot.tps.off()
        bot.tellraw(selector, [
          {
            text: 'TPSBar is now ',
            color: 'white'
          },
          {
            text: 'disabled',
            color: 'red'
          }
        ])
        break
      default:
        throw new SyntaxError('Invalid argument')
    }
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    let Embed
    switch (args[0]) {
      case 'on':
        bot.tps.on()
        Embed = new EmbedBuilder()
          .setColor(config.discord.embedsColors.normal)
          .setTitle('TPSBar')
          .setDescription('TPSBar is now enabled')
        channeldc.send({ embeds: [Embed] })
        break
      case 'off':
        bot.tps.off()
        Embed = new EmbedBuilder()
          .setColor(config.discord.embedsColors.normal)
          .setTitle('TPSBar')
          .setDescription('TPSBar is now disabled')
        channeldc.send({ embeds: [Embed] })
        break
      default:
        throw new SyntaxError('Invalid argument')
    }
  }
}
