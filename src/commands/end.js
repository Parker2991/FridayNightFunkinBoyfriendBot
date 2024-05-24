const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'end',
  description:['end the bots process'],
  trustLevel: 1,
  aliases:['kys','kill','suicide'],
  usage:[""],
  async execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
    const args = context.arguments
    const source = context.source
    bot.sendFeedback(`${bot.username} fell out of the world`)
    process.exit(69)
  }, 
  async discordExecute (context) {
    const bot = context.bot;
    bot.discord.Message.reply('suiciding,..')
    process.exit(69)
  }
}
/*context.source.sendFeedback('farding right now....')
    process.exit(1)
    */
