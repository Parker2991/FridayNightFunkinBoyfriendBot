const fs = require("fs");
const path = require("path");
const CommandError = require("../CommandModules/command_error.js");
const { EmbedBuilder } = require('discord.js')
function command_manager(bot, options) {
  bot.commandManager = {
    commands: {},
    commandlist: [],
    execute(source, commandName, args, message, options) {
    const command = this.getCommand(commandName.toLowerCase());
    const player = source?.player?.profile?.name;
    const uuid = source?.player?.uuid;
      try {
if (source.sources.console && !source?.sources?.discord) {
 if (!command || !command.execute) {
bot.console.warn({text:`Unknown Command ${commandName}. type "${bot.Console.prefix}help" for help`,color:'dark_red'})
}
} else if (source?.sources?.discord && !source.sources.console) {
  if (!command || !command.execute) {
        const Embed = new EmbedBuilder()
          .setColor(`${bot.Commands.colors.discord.error}`)
          .setTitle('Unknown Command')
          .setDescription(bot.getMessageAsPrismarine([{ // sus
             translate: `command.unknown.command`},{text:'\n'},{text:`${commandName} `},{translate:"command.context.here"}])?.toMotd(bot.registry.language))
        bot.discord.Message.reply({ embeds: [Embed] })
     }
} else if (!source?.sources?.discord && !source.sources.console) {
       if (bot.options.isCreayun) {
          if (!command || !command.execute) {
	    throw new CommandError(`Unknown command ${commandName} type "${bot.Commands.prefixes[0]}help" for help`)
 	  }
        } else {
        if (!command || !command.execute) { // bot.options.command.prefixes[0]
           throw new CommandError(bot.getMessageAsPrismarine([{ // sus
             translate: `command.unknown.command`},{text:'\n'},{text:`${commandName} `},{translate:"command.context.here"}])?.toMotd(bot.registry.language));
              }
         }
} else if (bot.options.isCreayun) {
  if (!command || !command.execute) {
  bot.chat(`Unknown command ${commandName} type "${bot.Commands.prefixes[0]}help" for help`)
 } 
}
         
const event = bot?.discord?.Message

          const roles = event?.member?.roles?.cache
if (command?.trustLevel === -1) {
throw new CommandError('this command has been disabled!')
}
        if (command?.trustLevel > 0) {
if (command?.trustLevel === 1 && !source?.sources?.discord && !source?.sources?.console) {
  const hash = `${args[0]}`

if (args.length === 0 && bot.hash && bot.owner && bot.hashing.hash) throw new CommandError([{text:'Please provide an ',color:'gray'},{text:'Trusted ',color:'#219696'},{text:'hash or an ',color:'gray'},{text:'Owner ',color:'#2081c3'},{text:'hash',color:'gray'}])
if (hash !== bot.hash && hash !== bot.owner && hash !== bot.hashing.hash) throw new CommandError([{text:'Invalid ',color:'gray'},{text:'Trusted ',color:'#219696'},{text:'hash or Invalid ',color:'gray'},{text:'Owner ',color:'#2081c3'},{text:'hash',color:'gray'}])

} else if (command.trustLevel === 1 && source?.sources?.discord && !source.sources.console) {
  

          const hasRole = roles?.some(role => role.name === `${bot.validation.discord.roles.trusted}` || role.name === `${bot.validation.discord.roles.owner}`)

          if (!hasRole) throw new CommandError({ translate: 'You are not trusted!' })
        }
          bot?.hashing?.updateHash();
        
           if (args[0] === bot.hash) {
            bot.console.info({ text: `Player ${player} UUID: ${uuid} Hash:${bot.hash}`, color: 'white' })
          } else if (args[0] === bot.owner) {
            bot.console.info({ text: `Player ${player} UUID: ${uuid} Hash:${bot.owner}`, color: 'white' })
          }
if (command?.trustLevel === 2 && !source?.sources?.discord && !source?.sources?.console) {
const owner = `${args[0]}`
if (args.length === 0 && bot.owner) throw new CommandError([{text:'Please provide a ',color:'red',color:'gray'},{text:'Owner ',color:'#2081c3'},{text:'hash',color:'gray'}])
if (owner === bot.hash || owner === bot.hashing.hash) throw new CommandError([{text:"THATS A ",color:'gray'},{text:'TRUSTED ',color:'#219696'},{text:'HASH AFAIK',color:'gray'}])
if (owner !== bot.owner) throw new CommandError([{text:"Invalid ",color:'gray'},{text:'Owner ',color:'#2081c3'},{text:'Hash',color:'gray'}])

} else if (command?.trustLevel === 2 && source?.sources?.discord && !source?.sources?.console) {
  //        const events = source.discordMessageEvent

//          const roless = events?.member?.roles?.cache

          const hasRole = roles?.some(role => role.name === `${bot.validation.discord.roles.owner}`)

          if (!hasRole) throw new CommandError({ translate: 'You are not the Owner!' })
        } 
          if (command.trustLevel === 3 && !source?.sources?.console)
     
            throw new CommandError({translate: "This command can only be executed via console",color: "blue",});
        }
	if(source?.sources?.discord && !source?.sources?.matrix && !source.sources.console){
	  if (!command?.discordExecute && command) {
	   bot.discord.Message.reply('This command is not supported in discord!')
}else{
return command?.discordExecute({bot, source, arguments: args, args})
}
}else{        
        return command?.execute({ bot, source, arguments: args, options });
      }
} catch (error) {
   if (!source.sources.discord && !source.sources.console) {
             if (bot.options.isCreayun) { 
   	     if (error instanceof CommandError)
	       bot.chat(bot.getMessageAsPrismarine(error._message)?.toMotd().replaceAll('§','&'))
               else bot.chat(bot.getMessageAsPrismarine({ translate: 'command.failed', color: 'dark_red' })?.toMotd(bot.registry.language).replaceAll('§','&'))
	     } else {
	     if (error instanceof CommandError)
             bot.sendError(error._message)
             else bot.sendError(bot.getMessageAsPrismarine({
                    translate: "command.failed",
            	     color: `${bot.Commands.colors.error}`,
            	     hoverEvent: { action: "show_text", contents: String(error.stack) },
      		  })?.toMotd(bot.registry.language));
             }
    bot.console.warn(error.stack)
   } else if (source.sources.discord && !source.sources.console) {
        const Embed = new EmbedBuilder()
          .setColor(`${bot.Commands.colors.discord.error}`)
          .setTitle(`${command?.name} Command`)
          .setDescription(`\`\`\`${error}\`\`\``)
        bot.discord.Message.reply({ embeds: [Embed] }) 
   }
  }
},
    executeString(source, command) {
      const [commandName, ...args] = command.split(" ");

      return this.execute(source, commandName, args)

    },
   discordExecute(source, command) { 
     const [commandName, ...args] = command.split(" ");
     
    if (source?.sources?.discord && !source?.sources?.matrix && !source?.sources?.console) {
      return this.discordExecute(source, commandName, args)
     }
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
  }
}
module.exports = command_manager;
