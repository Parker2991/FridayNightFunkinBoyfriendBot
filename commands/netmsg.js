const CommandError = require('../CommandModules/command_error.js')
module.exports = {
  name: 'netmsg',

  execute (context) {
     
    const message = context.arguments.join(' ')
    const bot = context.bot
//throw new CommandError('ohio')
    const component = {
      translate: '[%s%s%s%s] [%s] %s \u203a %s',
      with: [
  { color: 'dark_purple', text: 'FNF',bold: true },
        { color: 'aqua', text: 'Boyfriend',bold: true },
          { color: 'dark_red', text: 'Bot',bold: true },
          { color: 'black', text: 'X', bold: true },
        
        bot.options.host,
        context.source.player.displayName ?? context.source.player.profile.name,
        message
      ]
    }

    for (const eachBot of bot.bots) eachBot.tellraw(component)
  }
}
