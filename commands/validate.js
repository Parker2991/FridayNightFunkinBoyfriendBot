module.exports = {
  name: 'validate',
  description:['validate in the bot'],

trustLevel: 1,
        aliases:['val'],
  execute (context)  {
   const source = context.source
            const bot = context.bot
const hash = bot.hash
          const args = context.arguments
          const ownerhash = bot.owner
        const discordHash = bot.hashing.hash
    if (args[0] === hash) {
   if(!bot.options.Core.CorelessMode){
           bot.chat('&aValid Hash')
   }else{
            source.sendFeedback({ text: 'Valid Hash', color: 'green' })
   }
    }else if (args[0] === ownerhash) {
    if(!bot.options.Core.CorelessMode){
            bot.chat('&aValid Owner Hash')
    }else{
            source.sendFeedback({text: 'Valid Owner Hash', color:'green'})
    } 
    }
    else if (discordHash) {
   if(!bot.options.Core.CorelessMode){
   bot.chat('&aValid Hash')
   }else{
           source.sendFeedback({ text: 'Valid Hash', color: 'green' })
   }
   }
  }
}
//if (args[0] === hash) {