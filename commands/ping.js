const CommandError = require('../CommandModules/command_error')
const CommandSource = require('../CommandModules/command_source')
module.exports = {
  name: 'ping',
  description:['pong!'],

  execute (context) {

   const bot = context.bot 
const players = bot.players
    const player = context.source.player.profile.name
    const uuid = context.source.player.uuid
    const message = context.arguments.join(' ') // WHY SECTION SIGNS!!
    context.source.sendFeedback({text:`Ping: ${context.source.player.latency}`, color:"green"}, false)

  }
}
//context.source.player.displayName ?? context.source.player.profile.name,
