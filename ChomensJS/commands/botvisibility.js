const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'botvisibility',
  alias: ['botvis', 'togglevis', 'togglevisibility'],
  description: 'Changes the bot\'s visibility',
  usage: [
    '<hash> <true|false>',
    '<hash> <on|off>',
    '<hash>'
  ],
  trusted: 1,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    if (args[1] === 'true' || args[1] === 'on') {
      bot.visibility = true
      bot.chat('/essentials:vanish disable')
      bot.tellraw(selector, [{ text: 'The bot\'s visibility is now ', color: 'white' }, { text: 'visible', color: 'green' }])
    } else if (args[1] === 'false' || args[1] === 'off') {
      bot.visibility = false
      bot.chat('/essentials:vanish enable')
      bot.tellraw(selector, [{ text: 'The bot\'s visibility is now ', color: 'white' }, { text: 'invisible', color: 'gold' }])
    } else if (!args[1]) {
      bot.visibility = !bot.visibility
      const greenOrGold = bot.visibility ? 'green' : 'gold'
      const visibleOrInvisible = bot.visibility ? 'visible' : 'invisible'
      const enableOrDisable = bot.visibility ? 'disable' : 'enable'
      bot.chat(`/essentials:vanish ${enableOrDisable}`)
      bot.tellraw(selector, [{ text: 'The bot\'s visibility is now ', color: 'white' }, { text: visibleOrInvisible, color: greenOrGold }])
    } else {
      throw new SyntaxError('Invalid argument')
    }
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    if (args[0] === 'true' || args[0] === 'on') {
      bot.visibility = true
      bot.chat('/essentials:vanish disable')
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Bot\'s Visibility')
        .setDescription('The bot\'s visibility is now visible')
      channeldc.send({ embeds: [Embed] })
    } else if (args[0] === 'false' || args[0] === 'off') {
      bot.visibility = false
      bot.chat('/essentials:vanish enable')
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Bot\'s Visibility')
        .setDescription('The bot\'s visibility is now invisible')
      channeldc.send({ embeds: [Embed] })
    } else if (!args[0]) {
      bot.visibility = !bot.visibility
      const visibleOrInvisible = bot.visibility ? 'visible' : 'invisible'
      const enableOrDisable = bot.visibility ? 'disable' : 'enable'
      bot.chat(`/essentials:vanish ${enableOrDisable}`)
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Bot\'s Visibility')
        .setDescription(`The bot's visibility is now ${visibleOrInvisible}`)
      channeldc.send({ embeds: [Embed] })
    } else {
      throw new SyntaxError('Invalid argument')
    }
  }
}
