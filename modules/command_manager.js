const fs = require('fs')
const path = require('path')
const CommandError = require('../CommandModules/command_error.js')

function inject (bot, options) {
  bot.commandManager = {
    prefix: options.commands?.prefix ?? 'default',
    commands: {},

    execute (source, commandName, args) {
      const command = this.getCommand(commandName)

      try {
        if (!command || !command.execute) throw new CommandError({ translate: 'Unknown command: %s', with: [commandName] })

        if (command.consoleOnly && !source.sources.console) throw new CommandError({ translate: 'This command can only be executed via console', color: 'dark_red' })
        if (command.hashOnly && args.length === 0 && source.hash) throw new CommandError({ translate: 'Please provide a hash', color: 'dark_red' })

        if (command.hashOnly && source.hash) {
          const hash = args[0]

          if (hash !== bot.hashing.hash) throw new CommandError({ translate: 'Invalid hash', color: 'dark_red' })

          bot.hashing.updateHash()
        } else if (command.hashOnly && source.sources.discord) {
          const event = source.discordMessageEvent

          const roles = event.member?.roles?.cache

          const hasRole = roles.some(role => role.name === 'trusted')

          if (!hasRole) throw new CommandError({ translate: 'You are not trusted!' })
        }
        
        return command.execute({ bot, source, arguments: args })
      } catch (error) {
        console.error(error)

        if (error instanceof CommandError) source.sendError(error._message)
        else source.sendError({ translate: 'command.failed', hoverEvent: { action: 'show_text', contents: String(error.message) } })
      }
    },
//
    executeString (source, command) {
      const [commandName, ...args] = command.split(' ')
      return this.execute(source, commandName, args)
    },

    register (command) {
      this.commands[command.name] = command
    },

    getCommand (name) {
      return this.commands[name]
    },

    getCommands () {
      return Object.values(this.commands)
    }
  }

  for (const filename of fs.readdirSync(path.join(__dirname, '../commands'))) {
    try {
      const command = require(path.join(__dirname, '../commands', filename))
      bot.commandManager.register(command)
    } catch (error) {
      console.error('Failed to load command', filename, ':', error)
    }
  }
}

module.exports = inject
