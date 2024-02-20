const wiki = require('wikipedia')
const util = require('util')
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'wikipedia',
  alias: ['wiki'],
  description: 'Working Wikipedia!',
  usage: '<page>',
  trusted: 0,
  execute: async function (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    try {
      const page = await wiki.page(args.join(' '))
      const summary = await page.summary()
      bot.tellraw(selector, { text: summary.extract, color: 'green' })
    } catch (e) {
      bot.tellraw(selector, { text: e.toString(), color: 'red' })
    }
  },
  discordExecute: async function (bot, username, sender, prefix, args, channeldc, message, config) {
    try {
      const page = await wiki.page(args.join(' '))
      const summary = await page.summary()
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Output')
        .setDescription(summary.extract)
      channeldc.send({ embeds: [Embed] })
    } catch (e) {
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.error)
        .setTitle('Error')
        .setDescription(`\`\`\`${util.inspect(e)}\`\`\``)
      channeldc.send({ embeds: [Embed] })
    }
  }
}
