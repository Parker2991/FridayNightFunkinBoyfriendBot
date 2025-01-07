module.exports = {
  name: 'reconnect',
  
  hashOnly: true,
  
  execute (context)  {
   const source = context.source
 const bot = context.bot
    const randomstring = require('randomstring')
  context.source.sendFeedback({ text: `Reconnecting to ${bot.options.host}:${bot.options.port}`, color: 'dark_green'})

setTimeout(function() {
   
  bot.chat(randomstring.generate(1000)) 
 }, 1)
}
}