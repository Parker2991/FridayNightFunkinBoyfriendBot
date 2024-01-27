const CommandError = require("../CommandModules/command_error");

const path = require("path");
const fs = require("fs");
const packageJSON = require("../package.json");

module.exports = {
  name: "info",
  description: [
    "check the bots info. the usages are version, discord, serverinfo, logininfo, uptime, creators",
  ],
  aliases: ["information"],
  trustLevel: 0,
  async execute(context) {
    const bot = context.bot;
    const args = context.arguments;
    // const client = context.client
    const cmd = {
      //test.js
      translate: "[%s] ",
      bold: false,
      color: "white",
      with: [{ color: "gold", text: "Info Cmd" }],
    };
  function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
    const buildstring = process.env["buildstring"];
    const foundationbuildstring = process.env["FoundationBuildString"];
    const source = context.source;
   const ChatMessage = require('prismarine-chat')(bot.options.version)
          switch (args[0]) {
      case "version":
        const discordJSVersion = packageJSON.dependencies["discord.js"];
        const MinecraftProtocolVersion =
          packageJSON.dependencies["minecraft-protocol"];
                    
if(bot.options.Core.CorelessMode){
   bot.chat(ChatMessage.fromNotch(`${process.env["buildstring"]}`).toMotd().replaceAll('§', '&'))
        await sleep(1000)
        
        bot.chat(`${process.env["FoundationBuildString"]}`)
        await sleep(1000)
        bot.chat('Bot Release: 11/22/2022')
await sleep(1000)
        bot.chat(`BotEngine: Node-Minecraft-Protocol @${MinecraftProtocolVersion}`)
        await sleep(1000)
        bot.chat(`Discord.js ${discordJSVersion}`)
        await sleep(1000) 
        bot.chat(`Node JS Version ${process.version}`)
}else{
        context.source.sendFeedback({
          color: "gray",
          text: `${process.env["buildstring"]}`,
        });

        context.source.sendFeedback({
          color: "gray",
          text: `${process.env["FoundationBuildString"]}`,
        });

        const date = new Date().toLocaleDateString("en-US", {
          timeZone: "America/CHICAGO",
        });

        context.source.sendFeedback({
          text: `Bot Release: 11/22/2022 `,
          color: "gray",
        });

        context.source.sendFeedback({
          text: `BotEngine:Node-Minecraft-Protocol @${MinecraftProtocolVersion}`,
          color: "gray",
          translate: "",
          hoverEvent: {
            action: "show_text",
            value: [
              {
                text: "Node-Minecraft-protocol",
                color: "gray",
              },
            ],
          },
          clickEvent: {
            action: "open_url",
            value: `https://github.com/PrismarineJS/node-minecraft-protocol`,
          },
        });

        context.source.sendFeedback({
          text: `Discord.js @${discordJSVersion}`,
          color: "gray",
          translate: "",
          hoverEvent: {
            action: "show_text",
            value: [
              {
                text: "Discord.js",
                color: "gray",
              },
            ],
          },
          clickEvent: {
            action: "open_url",
            value: `https://github.com/discordjs/discord.js`,
          },
        });
        context.source.sendFeedback({
          color: "gray",
          text: `Node js Version @${process.version}`,
        });
}
        // context.source.sendFeedback({color: 'gray', text:`npm Version:@${npmVersion}`})

        break;
      case "thankyou":
        var prefix =
          "&8&l&m[&4&mParker2991&8]&8&m[&b&mBOYFRIEND&8]&8&m[&b&mCONSOLE&8]&r ";
        bot.core.run(
          "bcraw " +
            prefix +
            "Thank you for all that helped and contributed with the bot, it has been one hell of a ride with the bot hasnt it? From November 22, 2022 to now, 0.1 beta to 4.0 alpha, Mineflayer to Node-Minecraft-Protocol. I have enjoyed all the new people i have met throughout the development of the bot back to the days when the bot used mineflayer for most of its lifespan to the present as it now uses node-minecraft-protocol. Its about time for me to tell how development went in the bot well here it is, back in 0.1 beta of the bot it was skidded off of menbot 1.0 reason why? Well because LoginTimedout gave me the bot when ayunboom was still a thing and he helped throughout that time period bot and when 1.0 beta came around he he just stopped helping me on it why? because he had servers to run so yeah but anyway back then i didnt know what skidded like i do now so i thought i could get away with but i was wrong 💀. Early names considered for the bot were &6&lParkerBot &4&lDEMONBot &b&lWoomyBot &b&lBoyfriendBot,&r i kept the name &b&lBoyfriendBot&r throughout most of the early development but i got sick and tired of being harassed about the name being told it was gay but people really didnt know what it meant did they? It was referenced to Boyfriend from Friday Night Funkin’ so right around 1.0 released i renamed it to &b&lFNFBoyfriend&4&lBot &rand around 2.0 changed it to &5&lFNF&b&lBoyfriend&4&lBot &rand luckily avoided the harassment when i changed it i love coding and i want to learn how to code more thank you all!",
        );
        break;
      case "discord":
       if(bot.options.Core.CorelessMode){
               bot.chat(`${bot.options.discord.invite}`)
       }else {
                          source.sendFeedback({
          text: bot.options.discord.invite,
          color: "gray",
          translate: "",
          hoverEvent: {
            action: "show_text",
            value: [
              {
                text: "click here to join!",
                color: "gray",
              },
            ],
          },
          clickEvent: {
            action: "open_url",
            value: `${bot.options.discord.invite}`,
          },
        });
       }
        break;
      case "serverinfo":
        const os = require("os");
       if(bot.options.Core.CorelessMode){
          bot.chat(`Hostname: ${os.hostname()}`)
               await sleep(1000)
               bot.chat(`Working Directory: ${path.join(__dirname, "..")}`)
               await sleep(1000)
               bot.chat(`OS architecture: ${os.arch()}`)
               await sleep(1000)
               bot.chat(`OS platform: ${os.platform()}`)
               await sleep(1000)
               bot.chat(`OS name ${os.version()}`)
               await sleep(1000)
               bot.chat(`Kernal Version: ${os.release()}`)
               await sleep(1000)
               bot.chat(`CPU cores ${os.cpus().length}`) 
               await sleep(1000)
               bot.chat(`CPU Model: ${os.cpus()[0].model}`)
               await sleep(1000)
               bot.chat(`Server Memory Usage ${Math.floor(
            os.freemem() / 1048576)} MiB / ${Math.floor(os.totalmem() / 1048576)} MiB`)
       }else {
               
       
                          context.source.sendFeedback({
          color: "gray",
          text: `Hostname: ${os.hostname()}`,
        });
        context.source.sendFeedback({
          color: "gray",
          text: `Working Directory: ${path.join(__dirname, "..")}`,
        });
        context.source.sendFeedback({
          color: "gray",
          text: `OS architecture: ${os.arch()}`,
        });
        context.source.sendFeedback({
          color: "gray",
          text: `OS platform: ${os.platform()}`,
        });
        context.source.sendFeedback({
          color: "gray",
          text: `OS name: ${os.version()}`,
        });
                      context.source.sendFeedback({
          color: "gray",
          text: `Kernal Version: ${os.release()}`,
        });
        context.source.sendFeedback({
          color: "gray",
          text: `CPU cores: ${os.cpus().length}`,
        });

        /*
                    if (os.platform() !== 'linux'){
                           source.sendFeedback({text:'cannot find the cpu model are you sure the bot is running on linux?', color:'red'})
                                                   }
                            else if (os.platform() === 'linux') {
                      */ source.sendFeedback({
          color: "gray",
          text: `CPU model: ${os.cpus()[0].model}`,
        });
 source.sendFeedback({
         translate:'%s%s%s',
                color: "gray",
          with: [{text:`Server Memory Usage `, color:'gray'},{text:`${Math.floor(
            os.freemem() / 1048576,
          )} `,color:'gray'},{text: `MiB / ${Math.floor(os.totalmem() / 1048576)} MiB`, color:'gray'}],
        });
       }

                          /*
`Server Memory Usage `, color:'gray'},{text:`${Math.floor(
            os.freemem() / 1048576,
          )} `,color:'gray'},{text: `MiB / ${Math.floor(os.totalmem() / 1048576)} MiB
                          */
        break;
      case "logininfo":
      if (bot.options.Core.CorelessMode){
             bot.chat(`Bot Username: ${bot.username}`) 
              await sleep(1000)
              bot.chat(`Bot uuid "${bot.uuid}"`)
              await sleep(1000)
              bot.chat(`Minecraft Java Version: ${bot.version}`)
              await sleep(1000)
              bot.chat(`Server: "${bot.options.host}:${bot.options.port}"`)
              await sleep(1000)
              bot.chat(`Prefixes: ${bot.options.commands.prefixes.join(', ')}`)
              await sleep(1000)
              bot.chat(`Discord Prefix: "${bot.options.discord.commandPrefix}"`)
              await sleep(1000)
              bot.chat(`Discord Username: "${bot.discord.client.user.username}#${bot.discord.client.user.discriminator}"`)
              await sleep(1000)
              bot.chat(`Discord Channel: ${bot.discord.channel.name}`)
              await sleep(1000) 
              bot.chat(`ConsoleServer:"${bot.console.consoleServer}"`)
              await sleep(1000)
              const amonger2 = bot.bots.map((eachBot) => eachBot.options.host + "\n");
        const port2 = bot.bots.map((eachBot) => eachBot.options.port);

        if (amonger2.length === 0) {
          const list = [];
          for (const host of bots) {
            if (list.length !== 0) {
              list.push(host.name);
            }
          }
        }
       bot.chat(`Servers in Config ${amonger2.length}`);



              /*
const amonger = bot.bots.map((eachBot) => eachBot.options.host + "\n");
        const port = bot.bots.map((eachBot) => eachBot.options.port);

        if (amonger.length === 0) {
          const list = [];
          for (const host of bots) {
            if (list.length !== 0) {
              list.push(host.name);
            }
          }
        }
        source.sendFeedback({ text: `Servers in Config ${amonger.length}` });

                      */
      }else{
                          source.sendFeedback({
          text: `Bot Username: "${bot.username}"`,
          color: "gray",
        });
        source.sendFeedback({ text: `Bot uuid:"${bot.uuid}"`, color: "gray" });

        source.sendFeedback({
          text: `Minecraft Java Version: "${bot.version}"`,
          color: "gray",
        });

        source.sendFeedback({
          text: `Server: "${bot.options.host}:${bot.options.port}"`,
          color: "gray",
        });

        source.sendFeedback({
          text: `Prefixes: ${bot.options.commands.prefixes.join(', ')}`,
          color: "gray",
        });
      
        source.sendFeedback({
          text: `Discord Prefix: "${bot.options.discord.commandPrefix}"`,
          color: "gray",
        });

        source.sendFeedback({
          text: `Discord Username: "${bot.discord.client.user.username}#${bot.discord.client.user.discriminator}"`,
          color: "gray",
        });

        source.sendFeedback({
          text: `Discord Channel: ${bot.discord.channel.name}`,
        });
        source.sendFeedback({
          color: "gray",
          text: `ConsoleServer:"${bot.console.consoleServer}"`,
        });

        const amonger = bot.bots.map((eachBot) => eachBot.options.host + "\n");
        const port = bot.bots.map((eachBot) => eachBot.options.port);

        if (amonger.length === 0) {
          const list = [];
          for (const host of bots) {
            if (list.length !== 0) {
              list.push(host.name);
            }
          }
        }
        source.sendFeedback({ text: `Servers in Config ${amonger.length}` });

      }
        break;
            case "loaded":
                          
                       const util = "./util";
                          const modules = "./modules";
                        const commands = "./commands";
                          const CommandModules = "./CommandModules";

                          const chat = "./chat";
                          if (bot.options.Core.CorelessMode){
fs.readdir(util, (err, files) => {
  bot.chat(`Util files loaded: ${files.length}`);
});
                                  await sleep(1000)
                             fs.readdir(modules, (err, files) => {
  bot.chat(`Modules files loaded: ${files.length}`);
});     
                        await sleep(1000)
                                   fs.readdir(commands, (err, files) => {
bot.chat(`Command files loaded: ${files.length}`);
});
                  await sleep(1000)
                                  fs.readdir(CommandModules, (err, files) => {
 bot.chat(`Command Module files loaded: ${files.length}`);
});
                                  await sleep(1000)
                                    fs.readdir(chat, (err, files) => {
  bot.chat(`Chat files loaded: ${files.length}`);
});
                          }else {
                    fs.readdir(util, (err, files) => {
  source.sendFeedback({text:`Util files loaded: ${files.length}`});
});
                     
                    fs.readdir(modules, (err, files) => {
  source.sendFeedback({text:`Modules files loaded: ${files.length}`});
});
                    
                    fs.readdir(commands, (err, files) => {
  source.sendFeedback({text:`Command files loaded: ${files.length}`});
});
                      
                    fs.readdir(CommandModules, (err, files) => {
  source.sendFeedback({text:`Command Module files loaded: ${files.length}`});
});
                     
                    fs.readdir(chat, (err, files) => {
  source.sendFeedback({text:`Chat files loaded: ${files.length}`});
});
                          }
                    break;
      case "test":
        // bot.tellraw('test')
        // const porta = bot.bots.map(eachBot => eachBot.options.port)
        const amongerus = bot.bots.map(
          (eachBot) => eachBot.options.host + ":" + eachBot.options.port + "\n",
        );
        /*    
              if (amonger.length === 0){
        const list = [];
        for (const host of bots){
                if (list.length !== 0) {
                        list.push({text:`Server Count: ${host.name}`})
                }
        }
        
}      */
        //source.sendFeedback()
        source.sendFeedback(amongerus);
        // source.sendFeedback(amonger)
        break;
      case "uptime":
        function format(seconds) {
          function pad(s) {
            return (s < 10 ? "0" : "") + s;
          }
          var hours = Math.floor(seconds / (60 * 60));
          var minutes = Math.floor((seconds % (60 * 60)) / 60);
          var seconds = Math.floor(seconds % 60);

          return (
            pad(`hours: ${hours}`) +
            " " +
            pad(`Mins: ${minutes}`) +
            " " +
            pad(`Seconds: ${seconds}`)
          );
        }

        var uptime = process.uptime();
if(bot.options.Core.CorelessMode){
       bot.chat(`Bot Uptime: ${format(uptime)}`) 
} else {
                          
        source.sendFeedback({
          color: "gray",
          text: `Bot Uptime: ${format(uptime)}`,
        });
}
        break;
      
      case "creators":
        if(!bot.options.Core.CorelessMode){
           bot.chat('Thank you all that helped!')
                await sleep(1000)
                bot.chat(`&4Parker&02991`)
                await sleep(1000)
                bot.chat('&2_ChipMC_')
                await sleep(1000)
                bot.chat('&echayapak')
                await sleep(1000)
                bot.chat('&d_yfd')
                await sleep(1000)
                bot.chat('&6Poopcorn (Poopbob???)')
        }else{
                          source.sendFeedback({
          color: "gray",
          text: "Thank you to all that helped!",
        });
        source.sendFeedback({
          translate: "%s%s",
          with: [
            { color: "dark_red", text: "Parker" },
            { color: "black", text: "2991" },
          ],

          hoverEvent: {
            action: "show_text",
            value: [
              {
                text: "FNF",
                color: "dark_purple",
                bold: true,
              },
              {
                text: "Boyfriend",
                color: "aqua",
                bold: true,
              },
              {
                text: "Bot ",
                color: "dark_red",
                bold: true,
              },
              {
                text: "Discord",
                color: "blue",
                bold: false,
              },
            ],
          },
          clickEvent: {
            action: "open_url",
            value: `${bot.options.discord.invite}`,
          },
        });
        source.sendFeedback({
          text: "_ChipMC_",
          color: "dark_green",
          translate: "",
          hoverEvent: {
            action: "show_text",
            value: [
              {
                text: "chipmunk dot land",
                color: "green",
              },
            ],
          },
          clickEvent: {
            action: "open_url",
            value: `https://chipmunk.land`,
          },
        });
        source.sendFeedback({
          text: "chayapak",
          color: "yellow",
          translate: "",
          hoverEvent: {
            action: "show_text",
            value: [
              {
                text: "Chomens ",
                color: "yellow",
              },
              {
                text: "Discord",
                color: "blue",
              },
            ],
          },
          clickEvent: {
            action: "open_url",
            value: `https://discord.gg/xdgCkUyaA4`,
          },
        });
        source.sendFeedback({
          text: "_yfd",
          color: "light_purple",
          translate: "",
          hoverEvent: {
            action: "show_text",
            value: [
              {
                text: "ABot ",
                color: "gold",
                bold: true,
              },
              {
                text: "Discord",
                color: "blue",
                bold: false,
              },
            ],
          },
          clickEvent: {
            action: "open_url",
            value: `https://discord.gg/CRfP2ZbG8T`,
          },
        });
        source.sendFeedback({ text: "Poopcorn(Poopbob???)", color: "gold" });
        }
       
        break;
      default:
       if (bot.options.Core.CorelessMode){
               bot.chat('&4Invalid action')
               await sleep(500) 
               bot.chat('the usages are version, discord, serverinfo, logininfo, uptime, creators')
       }else{
                          context.source.sendError([
          cmd,
          { text: "Invalid action", color: "dark_red", bold: false },
        ]);
        context.source.sendError([
          cmd,
          {
            text: "the usages are version, discord, serverinfo, logininfo, uptime, creators",
            color: "gray",
            bold: false,
          },
        ]);
       }
    }
  },
};
