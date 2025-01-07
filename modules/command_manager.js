const fs = require('fs')
const path = require('path')
const CommandError = require('../CommandModules/command_error.js')

function inject (bot, options) {
  bot.commandManager = {
    prefix: options.commands?.prefix ?? 'default',
    commands: {},

    execute (source, commandName, args) {
      const command = this.getCommand(commandName.toLowerCase())
//Unknown command. Type "/help" for help
      try {
        if (!command || !command.execute) throw new CommandError({ translate: 'Unknown command %s . Type "~help" for help', with: [commandName]})
//command.unknown.argument command.unknown.command
        //command.context.here
        if (command.consoleOnly && !source.sources.console) throw new CommandError({ translate: 'This command can only be executed via console', color: 'dark_red' })
        if (command.hashOnly && args.length === 0 && source.hash) throw new CommandError({ translate: 'Please provide a hash', color: 'dark_red' })
 if (command.ownerOnly && args.length === 1 && source.owner) throw new CommandError({ translate: 'Please provide a owner hash', color: 'red' })
if (command.ownerOnly && source.owner) {
          // debug
          // console.log(`${args} args0 ${args[0]}`) //too sus
          const inputhash = `${args[1]}` // this is undefined
//but look in hashing.js
          // we have to add like a owner hash thing and a normal hash thing for EVERY COMMAND
  //thought so. so that means hashing.js and command_manager.js would need to be overhauled right?
  // we have to add like, a owner hash thing and a normal hash thing and a no hash thing so like. I did it like this in ABot: 0 = everyone, 1 = trusted, 2 = owner
  //thats how hashing worked in chomensjs        
  if (inputhash !== bot.ownerhash) throw new CommandError({ translate: 'Invalid Owner hash', color: 'red' }) // so true
//im guessing its smh in hashing.js
          bot.update
        } else if (command.ownerOnly && source.sources.discord) {
          const event = source.discordMessageEvent

          const roles = event.member?.roles?.cache

          const hasRole = roles.some(role => role.name === 'FNFBoyfriendBot Owner')

          if (!hasRole) throw new CommandError({ translate: 'You are not owner!' })
        }
  if (command.hashOnly && source.hash) {
          // debug
          // console.log(`${args} args0 ${args[0]}`) //too sus
          const hash = `${args[0]}` // this is undefined
          console.log(hash) // input hash
          console.log(bot.hash) // actual hash
//but look in hashing.js
          if (hash !== bot.hash) throw new CommandError({ translate: 'Invalid hash', color: 'dark_red' }) // so true
//im guessing its smh in hashing.js
          bot.updatehash
        } else if (command.hashOnly && source.sources.discord) {
          const event = source.discordMessageEvent

          const roles = event.member?.roles?.cache

          const hasRole = roles.some(role => role.name === 'trusted' || role.name === 'FNFBoyfriendBot Owner')

          if (!hasRole) throw new CommandError({ translate: 'You are not trusted!' })
        }
        
        return command.execute({ bot, source, arguments: args })//
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
