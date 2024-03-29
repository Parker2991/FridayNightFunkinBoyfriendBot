const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'help',
  aliases:['heko', 'cmd', '?', 'commands', 'cmds' ],
  description:['shows the command list or the usage of a command'],
        trustLevel: 0,
usage:'[COMMAND]',
 async execute (context) {
   const bot = context.bot
    const commandList = []
  const source = context.source
  const args = context.arguments
const {EmbedBuilder } = require('discord.js')
//  const amogus = bot.prefix
       const ChatMessage = require('prismarine-chat')(bot.options.version)
const CommandManager = bot.commandManager
        const cmd = {
 translate: '[%s] ',
      bold: false,
      color: 'white',
      with: [
        { color: 'blue', text: 'help cmd'},
              ]
    }
      const category = {
 translate: ' (%s%s%s%s%s) ',
      bold: false,
      color: 'white',
      with: [
        { color: `${bot.helpTheme.pub_lickColor}`, text: 'Public'},
           { color: 'white', text: ' | '},
        { color: `${bot.helpTheme.t_rustedColor}`, text: 'Trusted'},
           { color: 'white', text: ' | '},   
        { color: `${bot.helpTheme.own_herColor}`, text: 'Owner'},
              ]
    }
   
      if (args[0]) {
        let valid
        for (const commands in bot.commandManager.commandlist) { // i broke a key woops
          const command = bot.commandManager.commandlist[commands]
          
          if (args[0].toLowerCase() === command.name)


         
           {
                    function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}//bot.getMessageAsPrismarine([cmd, 'Commands (', length, ') ', category, ...pub_lick, t_rust, own_her, cons_ole])?.toAnsi()
                  
            valid = true
            if(source.sources.console){
                    bot.console.info(bot.getMessageAsPrismarine([cmd, {text:`${bot.options.commands.prefixes[0]}${command.name} `,color:'#00ffff'},{text:`${command.aliases} › ${command.description}`,color:'dark_purple'}])?.toAnsi())
     
bot.console.info(bot.getMessageAsPrismarine([cmd,{text:`Trust Level: `,color:'#00ffff'},{text:`${command.trustLevel}`,color:'dark_purple'}])?.toAnsi())
                   
                    bot.console.info(bot.getMessageAsPrismarine([cmd,{text:`Usage: `,color:'#00ffff'},{text:`${bot.options.commands.prefixes[0]}${command.name} `,color:'dark_purple'},{text:`${command.usage}`,color:'dark_red'}])?.toAnsi())
            }else if(!bot.options.Core.enabled && !source.sources.console){
               bot.chat(ChatMessage.fromNotch([cmd, `Description: ${command.description}`]).toMotd().replaceAll('§', '&'))
            await sleep(1000)
                    bot.chat(ChatMessage.fromNotch([cmd, {text:`Trust Level: ${command.trustLevel}`}]).toMotd().replaceAll('§', '&'))//[cmd, {text:`Trust Level: ${command.trustLevel}`}]
                    await sleep(1000)
                    bot.chat(ChatMessage.fromNotch([cmd, `aliases: ${command.aliases}`]).toMotd().replaceAll('§', '&'))
            }else{

source.sendFeedback([cmd, {text:`${bot.options.commands.prefixes[0]}${command.name} `,color:'#00ffff'},{text:`(${command.aliases}) › ${command.description}`,color:'dark_purple'}])        
source.sendFeedback([cmd,{text:`Trust Level: `,color:'#00ffff'},{text:`${command.trustLevel}`,color:'dark_purple'}])
source.sendFeedback([cmd,{text:`Usage: `,color:'#00ffff'},{text:`${bot.options.commands.prefixes[0]}${command.name} `,color:'dark_purple'},{text:`${command.usage}`,color:'dark_red'}])  
  
break
            }
            } else valid = false
        }
      
             
        if (valid) {
          
        } else {
           const args = context.arguments
        
        
                source.sendFeedback([cmd, {translate: `Unknown command %s. Type "${bot.options.commands.prefixes[0]}help" for help or click on this for the command`,color:'red', with: [args[0]], clickEvent: bot.options.Core.customName ? { action: 'suggest_command', value:  `${bot.options.commands.prefixes[0]}help` } : undefined}])
         
           
        }
  } else {
        let pub_lick = []
        let t_rust = []
        let own_her = []
        let cons_ole = []
      for (const commands in CommandManager.commandlist) {
          const command = CommandManager.commandlist[commands]
         
          
            if(command.trustLevel === 3) {
              cons_ole.push(
                {
                  text: command.name + ' ',
                  color: 'blue',
                        
                        
                      translate:"",
                        hoverEvent:{
                                action:"show_text",
                                value:[
                                        {
                                                text:`Command:${command.name}\n`,
                                                color:'white'
                                        },{
                                                text:"HashOnly:",
                                        color:'white'},
                                        {text:`${command.hashOnly}\n`,color:'red'},
                                        {text:'consoleOnly:',color:'white'},
                                        {text:`${command.consoleOnly && !context.console}\n`, color:'red'},
                                        {text:`${command.description}\n`, color:'white'},
                                        {text:`Command Aliases: ${command.aliases}\n`,color:'white'},
                                        {text:'click on me to use me :)'},
                                ]
                        }
                }
              )// copypasted from below, and removed stuff that wont work in the console
                    
            } 
          
            else 
                   
                    if (command.trustLevel === 2) {
                            if(!bot.options.Core.enabled && !source.sources.console && !source.sources.discord){
       own_her.push(`&4${command.name + ' '}`)                             
                            }else{
                                    
                            
                  own_her.push(
                {
                  text: command.name + ' ',
                  color: `${bot.helpTheme.own_herColor}`,
                        
                        
                      translate:"",
                        hoverEvent:{
                                action:"show_text",
                                value:[
                                        {
                                                text:`Command:${command.name}\n`,
                                                color:'white'
                                        },                        {text:`Trust Level: `,color:'white'},
                                        {text:`${command.trustLevel}\n`,color:'dark_red'},                 
 {text:`${command.description}\n`, color:'white'},
                                                               {text:`Command Aliases: ${command.aliases}\n`,color:'white'},
                                        {text:'click on me to use me :)'},
                                ]
                        },clickEvent:{
                                action:"run_command",value:`${bot.Commands.prefixes[0]}${command.name}`
                        },
                       
         
                }
              )
            }   
                    }
      
            else if (command.trustLevel === 1){
                    if(!bot.options.Core.enabled && !source.sources.console && !source.sources.discord){
                            t_rust.push(`&5${command.name + ' '}`)
                    }else {
              t_rust.push(
                {
                  text: command.name + ' ',
                  color:`${bot.helpTheme.t_rustedColor}`,
                        
                        
                      translate:"",
                        hoverEvent:{
                                action:"show_text",
                                value:[
                                        {
                                                text:`Command:${command.name}\n`,
                                                color:'white'
                                        },                                        {text:`Trust Level: `,color:'white'},
                                        {text:`${command.trustLevel}\n`,color:'red'},                  {text:`${command.description}\n`, color:'white'},
                                                               {text:`Command Aliases: ${command.aliases}\n`,color:'white'},
                                        {text:'click on me to use me :)'},
                                ]
                        },clickEvent:{
                                action:"run_command",value:`${bot.Commands.prefixes[0]}${command.name}`
                        },
                                    
                }
              )
                    }
           
            }   
         else if (command.trustLevel === 0){
                 if (!bot.options.Core.enabled && !source.sources.console && !source.sources.discord){
                         pub_lick.push(`&b${command.name + ' '}`)
                 } else{
                 pub_lick.push(
              {
                text: command.name + ' ',
                color: `${bot.helpTheme.pub_lickColor}`,

               translate:"",
                      hoverEvent:{
                              action:"show_text", // Welcome to Kaboom!\n > Free OP - Anarchy - Creative (frfr)
                              value:[
                                      {
                                              text:`Command:${command.name}\n`,
                                              color:'white'
                                      },{
                                              text:`Trust Level: `,color:'white'},
                                        {text:`${command.trustLevel}\n`,color:'red'},                 
                                      {text:`${command.description}\n`, color:'white'},
                                       {text:`Command Aliases: ${command.aliases}\n`,color:'white'},
                                      {text:'click on me to use me :)'},
                              ]
                      },clickEvent:{
                              action:"suggest_command",value:`${bot.Commands.prefixes[0]}${command.name}`}
               
                        })
                
              
          }
        }
      }
          function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)) 
}
        const isConsole = context.source.player ? false : true

        if(source.sources.console && !source.sources.discord) {
       
bot.console.info(bot.getMessageAsPrismarine([cmd, 'Commands (', CommandManager.commandlist.length, ') ', category, ...pub_lick, t_rust, own_her, cons_ole])?.toAnsi(), false)//[cmd, 'Commands (', length, ') ', category, ...pub_lick, t_rust, own_her, cons_ole]
        } else if(source.sources.discord&& !source.sources.console){

const Embed = new EmbedBuilder()
          .setColor('#00FFFF')
          .setTitle('help Command')
  .setDescription(bot.getMessageAsPrismarine(['Commands (',JSON.stringify(CommandManager.commandlist.filter(c => c.trustLevel != 3).length),')'])?.toString())
.addFields(
		{ name: 'Public Commands', value:`${bot.getMessageAsPrismarine(pub_lick)?.toString()}`},
		{ name: 'Trusted Commands', value: `${bot.getMessageAsPrismarine(t_rust)?.toString()}`, inline: true },
		{ name: 'Owner Commands', value: `${bot.getMessageAsPrismarine(own_her)?.toString()}`, inline: true },
	)
    bot?.discord?.Message?.reply({ embeds: [Embed] })

     }else if (!bot.options.Core.enabled) {
                
                 const length = context.bot.commandManager.commandlist.filter(c => c.trustLevel != 3).length

        
                bot.chat('Commands (' + JSON.stringify(length) + ') (&bPublic &f| &5Trusted &f| &4Owner&f)') 
                await sleep(3000)
                bot.chat(`${pub_lick}`)
                await sleep(3000)
                bot.chat(`${t_rust}`)
                 await sleep(3000)
                bot.chat(`${own_her}`)


        }else {
          const length = context.bot.commandManager.commandlist.filter(c => c.trustLevel != 3).length
         source.sendFeedback([cmd, 'Commands (', JSON.stringify(CommandManager.commandlist.filter(c => c.trustLevel != 3).length), ') ', category, ...pub_lick, t_rust ,own_her], false)
        }
        
  }
}
 }
