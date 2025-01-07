const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'say',
//<< this one line of code broke it lmao
  execute (context) {

    const message = context.arguments.join(' ')
const bot = context.bot

    const prefix = {
 
clickevent: { action:"open_url", value: "https://doin-your.mom"},
      "color": "#5A5A5A",
     "translate": `[%s] %s \u203a %s`,
    "with": [
        { "color": "aqua", "text": `FNFBoyfriendBotX`},
          { "color": "aqua", "text": `${bot.username}`},
      { "color": "#5A5A5A", "text": message},
              ]//
    }//how i add a hover event??
// clickEvent: bot.discord.invite ? { action: 'open_url', value: bot.discord.invite }
    context.bot.tellraw([prefix])
  
  }
}
//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 

// Parker, why is hashing just random characters???
//wdym