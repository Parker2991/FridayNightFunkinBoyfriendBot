const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'test',
  alias: [],
  description: 'Tests if the bot is working',
  usage: '',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    bot.tellraw(selector, [
      {
        text: `Username: ${username},`,
        color: 'green'
      },
      {
        text: ` Sender UUID: ${sender},`,
        color: 'green'
      },
      {
        text: ` Prefix: ${prefix},`,
        color: 'green'
      },
      {
        text: ` Args: ${args.join(', ').toString()}`,
        color: 'green'
      }
    ])
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    const Embed = new EmbedBuilder()
      .setColor(config.discord.embedsColors.normal)
      .setTitle('Hello!')
      .setDescription('This is the first ever command to be discordified!' + '\n' + `More info: Username: ${username}, Prefix: ${prefix}, Args: ${args.join(' ')}`)
    channeldc.send({ embeds: [Embed] })
  }
}
