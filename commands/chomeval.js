const crypto = require('crypto')

module.exports = {
  name: 'chomeval',

  consoleOnly: true,
   description:['console only'],
  execute (context) {
    const bot = context.bot
    
    const prefix = '*' // mabe not hardcode the prefix
    
    const args = context.arguments

    const key = process.env['chomens_bot_key']

    const time = Math.floor(Date.now() / 5_000)
    
    const value = bot.uuid + args[0] + time + key
    
    const hash = crypto.createHash('sha256').update(value).digest('hex').substring(0, 16)

    const command = `${prefix}${args.shift()} ${hash} ${args.join(' ')}`
const message = context.arguments.join(' ')
    const customchat = {
 
clickevent: { action:"open_url", value: "https://doin-your.mom"},
      "color": "#5A5A5A",
     "translate": `[%s] %s \u203a %s`,
    "with": [
        { "color": "aqua", "text": "FNFBoyfriendBotX"},
          { "color": "aqua", "text": `${bot.username}`},
      { "color": "#5A5A5A", "text": `${command}`},
              ]//
    }//how i add a hover event??
// clickEvent: bot.discord.invite ? { action: 'open_url', value: bot.discord.invite }
    context.bot.tellraw([customchat])
    
  }
}
//

