const CommandError = require('../CommandModules/command_error')
const CommandSource = require('../CommandModules/command_source')
module.exports = {
  name: 'test',
  description:['very 1st command in the bot to test to see if things are working'],

  execute (context) {
 
   const bot = context.bot 

    const player = context.source.player.profile.name
    const uuid = context.source.player.uuid
    const message = context.arguments.join(' ') // WHY SECTION SIGNS!!
    context.source.sendFeedback(`§aHello, §aWorld!, §aPlayer: §a${player}, §auuid:§a ${uuid}, §aArgument: §a${message}`, false)
 
  }
}
//context.source.player.displayName ?? context.source.player.profile.name,
