const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'reconnect',
   description:['reconnect the bot when?'],
trustLevel: 1,
        aliases:['rec'],
usage:[""],
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
    const args = context.arguments
          const source = context.source
bot.sendFeedback({ text: `Reconnecting to ${bot.options.host}:${bot.options.port}`, color: 'dark_green'})


          bot._client.end()
}
}
/*context.source.sendFeedback('farding right now....')
    process.exit(1)
    */
