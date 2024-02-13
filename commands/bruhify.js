const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'bruhify',
   description:['bruhify text'],
        hashOnly:false,
        consoleOnly:false,
  execute (context) {
  const bot = context.bot
const args = context.arguments
    const message = context.arguments.join(' ')
bot.bruhifyText = args.join(' ')

context.source.sendFeedback(JSON.stringify(bot.bruhifyText))


  }
}