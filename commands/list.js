const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'list',
  
  execute (context) {
    const bot = context.bot

    const players = bot.players

    const component = []
    for (const player of players) {
      component.push({
        translate: '%s \u203a %s',
        with: [
          player.displayName ?? player.profile.name,
          player.uuid
        ]
      })

      component.push('\n')
    }

    component.pop()

    context.source.sendFeedback(component, false)
  }
}




//what is wi
// IDK
