const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'fard',
   description:['fart'],
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
throw new CommandError('disabled until owner hash is added')
    context.source.sendFeedback('farding right now....')
    process.exit(1)
  }
}
