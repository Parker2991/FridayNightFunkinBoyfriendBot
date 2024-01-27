const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'help',
  aliases:['heko', 'cmd', '?', 'commands', 'cmds' ],
  description:['shows the command list'],
        trustLevel: 0,
 async execute (context) {
   const bot = context.bot
    const commandList = []
  const source = context.source
  const args = context.arguments
//  const amogus = bot.prefix
       const ChatMessage = require('prismarine-chat')(bot.options.version)
         const cmd = {
 translate: '[%s] ',
      bold: false,
      color: 'white',
      with: [
        { color: 'blue', text: 'Help Cmd'},
              ]
    }
      const category = {
 translate: ' (%s%s%s%s%s) ',
      bold: false,
      color: 'white',
      with: [
        { color: '#00FFFF', text: 'Public'},
           { color: 'white', text: ' | '},
        { color: 'dark_purple', text: 'Trusted'},
           { color: 'white', text: ' | '},   
        { color: 'dark_red', text: 'Owner'},
              ]
    }
   
      if (args[0]) {
        let valid
        for (const commands in bot.commandManager.commandlist) { // i broke a key woops
          const command = bot.commandManager.commandlist[commands]
          
          if (args[0].toLowerCase() === command.name )
         //  if (args[0].toLowerCase() === command.aliases)
           {//text:`Trust Level: `,color:'white'},
                                        //{text:`${command.trustLevel}\n`,color:'red'},                 
                    function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}//bot.getMessageAsPrismarine([cmd, 'Commands (', length, ') ', category, ...pub_lick, t_rust, own_her, cons_ole])?.toAnsi()
                  
            valid = true
            if(source.sources.console){
                    bot.console.info(bot.getMessageAsPrismarine([cmd, `Description: ${command.description}`])?.toAnsi())
     
                  bot.console.info(bot.getMessageAsPrismarine([cmd, {text:`Trust Level: ${command.trustLevel}`}])?.toAnsi())//[cmd, {text:`Trust Level: ${command.trustLevel}`}]
                   
                    bot.console.info(bot.getMessageAsPrismarine([cmd, `aliases: ${command.aliases}`])?.toAnsi())
            }else if(!bot.options.Core.CorelessMode && !source.sources.console){
               bot.chat(ChatMessage.fromNotch([cmd, `Description: ${command.description}`]).toMotd().replaceAll('§', '&'))
            await sleep(1000)
                    bot.chat(ChatMessage.fromNotch([cmd, {text:`Trust Level: ${command.trustLevel}`}]).toMotd().replaceAll('§', '&'))//[cmd, {text:`Trust Level: ${command.trustLevel}`}]
                    await sleep(1000)
                    bot.chat(ChatMessage.fromNotch([cmd, `aliases: ${command.aliases}`]).toMotd().replaceAll('§', '&'))
            }else{
                   source.sendFeedback([cmd, `Description: ${command.description}`])
                
                   source.sendFeedback([cmd, {text:`Trust Level: ${command.trustLevel}`}])
                   
                   source.sendFeedback([cmd, `aliases: ${command.aliases}`])
            break
            }
            } else valid = false
        }
      
              //source is defined btw
        //source.sendFeedback([cmd, 'This command is ' + valid + ' to this for loop'])
        if (valid) {
          
        } else {
           const args = context.arguments
        
        
                source.sendFeedback([cmd, {translate: `Unknown command %s. Type "${bot.options.commands.prefixes[0]}help" for help or click on this for the command`,color:'red', with: [args[0]], clickEvent: bot.options.Core.customName ? { action: 'suggest_command', value:  `${bot.options.commands.prefixes[0]}help` } : undefined}])
         
           //  bot.tellraw([cmd, {translate: `Unknown command %s. Type "${bot.options.commands.prefix}help" for help or click on this for the command`, with: [args[0]], clickEvent: bot.options.Core.customName ? { action: 'suggest_command', value:  `${bot.options.commands.prefix}help`, color:'red' } : undefined}])  
        }//i will add the descriptions reading as tests and action add the descriptions for the commands after
         const length = context.bot.commandManager.commandlist.length // ok
        //i guess i did delete smh woops

    //context.source.sendFeedback([cmd, 'Commands (', length, ') ', category, ...commandList], false)
  } else {
        let pub_lick = []
        let t_rust = []
        let own_her = []
        let cons_ole = []
      for (const commands in bot.commandManager.commandlist) {
          const command = bot.commandManager.commandlist[commands]
         
            // if (command.consoleOnly == true) return console.log(command);
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
                            if(!bot.options.Core.CorelessMode && !source.sources.console){
       own_her.push(`&4${command.name + ' '}`)                             
                            }else{
                                    
                            
                  own_her.push(
                {
                  text: command.name + ' ',
                  color: 'dark_red',
                        
                        
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
                                action:"run_command",value:`${bot.options.commands.prefixes[0]}${command.name}`
                        },
                        // ${command.name}\nhashOnly:§c${command.hashOnly}§r\nconsoleOnly:§c${command.consoleOnly && !context.console}§r\n${command.description}
  
                        ///tellraw @a {"translate":"","hoverEvent":{"action":"show_text","value":[{"text":""},{"text":""}]},"clickEvent":{"action":"run_command","value":"a"}}
         
                }
              )//my w
            }   
                    }
        //  let valid
            else if (command.trustLevel === 1){
                    if(!bot.options.Core.CorelessMode && !source.sources.console){
                            t_rust.push(`&5${command.name + ' '}`)
                    }else {
              t_rust.push(
                {
                  text: command.name + ' ',
                  color: 'dark_purple',
                        
                        
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
                                action:"run_command",value:`${bot.options.commands.prefixes[0]}${command.name}`
                        },
                        // ${command.name}\nhashOnly:§c${command.hashOnly}§r\nconsoleOnly:§c${command.consoleOnly && !context.console}§r\n${command.description}
  
                        ///tellraw @a {"translate":"","hoverEvent":{"action":"show_text","value":[{"text":""},{"text":""}]},"clickEvent":{"action":"run_command","value":"a"}}
         // clickEvent: command.name ? { action: 'suggest_command', value: `~${command.name}` },
                  
                }
              )
                    }
           //my w
            }   
         else if (command.trustLevel === 0){
                 if (!bot.options.Core.CorelessMode && !source.sources.console){
                         pub_lick.push(`&b${command.name + ' '}`)
                 } else{
                 pub_lick.push(
              {
                text: command.name + ' ',
                 color: '#00FFFF',
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
                              action:"suggest_command",value:`${bot.options.commands.prefixes[0]}${command.name}`}
               
                        })
                
              
          }
        }
      }
          function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Use the sleep function with async/await
/*async function main() {
  console.log("Before sleep");
  await sleep(1000); // Wait for one second
  console.log("After sleep");
}
*/
        const isConsole = context.source.player ? false : true

        if(source.sources.console) {
          // mabe idk
          const length = context.bot.commandManager.commandlist.length

          bot.console.info(bot.getMessageAsPrismarine([cmd, 'Commands (', length, ') ', category, ...pub_lick, t_rust, own_her, cons_ole])?.toAnsi(), false)//[cmd, 'Commands (', length, ') ', category, ...pub_lick, t_rust, own_her, cons_ole]
        } else if (!bot.options.Core.CorelessMode) {
                
                 const length = context.bot.commandManager.commandlist.filter(c => c.trustLevel != 3).length

        
                bot.chat('Commands (' + length + ') (&bPublic &f| &5Trusted &f| &4Owner&f)') 
                await sleep(1000)
                bot.chat(`${pub_lick}`)
                await sleep(1000)
                bot.chat(`${t_rust}`)
                 await sleep(1000)
                bot.chat(`${own_her}`)


        }else {//+ t_rust  + own_her
          const length = context.bot.commandManager.commandlist.filter(c => c.trustLevel != 3).length
//trustlevel
         source.sendFeedback([cmd, 'Commands (', JSON.stringify(length), ') ', category, ...pub_lick, t_rust ,own_her], false)
        }
             //   bot.
                /*
                bot.tellraw([pub_lick])
                bot.tellraw([t_rust])
                bot.tellraw([own_her])
                */
        //console.log(t_rust)
  }//
}
 }
