const CommandError = require('../util/command_error')

module.exports = {
  name: 'discord',
  trustLevel: 0,
  execute (context) {
    bot.tellraw(context.bot.discord.invite, false)
  }
}
