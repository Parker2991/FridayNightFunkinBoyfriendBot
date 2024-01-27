const between = require('../util/between')
const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'tpr',
  description:['teleport to a random place'],
trustLevel: 0,
        aliases:['rtp', 'teleportrandom', 'randomteleport'],
  execute (context) {
    const bot = context.bot
    const sender = context.source.player
const source = context.source
    if (!sender) return
    
    const x = between(-1_000_000, 1_000_000)
    const y = 100
    const z = between(-1_000_000, 1_000_000)
if (!bot.options.Core.CorelessMode){
 throw new CommandError('Coreless mode is active can not execute command!')       
}else{
          source.sendFeedback(`Randomly Teleported: ${sender.profile.name} to x:${x} y:${y} z:${z} `)
    bot.core.run(`tp ${sender.uuid} ${x} ${y} ${z}`)
      
  }
}
}