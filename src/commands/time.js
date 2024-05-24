const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'time',
  description:['check the time'],
  aliases:['clock', 'timezone'],
  trustLevel:0,
  usage:["timezone"],
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
    const moment = require('moment-timezone')
    const source = context.source
    const args = context.arguments
    const timezone = args.join(' ')
     
      if (!moment.tz.names().map((zone) => zone.toLowerCase()).includes(timezone.toLowerCase())) {
        throw new CommandError('Invalid timezone')
      }

      const momented = moment().tz(timezone).format('dddd, MMMM Do, YYYY, hh:mm:ss A')
      const component = [{ text: 'date and time for the timezone ', color: 'dark_gray' }, { text: timezone, color: 'aqua' }, { text: ' is: ', color: 'dark_gray' }, { text: momented, color: 'green' }]
      if (bot.options.isCreayun) {
        bot.chat(bot.getMessageAsPrismarine(component)?.toMotd().replaceAll('§','&'))
      } else {
      bot.sendFeedback(component)
      }
    }
  }
