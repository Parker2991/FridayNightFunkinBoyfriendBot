const { EmbedBuilder } = require('discord.js')
const { VM } = require('vm2')
const axios = require('axios')
const util = require('util')
const { stylize } = require('../util/colors/minecraft')
module.exports = {
  name: 'eval',
  alias: [],
  description: 'Safe eval 100% secure!!!',
  trusted: 1,
  usage: [
    'run <code>',
    'reset'
  ],
  async execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    if (args[0] === 'run') {
      try {
        bot.tellraw(selector, { text: util.inspect(bot.vm.run(args.slice(1).join(' ')), { stylize }).substring(0, 32000) })
      } catch (err) {
        bot.tellraw(selector, { text: util.inspect(err).replaceAll('runner', 'Parker2991'), color: 'red' })
      }
    }
    if (args[0] === 'reset') {
      bot.vm = new VM(bot.vmOptions)
    }
    if (args[0] === 'server') {
      const res = await axios.post(config.eval.serverUrl, new URLSearchParams({
        html: false,
        showErrorMsg: false,
        colors: 'minecraft',
        code: args.slice(1).join(' ')
      }).toString())
      bot.tellraw(selector, { text: res.data })
    }
  },
  async discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    if (args[0] === 'run') {
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Output')
        .setDescription(`\`\`\`${util.inspect(bot.vm.run(args.slice(1).join(' '))).substring(0, 1950)}\`\`\``)
      channeldc.send({ embeds: [Embed] })
    } else if (args[0] === 'reset') {
      bot.vm = new VM(bot.vmOptions)
    } else if (args[0] === 'server') {
      const res = await axios.post(config.eval.serverUrl, new URLSearchParams({
        html: false,
        showErrorMsg: false,
        code: args.slice(1).join(' ')
      }).toString())
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Output')
        .setDescription(`\`\`\`${res.data}\`\`\``)
      channeldc.send({ embeds: [Embed] })
    } else {
      throw new SyntaxError('Invalid argument')
    }
  }
}
