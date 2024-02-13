const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'filter',
hashOnly: true, 
        consoleOnly:false,
   description:['filter players (not functional)'],
  execute (context) {

    const target = context.arguments.join(' ')
    const bot = context.bot

   
    
  }
}
