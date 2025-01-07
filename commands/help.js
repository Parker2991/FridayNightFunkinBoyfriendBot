const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'help',

  execute (context) {
    const commandList = []
    const cmd = {
 translate: '[%s] ',
      bold: true,
      color: 'white',
      with: [
        { color: 'dark_blue', text: 'Help Cmd'},
              ]
    }
    for (const command of context.bot.commandManager.getCommands()) {
      if (command.consoleOnly && !context.console) continue
      
      if (commandList.length !== 0) commandList.push(' ')
      commandList.push(String(command.name))
    }

    const length = context.bot.commandManager.getCommands().length

    context.source.sendFeedback([cmd, 'Commands (', length, ') ', ...commandList], false)
  }
}
