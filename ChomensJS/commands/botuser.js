const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'botuser',
  alias: [],
  description: 'Shows the bot\'s username and UUID',
  usage: '',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    bot.tellraw(selector, [{ text: 'The bot\'s username is: ', color: 'white' }, { text: bot.username, color: 'gold', clickEvent: { action: 'copy_to_clipboard', value: bot.username }, hoverEvent: { action: 'show_text', contents: [{ text: 'Click here to copy the username to your clipboard', color: 'green' }] } }, { text: ' and the UUID is: ' }, { text: bot.uuid, color: 'aqua', clickEvent: { action: 'copy_to_clipboard', value: bot.uuid }, hoverEvent: { action: 'show_text', contents: [{ text: 'Click here to copy the UUID to your clipboard', color: 'green' }] } }])
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    const Embed = new EmbedBuilder()
      .setColor(config.discord.embedsColors.normal)
      .setTitle('Bot\'s User')
      .setDescription(`The bot's username is: \`${bot.username}\` and the UUID is: \`${bot.uuid}\``)
    channeldc.send({ embeds: [Embed] })
  }
}
