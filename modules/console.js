const CommandSource = require("../CommandModules/command_source");
// idk if it's modules or utils though
//modules is automatically loaded 
function Console(bot, options, context, source) {
   let ratelimit = 0
        bot.console = {
    readline: null,
    username: bot.username,
    consoleServer: "all",
    //bot._client.username,
    useReadlineInterface(rl) {
      this.readline = rl;

      rl.on("line", (line) => {
        if (
          bot.options.host !== this.consoleServer &&
          this.consoleServer !== "all"
        )
          return;

        if (line.startsWith(`${bot.options.Console.prefix}`)) {
          return bot.commandManager.executeString(
            bot.console.source,

            line.substring(2),
            //null
            `${process.env["FNFBoyfriendBot_Owner_key"]}`,
          );
        }

        if (line === ",kill") process.exit();
        if (line === ",reconnect") bot._client.end();

        //probably gotta somehow have it get its username
        //tried that already didnt work just errored
        //profile or smh :shrug:
        // what does it have to be

        if (line.startsWith("")) {
          if(bot.options.Core.CorelessMode){
           
                return bot.commandManager.executeString(
            bot.console.source,
            "echo " + line.substring(0),       
          )
                        }else {
                return bot.commandManager.executeString(
            bot.console.source,
            "console " + line.substring(0),
          );
        }
        }
        //bot.commandManager.executeString(bot.console.source,  line)
      });

      const now = new Date().toLocaleString("en-US", {
        timeZone: "America/CHICAGO",
      });
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/CHICAGO",
      });
      const date = new Date().toLocaleDateString("en-US", {
        timeZone: "America/CHICAGO",
      });

      // const source = context.source

      const prefix = `<\x1b[0m\x1b[35m${time} \x1b[0m\x1b[96m${date}\x1b[0m> [${bot.options.host}:${bot.options.port}\x1b[0m] `;

      function log(...args) {
        rl.output.write("\x1b[2K\r");
        console.log(args.toString());
        rl._refreshLine();
      }

      bot.console.warn = function (error) {
        log(prefix + `[\x1b[0m\x1b[93mWARN\x1b[0m]: ${bot.getMessageAsPrismarine(error)?.toAnsi()}`);
      };
      bot.console.error = function (error) {
        log(prefix + `[\x1b[0m\x1b[31mERROR\x1b[0m]: ${error}`);
      };

      bot.console.info = function (message) {
        log(prefix + `[\x1b[0m\x1b[32mInfo\x1b[0m]: ` + bot.getMessageAsPrismarine(message)?.toAnsi());
      };
      bot.console.log = function (message, ansi) {
        log(prefix + `[\x1b[0m\x1b[33mLOGS\x1b[0m]: ` + bot.getMessageAsPrismarine(message)?.toAnsi());
      };
      bot.console.debug = function (message, ansi) {
        log(prefix + `[\x1b[0m\x1b[33mDEBUG\x1b[0m]: ` + bot.getMessageAsPrismarine(message)?.toAnsi());
      };
      
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
  }*/
      const isConsole = bot.username ? true : false;
      bot.console.source = new CommandSource(bot.username, {
        console: true,
        discord: false,
      });
      bot.console.source.sendFeedback = (message) => {
      
              const ansi = bot.getMessageAsPrismarine(message)?.toAnsi();

        if (!bot.options.Console.input) return;
        if (!bot.options.Console.enabled) return;
        bot.console.info(ansi);
      };

      bot.on("parsed_message", (data) => {
        if (data.type !== "minecraft:chat") return;

        const plainMessage = bot
          .getMessageAsPrismarine(data.contents)
          ?.toString();
        if (plainMessage.includes("frog")) {
          bot.chat("Man I Love Frogs");
        }
        return;
      });
            
      bot.on("message", (message) => {
        function log(...args) {
          rl.output.write("\x1b[2K\r");
          console.log(args.toString());
          rl._refreshLine();
        }
        const time = new Date().toLocaleTimeString("en-US", {
          timeZone: "America/CHICAGO",
        });
        const date = new Date().toLocaleDateString("en-US", {
          timeZone: "America/CHICAGO",
        });
        const prefixy = `<\x1b[0m\x1b[35m${time} \x1b[0m\x1b[96m${date}\x1b[0m> [${bot.options.host}:${bot.options.port}\x1b[0m] `;

        bot.console.logs = function (message, ansi) {
          log(prefixy + `[\x1b[0m\x1b[33mLOGS\x1b[0m]: ` + message);
        };
        const lang = require(`../util/language/lolus.json`);
        const ansi = bot.getMessageAsPrismarine(message)?.toAnsi(lang);
        const string = bot.getMessageAsPrismarine(message)?.toString(lang);

        const now = new Date().toLocaleString("en-US", {
          timeZone: "America/CHICAGO",
        });
        const time2 = new Date().toLocaleTimeString("en-US", {
          timeZone: "America/CHICAGO",
        });
        const date2 = new Date().toLocaleDateString("en-US", {
          timeZone: "America/CHICAGO",
        });

     
       // if (!bot.options.Console.input) return;
        if (!bot.options.Console.enabled) return;
        
        ratelimit++
        setTimeout(() => {
          ratelimit--
        }, 1000)
    if (ratelimit > 35) { // ,.     

//    bot.console.logs = function () {}
    } else {
 //bot.console.log(`${ansi}`);
    //oh real

              //can i change the variable name so its name isnt confusing?

              bot.console.logs(`${ansi}`);
             
             // logger(`<${time} ${date}> [${bot.options.host}:${bot.options.port}] [LOGS]: ${string}`)
              if (bot.console && bot.console.filelogger) { 
                bot.console.filelogger(`<${time} ${date}> [${bot.options.host}:${bot.options.port}] [LOGS]: ${string}`)
                      
              }//nothing is logging to the file
    /*
    try{
      
        ratelimit++
        setTimeout(() => {
          ratelimit--
        }, 1000)
    if (ratelimit > 5) { // ,.     

       source.sendFeedback({text:'You are using commands to fast!',color:'dark_red'})
      // this isn't blocking running the command you know that right?
    } else {
      bot.commandManager.executeString(source, command);
    }//oh real

              //can i change the variable name so its name isnt confusing?
}catch(e){
        console.log(e.stack)


        
            //then where to move this?
   
    
    };
    */
      };
    })
              }
        }
}

module.exports = Console;
