const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'discord',

  execute (context) {
const bot = context.bot    
    context.source.sendFeedback(context.bot.discord.invite, false)
  }
}
