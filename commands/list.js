const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'list',
   description:['check the player list'],
        hashOnly:false,
        consoleOnly:false,
  execute (context) {
    const bot = context.bot

    const players = bot.players
const source = context.source
    const component = []
    for (const player of players) {
      component.push({
        translate: '%s \u203a %s [%s] %s',
        with: [
         
          player.displayName ?? player.profile.name,
          player.uuid,
          {text: `Ping: ${player.latency}`, color:'green'},
         player.gamemode
        ]
      })

      component.push('\n')
    }

    component.pop()

    source.sendFeedback(component, false)
  }
}




//what is wi
// IDK
