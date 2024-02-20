const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'discord',

  execute (context) {
const bot = context.bot    
const event = {
 
  clickevent: { action:"open_url", value: `${context.bot.discord.invite}`},
        "color": "#5A5A5A",
       "translate": `%s`,
      "with": [
          { "color": "green", "text": "Click here for the bots discord server link"},
           
                ]//
      }
context.source.sendFeedback(event, false)
  }
}
