const wiki = require('wikipedia') // 
const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'wiki',
  description:['wikipedia'],
trustLevel: 0,
        aliases:['wikipedia'],
  async execute (context) {
       const source = context.source
    const args = context.arguments
          const bot = context.bot
     const ChatMessage = require('prismarine-chat')(bot.options.version)
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}       
          const cmd = {
          translate: '[%s] ',
               bold: false,
               color: 'white',
               with: [
                 { color: 'dark_green', text: 'Wiki Cmd'},
                       ]
             }
     try {
      const page = await wiki.page(args.join(' '))
     // const summary = await page.images()
      const summary2 = await page.intro()
   
   //const definitions = await urban.define(args.join(' '))
   /// console.log(summary)
   
  // source.sendFeedback({ text: JSON.stringify(summary), color: 'green' })
             if (!bot.options.Core.CorelessMode){
                 bot.chat(ChatMessage.fromNotch(await sleep(500) 
?? [cmd, { text:summary2, color: 'gray' }]).toMotd().replaceAll('§', '&'))
             }else{
     source.sendFeedback([cmd,{ text:`${summary2}`, color: 'green' }])
             }
    } catch (e) {
             if(!bot.options.Core.CorelessMode){
                     bot.chat(ChatMessage.fromNotch([cmd, { text: `${e.toString()}`, color: 'red' }]).toMotd().replaceAll('§', '&'))
             }else{
     source.sendFeedback([cmd, { text: `${e}`, color: 'red' }])
 }
  }
}
}