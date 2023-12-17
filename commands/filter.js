const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'filter',
hashOnly: true, 
        consoleOnly:false,
        ownerOnly:false,
   description:['filter players (not functional)'],
  execute (context) {
 //throw new CommandError('temp disabled')
    const target = context.arguments.join(' ')
    const bot = context.bot

   
    
  }
}
