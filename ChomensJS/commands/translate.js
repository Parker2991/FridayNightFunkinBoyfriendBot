const { EmbedBuilder } = require('discord.js')
const { translate } = require('@vitalets/google-translate-api')
module.exports = {
  name: 'translate',
  alias: [],
  description: 'Translate a message using Google Translate',
  usage: '<language 1> <language 2> <message>',
  trusted: 0,
  execute: async function (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    try {
      const res = await translate(args.slice(2).join(' '), { from: args[0], to: args[1] })
      bot.tellraw(selector, [{ text: 'Result: ', color: 'gold' }, { text: res.text, color: 'green' }])
    } catch (e) {
      bot.tellraw(selector, { text: String(e), color: 'red' })
    }
  },
  discordExecute: async function (bot, username, sender, prefix, args, channeldc, message, config) {
    try {
      const res = await translate(args.slice(2).join(' '), { from: args[0], to: args[1] })
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Result')
        .setDescription(res.text)
      channeldc.send({ embeds: [Embed] })
    } catch (e) {
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.error)
        .setTitle('Error')
        .setDescription(`\`\`\`${e}\`\`\``)
      channeldc.send({ embeds: [Embed] })
    }
  }
}
