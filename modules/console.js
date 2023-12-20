const CommandSource = require('../CommandModules/command_source')
//const log = require('../logger')

function inject (bot, options, context, source) {

  bot.console = {
    readline: null,
username:bot.username,
    consoleServer: 'all',
   //bot._client.username,
    useReadlineInterface (rl) {
      this.readline = rl
     
     
         
       rl.on('line', line => {
        if (bot.options.host !== this.consoleServer && this.consoleServer !== 'all') return
          
              
if (line.startsWith('.')) {
        return bot.commandManager.executeString(
bot.console.source,
               
          line.substring(1),
          //null
          `${process.env["FNFBoyfriendBot_Owner_key"]}`
        
      )
}
               
        if (line === ',kill') process.exit()
           if (line === ',reconnect') bot._client.end()            
                    
  
    
      
//probably gotta somehow have it get its username
               //tried that already didnt work just errored
               //profile or smh :shrug:
        // what does it have to be
          
if (line.startsWith('')){
        return bot.commandManager.executeString(
bot.console.source,
                'console ' + line.substring(0)
                )
                }
     
    
    
      
      
         
         //bot.commandManager.executeString(bot.console.source,  line)
     
      })

    

      
    

      /*   
        function prefix (prefix, _message) {
 const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
                const message = `[${now} \x1b[0m\x1b[33mLOGS\x1b[0m] [${bot.options.host}:${bot.options.port}]`
            
  }
  */

        //date.toLocaleDateString() for the date part, and date.toLocaleTimeString()
          const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
        const time = new Date().toLocaleTimeString("en-US", {timeZone:"America/CHICAGO"})
const date = new Date().toLocaleDateString("en-US", {timeZone:"America/CHICAGO"})
        
       // const source = context.source


       const prefix = `<\x1b[0m\x1b[35m${time} \x1b[0m\x1b[96m${date}\x1b[0m> [${bot.options.host}:${bot.options.port}\x1b[0m] `

 function log (...args) {
    rl.output.write('\x1b[2K\r')
    console.log(args.toString())
    rl._refreshLine()
  };
        
         bot.console.warn = function (error) {
    log(prefix + `[\x1b[0m\x1b[93mWARN\x1b[0m]: ${error}`)
  }
         bot.console.error = function (error) {
 log(prefix + `[\x1b[0m\x1b[31mERROR\x1b[0m]: ${error}`)
  }
        
         bot.console.info = function (message) {
    log(prefix + `[\x1b[0m\x1b[32mInfo\x1b[0m]:` + message)
  }
         bot.console.log = function (message, ansi) {
    
              log(prefix + `[\x1b[0m\x1b[33mLOGS\x1b[0m]: ` + message)
  }
         bot.console.debug = function (message, ansi) {
    
                 log(prefix + `[\x1b[0m\x1b[33mDEBUG\x1b[0m]: ` + message)
  }
        /*
         const player = source.player.profile.name
           const uuid = source.player.uuid

          console.log(`[${now} \x1b[0m\x1b[91mHash\x1b[0m] [\x1b[0m\x1b[92mSender: ${player}, uuid:${uuid}, hash:${bot.hash}\x1b[0m]`)
          */
 /* const ansimap = {
    0: '\x1b[0m\x1b[30m',
    1: '\x1b[0m\x1b[34m',
    2: '\x1b[0m\x1b[32m',
    3: '\x1b[0m\x1b[36m',
    4: '\x1b[0m\x1b[31m',
    5: '\x1b[0m\x1b[35m',
    6: '\x1b[0m\x1b[33m',
    7: '\x1b[0m\x1b[37m',
    8: '\x1b[0m\x1b[90m',
    9: '\x1b[0m\x1b[94m',
    a: '\x1b[0m\x1b[92m',
    b: '\x1b[0m\x1b[96m',
    c: '\x1b[0m\x1b[91m',
    d: '\x1b[0m\x1b[95m',
    e: '\x1b[0m\x1b[93m',
    f: '\x1b[0m\x1b[97m',
    r: '\x1b[0m',
    l: '\x1b[1m',
    o: '\x1b[3m',
    n: '\x1b[4m',
    m: '\x1b[9m',
    k: '\x1b[6m'
  }*/ /*return bot.commandManager.executeString(
          bot.username,
          options.commands.prefix + line.substring(1),
          bot.uuid,
          null,
          
        )*/

//       bot.username
        //const amogus = username,
   
            //name: message?.member?.displayName
             const isConsole = bot.username ? true : false
  bot.console.source = new CommandSource( bot.username,{console:true,  discord:false });
  bot.console.source.sendFeedback = message => {
  //profile:{displayName:bot.username}
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi()
   
  if (!bot.options.input) return
          if (!bot.options.console) return
          bot.console.log(ansi)
 
  }

  bot.on('message', message => {
       function log (...args) {
    rl.output.write('\x1b[2K\r')
    console.log(args.toString())
    rl._refreshLine()
  };
           const time = new Date().toLocaleTimeString("en-US", {timeZone:"America/CHICAGO"})
const date = new Date().toLocaleDateString("en-US", {timeZone:"America/CHICAGO"})
    const prefixy = `<\x1b[0m\x1b[35m${time} \x1b[0m\x1b[96m${date}\x1b[0m> [${bot.options.host}:${bot.options.port}\x1b[0m] `
    
          bot.console.logs = function (message, ansi) {
    
              log(prefixy + `[\x1b[0m\x1b[33mLOGS\x1b[0m]: ` + message)
  }
      const lang = require(`../util/language/${bot.options.language}.json`)
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi(lang)
    const string = bot.getMessageAsPrismarine(message)?.toString()
   
    const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
  //  const logtag = (JSON.stringify({"text":"[LOGS]", "color":"#00FF00"}))
    
 
        if (!bot.options.input) return
          if (!bot.options.console) return
          bot.console.logs(`${ansi}`)
 
  })
}
  }
}
module.exports = inject
/*const message = `[${moment().format('DD/MM/YY HH:mm:ss')} ${prefix}§r] [${bot.server.host}] `
    const component = chatMessage.MessageBuilder.fromString(message).toJSON()
    */