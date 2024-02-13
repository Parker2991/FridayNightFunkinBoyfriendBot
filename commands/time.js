const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'time',
   description:['check the time'],
        hashOnly:false,
        consoleOnly:false,
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
      const component = [{ text: 'The current date and time for the timezone ', color: 'white' }, { text: timezone, color: 'aqua' }, { text: ' is: ', color: 'white' }, { text: momented, color: 'green' }]

      source.sendFeedback(component)
    }
  }
