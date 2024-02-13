//command.unknown.argument command.unknown.command //command.context.here
const CommandError = require('../CommandModules/command_error')
const os = require('os')

module.exports = {
  name: 'lol',
   description:['idfk dont ask'],
        hashOnly:false,
        consoleOnly:false,
  execute (context) {    
throw new CommandError('idfk lmao')

  }
}
