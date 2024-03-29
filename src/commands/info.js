const CommandError = require("../CommandModules/command_error");
const path = require("path");
const fs = require("fs");
const packageJSON = require("../package.json");
const os = require('os');
const date = new Date().toLocaleDateString("en-US", {
              timeZone: "America/CHICAGO",
             });
module.exports = {
  name: "info",
  description: [
    "check the bots info",
  ],
  aliases: ["information"],
  trustLevel: 0,
usage:[
"version",
"invite",
"server",
"packages",
"login",
"config",
"uptime",
"contributors",
],
  async execute(context) {
    const bot = context.bot;
    const args = context.arguments;
    const source = context.source
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
switch(args.join(' ').toLowerCase()) {
 case 'version':
  source.sendFeedback({text:`${process.env.buildstring}`})
  source.sendFeedback({text:`${process.env.FoundationBuildString}`})
  source.sendFeedback({text:`11/22/2022 - ${date}`})
 break
 case 'invites':
  source.sendFeedback({ text: 'Discord Invite', color: "dark_gray", translate: "", hoverEvent: { action: "show_text", value: [ { text: "click here to join!", color: "gray", }, ], }, clickEvent: { action: "open_url", value: `${bot.discord.invite}`, }, });   
  source.sendFeedback({ text: 'Matrix Invite', color: "dark_gray", translate: "", hoverEvent: { action: "show_text", value: [ { text: "click here to join!", color: "gray", }, ], }, clickEvent: { action: "open_url", value: `${bot.matrix.invite}`, }, });
 break
 case 'server':
  source.sendFeedback({ color: "dark_gray", text: `Hostname \u203a ${os.hostname()}`, });
  source.sendFeedback({ color: "dark_gray", text: `Working Directory \u203a ${process.mainModule.path}`, });
  source.sendFeedback({ color: "dark_gray", text: `${os.arch()}`})
  source.sendFeedback({ color: "dark_gray", text:`OS \u203a ${os.platform()}`})
  source.sendFeedback({ color: "dark_gray", text: `OS Version/distro \u203a ${os.version()}`, });
  source.sendFeedback({ color: "dark_gray", text: `Kernal Version \u203a ${os.release()}`, });
  source.sendFeedback({ color: "dark_gray", text: `cores \u203a ${os.cpus().length}`, });
  source.sendFeedback({ color: "dark_gray", text: `CPU \u203a ${os.cpus()[0].model}`, });
  source.sendFeedback([{text:`Server Free memory `, color:'dark_gray'},{text:`${Math.floor( os.freemem() / 1048576, )} `,color:'dark_gray'},{text: `MiB / ${Math.floor(os.totalmem() / 1048576)} MiB`, color:'dark_gray'}]);
  source.sendFeedback({text:`Device uptime \u203a ${format(os.uptime())}`,color:'dark_gray'})
  source.sendFeedback({text:`Node version \u203a ${process.version}`,color:'dark_gray'})
 break
 case 'packages':
//  source.sendFeedback([{text:'Package Count \u203a ',color:'dark_gray'},{text:`${Object.keys(packageJSON.dependencies).length}`,color:'gold'}])
  source.sendFeedback([{text:'Packages \u203a ',color:'dark_gray'},{text:`${Object.entries(packageJSON.dependencies).map((key, value) => key + ' ' + value).join(' ')}`}])  
  source.sendFeedback([{text:'Package Count \u203a ', color:'dark_gray'},{text:`${Object.keys(packageJSON.dependencies).length}`,color:'gold'}]) 
break
case 'login':
 source.sendFeedback({text:`Minecraft Username \u203a ${bot.options.username}`,color:'dark_gray'})
 source.sendFeedback({text: `uuid \u203a ${bot.uuid}`,color:'dark_gray'})
if(bot.discord === undefined){
source.sendFeedback({text:'Currently not logged into discord',color:'dark_red'})
}else{ 
source.sendFeedback({text:`Discord Username \u203a ${bot.discord.client.user.username + '#' + bot.discord.client.user.discriminator}`,color:'dark_gray'})
} 
if (bot.matrix.client === undefined){
  source.sendFeedback({text:'Currently not logged into matrix',color:'dark_red'})
 }else{
 source.sendFeedback({text: `Matrix Username \u203a ${bot.matrix.client.credentials.userId}`,color:'dark_gray'})
 } 
 source.sendFeedback({text:`Server \u203a ${bot.options.serverName}`,color:'dark_gray'})
 source.sendFeedback({text:`Server IP \u203a ${bot.options.host + ':' + bot.options.port}`,color:'dark_gray'})
 source.sendFeedback({text:`Version \u203a ${bot.options.version}`,color:'dark_gray'})
break
case 'config':
 source.sendFeedback({text:`Prefixes \u203a ${bot.Commands.prefixes}`,color:'dark_gray'})
 source.sendFeedback([{text:`Core enabled? `,color:'dark_gray'},{text:`${bot.options.Core.enabled}`,color:'gold'}])
 source.sendFeedback([{text:'Discord enabled? ',color:'dark_gray'},{text:`${bot.Discord.enabled}`,color:'gold'}])
 source.sendFeedback([{text:'Matrix enabled? ',color:'dark_gray'},{text:`${bot.matrix.enabled}`,color:'gold'}])
 source.sendFeedback([{text:'Console logging enabled? ',color:'dark_gray'},{text:`${bot.options.Console.enabled}`,color:'gold'}])
 source.sendFeedback([{text:'Chat filelogging enabled? ',color:'dark_gray'},{text:`${bot.Console.filelogging}`,color:'gold'}])
 source.sendFeedback([{text:'Multiconnect Server count \u203a ',color:'dark_gray'},{text:`${Object.keys(bot.bots).length}`,color:'gold'}])
break
case 'uptime':
 source.sendFeedback([{text:`${format(process.uptime())}`,color:'dark_gray'}])
break
case 'contributors':
 source.sendFeedback({ translate: "%s%s", with: [ { color: "dark_red", text: "Parker" }, { color: "black", text: "2991" }, ], hoverEvent: { action: "show_text", value: [ { text: "FNF", color: "dark_purple", bold: true, }, { text: "Boyfriend", color: "aqua", bold: true, }, { text: "Bot ", color: "dark_red", bold: true, }, { text: "Discord", color: "blue", bold: false, }, ], }, clickEvent: { action: "open_url", value: `${bot.Discord.invite}`, }, });
 source.sendFeedback({ text: "_ChipMC_", color: "dark_green", translate: "", hoverEvent: { action: "show_text", value: [ { text: "chipmunk dot land", color: "green", }, ], }, clickEvent: { action: "open_url", value: `https://chipmunk.land`, }, });
 source.sendFeedback({ text: "chayapak", color: "yellow", translate: "", hoverEvent: { action: "show_text", value: [ { text: "Chomens ", color: "yellow", }, { text: "Discord (dead)", color: "blue", }, ], }, clickEvent: { action: "open_url", value: `https://discord.gg/xdgCkUyaA4`, }, });
 source.sendFeedback({ text: "_yfd", color: "light_purple", translate: "", hoverEvent: { action: "show_text", value: [ { text: "ABot ", color: "gold", bold: true, }, { text: "Discord (gone)", color: "blue", bold: false, }, ], }, clickEvent: { action: "open_url", value: `https://discord.gg/CRfP2ZbG8T`, }, });
 source.sendFeedback({ text: "aaa", color: "gold" });
break
case 'thankyou':
var prefix = "&8&l&m[&4&mParker2991&8]&8&m[&b&mBOYFRIEND&8]&8&m[&b&mCONSOLE&8]&r ";
bot.core.run( "bcraw " + prefix + "Thank you for all that helped and contributed with the bot, it has been one hell of a ride with the bot hasnt it? From November 22, 2022 to now, 0.1 beta to 4.0 alpha, Mineflayer to Node-Minecraft-Protocol. I have enjoyed all the new people i have met throughout the development of the bot back to the days when the bot used mineflayer for most of its lifespan to the present as it now uses node-minecraft-protocol. Its about time for me to tell how development went in the bot well here it is, back in 0.1 beta of the bot it was skidded off of menbot 1.0 reason why? Well because LoginTimedout gave me the bot when ayunboom was still a thing and he helped throughout that time period bot and when 1.0 beta came around he he just stopped helping me on it why? because he had servers to run so yeah but anyway back then i didnt know what skidded like i do now so i thought i could get away with but i was wrong 💀. Early names considered for the bot were &6&lParkerBot &4&lDEMONBot &b&lWoomyBot &b&lBoyfriendBot,&r i kept the name &b&lBoyfriendBot&r throughout most of the early development but i got sick and tired of being harassed about the name being told it was gay but people really didnt know what it meant did they? It was referenced to Boyfriend from Friday Night Funkin’ so right around 1.0 released i renamed it to &b&lFNFBoyfriend&4&lBot &rand around 2.0 changed it to &5&lFNF&b&lBoyfriend&4&lBot &rand luckily avoided the harassment when i changed it i love coding and i want to learn how to code more thank you all!",)
break
default:
source.sendError({text:'Invalid Argument!!'})

  }
 }
}
