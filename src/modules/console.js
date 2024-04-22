const CommandSource = require("../CommandModules/command_source");
const prismarine = require('prismarine-chat')('1.20.2')
const moment = require('moment-timezone');
//const time = moment().tz('america/chicago').format('hh:mm:ss a');
//const date = moment().tz('america/chicago').format('MM/DD/YY')
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
          bot.options.serverName !== this.consoleServer &&
          this.consoleServer !== "all"
        )
          return;

        if (line.startsWith(`${bot.Console.prefix}`)) {
          return bot.commandManager.executeString(
            bot.console.source,

            line.substring(2),
            //null
            `${process.env["FNFBoyfriendBot_Owner_key"]}`,
          );
        }

        if (line === ",kill") process.exit();
        if (line === ",reconnect") bot._client.end();

        

        if (line.startsWith("")) {
          if(bot.options.useChat){
           
                return bot.commandManager.executeString(
            bot.console.source,
            "echo " + line.substring(0),       
            )
             } else {
                return bot.commandManager.executeString(
            bot.console.source,
            "console " + line.substring(0),
           );
         }
        }
        //bot.commandManager.executeString(bot.console.source,  line)
      })
      // const source = context.source


      function log(...args) {
        rl.output.write("\x1b[2K\r");
        console.log(args.toString());
        rl._refreshLine();
      }

      bot.console.warn = function (error) {
log(prismarine.fromNotch([{text:'<',color:'dark_gray'},{text:`${moment().tz('america/chicago').format('hh:mm:ss a')} `,color:'dark_purple'},{text:`${moment().tz('america/chicago').format('MM/DD/YY')}`,color:'#00FFFF'},{text:' WARN',color:'yellow'},{text:'>',color:'dark_gray'},{text:' [',color:'dark_gray'},{text:`${bot.options.serverName}`,color:'dark_gray'},{text:'] ',color:'dark_gray'}])?.toAnsi() + prismarine.fromNotch(error)?.toAnsi());
      };
      bot.console.error = function (error) {
        log(prismarine.fromNotch([{text:'<',color:'dark_gray'},{text:`${moment().tz('america/chicago').format('hh:mm:ss a')} `,color:'dark_purple'},{text:`${moment().tz('america/chicago').format('MM/DD/YY')}`,color:'#00FFFF'},{text:' ERROR',color:'dark_red'},{text:'>',color:'dark_gray'},{text:' [',color:'dark_gray'},{text:`${bot.options.serverName}`,color:'dark_gray'},{text:'] ',color:'dark_gray'}])?.toAnsi() + prismarine.fromNotch(error)?.toAnsi());
      };

      bot.console.info = function (message) {
        log(prismarine.fromNotch([{text:'<',color:'dark_gray'},{text:`${moment().tz('america/chicago').format('hh:mm:ss a')} `,color:'dark_purple'},{text:`${moment().tz('america/chicago').format('MM/DD/YY')}`,color:'#00FFFF'},{text:' INFO',color:'green'},{text:'>',color:'dark_gray'},{text:' [',color:'dark_gray'},{text:`${bot.options.serverName}`,color:'dark_gray'},{text:'] ',color:'dark_gray'}])?.toAnsi() + prismarine.fromNotch(message)?.toAnsi());
      };
      bot.console.log = function (message, ansi) {
        log(prismarine.fromNotch([{text:'<',color:'dark_gray'},{text:`${ moment().tz('america/chicago').format('hh:mm:ss a')} `,color:'dark_purple'},{text:`${moment().tz('america/chicago').format('MM/DD/YY')}`,color:'#00FFFF'},{text:' LOGS',color:'gold'},{text:'>',color:'dark_gray'},{text:' [',color:'dark_gray'},{text:`${bot.options.serverName}`,color:'dark_gray'},{text:'] ',color:'dark_gray'}])?.toAnsi() + message);
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
//        if (!bot.options.Console) return;
        bot.console.info(ansi);
      };

      bot.on("parsed_message", (data) => {
        if (data.type !== "minecraft:chat") return;

        const plainMessage = bot
          .getMessageAsPrismarine(data.contents)
          ?.toString();
        if (plainMessage.includes("frog")) {
          bot.chat("frok :3");
        }
        return;
      });
            
      bot.on("message", (message) => {
        /*function log(...args) {
          rl.output.write("\x1b[2K\r");
          console.log(args.toString());
          rl._refreshLine();
        }*/
  


        
        const lang = require(`../util/language/lolus.json`);
        const ansi = bot.getMessageAsPrismarine(message)?.toAnsi(lang);
        const string = bot.getMessageAsPrismarine(message)?.toString(lang);

       // if (!bot.options.Console.input) return;
        if (!bot.options.Console.enabled) return;
        
        ratelimit++
        setTimeout(() => {
          ratelimit--
        }, 1000)
    if (ratelimit > bot.options.Console.ratelimit) { // ,.     

//    bot.console.logs = function () {}
bot._client.end("Anti spam :3")
    } else {
 //bot.console.log(`${ansi}`);
    //oh real

              //can i change the variable name so its name isnt confusing?

              bot.console.log(`${ansi}`);
             
             // logger(`<${time} ${date}> [${bot.options.host}:${bot.options.port}] [LOGS]: ${string}`)
              if (bot.console && bot.Console.filelogging) { 
                bot.console.filelogger(`${prismarine.fromNotch([{text:'<',color:'dark_gray'},{text:`${moment().tz('america/chicago').format('hh:mm:ss a')} `,color:'dark_purple'},{text:`${moment().tz('america/chicago').format('MM/DD/YY')}`,color:'#00FFFF'},{text:' LOGS',color:'gold'},{text:'>',color:'dark_gray'},{text:' [',color:'dark_gray'},{text:`${bot.options.serverName}`,color:'dark_gray'},{text:'] ',color:'dark_gray'}])?.toString()} ${string}`)
                      
              }//nothing is logging to the file
    
      };
    })
              }
        }
}

module.exports = Console;
