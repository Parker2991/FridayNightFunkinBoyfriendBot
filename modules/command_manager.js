const fs = require('fs')
const path = require('path')
const CommandError = require('../CommandModules/command_error.js')

function inject (bot, options) {
  bot.commandManager = {
    prefix: options.commands?.prefix ?? 'default',
    commands: {},
    amogus: [],
//ohio
    execute (source, commandName, args) {
      const command = this.getCommand(commandName.toLowerCase())
//Unknown command. Type "/help" for help
      try {
        if (!command || !command.execute) throw new CommandError({ translate: 'Unknown command %s. Type "~help" for help', with: [commandName]})
//command.unknown.argument command.unknown.command
        //command.context.here
        let hash = 1
        let owner = 2
        if (command.consoleOnly && !source.sources.console) throw new CommandError({ translate: 'This command can only be executed via console', color: 'dark_red' })
        if (command.hash && args.length === 0 && source.hash) throw new CommandError({ translate: 'Please provide a hash', color: 'red' })
        if (command.owner && args.length === 0 && source.owner) throw new CommandError({ translate: 'Please provide a OwnerHash', color: 'dark_red' })
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
//message?.member?.displayName
          const roles = event.member?.roles?.cache
        bot.tellraw(`${roles}`)
          const hasRole = roles.some(role => role.name === 'trusted')
console.debug(hasRole)
          if (!hasRole) throw new CommandError({ translate: 'You are not trusted!' })
        }//source.discordMessageEvent.event.member.roles?.cache
        /*
         for (const filename of fs.readdirSync(path.join(__dirname, '../commands'))) {
    try {
      const command = require(path.join(__dirname, '../commands', filename))
      bot.commandManager.register(command)
    } catch (error) {
      console.error('Failed to load command', filename, ':', error)
    }
    */
        return command.execute({ bot, source, arguments: args })
      } catch (error) {
        console.error(error)//const filename of fs.readdirSync(path.join(__dirname, '../commands'
//console.error('Failed to load command', filename, ':', error)
    
if (error instanceof CommandError) source.sendError(error._message)
       
        else source.sendError({ text:String(error.stack), color:'red' })
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
//
amogus = []
for (const filename of fs.readdirSync(path.join(__dirname, '../commands'))) {
    try {
      const command = require(path.join(__dirname, '../commands', filename))
      bot.commandManager.register(command)
      bot.commandManager.amogus.push(command)
    } catch (error) {
      console.error('Failed to load command', filename, ':', error)
    }
  if (process.env['anti-skid'] !== 'amogus is sus') {
    console.log('just no')
    process.exit(0) 
  }
}
}

module.exports = inject
