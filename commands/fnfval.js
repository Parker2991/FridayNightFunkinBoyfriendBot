const crypto = require('crypto')

module.exports = {
  name: 'botval',

  trustLevel: 3,

  execute (context) {
    const bot = context.bot
    
    const prefix = '~' // mabe not hardcode the prefix
    
    const args = context.arguments

    const key = process.env['FNFBoyfriendBot_Owner_key']
//al
    const time = Math.floor(Date.now() / 11000)
    
    const value = bot.uuid + args[0] + time + key
    
    const hash = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + key).digest('hex').substring(0, 16)

    const command = `${prefix}${args.shift()} ${hash} ${args.join(' ')}`
    const customchat = {
       translate: '[%s] %s \u203a %s',
     color:'gray',
        with: [
          { text: 'FNFBoyfriendBot', color:'#00FFFF'},
          { selector: `${bot.username}`, color:'#00FFFF'},
          { text: '', extra: [`${command}`], color:'white'},

        ],
         hoverEvent: { action:"show_text", value: 'FNF Sky is a fangirl but a simp for boyfriend confirmed??'},
        clickevent: { action:"open_url", value: "https://doin-your.mom"}
      }

    context.bot.tellraw(customchat)
  }
}
//const interval = setInterval(() => {
//      bot.hash = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + config.keys.normalKey).digest('hex').substring(0, 16)
  //    bot.ownerHash = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + config.keys.ownerHashKey).digest('hex').substring(0, 16)
 

// Make a copy of this