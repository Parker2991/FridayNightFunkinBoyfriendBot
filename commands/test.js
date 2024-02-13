const CommandError = require('../CommandModules/command_error')
const CommandSource = require('../CommandModules/command_source')
module.exports = {
  name: 'test',
  description:['very 1st command in the bot to test to see if things are working'],
hashOnly:false,
        consoleOnly:false,
  execute (context) {

   const bot = context.bot 
   
    const player = context.source.player.profile.name
    const uuid = context.source.player.uuid
    const message = context.arguments.join(' ') // WHY SECTION SIGNS!!
    
    context.source.sendFeedback(`Hello, World!, Player: ${player}, uuid: ${uuid}, Argument: ${message}`, false)

  }
}
  

//context.source.player.displayName ?? context.source.player.profile.name,
