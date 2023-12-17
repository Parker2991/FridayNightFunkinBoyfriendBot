const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'end',
   description:['/kill the bot or make it /suicide'],
  hashOnly:true,
        ownerOnly:false,
        consoleOnly:false,
        aliases:['kys','kill','suicide'],
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
    const args = context.arguments
const source = context.source
          source.sendFeedback(`${bot.username} fell out of the world`)
process.exit('amongus')
  }
}
/*context.source.sendFeedback('farding right now....')
    process.exit(1)
    */