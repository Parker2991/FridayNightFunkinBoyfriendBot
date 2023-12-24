const CommandError = require('../CommandModules/command_error')
const CommandSource = require('../CommandModules/command_source')
module.exports = {
  name: 'test',
  description:['very 1st command in the bot to test to see if things are working'],
trustLevel: 0,
        aliases:['tst'],
  execute (context) {

   const bot = context.bot 
   
    const player = context.source.player.profile.name
    const uuid = context.source.player.uuid
    const message = context.arguments.join(' ') // WHY SECTION SIGNS!!
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
                      text:`, uuid: ${uuid}, `
              },
       //entry.displayName
             {text:`Argument: ${message}`} 
      ]//command.split(' ')[0]
    }
          bot.tellraw(component)
   // context.source.sendFeedback({text:`Hello, World!, Player: ${player}, uuid: ${uuid}, Argument: ${message}`})

  }
}
  /*


*/
//context.source.player.displayName ?? context.source.player.profile.name,
