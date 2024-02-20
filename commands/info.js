const CommandError = require('../CommandModules/command_error')

const path = require('path')
const fs = require('fs/promises')
const packageJSON = require("../package.json")
async function getCpuModelName () {
  const cpuInfo = await fs.readFile('/proc/cpuinfo')
  const lines = cpuInfo.toString().split('\n')
  // among us way of doing it
  const modelName = lines.find((line) => line.startsWith('model name')).split('\t: ')
  return modelName[1]
}
module.exports = {
  name: 'info',
   description:['check the bots info. the args are version, discord, serverinfo, logininfo, uptime, memused, creators'],
 async execute (context, client) { 
    const bot = context.bot
    const args = context.arguments
   // const client = context.client
   const cmd = {//test.js
 translate: '[%s] ',
      bold: false,
      color: 'white',
      with: [
        { color: 'gold', text: 'Info Cmd'},
              ]
    }


/*context.source.sendFeedback(`${buildstring}`, false)
    context.source.sendFeedback(`${foundationbuildstring}`)
      context.source.sendFeedback('BotEngine:Node-Minecraft-Protocol', false)
      */

    
    const buildstring = process.env['buildstring']
    const foundationbuildstring = process.env['FoundationBuildString']
   
    switch (args[0]) {
      case 'version':
        const discordJSVersion = packageJSON.dependencies["discord.js"];
        const MinecraftProtocolVersion = packageJSON.dependencies["minecraft-protocol"];
     
       
           context.source.sendFeedback ({ color: "green", text: `${buildstring}`})
        context.source.sendFeedback ({ color: "green", text: `${foundationbuildstring}`})
        context.source.sendFeedback ({ color: "green", text: `BotEngine:Node-Minecraft-Protocol @${MinecraftProtocolVersion}`})
        context.source.sendFeedback ({ color: "green", text: `Discord.js @${discordJSVersion}`})
        context.source.sendFeedback ({ color: "green", text: `Node js Version @${process.version}`},)
    
        

        break
      case 'discord':
        context.source.sendFeedback({
          clickevent: { action:"open_url", value: `${context.bot.discord.invite}`},
          translate: '%s',
            with: [
            { color: "green", text: `${context.bot.discord.invite}`},
          ]
        });

        break
      case 'serverinfo':
        
        const os = require('os')
        context.source.sendFeedback({
          translate: '\n %s \n %s \n %s \n %s \n %s \n %s \n %s',
            with: [
            { color: "green", text: `Hostname: ${os.hostname()}`},
               { color: "green", text: `Working Directory: ${path.join(__dirname, '..')}`},
               { color: "green", text: `OS architecture: ${os.arch()}`},
              { color: "green", text: `OS platform: ${os.platform()}`},
               { color: "green", text: `OS name: ${os.version()}`},
               { color: "green", text: `CPU cores: ${os.cpus().length}`},
              { color: "green", text: `CPU model: ${await getCpuModelName()}`},
            
              
              
          ]
        });
        break
      case 'logininfo':
        context.source.sendFeedback({
          translate: '\n %s \n %s \n %s \n %s \n %s',
            with: [
            { color: "green", text: `Bot Username: ${bot.username}`},
              { color: "green", text: `Bot uuid: ${context.bot.uuid}`, clickEvent: {action:"copy_to_clipboard", value: `${context.bot.uuid}`}},
              { color: "green", text: `Minecraft Java Version: ${context.bot.options.version}`},
               { color: "green", text: `Server: ${context.bot.options.host}`},
              { color: "green", text: `Port: ${context.bot.options.port}`},
              
          ]
        });// clickevent: { action:"open_url", value: `${context.bot.discord.invite}`},

        break
     
        case 'uptime':
         function format(seconds){
           function pad(s){
             return (s < 10 ? '0' : '') + s;
           }
           var hours = Math.floor(seconds / (60*60));
           var minutes = Math.floor(seconds % (60*60) / 60);
           var seconds = Math.floor(seconds % 60);

           return pad(`hours: ${hours}`) + ' ' + pad(`Mins: ${minutes}`) + ' ' + pad(`Seconds: ${seconds}`);
         }

         var uptime = process.uptime();

        
        context.source.sendFeedback ({ color: "green", text: `Bot Uptime: ${format(uptime)}`})
             
       

      
        break
        case 'memused':
          const os2 = require('os')
        context.source.sendFeedback({
            translate: '\n %s',
              with: [
              { color: "green", text: `§aMem §aused §a${Math.floor(os2.freemem() / 1048576)} §aMiB §a/ §a${Math.floor(os2.totalmem() / 1048576)} MiB`},

            ]
          });

          break
     

        case 'creators':
        
        context.source.sendFeedback({
            translate: '\n %s \n %s%s \n %s \n %s \n %s \n %s \n %s \n %s \n %s \n %s \n %s',
              with: [
                 { color: 'green', text: 'Thank you to all that helped!' },
          { color: 'dark_red', text: 'Parker' },
           { color: 'black', text: '2991' },
             
               { color: 'dark_green', text: '_ChipMC_' },
             
               { color: 'yellow', text: 'chayapak' },
    
               { color: 'light_purple', text: '_yfd' },
             { color: 'green', text: 'ChomeNS Discord Server: https://discord.gg/xdgCkUyaA4' },
                { color: 'green', text: 'FNFBoyfriendBot Discord Server: https://discord.gg/GCKtG4erux' },
              { color: 'green', text: '(sadly chip doesnt have a discord server) _ChipMC_s Website https://chipmunk.land' },
                 { color: 'green', text: '_yfds discord server: https://discord.gg/BKYKBxfDrs' },
                 { color: 'green', text: 'chayapaks discord username: chayapak' },
                 { color: 'green', text: '_ChipMC_s discord username: chipmunkmc' },
               ]
          });

          break
      default:
        context.source.sendError([cmd, { text: 'Invalid action', color: 'dark_red', bold:false }])
        context.source.sendError([cmd, { text: 'the args for the info command is version, discord, serverinfo, logininfo, uptime, memused, creators', color: 'green', bold:false }])
    }
  }
}

