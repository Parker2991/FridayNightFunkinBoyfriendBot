const CommandSource = require("../CommandModules/command_source");

function Console (bot, options, config) {
  const chat = require('prismarine-chat')(bot.options.version)
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

        if (line.startsWith(`${config.console.prefix}`)) {
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
          if (bot.options.useChat) {
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
	log(chat.fromNotch([{text:'<',color:'gray'},{text:`${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} `,color:'#2b7589'},{text:`${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })}`,color:'#219696'},{text:' WARN',color:'yellow'},{text:'>',color:'gray'},{text:' [',color:'gray'},{text:`${bot.options.serverName}`,color:'#2081c3'},{text:'] ',color:'gray'}])?.toAnsi() + chat.fromNotch(error)?.toAnsi());
      };
      bot.console.error = function (error) {
        log(chat.fromNotch([{text:'<',color:'gray'},{text: `${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} `,color:'#2b7589'},{text:`${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })}`,color:'#219696'},{text:' ERROR',color:'dark_red'},{text:'>',color:'gray'},{text:' [',color:'gray'},{text:`${bot.options.serverName}`,color:'#2081c3'},{text:'] ',color:'gray'}])?.toAnsi() + chat.fromNotch(error)?.toAnsi());
      };
/*
      pub_lickColor: "#2b7589"
      t_rustedColor: "#219696"
      own_herColor: "#2081c3"
*/
      bot.console.info = function (message) {
        log(chat.fromNotch([{text:'<',color:'gray'},{text:`${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} `,color:'#2b7589'},{text:`${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO" })}`,color:'#219696'},{text:' INFO',color:'green'},{text:'>',color:'gray'},{text:' [',color:'gray'},{text:`${bot.options.serverName}`,color:'#2081c3'},{text:'] ',color:'gray'}])?.toAnsi() + chat.fromNotch(message)?.toAnsi());
      };
      bot.console.log = function (message, ansi) {
        log(chat.fromNotch([{text:'<',color:'gray'},{text:`${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO"})} `,color:'#2b7589'},{text:`${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO"})}`,color:'#219696'},{text:' LOGS',color:'gold'},{text:'>',color:'gray'},{text:' [',color:'gray'},{text:`${bot.options.serverName}`,color:'#2081c3'},{text:'] ',color:'gray'}])?.toAnsi() + message);
      };
     
      bot.console.debug = function (message) {
        log(chat.fromNotch([{text:'<',color:'gray'},{text:`${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO"})} `,color:'#2b7589'},{text:`${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO"})}`,color:'#219696'},{text:' DEBUG',color:'yellow'},{text:'>',color:'gray'},{text:' [',color:'gray'},{text:`${bot.options.serverName}`,color:'#2081c3'},{text:'] ',color:'gray'}])?.toAnsi() + message)
      };      
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
        if (plainMessage.includes("frog") || plainMessage.includes("🐸")) {
          bot.chat("frok :3");
        } else if (plainMessage.includes("fnf sky")) {
          bot.chat("FNF Sky? i simp for her :3")
        }
        return;
      });

      bot.on("message", (message) => {
        /*function log(...args) {
          rl.output.write("\x1b[2K\r");
          console.log(args.toString());
          rl._refreshLine();
        }*/
  

        const ansi = bot.getMessageAsPrismarine(message)?.toAnsi();
        const string = bot.getMessageAsPrismarine(message)?.toString();
        if (!options.Console.enabled) return;
        ratelimit++
        setTimeout(() => {
          ratelimit--
        }, 1000)
    if (ratelimit > options.Console.ratelimit) { // ,.     
      bot._client.end("Anti spam :3")
    } else {
      bot?.console?.log(`${ansi}`);
             
    if (config.console.filelogging) { 
      bot?.console?.filelogger(`${chat.fromNotch([{text:'<',color:'dark_gray'},{text:`${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} `,color:'dark_purple'},{text:`${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO"})}`,color:'#00FFFF'},{text:' LOGS',color:'gold'},{text:'>',color:'dark_gray'},{text:' [',color:'dark_gray'},{text:`${bot.options.serverName}`,color:'dark_gray'},{text:'] ',color:'dark_gray'}])?.toString()} ${string}`)
                      
    }
    };
   })
  }
 }
}

module.exports = Console;
