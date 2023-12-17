/* eslint-disable no-eval */
const util = require('util')
const { stylize } = require('../util/colors/minecraft')
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'servereval',
  alias: [],
  description: 'Basically eval command but without vm2',
  trusted: 2,
  usage: '<ownerhash> <code>',
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    try {
      bot.tellraw(selector, { text: util.inspect(eval(args.slice(1).join(' ')), { stylize }).substring(0, 32700) })
    } catch (err) {
      bot.tellraw(selector, { text: util.inspect(err).replaceAll('runner', 'home'), color: 'red' })
    }
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    try {
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Output')
        .setDescription(util.inspect(eval(args.join(' '))))
      channeldc.send({ embeds: [Embed] })
    } catch (err) {
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.error)
        .setTitle('Error')
        .setDescription(`\`\`\`${util.inspect(err).replaceAll('runner', 'home')}\`\`\``)
      channeldc.send({ embeds: [Embed] })
    }
  }
}
