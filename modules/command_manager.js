const fs = require("fs");
const path = require("path");
const CommandError = require("../CommandModules/command_error.js");
//check command_source
//it would be both the command_source.js and command_manager.js files
async function command_manager(bot, options) {
  bot.commandManager = {
    commands: {},
    commandlist: [],
    //ohio
    execute(source, commandName, args, message) {
      const command = this.getCommand(commandName.toLowerCase());
      //Unknown command. Type "/help" for help
      const now = new Date().toLocaleString("en-US", {
        timeZone: "America/CHICAGO",
      });
      try {
              if (!bot.options.Core.CorelessMode){
         if (!command || !command.execute) {
                throw new CommandError(`Unknown command ${commandName}. Type "${bot.options.commands.prefixes[0]}help" for help`)
         }
}else {
        if (!command || !command.execute) // bot.options.command.prefixes[0]
          throw new CommandError({ // sus
            translate: `Unknown command %s. Type "${bot.options.commands.prefixes[0]}help" for help or click on this for the command`,
            with: [commandName],
            clickEvent: 'https://discord.gg'
       
              ? {//fr
               // theme moment
                  action: "suggest_command",
                  value: `${bot.options.commands.prefixes[0]}help`,
                }
              : undefined,
          }); //ohio
              }
         
        if (command?.trustLevel > 0) {
          const event = source?.discordMessageEvent;

          const roles = event?.member?.roles?.cache;

          if (
            source?.sources?.discord &&
            command.trustLevel === 1 &&
            !roles?.some(
              (role) =>
                role?.name == "trusted" ||
                role?.name == "FNFBoyfriendBot Owner",
            )
              ? true
              : false
          )
            throw new CommandError({
              text: "You are not Trusted!",
              color: "red",
            });
          if (
            !source?.sources?.discord &&
                  !source?.sources?.console &&
            command.trustLevel === 1 &&
            args[0] !== bot.hash &&
            args[0] !== bot.owner &&
            args[0] !== bot.hashing.hash
          ) if (!bot.options.Core.CorelessMode){
         
                  throw new CommandError('&4Invalid Hash or Invalid Owner Hash')
                 // throw new CommandError('')
          }else{
                  throw new CommandError({
              text: "Invalid Hash or Invalid Owner Hash",
              color: "red",
            });
          }
          bot.hashing.updateHash();
          const now = new Date().toLocaleString("en-US", {
            timeZone: "America/CHICAGO",
          });
          const player = source?.player?.profile?.name;
          const uuid = source?.player?.uuid;
          const time = new Date().toLocaleTimeString("en-US", {
            timeZone: "America/CHICAGO",
          });
          const date = new Date().toLocaleDateString("en-US", {
            timeZone: "America/CHICAGO",
          });

          bot.console.hash = function (error, source) {
            console.log(
              `<\x1b[0m\x1b[35m${time} \x1b[0m\x1b[96m${date}\x1b[0m> [${bot.options.host}:${bot.options.port}\x1b[0m] ` +
                `[\x1b[0m\x1b[92mHash\x1b[0m]: \x1b[0m\x1b[92mPlayer\x1b[0m: ${player}, \x1b[0m\x1b[92mUUID\x1b[0m:${uuid}, \x1b[0m\x1b[92mHash\x1b[0m:${
                  bot.hash || bot.hashing.hash
                }\x1b[0m]`,
            );
          };
          bot.console.discordHash = function (error, source) {
            console.log(
              `<\x1b[0m\x1b[35m${time} \x1b[0m\x1b[96m${date}\x1b[0m> [${bot.options.host}:${bot.options.port}\x1b[0m] ` +
                `[\x1b[0m\x1b[92mHash\x1b[0m]: \x1b[0m\x1b[92mPlayer\x1b[0m: ${player}, \x1b[0m\x1b[92mUUID\x1b[0m:${uuid}, \x1b[0m\x1b[92mHash\x1b[0m:${bot.hashing.hash}\x1b[0m]`,
            );
          };
          bot.console.ownerHash = function (error, source) {
            console.log(
              `<\x1b[0m\x1b[35m${time} \x1b[0m\x1b[96m${date}\x1b[0m> [${bot.options.host}:${bot.options.port}\x1b[0m] ` +
                `[\x1b[0m\x1b[31mOwnerHash\x1b[0m]: \x1b[0m\x1b[92mPlayer\x1b[0m: ${player}, \x1b[0m\x1b[92mUUID\x1b[0m:${uuid}, \x1b[0m\x1b[31mOwnerHash\x1b[0m:${bot.owner}\x1b[0m]`,
            );
          };
          if (args[0] === bot.hash) {
            bot.console.hash();
          } else if (args[0] === bot.owner) {
            bot.console.ownerHash();
          }
          if (
            source?.sources?.discord &&
            command.trustLevel === 2 &&
            !roles?.some((role) => role.name === "FNFBoyfriendBot Owner")
          )
                  
            throw new CommandError({
              text: "You are not the Owner!",
              color: "dark_red",
            });
          const owner = `${args[0]}`;
          if (
            !source?.sources?.discord &&
                  !source?.sources?.console &&
            command.trustLevel === 2 &&
            owner !== bot.owner
          )
                  if (bot.options.Core.CorelessMode){
                
                          throw new CommandError('&4Invalid Owner Hash')
                  }else{
            throw new CommandError({
              text: "Invalid Owner Hash",
              color: "dark_red",
            });
                  }
          if (command.trustLevel === 3 && !source?.sources?.console)
                  if(bot.options.Core.CorelessMode){
                          throw new CommandError('&9This command can only be execute via console')
                  }else{
            throw new CommandError({
              translate: "This command can only be executed via console",
              color: "blue",
            });
        }
        }
        return command?.execute({ bot, source, arguments: args });
      } catch (error) {
        const now = new Date().toLocaleString("en-US", {
          timeZone: "America/CHICAGO",
        });
        bot.console.warn(error.stack); 
        
              if (bot.options.Core.CorelessMode){
                if (error instanceof CommandError) 
                      bot.chat(error._message)
                      else bot.chat('a error has occured!')
                }  else  {
        if (error instanceof CommandError) 
       source.sendError(error._message)
        else source.sendError({
            translate: "An Error has occured because the bot shot itself 🔫",
            color: "red",
            hoverEvent: { action: "show_text", contents: String(error.stack) },
          });
                }
                        //
         
      
       
        if (source.sources.discord) {
          source.sendError(error);
        }
      }
  },
     
  
    executeString(source, command) {
      const [commandName, ...args] = command.split(" ");
      return this.execute(source, commandName, args);
    },
    register(command) {
      this.commands[command.name] = command;

      if (command.aliases) {
        command.aliases.map((a) => (this.commands[a] = command));
      }
    },
    getCommand(name) {
      return this.commands[name];
    },

    getCommands() {
      return Object.values(this.commands);
    },
  };
  //
  commandlist = [];

  for (const filename of fs.readdirSync(path.join(__dirname, "../commands"))) {
    try {
      const command = require(path.join(__dirname, "../commands", filename));
      bot.commandManager.register(command);
      bot.commandManager.commandlist.push(command);
    } catch (error) {
      console.error("Failed to load command", filename, ":", error);
    }

    if (process.env["anti-skid"] !== "amogus is sus") {
      process.exit(0);
    }
  }
}
module.exports = command_manager;
