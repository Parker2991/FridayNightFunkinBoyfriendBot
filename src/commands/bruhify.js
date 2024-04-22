const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'bruhify',
   description:['bruhify text'],
        aliases:['bruhifytext', 'bruh'],
     trustLevel: 0,
usage:["smexy text here"],
  execute (context) {
  const bot = context.bot
const args = context.arguments
    const message = context.arguments.join(' ')
         
bot.bruhifyText = args.join(' ')

bot.sendFeedback(JSON.stringify(bot.bruhifyText))


  }
}
