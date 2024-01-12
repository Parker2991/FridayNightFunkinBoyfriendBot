const CommandError = require('../CommandModules/command_error.js')
module.exports = {
  name: 'netmsg',
   description:['send a message to other servers'],
     trustLevel: 0,
        aliases:['networkmessage', 'netmessage', 'networkmsg'],
  execute (context) {
     
    const message = context.arguments.join(' ')
         function tryParse (json) {
  try {
    return JSON.parse(json)
  } catch (error) {
    return { text: '' }
  }
}
          
          const args = context.arguments
    const bot = context.bot
    
          const source = context.source
          const player = context.source.player.displayName
//throw n
    const component = {
       translate: '[%s] [%s] %s \u203a %s',
      with: [
        {
          translate: '%s%s%s',
          bold:false,
          with: [
            {
              text: 'FNF',
              bold: true,
              color: 'dark_purple'
          
            },
            {
              text: 'Boyfriend',
              bold: true,
              color: '#00FFFF'
            },
            {
              text: 'Bot',
              bold: true,
              color: 'dark_red'
            },
          ],
          clickEvent: bot.options.Core.customName ? { action: 'open_url', value:  bot.options.Core.customName } : undefined,
          hoverEvent: { action: 'show_text', contents: `idfk what to put here` }
        },
              {
                      text:`${bot.options.host}:${bot.options.port}`,
                      bold:false,
                      color:'white',
                      translate:"",
                      hoverEvent:{
                              action:"show_text",
                              value:[
                                      {
                                     text:`Server: ${bot.options.host}:${bot.options.port}`,
                                              color:'white',       
                                      }
                              ],
                              clickEvent:{
                              action:"copy_to_clipboard",value:`${bot.options.host}:${bot.options.port}`}
                      }
              
              
              },
          
         
context.source.player.displayName ?? context.source.player.profile.name,
              
       //entry.displayName
             {text:message} 
      ]//command.split(' ')[0]
    }
          
          
          // context.source.player.displayName ?? context.source.player.profile.name,
  /*
       function tryParse (json) {
  try {
    return JSON.parse(json)
  } catch (error) {
    return { text: '' }
  }
}
  *///obj
     /*
        const amogus2 = {text:`${JSON.stringify(context.source.player.displayName ?? context.source.player.profile.name)}`}
          
          bot.tellraw({text:'amogus ' + JSON.parse(context.source.player.displayName)}) 
     */     //context.source.sendFeedback({text:`Hello, World!, Player: ${player}, uuid: ${uuid}, Argument: ${message}`})
    if (!message[0]) {
      context.source.sendFeedback({text:'Message is empty', color:'red'}, false)
    } else {
    for (const eachBot of bot.bots) eachBot.tellraw(component)
  }
}
}
/*
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
  */