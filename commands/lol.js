//command.unknown.argument command.unknown.command //command.context.here
const CommandError = require('../CommandModules/command_error')
const os = require('os')

module.exports = {
  name: 'lol',

  execute (context) {    
    const prefix = {
 
clickevent: { action:"open_url", value: "https://doin-your.mom"},
      "color": "#5A5A5A",
     "translate": ` %s %s %s %s`,
    "with": [
        { "color": "dark_red", text: "Incorrect argument for command"},
          { "color": "dark_red", text: " <--[HERE]"},
      { "color": "dark_red", text: "Unknown or incomplete command, see below for error"},
                 { "color": "dark_red", "text": "An unexpected error occurred trying to execute that command"},
              ]//
    }//how i add a hover event??
// clickEvent: bot.discord.invite ? { action: 'open_url', value: bot.discord.invite }
    context.source.sendFeedback(prefix)
    context.source.sendFeedback('[object Object]')
          context.source.sendFeedback('NaN')
   context.source.sendFeedback('null')
    context.source.sendFeedback('undefined')
     
    

  }
}