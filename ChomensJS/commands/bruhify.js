const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'bruhify',
  alias: [],
  description: 'RecycleBot bruhify but actionbar',
  usage: '<message>',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    bot.bruhifyText = args.join(' ')
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    bot.bruhifyText = args.join(' ')
    const Embed = new EmbedBuilder()
      .setColor(config.discord.embedsColors.normal)
      .setTitle('Bruhify')
      .setDescription(`Bruhify set to: ${bot.bruhifyText}`)
    channeldc.send({ embeds: [Embed] })
  }
}
