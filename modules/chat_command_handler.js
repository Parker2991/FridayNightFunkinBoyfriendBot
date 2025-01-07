const CommandSource = require('../CommandModules/command_source')
const CommandError = require('../CommandModules/command_error')

function inject (bot) {
  bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (!plainMessage.startsWith(bot.commandManager.prefix)) return
    const command = plainMessage.substring(bot.commandManager.prefix.length)
  
    const source = new CommandSource(data.sender, { discord: false, console: false }, true)
    source.sendFeedback = message => {
      const prefix = {
      translate: '[%s%s%s%s] ',
      bold: true,
      color: 'white',
      with: [
       { color: 'dark_purple', text: 'FNF' },
          { color: 'aqua', text: 'Boyfriend' },
          { color: 'dark_red', text: 'Bot' },
          { color: 'black', text: 'X' },

          { color: 'green', text: command.split(' ')[0] }
        ]
      }
      
      bot.tellraw(['', prefix, message])
    }

    bot.commandManager.executeString(source, command)

  })
}

module.exports = inject