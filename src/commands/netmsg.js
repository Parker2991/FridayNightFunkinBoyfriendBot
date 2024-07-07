const CommandError = require('../util/command_error.js')
module.exports = {
  name: 'netmsg',
  trustLevel: 0,
  aliases: [

  ],
  description: 'netmsg to other servers',
  execute (context) {
    const message = context.arguments.join(' ')
    const bot = context.bot;
    const source = context.source
//throw new CommandError('ohio')
    const component = {
      translate: '[%s] %s \u203a %s',
      with: [
        bot.options.host + ':' + bot.options.port,
        source.player.displayName ?? source.player.profile.name,
        message
      ]
    }

    for (const eachBot of bot.bots) eachBot.tellraw("@a", component)
  }
}
