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
if(source.sources.console && !source?.sources?.discord){
 if (!command || !command.execute) {
bot.console.warn({text:`Unknown Command ${commandName}. type "${bot.Console.prefix}help" for help`,color:'dark_red'})
}
}else if (source?.sources?.discord && !source.sources.console) {
  if (!command || !command.execute) {
        const Embed = new EmbedBuilder()
          .setColor(`${bot.Commands.colors.discord.error}`)
          .setTitle('Unknown Command')
          .setDescription(`Unknown Command ${commandName}. type "${bot.Discord.commandPrefix}help" for help`)
        bot.discord.Message.reply({ embeds: [Embed] })
     }
}else if(!source?.sources?.discord && !source.sources.console) {

        if (!command || !command.execute) { // bot.options.command.prefixes[0]
           throw new CommandError(bot.getMessageAsPrismarine([{ // sus
             translate: `command.unknown.command`},{text:'\n'},{text:`${commandName} `},{translate:"command.context.here"}])?.toMotd(require('../util/language/lolus.json')));
              }
}
         
const event = bot?.discord?.Message

          const roles = event?.member?.roles?.cache
if (command?.trustLevel === -1) {
throw new CommandError('this command has been disabled!')
}
        if (command?.trustLevel > 0) {
         

if(command?.trustLevel === 1 && !source?.sources?.discord && !source?.sources?.console){
const hash = `${args[0]}`

if(args.length === 0 && bot.hash && bot.owner && bot.hashing.hash) throw new CommandError([{text:'Please provide an ',color:'gray'},{text:'Trusted ',color:'dark_purple'},{text:'hash or an ',color:'gray'},{text:'Owner ',color:'dark_red'},{text:'hash',color:'gray'}])
if (hash !== bot.hash && hash !== bot.owner && hash !== bot.hashing.hash) throw new CommandError([{text:'Invalid ',color:'gray'},{text:'Trusted ',color:'dark_purple'},{text:'hash or Invalid ',color:'gray'},{text:'Owner ',color:'dark_red'},{text:'hash',color:'gray'}])

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
if(command?.trustLevel === 2 && !source?.sources?.discord && !source?.sources?.console){
const owner = `${args[0]}`

if(args.length === 0 && bot.owner) throw new CommandError([{text:'Please provide a ',color:'red',color:'gray'},{text:'Owner ',color:'dark_red'},{text:'hash',color:'gray'}])
if(owner === bot.hash || owner === bot.hashing.hash) throw new CommandError([{text:"THATS A ",color:'gray'},{text:'TRUSTED ',color:'dark_purple'},{text:'HASH AFAIK',color:'gray'}])
if (owner !== bot.owner) throw new CommandError([{text:"Invalid ",color:'gray'},{text:'Owner ',color:'dark_red'},{text:'Hash',color:'gray'}])

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
return command?.discordExecute({bot, source,arguments: args})
}
}else{        
        return command?.execute({ bot, source, arguments: args });
      }
} catch (error) {
/* if (source.sources.discord) {
     //if (error instanceof CommandError) 
        const Embed = new EmbedBuilder()
       if (error instanceof CommandError)
         Embed
          .setColor(`${bot.Commands.colors.discord.error}`)
          .setTitle(`${command?.name} Command`)
          .setDescription(`\`\`\`${error._message}\`\`\``)
        bot?.discord?.Message?.reply({ embeds: [Embed] })
    } else {
     if (error instanceof CommandError)
     bot.sendError(error._message)
        else bot.sendError({
            translate: "An Error has occured because the bot shot itself 🔫",
            color: `${bot.Commands.colors.error}`,
            hoverEvent: { action: "show_text", contents: String(error.stack) },

      });
      console.warn(error.stack)
   }*/
   if (!source.sources.discord && !source.sources.console) {
     if (error instanceof CommandError)
     bot.sendError(error._message)
        else bot.sendError({
            translate: "An Error has occured because the bot shot itself 🔫",
            color: `${bot.Commands.colors.error}`,
            hoverEvent: { action: "show_text", contents: String(error.stack) },

      });
      bot.console.warn(error.stack)
   } else if (source.source.discord && !source.sources.console) {
        const Embed = new EmbedBuilder()
          .setColor(`${bot.Commands.colors.discord.error}`)
          .setTitle(`${command.name} Command`)
          .setDescription(`\`\`\`${error._message}\`\`\``)
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

    if (process.env["anti-skid"] !== "amogus is sus") {
      //process.exit(0);
    }
  }
}
module.exports = command_manager;
