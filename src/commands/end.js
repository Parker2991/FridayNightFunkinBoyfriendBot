const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'end',
   description:['/kill the bot or make it /suicide'],
 trustLevel: 1,
        aliases:['kys','kill','suicide'],
usage:[""],
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
    const args = context.arguments
    const source = context.source
        bot.sendFeedback(`${bot.username} fell out of the world`)
process.exit()
  }
}
/*context.source.sendFeedback('farding right now....')
    process.exit(1)
    */
