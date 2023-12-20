const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'filter',
trustLevel: 1,
   description:['filter players (not functional)'],
  execute (context) {
 //throw new CommandError('temp disabled')
    const target = context.arguments.join(' ')
    const bot = context.bot

   
    
  }
}
