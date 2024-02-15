const CommandError = require('../CommandModules/command_error.js')
module.exports = {
  name: 'netmsg',
   description:['send a message to other servers'],
     trustLevel: 0,
        aliases:['networkmessage', 'netmessage', 'networkmsg'],
  execute (context) {
     
    const message = context.arguments.join(' ')
  
          
          const args = context.arguments
    const bot = context.bot
     const ChatMessage = require('prismarine-chat')(bot.options.version)
          const source = context.source
          
    if (!message[0]) {
      
            context.source.sendFeedback({text:'Message is empty', color:'red'}, false)
            if(source.sources.console && !bot.options.Core.enabled){
                    
            for (const eachBot of bot.bots) 
            
            eachBot.chat(`[${bot.options.host}:${bot.options.port}] ${ChatMessage.fromNotch(bot.options.username).toMotd().replaceAll('§', '&')} &f› ${message}`) 
            }    
    } else if (!bot.options.Core.enabled && !source.sources.console) {
   
           
            for (const eachBot of bot.bots) 
            
            eachBot.chat(`[${bot.options.host}:${bot.options.port}] ${ChatMessage.fromNotch(context.source.player.displayName ?? context.source.player.profile.name).toMotd().replaceAll('§', '&')} &f› ${message}`)//
    }else if(source.sources.console){
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
          
         
bot.username,
              
       //entry.displayName
             {text:bot.getMessageAsPrismarine(message).toMotd.replaceAll('&','\xa7')} 
      ]//command.split(' ')[0]
    }
          
            
                     for (const eachBot of bot.bots) 
            eachBot.tellraw(component)
            
    }else if(bot.options.Core.enabled && !source.sources.console){
       
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
          
         
context?.source?.player?.displayName ?? context?.source?.player?.profile?.name,
              
       
             {text:bot.getMessageAsPrismarine(message).toMotd().replaceAll('&', '\xa7')} 
      ]
    }
          
            
                     for (const eachBot of bot.bots) 
            eachBot.tellraw(component)
           
           
            
}
}
}


