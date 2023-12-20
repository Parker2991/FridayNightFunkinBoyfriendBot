const fs = require('fs')
const path = require('path')
const CommandError = require('../CommandModules/command_error.js')
//check command_source
//it would be both the command_source.js and command_manager.js files
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
              if (command.consoleOnly && !source.sources.console) throw new CommandError({ translate: 'This command can only be executed via console', color: 'blue' })
              if (command.trustLevel > 0){
                    const event = source.discordMessageEvent

          const roles = event?.member?.roles?.cache

              //   message.member.displayName
                      //const hash = `${args[0]}` // this is undefined
//const owner = `${args[0]}`
                   //    const hash = `${args[0]}` 
                     //  const owner = `${args[0]}` 
                      if(
                              source.sources.discord && 
                              command.trustLevel === 1 &&
                       !roles?.some(role => role.name === 'trusted' || role.name === 'FNFBoyfriendBot Owner')         
                      ) throw new CommandError({text:'You are not Trusted!', color:'red'})
                      if (
                         !source.sources.discord &&
                              command.trustLevel === 1 &&
                       args[0] !== bot.hash &&
                              args[0] !== bot.owner
        ) throw new CommandError({text:'Invalid Hash or Invalid Owner Hash', color:'red'})   

                      if (
                              source.sources.discord && 
                              command.trustLevel === 2 && 
                            !roles?.some(role => role.name === 'FNFBoyfriendBot Owner')      
                      ) throw new CommandError({text:'You are not the Owner!', color:'dark_red'})
                      if (
                              !source.sources.discord && 
                              command.trustLevel === 2 && args[0] !== bot.owner
                      )throw new CommandError({text: 'Invalid Owner Hash', color:'dark_red'})
                     
              if (command.trustLevel === 3 && !source.sources.console) throw new CommandError({ translate: 'This command can only be executed via console', color: 'blue' })
                    //if ()  
              }//command.hashOnly && source.hash
              //(hash !== bot.hash && owner !== bot.owner
//command.unknown.argument command.unknown.command
        //command.context.here
       // let hash = 1
       // let owner = 2
       
              //command.hashOnly && command.ownerOnly && args.length !== 0 && source.hash && source.owner
       // if (command.hashOnly && args.length === 0) throw new CommandError({ translate: 'Please provide a hash or a OwnerHash', color: 'red' })
      
           const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
         
                      const time = new Date().toLocaleTimeString("en-US", {timeZone:"America/CHICAGO"})
const date = new Date().toLocaleDateString("en-US", {timeZone:"America/CHICAGO"})
             
   bot.console.hash = function (error, source) {
    console.log()
  }//<\x1b[0m\x1b[35m${time} \x1b[0m\x1b[96m${date}\x1b[0m> [${bot.options.host}:${bot.options.port}\x1b[0m] ` + `[\x1b[0m\x1b[92mHash\x1b[0m]: \x1b[0m\x1b[92mPlayer\x1b[0m: ${player}, \x1b[0m\x1b[92mUUID\x1b[0m:${uuid}, \x1b[0m\x1b[92mHash\x1b[0m:${bot.hash}\x1b[0m]` 
bot.console.ownerHash = function (error, source) {
    console.log(`` )// actual hash
//but look in hashing.js
 //im looking through chomensjs's command handler for reference
        //💀
// <\x1b[0m\x1b[35m${time} \x1b[0m\x1b[96m${date}\x1b[0m> [${bot.options.host}:${bot.options.port}\x1b[0m] ` + `[\x1b[0m\x1b[31mOwnerHash\x1b[0m]: \x1b[0m\x1b[92mPlayer\x1b[0m: ${player}, \x1b[0m\x1b[92mUUID\x1b[0m:${uuid}, \x1b[0m\x1b[31mOwnerHash\x1b[0m:${bot.owner}\x1b[0m]

 //command.hashOnly && source.sources.discord
 //supposed to be a command error for invalid hash
 //  if (command.hashOnly && args.length === 0) throw new CommandError({ translate: 'Please provide a hash or a OwnerHash', color: 'red' })
      
 // {text:'Invalid Trusted hash or invalid Owner Hash', color:'red'}
   // you cant do a empty if
 // but i didnt know it can be just undefined :skull:
   //sus
        //commented smh out about and ig that worked
       // sus
      // if("e") {} // ok
        // idfk how to explain but it does
        // real (there was no if)


 // isnt it if(something) {} or i
//if(
               
  //      )//tf

        /*
if (command.trustLevel > 0)  {
        const discordRoles = message.member?.roles?.cache



        if(
                sources.source.discord &&
                command.trustLevel === 1 &&
                !discordRoles.some((role) => role.name === 'trusted' ||
                role.name === 'FNFBoyfriendBot Owner')
        )throw new CommandError({text:'You are not trusted!', color:'red'})
       let hash 
        let owner
        if (
                !sources.source.discord && 
                command.trustLevel === 1 &&
               args.shift() !== hash && 
                args.shift() !== owner
        ) 
        */
// just shift it out of the args (mabe would help with needing to do cloop e add 1 say hi)
               
        //idfk
        //tf
        // why the fard did it include the comment in the eror it sent
        //so replace args[0] with arg.shift()
// just do args.shift()
 // or mabe const hasharg = args.shift()
 // idk
//aaa
        //expression expected
              //ik that but why tf is it erroring
         
     // wat the fard
} // sus 
              
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
        if (source.sources.discord) {
                      source.sendError(error)
              }     
      }
    },
//  else source.sendError({ translate: 'command.failed', hoverEvent: { action: 'show_text', contents: String(error.message) } })
    executeString (source, command) {
      const [commandName, ...args] = command.split(' ')
      return this.execute(source, commandName, args)
    },

        register (command) {
      this.commands[command.name] = command
      
      if(command.aliases) {
        command.aliases.map(a => this.commands[a] = command)
      }
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
bot.commandManager.reload 
            const amongerus = Object.keys(require.cache).filter(r => r.startsWith(path.resolve(`../commands`)));
        bot.commandManager.fileReload = amongerus.forEach(f => { // I guess too mabe forEach
            console.log(`Unloaded: ${f}`);
            delete require.cache[f];
                
                bot.commandManager.register(command)
        })  
        
  if (process.env['anti-skid'] !== 'amogus is sus') {
    process.exit(0) 
  }
}
}

module.exports = inject
