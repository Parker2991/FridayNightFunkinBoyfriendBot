const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'translate',
//<< this one line of code broke it lmao
   usage:['<language 1> <message>'],
        aliases:['translation'],
   trustLevel: 0,
description:["translate languages"],
  async execute (context) {
    const { translate } = require('@vitalets/google-translate-api')
    const bot = context.bot
    const args = context.arguments
    const source = context.source
const { HttpProxyAgent } = require('http-proxy-agent');
if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
 try {
const agent = new HttpProxyAgent('http://103.152.112.162:80');    
const { text } = await translate(`${args.slice(1).join(' ')}`, {
      to: 'args[0]',
      fetchOptions: {agent}
    });
source.sendFeedback([{text:'Result \u203a '},{text:`${text}`,color:'gold'}])
}catch(e){
//if (e.name === 'TooManyRequestsError') {
  //   source.sendFeedback({text:'reconnecting proxy'})
//}else{
bot.tellraw(`${e}`)
//}
}  
  }
}
//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 

// Parker, why is hashing just random characters???
//wdym
