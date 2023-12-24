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
        { color: 'green', text: 'Public'},
           { color: 'white', text: ' | '},
        { color: 'red', text: 'Trusted'},
           { color: 'white', text: ' | '},   
        { color: 'dark_red', text: 'Owner'},
              ]
    }
   
      if (args[0]) {
        let valid
        for (const fard in bot.commandManager.amogus) { // i broke a key woops
          const command = bot.commandManager.amogus[fard]
          
          if (args[0].toLowerCase() === command.name )
         //  if (args[0].toLowerCase() === command.aliases)
           {//text:`Trust Level: `,color:'white'},
                                        //{text:`${command.trustLevel}\n`,color:'red'},                 
            valid = true
            source.sendFeedback([cmd, `Description: ${command.description}`])
                
                   source.sendFeedback([cmd, {text:`Trust Level: ${command.trustLevel}`}])
                   
                   source.sendFeedback([cmd, `aliases: ${command.aliases}`])
            break
          } else valid = false
        }
              //source is defined btw
        //source.sendFeedback([cmd, 'This command is ' + valid + ' to this for loop'])
        if (valid) {
          
        } else {
           const args = context.arguments
         source.sendFeedback([cmd, {translate: `Unknown command %s. Type "${bot.options.commands.MainPrefix}help" for help or click on this for the command`,color:'red', with: [args[0]], clickEvent: bot.options.Core.customName ? { action: 'suggest_command', value:  `${bot.options.commands.MainPrefix}help` } : undefined}])
           //  bot.tellraw([cmd, {translate: `Unknown command %s. Type "${bot.options.commands.prefix}help" for help or click on this for the command`, with: [args[0]], clickEvent: bot.options.Core.customName ? { action: 'suggest_command', value:  `${bot.options.commands.prefix}help`, color:'red' } : undefined}])  
        }//i will add the descriptions reading as tests and action add the descriptions for the commands after
         const length = context.bot.commandManager.amogus.length // ok
        //i guess i did delete smh woops

    //context.source.sendFeedback([cmd, 'Commands (', length, ') ', category, ...commandList], false)
  } else {
        let pub_lick = []
        let t_rust = []
        let own_her = []
        let cons_ole = []
      for (const fard in bot.commandManager.amogus) {
          const command = bot.commandManager.amogus[fard]
         
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
                                action:"run_command",value:`${bot.options.commands.MainPrefix}${command.name}`
                        },
                        // ${command.name}\nhashOnly:§c${command.hashOnly}§r\nconsoleOnly:§c${command.consoleOnly && !context.console}§r\n${command.description}
  
                        ///tellraw @a {"translate":"","hoverEvent":{"action":"show_text","value":[{"text":""},{"text":""}]},"clickEvent":{"action":"run_command","value":"a"}}
          clickEvent: command.name ? { action: 'suggest_command', value: `~${command.name}` } : undefined,
                }
              )//my w
            }   
        //  let valid
            else if (command.trustLevel === 1){
              t_rust.push(
                {
                  text: command.name + ' ',
                  color: 'red',
                        
                        
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
                                action:"run_command",value:`${bot.options.commands.MainPrefix}${command.name}`
                        },
                        // ${command.name}\nhashOnly:§c${command.hashOnly}§r\nconsoleOnly:§c${command.consoleOnly && !context.console}§r\n${command.description}
  
                        ///tellraw @a {"translate":"","hoverEvent":{"action":"show_text","value":[{"text":""},{"text":""}]},"clickEvent":{"action":"run_command","value":"a"}}
         // clickEvent: command.name ? { action: 'suggest_command', value: `~${command.name}` },
                  
                }
              )
           //my w
            }   
         else if (command.trustLevel === 0){
                    pub_lick.push(
              {
                text: command.name + ' ',
                 color: 'green',
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
                              action:"suggest_command",value:`${bot.options.commands.MainPrefix}${command.name}`}
               
                        })
                
              // copypasted from below, and removed stuff that wont work in the console
          }
           //{command.consoleOnly && !source.sources.console
          //${command.description}
       
           // for (const command of context.bot.commandManager.getCommands()) {
         // if (command.consoleOnly && !context.console) continue 
        }
             // console.log(pub_lick)
             // console.log(t_rust)

        // i could do context.source.sources.console
        // but i want to do it like this
        // if its buggy change to that
        const isConsole = context.source.player ? false : true

        if(isConsole) {
          // mabe idk
          const length = context.bot.commandManager.amogus.length

          context.source.sendFeedback([cmd, 'Commands (', length, ') ', category, ...pub_lick, t_rust, own_her, cons_ole], false)
        } else {
          const length = context.bot.commandManager.amogus.filter(c => c.trustLevel != 3).length
//trustlevel
          context.source.sendFeedback([cmd, 'Commands (', length, ') ', category, ...pub_lick, t_rust ,own_her], false)
        
    
             //   bot.tellraw([own_her])
        //console.log(t_rust)
  }//
}
 }
}