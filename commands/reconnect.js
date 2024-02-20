const randomstring = require('randomstring')

module.exports = {
  name: 'reconnect',
  
  hashOnly: true,
  
  execute (context)  {
   const source = context.source
 const bot = context.bot
   
    const randomstring = require('randomstring')
  context.source.sendFeedback({ text: `Reconnecting to ${bot.options.host}:${bot.options.port}`, color: 'dark_green'})

 
bot.chat(randomstring.generate(300))
}
}
//red sus