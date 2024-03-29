const fs = require("fs");
const path = require("path");
const CommandError = require("../CommandModules/command_error.js");
const time = new Date().toLocaleTimeString("en-US", {timeZone: "America/CHICAGO",});
const date = new Date().toLocaleDateString("en-US", {timeZone: "America/CHICAGO",});
const {EmbedBuilder } = require('discord.js')
/*async*/ function command_manager(bot, options) {
  bot.commandManager = {
    commands: {},
    commandlist: [],
    execute(source, commandName, args, message) {
      const command = this.getCommand(commandName.toLowerCase());
  const player = source?.player?.profile?.name;
          const uuid = source?.player?.uuid;
      try {
if(source.sources.console && !source.sources.discord){
 if (!command || !command.execute) {
bot.console.warn({text:`Unknown Command ${commandName}. type "${bot.options.Console.prefix}help" for help`,color:'dark_red'})
}
}else if(source.sources.discord && !source.sources.console) {
  if (!command || !command.execute) {
 const Embed = new EmbedBuilder()
          .setColor('#FF0000')
          .setTitle('Unknown Command')
          .setDescription(`Unknown Command ${commandName}. type "${bot.discord.commandPrefix}help" for help`)
        bot.discord.channel.send({ embeds: [Embed] })
     }
}else if(!source.sources.discord && !source.sources.console) {
    if (!bot.options.Core.enabled){
         if (!command || !command.execute) {
                throw new CommandError(`Unknown command ${commandName}. Type "${bot.Commands.prefixes[0]}help" for help`)
}
}else{
        if (!command || !command.execute) { // bot.options.command.prefixes[0]
          throw new CommandError({ // sus
            translate: `Unknown command %s. Type "${bot.Commands.prefixes[0]}help" for help or click on this for the command`,
/*
with: [commandName],
            clickEvent: 'https://discord.gg'
       
              ? {/
*/
            with: [commandName],
clickEvent:'https://discord.gg'
               ? {
                  action: "suggest_command",
                  value: `${bot.Commands.prefixes[0]}help`,
                }
              : undefined,
          }); //ohio
              }
}
}         
const event = bot?.discord?.Message

          const roles = event?.member?.roles?.cache
        if (command?.trustLevel > 0) {
         

if(command?.trustLevel === 1 && !source?.sources?.discord && !source?.sources?.console){
const hash = `${args[0]}`

if(args.length === 0 && bot.hash && bot.owner && bot.hashing.hash) throw new CommandError([{text:'Please provide an ',color:'gray'},{text:'Trusted ',color:'dark_purple'},{text:'hash or an ',color:'gray'},{text:'Owner ',color:'dark_red'},{text:'hash',color:'gray'}])
if (hash !== bot.hash && hash !== bot.owner && hash !== bot.hashing.hash) throw new CommandError([{text:'Invalid ',color:'gray'},{text:'Trusted ',color:'dark_purple'},{text:'hash or Invalid ',color:'gray'},{text:'Owner ',color:'dark_red'},{text:'hash',color:'gray'}])

} else if (command.trustLevel === 1 && source.sources.discord && !source.sources.console) {
  

          const hasRole = roles?.some(role => role.name === 'trusted' || role.name === 'FNFBoyfriendBot Owner')

          if (!hasRole) throw new CommandError({ translate: 'You are not trusted!' })
        }
          bot?.hashing?.updateHash();
        
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
if(command?.trustLevel === 2 && !source?.sources?.discord && !source?.sources?.console){
const owner = `${args[0]}`

if(args.length === 0 && bot.owner) throw new CommandError([{text:'Please provide a ',color:'red',color:'gray'},{text:'Owner ',color:'dark_red'},{text:'hash',color:'gray'}])
if(owner === bot.hash && owner === bot.hashing.hash) throw new CommandError([{text:"THATS A ",color:'gray'},{text:'TRUSTED ',color:'dark_purple'},{text:'HASH AFAIK',color:'gray'}])
if (owner !== bot.owner) throw new CommandError([{text:"Invalid ",color:'gray'},{text:'Owner ',color:'dark_red'},{text:'Hash',color:'gray'}])

} else if (command.trustLevel === 2 && source.sources.discord && !source.sources.console) {
  //        const events = source.discordMessageEvent

//          const roless = events?.member?.roles?.cache

          const hasRole = roles?.some(role => role.name === 'FNFBoyfriendBot Owner')

          if (!hasRole) throw new CommandError({ translate: 'You are the Owner!' })
        } 
          if (command.trustLevel === 3 && !source?.sources?.console)
     
            throw new CommandError({translate: "This command can only be executed via console",color: "blue",});
        }
        
        return command?.execute({ bot, source, arguments: args });
      } catch (error) {
        const now = new Date().toLocaleString("en-US", {
          timeZone: "America/CHICAGO",
        });
        bot.console.warn(error.stack); 
         if (!bot.options.Core.enabled){
                if (error instanceof CommandError) 
                      bot.chat(bot.getMessageAsPrismarine(error._message)?.toMotd().replaceAll('§','&'))
else bot.chat(bot.getMessageAsPrismarine('an error has occured please check console')?.toMotd().replaceAll('§','&'))
                }  else if(!source.sources.discord && !source.sources.console) {
        if (error instanceof CommandError) 
       source.sendError(error._message)
        else source.sendError({
            translate: "An Error has occured because the bot shot itself 🔫",
            color: "red",
            hoverEvent: { action: "show_text", contents: String(error.stack) },
          });
                }
                        //
         
      
       
else if (source.sources.discord && !source.sources.console) {

        const Embed = new EmbedBuilder()
          .setColor('#FF0000')
          .setTitle('Uh oh i went to get the 🥛 give me :cancer: years to come back with it')
          .setDescription(`\`\`\`${error}\`\`\``)
        bot.discord.channel.send({ embeds: [Embed] })
      }
      }
  },
      

    executeString(source, command) {
      const [commandName, ...args] = command.split(" ");

return this.execute(source, commandName, args)

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
      //process.exit(0);
    }
  }
}
module.exports = command_manager;
