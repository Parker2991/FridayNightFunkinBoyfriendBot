
const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'help',

  execute (context) {
    const commandList = []
    const cmd = {
 translate: '[%s] ',
      bold: false,
      color: 'white',
      with: [
        { color: 'dark_blue', text: 'Help Cmd'},
              ]
    }
      const category = {
 translate: ' (%s%s%s%s%s) ',
      bold: false,
      color: 'white',
      with: [
        { color: 'green', text: 'Public'},
           { color: 'white', text: ' | '},
        { color: 'dark_red', text: 'Trusted'},
           { color: 'white', text: ' | '},   
        { color: 'red', text: 'Owner'},
              ]
    }
    for (const command of context.bot.commandManager.getCommands()) {
      if (command.consoleOnly && !context.console) continue
      
      if (commandList.length !== 0) commandList.push(' ')
      commandList.push({ text: String(command.name), color: command.hashOnly ? 'dark_red' : 'green' })
       
    }

    const length = context.bot.commandManager.getCommands().length

    context.source.sendFeedback([cmd, 'Commands (', length, ') ', category, ...commandList], false)
  }
}
