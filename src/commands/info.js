const CommandError = require("../CommandModules/command_error");
const path = require("path");
const fs = require("fs");
const packageJSON = require("../../package.json");
const os = require('os');
const date = new Date().toLocaleDateString("en-US", {
              timeZone: "America/CHICAGO",
             });
const { execSync } = require('child_process');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
function format(seconds) {
          function pad(s) {
            return (s < 10 ? "0" : "") + s;
          }
          var hours = Math.floor(seconds / (60 * 60));
          var minutes = Math.floor((seconds % (60 * 60)) / 60);
          var seconds = Math.floor(seconds % 60);
           return (pad(`${hours} Hours`) + " " + 
            pad(`${minutes} Minutes`) + " " +
             pad(`${seconds} Seconds`))
          }
module.exports = {
  name: "info",
  description: [
    "check the bots info",
  ],
  aliases: ["information"],
  trustLevel: 0,
  usage:[
   "version",
   "invites",
   "server",
   "loaded",
   "login",
   "config",
   "uptime",
   "contributors",
  ],
  async execute(context) {
    const bot = context.bot;
    const args = context.arguments;
    const source = context.source; 
    const config = context.config;
switch(args.join(' ').toLowerCase()) {
 case 'version':
  if (bot.options.useChat && !bot.options.isCreayun) {
   bot.chat(bot.getMessageAsPrismarine({text:`${process.env.buildstring}-${execSync('git rev-parse HEAD').toString().slice(0, 10)}`})?.toMotd().replaceAll('§',"&"))
   await bot.chatDelay(100)
   bot.sendFeedback({text:`${process.env.FoundationBuildString}-${execSync('git rev-parse HEAD').toString().slice(0, 10)}`})
   await bot.chatDelay(100)
   bot.sendFeedback({text:`11/22/2022 - ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })}`})
  } else if (bot.options.isCreayun) {
    bot.chat(bot.getMessageAsPrismarine(process.env.buildstring)?.toMotd().replaceAll('§','&'))
    await bot.chatDelay(1500)
    bot.chat(process.env.FoundationBuildString)
    await bot.chatDelay(1500)
    bot.chat(`11/22/2022 - ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })}`)
  } else {
  bot.sendFeedback({text:`${process.env.buildstring}-${execSync('git rev-parse HEAD').toString().slice(0, 10)}`})
  bot.sendFeedback({text:`${process.env.FoundationBuildString}-${execSync('git rev-parse HEAD').toString().slice(0, 10)}`})
  bot.sendFeedback({text:`11/22/2022 - ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })}`})
  }
 break
 case 'invites':
  if (bot.options.isCreayun) {
  bot.chat(`Discord ${bot.discord.invite}`)
  await bot.chatDelay(1500)
  } else {
  bot.sendFeedback({ text: 'Discord Invite', color: "gray", translate: "", hoverEvent: { action: "show_text", value: [ { text: "click here to join!", color: "gray", }, ], }, clickEvent: { action: "open_url", value: `${bot.discord.invite}`, }, });   
  }
 break
 case 'server':
  if (bot.options.useChat && !bot.options.isCreayun) {
   bot.sendFeedback({ color: "gray", text: `Hostname \u203a ${os.hostname()}`, })
   await bot.chatDelay(100)
   bot.sendFeedback({ color: "gray", text: `Working Directory \u203a ${process.mainModule.path}`, });
   await bot.chatDelay(100)
   bot.sendFeedback({ color: "gray", text: `${os.arch()}`})
   await bot.chatDelay(100)
   bot.sendFeedback({ color: "gray", text:`OS \u203a ${os.platform()}`})
   await bot.chatDelay(100)
   bot.sendFeedback({ color: "gray", text: `OS Version/distro \u203a ${os.version()}`, });
   await bot.chatDelay(100)
   bot.sendFeedback({ color: "gray", text: `Kernal Version \u203a ${os.release()}`, });
   await bot.chatDelay(100)
   bot.sendFeedback({ color: "gray", text: `cores \u203a ${os.cpus().length}`, });
   await bot.chatDelay(100)
   bot.sendFeedback({ color: "gray", text: `CPU \u203a ${os.cpus()[0].model}`, });
   await bot.chatDelay(100)
   bot.sendFeedback([{text:`Server Free memory `, color:'gray'},{text:`${Math.floor( os.freemem() / 1048576, )} `,color:'gray'},{text: `MiB / ${Math.floor(os.totalmem() / 1048576)} MiB`, color:'gray'}]);
   await bot.chatDelay(100)
   bot.sendFeedback({text:`Device uptime \u203a ${format(os.uptime())}`,color:'gray'})
   await bot.chatDelay(100)
   bot.sendFeedback({text:`Node version \u203a ${process.version}`,color:'gray'})
  } else if (bot.options.isCreayun) {
    bot.chat(`Host \u203a ${os.hostname()}`)
    await bot.chatDelay(1500)
    bot.chat(`Working Dir \u203a ${process.mainModule.path}`)
    await bot.chatDelay(1500)
    bot.chat(`${os.arch}`)
    await bot.chatDelay(1500)
    bot.chat(`OS \u203a ${os.platform()}`)
    await bot.chatDelay(1500)
    bot.chat(`OS Version \u203a ${os.version()}`)
    await bot.chatDelay(1500)
    bot.chat(`Kernal Version \u203a ${os.release()}`)
    await bot.chatDelay(1500)
    bot.chat(`cores \u203a ${os.cpus().length}`)
    await bot.chatDelay(1500)
    bot.chat(`CPU \u203a ${os.cpus()[0].model}`)
    await bot.chatDelay(1500)
    bot.chatDelay(`too lazy to put server free memory here rn`)
    await bot.chatDelay(1500)
    bot.chat(`Device uptime \u203a ${format(os.uptime())}`)
    await bot.chatDelay(1500)
    bot.chat(`Node version \u203a ${process.version}`)
  } else {
  bot.sendFeedback({ color: "gray", text: `Hostname \u203a ${os.hostname()}`, });
  bot.sendFeedback({ color: "gray", text: `Working Directory \u203a ${process.mainModule.path}`, });
  bot.sendFeedback({ color: "gray", text: `${os.arch()}`})
  bot.sendFeedback({ color: "gray", text:`OS \u203a ${os.platform()}`})
  bot.sendFeedback({ color: "gray", text: `OS Version/distro \u203a ${os.version()}`, });
  bot.sendFeedback({ color: "gray", text: `Kernal Version \u203a ${os.release()}`, });
  bot.sendFeedback({ color: "gray", text: `cores \u203a ${os.cpus().length}`, });
  bot.sendFeedback({ color: "gray", text: `CPU \u203a ${os.cpus()[0].model}`, });
  bot.sendFeedback([{text:`Server Free memory `, color:'gray'},{text:`${Math.floor( os.freemem() / 1048576, )} `,color:'gray'},{text: `MiB / ${Math.floor(os.totalmem() / 1048576)} MiB`, color:'gray'}]);
  bot.sendFeedback({text:`Device uptime \u203a ${format(os.uptime())}`,color:'gray'})
  bot.sendFeedback({text:`Node version \u203a ${process.version}`,color:'gray'})
  }
 break
 case 'loaded':
  
 // lazy file count :shrug:
//  source.sendFeedback([{text:'Package Count \u203a ',color:'gray'},{text:`${Object.keys(packageJSON.dependencies).length}`,color:'gold'}])
  if (bot.options.useChat && !bot.options.isCreayun) {
  bot.sendFeedback([{text:'Package Count \u203a ', color:'gray'},{text:`${Object.keys(packageJSON.dependencies).length}`,color:'gold'}]) 
  } else if (bot.options.isCreayun) {
    bot.chat(`Package Count \u203a ${Object.keys(packageJSON.dependencies).length}`)
    await bot.chatDelay(1500)
    bot.chat(`File Could \u203a (${JSON.stringify(FileCount)})`)
  } else { 

  bot.sendFeedback([{text:'Package Count \u203a ', color:'gray'},{text:`${Object.keys(packageJSON.dependencies).length}`,color:'gold'}]) 
  }
break 
case 'time':
if (bot.options.isCreayun) {
  bot.chat(`the bot is reading ${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })}`)
} else {
 bot.sendFeedback([{text:`the bot is reading ${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })}`}])
}
break
case 'login':
if (bot.options.useChat) {
 bot.sendFeedback({text:`Minecraft Username \u203a ${bot.options.username}`,color:'gray'})
 await bot.chatDelay(150)
 bot.sendFeedback({text: `uuid \u203a ${bot.uuid}`,color:'gray'})
 await bot.chatDelay(150)
/*if(bot.discord === undefined){
bot.sendFeedback({text:'Currently not logged into discord',color:'dark_red'})
await bot.chatDelay(150)
}else{ 
bot.sendFeedback({text:`Discord Username \u203a ${bot.discord.client.user.username + '#' + bot.discord.client.user.discriminator}`,color:'gray'})
await bot.chatDelay(150)
} */
await bot.chatDelay(150)
 await bot.chatDelay(150)
 bot.sendFeedback({text:`Server \u203a ${bot.options.serverName}`,color:'gray'})
 await bot.chatDelay(150)
 bot.sendFeedback({text:`Server IP \u203a ${bot.options.host + ':' + bot.options.port}`,color:'gray'})
 await bot.chatDelay(150)
 source.sendFeedback({text:`Version \u203a ${bot.options.version}`,color:'gray'})
} else {
  bot.sendFeedback({text:`Minecraft Username \u203a ${bot.options.username}`,color:'gray'})
  bot.sendFeedback({text: `uuid \u203a ${bot.uuid}`,color:'gray'})
 bot.sendFeedback({text:`Server \u203a ${bot.options.serverName}`,color:'gray'})
 bot.sendFeedback({text:`Server IP \u203a ${bot.options.host + ':' + bot.options.port}`,color:'gray'})
 bot.sendFeedback({text:`Version \u203a ${bot.options.version}`,color:'gray'})
 bot.sendFeedback({text:`Discord channel \u203a ${bot.discord.channel.name}`,color:'gray'})
 bot.sendFeedback({text:`Discord Username \u203a ${bot.discord.client.user.username + '#' + bot.discord.client.user.discriminator}`,color:'gray'})
 }
break
case 'config':
 if (bot.options.useChat) {
 bot.sendFeedback({text:`Prefixes \u203a ${config.Commands.prefixes}`,color:'gray'})
 await bot.chatDelay(100)
 bot.sendFeedback([{text:`Core enabled? `,color:'gray'},{text:`${bot.options.Core.enabled}`,color:'gold'}])
 await bot.chatDelay(100)
 //bot.sendFeedback([{text:'Discord enabled? ',color:'gray'},{text:`${bot.Discord.enabled}`,color:'gold'}])
 await bot.chatDelay(100)
 bot.sendFeedback([{text:'Console logging enabled? ',color:'gray'},{text:`${bot.options.Console.enabled}`,color:'gold'}])
 await bot.chatDelay(100)
 bot.sendFeedback([{text:'Chat filelogging enabled? ',color:'gray'},{text:`${config.console.filelogging}`,color:'gold'}])
 await bot.chatDelay(100)
 bot.sendFeedback([{text:'Multiconnect Server count \u203a ',color:'gray'},{text:`${Object.keys(bot.bots).length}`,color:'gold'}])
 } else {
 bot.sendFeedback({text:`Prefixes \u203a ${config.Commands.prefixes}`,color:'gray'})
 bot.sendFeedback([{text:`Core enabled? `,color:'gray'},{text:`${bot.options.Core.enabled}`,color:'gold'}])
// bot.sendFeedback([{text:'Discord enabled? ',color:'gray'},{text:`${bot.Discord.enabled}`,color:'gold'}])
 bot.sendFeedback([{text:'Console logging enabled? ',color:'gray'},{text:`${bot.options.Console.enabled}`,color:'gold'}])
 bot.sendFeedback([{text:'Chat filelogging enabled? ',color:'gray'},{text:`${config.console.filelogging}`,color:'gold'}])
 bot.sendFeedback([{text:'Multiconnect Server count \u203a ',color:'gray'},{text:`${Object.keys(bot.bots).length}`,color:'gold'}])
 bot.sendFeedback([{text:'Discord enabled? ',color:'gray'},{text:`${bot.Discord.enabled}`,color:'gold'}])
 }
break
case 'uptime':
 if (bot.options.isCreayun) {
   bot.chat(`${format(process.uptime())}`)
 } else {
 bot.sendFeedback([{text:`${format(process.uptime())}`,color:'gray'}])
 }
break
case 'contributors':
if (bot.options.useChat) {
bot.chat('&4Parker&02991')
await bot.chatDelay(100)
bot.chat('&a_ChipMC_')
await bot.chatDelay(100)
bot.chat('&eChayapak')
await bot.chatDelay(100)
bot.chat(bot.getMessageAsPrismarine({ text: "_yfd", color: "light_purple"})?.toMotd().replaceAll('§','&'))
await bot.chatDelay(100)
bot.chat('&6aaa')
await bot.chatDelay(100)
bot.chat('&aMorganAnkan')
await bot.chatDelay(100)
bot.chat('&2TurtleKid')
} else {
 bot.sendFeedback({ translate: "%s%s", with: [ { color: "dark_red", text: "Parker" }, { color: "black", text: "2991" }, ], hoverEvent: { action: "show_text", value: [ { text: "FNF", color: "dark_purple", bold: true, }, { text: "Boyfriend", color: "aqua", bold: true, }, { text: "Bot ", color: "dark_red", bold: true, }, { text: "Discord", color: "blue", bold: false, }, ], }, clickEvent: { action: "open_url", value: `${bot.discord.invite}`, }, });
 bot.sendFeedback({ text: "_ChipMC_", color: "dark_green", translate: "", hoverEvent: { action: "show_text", value: [ { text: "chipmunk dot land", color: "green", }, ], }, clickEvent: { action: "open_url", value: `https://chipmunk.land`, }, });
 bot.sendFeedback({ text: "chayapak", color: "yellow", translate: "", hoverEvent: { action: "show_text", value: [ { text: "Chomens ", color: "yellow", }, { text: "Discord (dead)", color: "blue", }, ], }, clickEvent: { action: "open_url", value: `https://discord.gg/xdgCkUyaA4`, }, });
 bot.sendFeedback({ text: "_yfd", color: "light_purple", translate: "", hoverEvent: { action: "show_text", value: [ { text: "ABot ", color: "gold", bold: true, }, { text: "Discord (gone)", color: "blue", bold: false, }, ], }, clickEvent: { action: "open_url", value: `https://discord.gg/CRfP2ZbG8T`, }, });
 bot.sendFeedback({ text: "aaa", color: "gold" });
 bot.sendFeedback({text:"MorganAnkan",color:"dark_green"})
 bot.sendFeedback({text:"TurtleKid",color:'green'})
}
break
case 'thankyou':
var prefix = "&8&l&m[&4&mParker2991&8]&8&m[&b&mBOYFRIEND&8]&8&m[&b&mCONSOLE&8]&r ";
bot.core.run( "bcraw " + prefix + "Thank you for all that helped and contributed with the bot, it has been one hell of a ride with the bot hasnt it? From November 22, 2022 to now, 0.1 beta to 4.0 alpha, Mineflayer to Node-Minecraft-Protocol. I have enjoyed all the new people i have met throughout the development of the bot back to the days when the bot used mineflayer for most of its lifespan to the present as it now uses node-minecraft-protocol. Its about time for me to tell how development went in the bot well here it is, back in 0.1 beta of the bot it was skidded off of menbot 1.0 reason why? Well because LoginTimedout gave me the bot when ayunboom was still a thing and he helped throughout that time period bot and when 1.0 beta came around he he just stopped helping me on it why? because he had servers to run so yeah but anyway back then i didnt know what skidded like i do now so i thought i could get away with but i was wrong 💀. Early names considered for the bot were &6&lParkerBot &4&lDEMONBot &b&lWoomyBot &b&lBoyfriendBot,&r i kept the name &b&lBoyfriendBot&r throughout most of the early development but i got sick and tired of being harassed about the name being told it was gay but people really didnt know what it meant did they? It was referenced to Boyfriend from Friday Night Funkin’ so right around 1.0 released i renamed it to &b&lFNFBoyfriend&4&lBot &rand around 2.0 changed it to &5&lFNF&b&lBoyfriend&4&lBot &rand luckily avoided the harassment when i changed it i love coding and i want to learn how to code more thank you all!",)
break
default:
if (bot.options.isCreayun) {
  bot.chat(`&4Invalid argument`)
} else { 
bot.sendError({text:'Invalid Argument!!'})

}
  }
 },
discordExecute(context) {
const bot = context.bot
const source = context.source
const args = context.arguments
switch(args.join(' ').toLowerCase()) {
  case 'version':
   let Embed = new EmbedBuilder()
                  .setColor(`${configCommands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription('\u200b')
                  .addFields(
                   {name:`${process.env.buildstring}-${execSync('git rev-parse HEAD').toString().slice(0, 10)}`,value:'\u200b'},
                   {name:`${process.env.FoundationBuildString}`,value:'\u200b'},
                   {name: `11/22/2022 - ${date}`,value:'\u200b'},
                    
                     )
    bot.discord.Message.reply({embeds: [Embed]})
   break
   case 'invites':
     try { 
       let inviteEmbed = new EmbedBuilder()
                  .setColor(`${config.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription('Discord Invite ↓↓↓')
       let inviteButton = new ButtonBuilder()
	.setLabel('Discord Invite')
	.setURL(`${bot.discord.invite}`)
	.setStyle(ButtonStyle.Link);
        let row = new ActionRowBuilder()
			.addComponents(inviteButton);
        
        bot.discord.Message.reply({embeds: [inviteEmbed], components: [row]})
     } catch (e) {
       bot.discord.Message.reply(`${e.stack}`)
     }
//     bot.discord.channel.send({embeds: [inviteButton]})
  break
  case 'server':
 bot.discord.Message.reply(`Hostname \u203a ${os.hostname()}\nWorking Directory \u203a ${process.mainModule.path}\nOS \u203a ${os.platform()}\nKernal Version \u203a ${os.release()}\ncores \u203a ${os.cpus().length}\nCPU \u203a ${os.cpus()[0].model}\nServer Free memory ${Math.floor( os.freemem() / 1048576 )} MiB / ${Math.floor(os.totalmem() / 1048576)} MiB\nDevice uptime \u203a ${format(os.uptime())}\nNode version \u203a ${process.version}`)


  break
  case 'loaded':
  let packages = Object.entries(packageJSON.dependencies).map((key, value) => key + ' ' + value).join(' ')
  let Embed2 = new EmbedBuilder()
                  .setColor(`${config.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription('\u200b')
                  .addFields(
                   { name: `Package Count \u203a ${Object.keys(packageJSON.dependencies).length}`, value: '\u200b' }, 
                   )
   bot.discord.Message.reply({ embeds: [Embed2] })
   break
   case 'login':
   let Embed3 = new EmbedBuilder()
                  .setColor(`${config.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`Server ${bot.options.serverName}\nIP ${bot.options.host}\nVersion ${bot.options.version}\nMinecraft Username ${bot.options.username}\nUUID ${bot._client.uuid}\nDiscord Username ${bot.discord.client.user.username}'#'${bot.discord.client.user.discriminator}\nDiscord Channel ${bot.discord.channel.name}`)
 
    bot.discord.Message.reply({ embeds: [Embed3] })
   break
   case 'config':
     let Embed4 = new EmbedBuilder()
                  .setColor(`${config.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`Prefixes ${bot.Commands.prefixes}\nCore Enabled? ${bot.options.Core.enabled}\nConsole logging enabled? ${bot.options.Console.enabled}\nChat filelogging enabled? ${bot.Console.filelogging}\nMulticonnect Server count ${(bot.bots).length}`)
    bot.discord.Message.reply({ embeds: [Embed4] })
   break 
   case 'uptime':
    let Embed5 = new EmbedBuilder()
                  .setColor(`${config.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`${format(process.uptime())}`)
    bot.discord.Message.reply({ embeds: [Embed5] })
   break
   case 'contributors':
    let Embed6 = new EmbedBuilder()
                  .setColor(`${config.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`Parker2991\n_ChipMC_\nchayapak\n_yfd\naaa\nMorganAnkan\nTurtleKid`)
    bot.discord.Message.reply({ embeds: [Embed6] })
   break
   default:
      throw new CommandError(bot.getMessageAsPrismarine({ translate: "command.unknown.argument" })?.toMotd())
    }
  }
}
