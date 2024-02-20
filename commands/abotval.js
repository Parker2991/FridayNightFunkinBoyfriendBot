const crypto = require('crypto')

module.exports = {
  name: 'abotval',

  consoleOnly: true,

  execute (context) {
      const bot = context.bot
    
    const prefix = '<' // mabe not hardcode the prefix
    
    const args = context.arguments
    let hashlol
    const key = process.env['abot_key']
      const date = new Date();
  const min = date.getMinutes();

    const md5 = crypto.createHash('md5').update(`${min}--_${key}`).digest('hex');
        const basehash = crypto.createHash('sha256').update(md5).digest('hex');
        const hashe = btoa(basehash)
        const fullhash = crypto.createHash('sha256').update(hashe).digest('hex');
        hashlol = fullhash.substring(0, 16);
//already have to token ready
    
    
    const hash = hashlol

    const command = `${prefix}${args.shift()} ${hash} ${args.join(' ')}`

    const peefix = {
 
clickEvent: { action:"open_url", value: "https://doin-your.mom"},
      "color": "#5A5A5A",
     "translate": '[%s] %s \u203a %s',
    "with": [
        { "color": "aqua", "text": "FNFBoyfriendBotX"},
          { "color": "aqua", "text": `${bot.username}`},
      { "color": "white", "text": command},
              ]// why name it that?? xD
    }

   
    context.bot.tellraw([peefix])
  }//this isnt how..
}//./commands/tellraw.js
// Done!
//are ya able to help with the validation/hashing in mine?
// Make a copy of this
//ahh ok
//whos not

// Can cars fly?
//fr
// look at the console
// watch console rq
// Rip our ram lmao