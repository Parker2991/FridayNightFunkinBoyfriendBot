const fs = require('fs')
const path = require('path')
const CommandError = require('../CommandModules/command_error.js')

function inject (bot, options) {
  bot.commandManager = {
    prefix: options.commands?.prefix ?? 'default',
    commands: {},
    amogus: [],
//ohio
    execute (source, commandName, args, message) {
      const command = this.getCommand(commandName.toLowerCase())
//Unknown command. Type "/help" for help
const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
      try {
        if (!command || !command.execute) throw new CommandError({ translate: `Unknown command %s. Type "${bot.options.commands.prefix}help" for help or click on this for the command`, with: [commandName], clickEvent: bot.options.Core.customName ? { action: 'suggest_command', value:  `${bot.options.commands.prefix}help` } : undefined})
//command.unknown.argument command.unknown.command
        //command.context.here
       // let hash = 1
       // let owner = 2
        if (command.consoleOnly && !source.sources.console) throw new CommandError({ translate: 'This command can only be executed via console', color: 'dark_red' })
        if (command.hash && args.length === 0 && source.hash) throw new CommandError({ translate: 'Please provide a hash', color: 'red' })
        if (command.owner && args.length === 0 && source.owner) throw new CommandError({ translate: 'Please provide a OwnerHash', color: 'dark_red' })
       
              if (command.hashOnly && source.hash) {
          // debug
          // console.log(`${args} args0 ${args[0]}`) //too sus
          const hash = `${args[0]}` // this is undefined

          //\x1b[0m\x1b[91m
          //console.log(hash)
          const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
           const player = source.player.profile.name
           const uuid = source.player.uuid
                      const time = new Date().toLocaleTimeString("en-US", {timeZone:"America/CHICAGO"})
const date = new Date().toLocaleDateString("en-US", {timeZone:"America/CHICAGO"})
  bot.console.hash = function (error, source) {
    console.log(`<\x1b[0m\x1b[35m${time} \x1b[0m\x1b[96m${date}\x1b[0m> [${bot.options.host}:${bot.options.port}\x1b[0m] ` + `\x1b[0m\x1b[92mHash\x1b[0m]: \x1b[0m\x1b[92mPlayer: ${player}, UUID:${uuid}, Hash:${bot.hash}\x1b[0m]` )
  }
          bot.console.hash()
          console.log(bot.hash) // actual hash
//but look in hashing.js
          if (hash !== bot.hash) throw new CommandError({ translate: 'Invalid hash', color: 'dark_red' }) // so true
//message?.member?.displayName
          bot.updatehash
        }else if (command.hashOnly && source.sources.discord) {
          const event = source.discordMessageEvent

          const roles = event.member?.roles?.cache

          const hasRole = roles.some(role => role.name === 'trusted'|| role.name === 'FNFBoyfriendBot Owner')

          if (!hasRole) throw new CommandError({ translate: 'You are not trusted!' })
              }//source.discordMessageEvent.event.member.roles?.cache


        return command.execute({ bot, source, arguments: args })
      } catch (error) {
         const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
     bot.console.warn(error.stack)//const filename of fs.readdirSync(path.join(__dirname, '../commands'
//console.error('Failed to load command', filename, ':', error)
//${path.join(__dirname, '..')}
//const filename of fs.readdirSync(path.join(__dirname, '../commands'
//filenames.forEach(function(filename) {
      //fs.readFile(dirname + filename, 'utf-8', function(err, content) {

          
if (error instanceof CommandError) source.sendError(error._message)
       //
       // else source.sendError({ text:String(error.stack), color:'red' })
               else source.sendError({ translate: 'command.failed', color:'red', hoverEvent: { action: 'show_text', contents: String(error.stack) } })
      }
    },
//  else source.sendError({ translate: 'command.failed', hoverEvent: { action: 'show_text', contents: String(error.message) } })
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
    process.exit(0) 
  }
}
}

module.exports = inject
