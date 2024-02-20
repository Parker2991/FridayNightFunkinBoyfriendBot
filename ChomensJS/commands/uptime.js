const { EmbedBuilder } = require('discord.js')
const moment = require('moment-timezone')
module.exports = {
  name: 'uptime',
  alias: [],
  description: 'Shows the bot\'s uptime',
  usage: '',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    const duration = moment.duration(Math.floor(performance.now()))
    const time = `${duration.days()} days, ${duration.hours()} hours, ${duration.minutes()} minutes, ${duration.seconds()} seconds` // moment please add duration.format()
    bot.tellraw(selector, [{ text: 'The bot\'s uptime is ', color: 'white' }, { text: time, color: 'green' }])
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    const duration = moment.duration(Math.floor(performance.now()))
    const time = `${duration.days()} days, ${duration.hours()} hours, ${duration.minutes()} minutes, ${duration.seconds()} seconds` // moment please add duration.format()
    const Embed = new EmbedBuilder()
      .setColor(config.discord.embedsColors.normal)
      .setTitle('Bot\'s Uptime')
      .setDescription(`The bot's uptime is ${time}`)
    channeldc.send({ embeds: [Embed] })
  }
}
