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
        aliases:['information'],
        trustLevel: 0,
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
   const source = context.source
    switch (args[0]) {
      case 'version':
        const discordJSVersion = packageJSON.dependencies["discord.js"];
        const MinecraftProtocolVersion = packageJSON.dependencies["minecraft-protocol"];
        const npmVersion = packageJSON.dependencies["npm"];
       
           context.source.sendFeedback ({ color: "gray", text: `${bot.buildstring}`})
                    
        context.source.sendFeedback ({ color: "gray", text: `${bot.fbs}`})

//BotEngine:Node-Minecraft-Protocol @${MinecraftProtocolVersion}
                    
        context.source.sendFeedback ({
               text:`BotEngine:Node-Minecraft-Protocol @${MinecraftProtocolVersion}`,
             color:'gray',
             translate:"",
             hoverEvent:{
                     action:"show_text",
                     value:[
                             {
                                     text:'Node-Minecraft-protocol',
                                     color:'gray',
                                     
                             }
                     ]
                     },clickEvent:{
                              action:"open_url",value:`https://github.com/PrismarineJS/node-minecraft-protocol`
             }
     })

                    
/*   text:bot.options.discord.invite,
             color:'gray',
             translate:"",
             hoverEvent:{
                     action:"show_text",
                     value:[
                             {
                                     text:'click here to join!',
                                     color:'gray',
                                     
                             }
                     ]
                     },clickEvent:{
                              action:"open_url",value:`${bot.options.discord.invite}`
             }
     })
*/

//Discord.js @${discordJSVersion}


                    
        context.source.sendFeedback ({ text:`Discord.js @${discordJSVersion}`,
             color:'gray',
             translate:"",
             hoverEvent:{
                     action:"show_text",
                     value:[
                             {
                                     text:'Discord.js',
                                     color:'gray',
                                     
                             }
                     ]
                     },clickEvent:{
                              action:"open_url",value:`https://github.com/discordjs/discord.js`
             }
                                     })
        context.source.sendFeedback ({ color: "gray", text: `Node js Version @${process.version}`},)
        context.source.sendFeedback({color: 'gray', text:`npm Version:@${npmVersion}`})
    
        

        break
      case 'discord':
    source.sendFeedback({
             text:bot.options.discord.invite,
             color:'gray',
             translate:"",
             hoverEvent:{
                     action:"show_text",
                     value:[
                             {
                                     text:'click here to join!',
                                     color:'gray',
                                     
                             }
                     ]
                     },clickEvent:{
                              action:"open_url",value:`${bot.options.discord.invite}`
             }
     })

        break
      case 'serverinfo':
        
        const os = require('os')
        context.source.sendFeedback({
         color:'gray',text:`Hostname: ${os.hostname()}`})
                    context.source.sendFeedback({
        color: "gray", text: `Working Directory: ${path.join(__dirname, '..')}`})
                context.source.sendFeedback( { color: "gray", text: `OS architecture: ${os.arch()}`})
               context.source.sendFeedback({ color: "gray", text: `OS platform: ${os.platform()}`}) 
                     context.source.sendFeedback({ color: "gray", text: `OS name: ${os.version()}`})
                    context.source.sendFeedback({ color: "gray", text: `CPU cores: ${os.cpus().length}`})
                    /*if (os.platform() === 'win32')
                            context.source.sendFeedback( { color: "gray", text: `CPU model: ${await getCpuModelName()}`})
                    return*/
                    if (os.platform() !== 'linux'){
                           source.sendFeedback({text:'cannot find the cpu model are you sure the bot is running on linux?', color:'red'})
                                                   }
                            else if (os.platform() === 'linux') {
                                    source.sendFeedback({ color: "gray", text: `CPU model: ${await getCpuModelName()}`})
                            }
                /*translate: '\n %s \n %s \n %s \n %s \n %s \n %s \n %s',//lazy fix
            with: [
            { color: "gray", text: `Hostname: ${os.hostname()}`},
               { color: "gray", text: `Working Directory: ${path.join(__dirname, '..')}`},
               { color: "gray", text: `OS architecture: ${os.arch()}`},
              { color: "gray", text: `OS platform: ${os.platform()}`},
               { color: "gray", text: `OS name: ${os.version()}`},
               { color: "gray", text: `CPU cores: ${os.cpus().length}`},
              { color: "gray", text: `CPU model: ${await getCpuModelName()}`},
            
              
              
          ]
        });*/
        break
      case 'logininfo':
      source.sendFeedback({text:`Bot Username: "${bot.username}"`, color:'gray'})
                    source.sendFeedback({text:`Bot uuid:"${bot.uuid}"`, color:'gray'})


                    
                 source.sendFeedback({text:`Minecraft Java Version: "${bot.version}"`, color:'gray'}) 


                    source.sendFeedback({text:`Server: "${bot.host}:${bot.port}"`, color:'gray'})



                    source.sendFeedback({text:`Main Prefix: "${bot.options.commands.MainPrefix}"`, color:"gray"})
source.sendFeedback({text:`Secondary Prefix: "${bot.options.commands.SecondaryPrefix}"`, color:"gray"})
source.sendFeedback({text:`Tertiary Prefix: "${bot.options.commands.TertiaryPrefix}"`, color:"gray"})
 source.sendFeedback({text:`Discord Prefix: "${bot.options.discord.commandPrefix}"`, color:'gray'})


                    source.sendFeedback({text:`Discord Username: "${bot.discord.client.user.username}#${bot.discord.client.user.discriminator}"`, color:'gray'})

source.sendFeedback({text:`Discord Channel: ${bot.discord.channel.name}`})
                    source.sendFeedback({ color: "gray", text: `ConsoleServer:"${bot.console.consoleServer}"`})
                    
                    const amonger = bot.bots.map(eachBot => eachBot.options.host + '\n')
                     const port = bot.bots.map(eachBot => eachBot.options.port)
                    
if (amonger.length === 0){
        const list = [];
        for (const host of bots){
                if (list.length !== 0) {
                        list.push(host.name)
                }
        }
        
}
                    source.sendFeedback('Servers in Config: ' + amonger.length)//real
 /*
                    const util = fs.readdir('./util')
                    source.sendFeedback({text:`Util Files loaded: ${util.length}`, color:'gray'})
  
                     const modules = fs.readdir('./modules')
                    source.sendFeedback({text:`Modules Files loaded: ${modules.length}`, color:'gray'})
   const commands = fs.readdir('./commands')   
           source.sendFeedback({text:`Commands Files loaded: ${commands.length}`, color:'gray'})
                        const CommandModules = fs.readdir('./CommandModules')
                                source.sendFeedback({text:`CommandModules Files loaded: ${CommandModules.length}`, color:'gray'})
                  const chat = fs.readdir('./chat')
                          source.sendFeedback({text:`Chat Files loaded: ${chat.length}`, color:'gray'})
                    /*
                     const  = '../'
         fs.readdir(, (err, files) => {
                             source.sendFeedback({text:` Files loaded: ${file.length}`, color:'gray'})
         });
         */
                    
                    /*context.source.sendFeedback({
          translate: '\n %s \n %s \n %s \n %s \n %s \n %s \n %s \n %s',
            with: [
            { color: "gray", text: `Bot Username: "${bot.username}"`},
              { color: "gray", text: `Bot uuid: "${bot.uuid}"`, clickEvent: {action:"copy_to_clipboard", value: `${context.bot.uuid}`}},
              { color: "gray", text: `Minecraft Java Version: "${bot.version}"`},
               { color: "gray", text: `Server: "${bot.host}:${bot.port}"`},
              { color: "gray", text: `Prefix: "${bot.options.commands.prefix}"`},
                    { color: "gray", text: `Discord Prefix: "${bot.options.discord.commandPrefix}"`},
              { color: "gray", text: `Discord Username: "${bot.discord.client.user.username}#${bot.discord.client.user.discriminator}"`},
               { color: "gray", text: `ConsoleServer:"${bot.console.consoleServer}"`}
          ]
        });
                    
                  */  
                    // clickevent: { action:"open_url", value: `${context.bot.discord.invite}`},

        break
            case 'test':
                   // bot.tellraw('test')
                     // const porta = bot.bots.map(eachBot => eachBot.options.port)
                   const amongerus = bot.bots.map(eachBot => eachBot.options.host + ':' + eachBot.options.port + '\n')
                   
                    

  source.sendFeedback(amongerus)
                   // source.sendFeedback(amonger)
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

        
       source.sendFeedback ({ color: "gray", text: `Bot Uptime: ${format(uptime)}`})
             
       

      
        break
        case 'memused':
          const os2 = require('os')
        source.sendFeedback({ color: "gray", text: `§aMem §aused §a${Math.floor(os2.freemem() / 1048576)} §aMiB §a/ §a${Math.floor(os2.totalmem() / 1048576)} MiB`},)
                    
                    /*
        context.source.sendFeedback({
            translate: '\n %s',
              with: [
              { color: "gray", text: `§aMem §aused §a${Math.floor(os2.freemem() / 1048576)} §aMiB §a/ §a${Math.floor(os2.totalmem() / 1048576)} MiB`},

            ]
          });
*/
          break
     
        case 'creators':
       source.sendFeedback({ color: 'gray', text: 'Thank you to all that helped!' })
               source.sendFeedback({
                       translate:'%s%s',
               with:[
                     { color: 'dark_red', text: 'Parker' },
           { color: 'black', text: '2991' },   
               ],
                        
             hoverEvent:{
                     action:"show_text",
                     value:[
                             {
                                     text:'FNF',
                                     color:'dark_purple',
                                     bold:true,
                             },{
                                     text:'Boyfriend',
                                     color:'aqua',
                                     bold:true,
                             },{
                                     text:'Bot ',
                                     color:'dark_red',
                             bold:true,
                             },{
                                     text:'Discord',
                                     color:'blue',
                                     bold:false,
                             }
                             
                     ]
                     },clickEvent:{
                              action:"open_url",value:`${bot.options.discord.invite}`
             }
               })     
                  source.sendFeedback( { 
                         text:'_ChipMC_',
             color:'dark_green',
             translate:"",
             hoverEvent:{
                     action:"show_text",
                     value:[
                             {
                                     text:'chipmunk dot land',
                                     color:'green',
                                     
                             }
                     ]
                     },clickEvent:{
                              action:"open_url",value:`https://chipmunk.land`
             }
     })
            source.sendFeedback( { 
                         text:'chayapak',
             color:'yellow',
             translate:"",
             hoverEvent:{
                     action:"show_text",
                     value:[
                             {
                                     text:'Chomens ',
                                     color:'yellow',
                                     
                             },{
                                     text:'Discord',
                                     color:'blue',
                                     
                             }
                     ]
                     },clickEvent:{
                              action:"open_url",value:`https://discord.gg/xdgCkUyaA4`
             }
     })
                    source.sendFeedback( { 
                         text:'_yfd',
             color:'light_purple',
             translate:"",
             hoverEvent:{
                     action:"show_text",
                     value:[
                             {
                                     text:'ABot ',
                                     color:'gold',
                                     bold:true,
                             },{
                             text:'Discord',
                                     color:'blue',
                                     bold:false,
                             }
                     ]
                     },clickEvent:{
                              action:"open_url",value:`https://discord.gg/CRfP2ZbG8T`
             }
     })
                    source.sendFeedback({text:"Poopcorn(Poopbob???)", color:'gold'})
                                      
                    /*
                     text:bot.options.discord.invite,
             color:'gray',
             translate:"",
             hoverEvent:{
                     action:"show_text",
                     value:[
                             {
                                     text:'click here to join!',
                                     color:'gray',
                                     
                             }
                     ]
                     },clickEvent:{
                              action:"open_url",value:`${bot.options.discord.invite}`
             }
     })
     */
                    /*
        context.source.sendFeedback({
            translate: '\n %s \n %s%s \n %s \n %s \n %s \n %s \n %s \n %s \n %s \n %s \n %s',
              with: [
                 { color: 'gray', text: 'Thank you to all that helped!' },
          { color: 'dark_red', text: 'Parker' },
           { color: 'black', text: '2991' },
             
               { color: 'dark_green', text: '_ChipMC_' },
             
               { color: 'yellow', text: 'chayapak' },
    
               { color: 'light_purple', text: '_yfd' },
             { color: 'yellow', text: 'ChomeNS Discord Server: https://discord.gg/xdgCkUyaA4' },
                { color: 'aqua', text: 'FNFBoyfriendBot Discord Server: https://discord.gg/GCKtG4erux' },
              { color: 'green', text: '(sadly chip doesnt have a discord server) _ChipMC_s Website https://chipmunk.land' },
                 { color: 'light_purple', text: '_yfds discord server: https://discord.gg/BKYKBxfDrs' },
                 { color: 'yellow', text: 'chayapaks discord username: chayapak' },
                 { color: 'green', text: '_ChipMC_s discord username: chipmunkmc' },
               ]
          });
*/
          break
      default:
        context.source.sendError([cmd, { text: 'Invalid action', color: 'dark_red', bold:false }])
        context.source.sendError([cmd, { text: 'the args for the info command is version, discord, serverinfo, logininfo, uptime, memused, creators', color: 'gray', bold:false }])
    }
  }
}

