const CommandError = require('../CommandModules/command_error.js')
module.exports = {
  name: 'netmsg',
   description:['send a message to other servers'],
  execute (context) {
     
    const message = context.arguments.join(' ')
    const bot = context.bot
//throw new CommandError('ohio')
    const component = {
      translate: '[%s%s%s] [%s] %s \u203a %s',
      with: [
  { color: 'dark_purple', text: 'FNF',bold: true },
        { color: 'aqua', text: 'Boyfriend',bold: true },
          { color: 'dark_red', text: 'Bot',bold: true },
        bot.options.host + ':' + bot.options.port,
        context.source.player.displayName ?? context.source.player.profile.name,
        message
      ]
    }

    for (const eachBot of bot.bots) eachBot.tellraw(component)
  }
}
