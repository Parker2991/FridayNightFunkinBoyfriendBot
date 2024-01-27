const CommandError = require('../CommandModules/command_error')
const CommandSource = require('../CommandModules/command_source')
module.exports = {
  name: 'cmdtest',
  description:['usages are test and msg error'],
trustLevel: 0,
        aliases:['cmdtst', 'commandtest', 'commandtst'],
 execute (context) {

   const bot = context.bot 
   
    const player = context.source.player.profile.name
    const uuid = context.source.player.uuid
    const message = context.arguments.join(' ') // WHY SECTION SIGNS!!
          const args = context.arguments
         const source = context.source
 switch (args[0]) {
      case 'msg':
const component = {
       translate: '[%s] %s %s %s %s %s',
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
              color: 'aqua'
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
                text:'Hello, World!,'
              },{
                text:'Player:'      
              },
          
         
context.source.player.displayName ?? context.source.player.profile.name,
              {
                      text:`, uuid: ${uuid ?? context.source.player.uuid  } , `
              },
       //entry.displayName
             {text:`Argument: ${args.slice(1).join(' ')}`} 
      ]//command.split(' ')[0]
    }//context.source.player.displayName ?? context.source.player.profile.name

                 //ChatMessage.fromNotch(`${process.env["buildstring"]}`).toMotd().replaceAll('§', '&')
                 
                 if (!bot.options.Core.CorelessMode){
                 const ChatMessage = require('prismarine-chat')(bot.options.version)
                         bot.chat(`Hello, World!, Player: ${ChatMessage.fromNotch(context.source.player.displayName ?? context.source.player.profile.name).toMotd().replaceAll('§', '&')}, uuid: ${context.source.player.uuid}, Argument: ${args.slice(1).join(' ')}`)       
                         
                 } else {
bot.tellraw([component])
                 }
                 /*
                    const bot = context.bot 
   
    const player = context.source.player.profile.name
    const uuid = context.source.player.uuid
    const message = context.arguments.join(' ') // WHY SECTION SIGNS!!
    
    context.source.sendFeedback(`Hello, World!, Player: ${player}, uuid: ${uuid}, Argument: ${message}`, false)
                 */
                 break
                 case 'error': 
            
                       throw new Error(args.slice(1).join(' '))
               
                         break
                   function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
                  default:
                 if (!bot.options.Core.CorelessMode){
                    bot.chat('&4Invalid action')     
                          sleep(500)
                         bot.chat('the usages are msg and error')
                 }else{
        context.source.sendError([{ text: 'Invalid action', color: 'dark_red', bold:false }])
        context.source.sendError([{ text: 'the usages are msg and error', color: 'gray', bold:false }])
 }
 }   
}
}
  /*
  
*/
//context.source.player.displayName ?? context.source.player.profile.name,
