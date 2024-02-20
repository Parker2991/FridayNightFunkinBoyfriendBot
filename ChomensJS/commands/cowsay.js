const cowsay = require('cowsay2')
const cows = require('cowsay2/cows')
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'cowsay',
  alias: [],
  description: 'Moo',
  usage: [
    'cow <message>',
    'list (not supported on Discord)'
  ],
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    if (args[0] === 'list') {
      const listed = Object.keys(cows)

      let primary = true
      const message = []

      for (const value of listed) {
        message.push({
          text: value + ' ',
          color: (!((primary = !primary)) ? 'gold' : 'yellow'),
          clickEvent: {
            action: 'suggest_command',
            value: `${prefix}cowsay ${value} `
          }
        })
      }

      bot.tellraw(selector, message)
    } else {
      bot.tellraw(selector, { text: cowsay.say(args.slice(1).join(' '), { cow: cows[args[0]] }) })
    }
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    const Embed = new EmbedBuilder()
      .setColor(config.discord.embedsColors.normal)
      .setTitle('Cowsay')
      .setDescription(`\`\`\`\n${cowsay.say(args.slice(1).join(' '), { cow: cows[args[0]] })}\n\`\`\``)
    channeldc.send({ embeds: [Embed] })
  }
}
