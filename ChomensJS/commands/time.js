const { EmbedBuilder } = require('discord.js')
const moment = require('moment-timezone')
module.exports = {
  name: 'time',
  alias: [],
  description: 'Shows the time',
  usage: '<timezone>',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    const timezone = args.join(' ')

    if (!moment.tz.names().map((zone) => zone.toLowerCase()).includes(timezone.toLowerCase())) {
      throw new SyntaxError('Invalid timezone')
    }

    const momented = moment().tz(timezone).format('dddd, MMMM Do, YYYY, hh:mm:ss A')
    const component = [{ text: 'The current date and time for the timezone ', color: 'white' }, { text: timezone, color: 'aqua' }, { text: ' is: ', color: 'white' }, { text: momented, color: 'green' }]

    bot.tellraw(selector, component)
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    const timezone = args.join(' ')

    if (!moment.tz.names().map((zone) => zone.toLowerCase()).includes(timezone.toLowerCase())) {
      throw new SyntaxError('Invalid timezone')
    }

    const momented = moment().tz(timezone).format('dddd, MMMM Do, YYYY, hh:mm:ss A')
    const description = `The current date and time for the timezone ${timezone} is: ${momented}`

    const Embed = new EmbedBuilder()
      .setColor(config.discord.embedsColors.normal)
      .setTitle('Time')
      .setDescription(description)
    channeldc.send({ embeds: [Embed] })
  }
}
