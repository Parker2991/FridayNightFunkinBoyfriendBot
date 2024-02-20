const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'creator',
  alias: [],
  description: 'Shows the bot\'s creator',
  usage: '',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    bot.tellraw(selector, [{ text: 'ChomeNS Bot ', color: 'yellow' }, { text: 'was created by ', color: 'white' }, { text: 'chayapak', color: 'gold' }, { text: ' (', color: 'dark_gray' }, { text: 'Cloned ', color: 'blue' }, { text: 'by ', color: 'white' }, { text: 'Parker', color: 'dark_red' }, { text: '2991', color: 'black' }, { text: ')', color: 'dark_gray' }])
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    const Embed = new EmbedBuilder()
      .setColor(config.discord.embedsColors.normal)
      .setTitle('Creator')
      .setDescription('ChomeNS Bot was created by chayapak (§9Cloned by §4Parker§02991)')
    channeldc.send({ embeds: [Embed] })
  }
}
