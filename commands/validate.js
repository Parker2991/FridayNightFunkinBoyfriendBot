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
   source.sendFeedback({ text: 'Valid Hash', color: 'green' })
    }else if (args[0] === ownerhash) {
            source.sendFeedback({text: 'Valid OwnerHash', color:'green'})
    } 
    else if (discordHash) {
   source.sendFeedback({ text: 'Valid Hash', color: 'green' })
    }
  }
}
//if (args[0] === hash) {