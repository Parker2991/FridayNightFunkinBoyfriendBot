const { EmbedBuilder } = require('discord.js')
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
        translate: '(%s%s%s%s%s) \u203a ',
      bold: false,
      color: 'dark_gray',
       with: [
        { color: `${bot.Commands.colors.help.pub_lickColor}`, text: 'Public'},
           { color: 'white', text: ' | '},
        { color: `${bot.Commands.colors.help.t_rustedColor}`, text: 'Trusted'},
           { color: 'white', text: ' | '},   
        { color: `${bot.Commands.colors.help.own_herColor}`, text: 'Owner'},
              ]
    }
   
      if (args[0]) {
        let valid
//if (command.aliases) { command.aliases.map((a) => (this.commands[a] = command)); }      
  for (const commands in bot.commandManager.commandlist) { // i broke a key woops
       
const command = bot.commandManager.commandlist[commands]  

          if (args[0].toLowerCase() === command.name)
        

         
           {
                    function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}//bot.getMessageAsPrismarine([cmd, 'Commands (', length, ') ', category, ...pub_lick, t_rust, own_her, cons_ole])?.toAnsi()
                  
            valid = true
    if (bot.options.useChat && !bot.options.isCreayun) {
	  bot.sendFeedback([{text:`Trust levels: -1 = disabled, 0 = public, 1 = trusted, 2 = owner, 3 = console`,color:'dark_purple'}])
	  await bot.chatDelay(100)
	  bot.sendFeedback({text: `${bot.Commands.prefixes[0]}${command.name} `,color:'#00ffff'})
	  await bot.chatDelay(100)
	  bot.sendFeedback({text:`Aliases`,color:'dark_purple'})
	  await bot.chatDelay(100)
	  bot.sendFeedback({text:`${command.aliases}`,color:'dark_purple'})
	  await bot.chatDelay(100)
	  bot.sendFeedback({text:`${command.description}`})   
	  await bot.chatDelay(100)
	  bot.sendFeedback([{text:`Trust Level: `,color:'#00ffff'},{text:`${command.trustLevel}`,color:'dark_purple'}])
	  await bot.chatDelay(100)
	 if (command.trustLevel === 2) {
	  await bot.chatDelay(100)
	  bot.sendFeedback([{text:`Usage: `,color:'#00ffff'},{text:`${bot.Commands.prefixes[0]}${command.name} <owner hash> `,color:'dark_purple'},{text:`${command.usage}`,color:'dark_red'}])  
	  await bot.chatDelay(100)
	} else if (command.trustLevel === 1) {
	  await bot.chatDelay(100)
	  bot.sendFeedback([{text:`Usage: `,color:'#00ffff'},{text:`${bot.Commands.prefixes[0]}${command.name} <trusted/owner hash> `,color:'dark_purple'},{text:`${command.usage}`,color:'dark_red'}])  
	  await bot.chatDelay(100)
	} else {
	  await bot.chatDelay(100)
	  bot.sendFeedback([{text:`Usage: `,color:'#00ffff'},{text:`${bot.Commands.prefixes[0]}${command.name} `,color:'dark_purple'},{text:`${command.usage}`,color:'dark_red'}])  
	  await bot.chatDelay(100)
	}

	} else if (bot.options.isCreayun) {
          bot.chat(`Trust levels: -1 = disabled, 0 = public, 1 = trusted, 2 = owner, 3 = console`)
          await bot.chatDelay(2000)
          bot.chat(`Aliases ↓↓↓`)
          await bot.chatDelay(2000)
          bot.chat(`${command.aliases}`)
	  await bot.chatDelay(2000)
          bot.chat(`${command.description}`)
          await bot.chatDelay(2000)
          bot.chat(`Trust Level: ${command.trustLevel}`)
	  await bot.chatDelay(2000)
	  	if (command.trustLevel === 2) {
		  await bot.chatDelay(2000)
		  bot.chat(`ඞ${bot.Commands.prefixes[0]}${command.name} <owner hash> ${command.usage}`)  
		  await bot.chatDelay(2000)
		} else if (command.trustLevel === 1) {
		  await bot.chatDelay(2000)
		  bot.chat(`ඞ${bot.Commands.prefixes[0]}${command.name} <owner/trusted hash> ${command.usage}`)  
		  await bot.chatDelay(2000)
		} else {
		  await bot.chatDelay(2000)
		  bot.chat(`ඞ${bot.Commands.prefixes[0]}${command.name} ${command.usage}`)  
		  await bot.chatDelay(2000)
		}
	} else {
	bot.sendFeedback([cmd,{text:`Trust levels: -1 = disabled, 0 = public, 1 = trusted, 2 = owner, 3 = console`,color:'dark_purple'}])
	bot.sendFeedback([cmd, {text:`${bot.Commands.prefixes[0]}${command.name} `,color:'#00ffff'},{text:`(Aliases: ${command.aliases}) › ${command.description}`,color:'dark_purple'}])        
	bot.sendFeedback([cmd,{text:`Trust Level: `,color:'#00ffff'},{text:`${command.trustLevel}`,color:'dark_purple'}])

	if (command.trustLevel === 2) {
	bot.sendFeedback([cmd,{text:`Usage: `,color:'#00ffff'},{text:`${bot.Commands.prefixes[0]}${command.name} <owner hash> `,color:'dark_purple'},{text:`${command.usage}`,color:'dark_red'}])  
	} else if (command.trustLevel === 1) {
	bot.sendFeedback([cmd,{text:`Usage: `,color:'#00ffff'},{text:`${bot.Commands.prefixes[0]}${command.name} <trusted/owner hash> `,color:'dark_purple'},{text:`${command.usage}`,color:'dark_red'}])  
	} else {
	bot.sendFeedback([cmd,{text:`Usage: `,color:'#00ffff'},{text:`${bot.Commands.prefixes[0]}${command.name} `,color:'dark_purple'},{text:`${command.usage}`,color:'dark_red'}])  
 	}
    }
break
           // }
            } else valid = false
       }
      
             
        if (valid) {
          
        } else if (!valid) {
           const args = context.arguments
           if (bot.options.isCreayun) {
	      bot.chat(bot.getMessageAsPrismarine({ translate: "command.unknown.command", color: "dark_red" })?.toMotd(bot.registry.language).replaceAll("§","&"))
	      await bot.chatDelay(1500)
	      bot.chat(bot.getMessageAsPrismarine({ translate: "command.context.here", color: "dark_red" })?.toMotd(bot.registry.language).replaceAll("§","&"))
           } else {
           bot.sendFeedback([cmd, {translate: `Unknown command %s. Type "${bot.Commands.prefixes[0]}help" for help or click on this for the command`,color:'red', with: [args[0]], clickEvent: bot.options.Core.customName ? { action: 'suggest_command', value:  `${bot.Commands.prefixes[0]}help` } : undefined}])
         
           }  
        }
  } else {
        let pub_lick = [];
        let t_rust = [];
        let own_her = [];
        let cons_ole = [];
        let disabled = [];
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
                            if(bot.options.useChat && !source.sources.console && !source.sources.discord){
       own_her.push(`&4${command.name + ' '}`)                             
                            }else{
                                    
                            
                  own_her.push(
                {
                  text: command.name + ' ',
                  color: `${bot.Commands.colors.help.own_herColor}`,
                        
                        
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
                    if(bot.options.useChat && !source.sources.console && !source.sources.discord){
                            t_rust.push(`&5${command.name + ' '}`)
                    }else {
              t_rust.push(
                {
                  text: command.name + ' ',
                  color:`${bot.Commands.colors.help.t_rustedColor}`,
                        
                        
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
                 if (bot.options.useChat && !source.sources.console && !source.sources.discord){
                         pub_lick.push(`&b${command.name + ' '}`)
                 } else{
                 pub_lick.push(
              {
                text: command.name + ' ',
                color: `${bot.Commands.colors.help.pub_lickColor}`,

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
} else if (command.trustLevel === -1) {
    disabled.push({
   text: command.name + ' ',
   color:`dark_blue`,
  })
}
      }
          function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)) 
}
        const isConsole = context.source.player ? false : true

        if(source.sources.console && !source.sources.discord) {
       
bot.sendFeedback([cmd, 'Commands (', JSON.stringify(CommandManager.commandlist.length), ') ', category, ...pub_lick, t_rust, own_her, cons_ole], false)//[cmd, 'Commands (', length, ') ', category, ...pub_lick, t_rust, own_her, cons_ole]
        } else if (bot.options.useChat && !bot.options.isCreayun) {
                
                const length = context.bot.commandManager.commandlist.filter(c => c.trustLevel != 3).length        
                bot.chat('&8Commands &3(&6' + JSON.stringify(length) + '&3) (&bPublic &f| &5Trusted &f| &4Owner&f)') 
                await bot.chatDelay(100)
                bot.chat(`${pub_lick}`)
                await bot.chatDelay(100)
                bot.chat(`${t_rust}`)
                await bot.chatDelay(100)
                bot.chat(`${own_her}`)


        } else if (bot.options.isCreayun) {
	    
                const length = context.bot.commandManager.commandlist.filter(c => c.trustLevel != 3).length
                bot.chat('Please note that the bot will not output all commands due the char limit')
		await bot.chatDelay(1500)
                bot.chat('&8Commands &3(&6' + JSON.stringify(length) + '&3) (&bPublic &f| &5Trusted &f| &4Owner&f)')
                await bot.chatDelay(1500)
                bot.chat(`${pub_lick}`)
                await bot.chatDelay(1500)
                bot.chat(`${t_rust}`)
                await bot.chatDelay(1500)
                bot.chat(`${own_her}`)
        } else {
          const length = context.bot.commandManager.commandlist.filter(c => c.trustLevel != 3).length
/*       
bot.sendFeedback([
    'Commands (', 
{text:`${JSON.stringify(CommandManager.commandlist.filter(c => c.trustLevel != 3 && c.trustLevel != -1).length)}`,color:'gold'}, ') ', 
category, 
...pub_lick,
 t_rust 
,own_her], 
false)*/
bot.sendFeedback([
    { text:'Commands ',color:'dark_gray'},
    { text:'(',color:'dark_blue'},
    { text:`${JSON.stringify(CommandManager.commandlist.filter(c => c.trustLevel != 3 && c.trustLevel != -1).length)}`,color:'gold'},
    { text:') ',color:'dark_blue'},
    category,
    ...pub_lick,
    t_rust,
    own_her,
])

  }
        
  }
},
discordExecute(context){
const bot = context.bot
const args = context.arguments
const message = args.join(' ')
const CommandManager = bot.commandManager  
  if (args[0]) {
        let valid
        for (const commands in bot.commandManager.commandlist) { // i broke a key woops
          const command = bot.commandManager.commandlist[commands]
          
          if (args[0].toLowerCase() === command.name) {      
            valid = true
        /*  const Embed = new EmbedBuilder()
                  .setColor('#00FFFF')
                  .setTitle('help Command')
                  .setDescription(`help \u203a ${command.name}`)
                  .addFields( 
                  { name: '', value:`` },
                  )
 bot?.discord?.Message?.reply({embeds: [Embed]}) 
 bot?.discord?.Message.react('♋')*/
const Embed = new EmbedBuilder()
              .setColor('#00FFFF')
              .setTitle(`${this.name} Command`)
              .setDescription(`${command.name} info`)
              .addFields(
              // { name: '', value: `${bot.Discord.commandPrefix + command.name}` }
               {name: `${bot.Discord.commandPrefix}${command.name} (Aliases: ${command.aliases}) \u203a ${command.description}`, value: `\u200b`,inline:false},
               { name: `Trust Level \u203a ${command.trustLevel}`,value:'\u200b'},
               { name: `Usage \u203a ${bot.Discord.commandPrefix}${command.name} ${command.usage}`,value:'\u200b'},
              )
bot?.discord?.Message?.reply({embeds: [Embed]}) 
bot?.discord?.Message.react('♋')

           
            break
          } else valid = false
        }
              //source is defined btw
        //source.sendFeedback([cmd, 'This command is ' + valid + ' to this for loop'])
        if (valid) {
          
        } else {
           const args = context.arguments
     
throw new CommandError(`Unknown command ${args[0]}. type "${bot.Discord.commandPrefix}" for help`)     

        }
         const length = context.bot.commandManager.commandlist.length // ok

    //context.source.sendFeedback([cmd, 'Commands (', length, ') ', category, ...commandList], false)
  } else {
        let pub_lick = []
        let t_rust = []
        let own_her = []
      for (const commands in bot.commandManager.commandlist) {
          const command = bot.commandManager.commandlist[commands]
         
          
           // } 
       
           if (command.trustLevel === 2) {
                  own_her.push(
                {
                  text: command.name + ' ',
                })
            }   
            else if (command.trustLevel === 1){
              t_rust.push(
                {
                  text: command.name + ' ',
                })
            }   
         else if (command.trustLevel === 0){
                    pub_lick.push(
               {
                text: command.name + ' ',
               })
          }
}

    const Embed = new EmbedBuilder()
                  .setColor('#00FFFF')
                  .setTitle(`${this.name} Command`)
                  .setDescription(`${bot.getMessageAsPrismarine(['Commands (',JSON.stringify(CommandManager.commandlist.filter(c => c.trustLevel != 3).length),')'])?.toString()}`)
                  .addFields( 
                  { name: 'Public', value:`${bot.getMessageAsPrismarine(pub_lick)?.toString()}`, inline: false },
                  { name: 'Trusted', value: `${bot.getMessageAsPrismarine(t_rust)?.toString()}`, inline: false },
                  { name: 'Owner', value: `${bot.getMessageAsPrismarine(own_her)?.toString()}`,inline: false },
                  )
 bot?.discord?.Message?.reply({embeds: [Embed]}) 
 bot?.discord?.Message.react('♋')
  }
 }
}