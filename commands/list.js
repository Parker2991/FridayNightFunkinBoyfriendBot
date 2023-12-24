const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'list',
   description:['check the player list'],
      trustLevel: 0,
        aliases:['playerlist', 'plist', 'pl'],
  execute (context) {
    const bot = context.bot
const args = context.arguments
    const players = bot.players
const source = context.source
    const component = []
       // if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
   if (args.length !== 0){
throw new CommandError({translate:"Too many Arguments!", color:"red"})
   }
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
