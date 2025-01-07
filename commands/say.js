const CommandError = require('../CommandModules/command_error')
const buildstring = process.env['buildstring']
const foundation = process.env['FoundationBuildString']
module.exports = {
  name: 'say',
//<< this one line of code broke it lmao
  execute (context) {

    const message = context.arguments.join(' ')
const bot = context.bot

    const prefix = {
clickevent: { action:"open_url", value: "https://doin-your.mom"},
      hoverEvent: { action:"show_text", value: `FNF Sky is a fangirl but a simp for boyfriend confirmed?? 
 ${buildstring} 
 ${foundation} 
 ${context.bot.options.commands.prefix}`},
     "translate": `[%s] %s \u203a %s`,
    "with": [
        { "color": `${context.bot.options.CustomChat.color}`, "text": `${context.bot.options.CustomChat.text}`},
          { "color": "#00FFFF", "text": `${bot.username}`},
      { "color": "#FFFFFF", "text": message},
              ]//
    }//how i add a hover event??
// clickEvent: bot.discord.invite ? { action: 'open_url', value: bot.discord.invite }
    bot.tellraw([prefix])
  }
}
//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 

// Parker, why is hashing just random characters???
//wdym