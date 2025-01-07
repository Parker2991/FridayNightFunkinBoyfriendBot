const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'discord',

  execute (context) {
    context.source.sendFeedback(context.bot.discord.invite, false)
  }
}
