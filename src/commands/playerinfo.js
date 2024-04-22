const CommandError = require('../CommandModules/command_error')
const util = require('util')
const { stylize } = require('../util/eval_colors')
module.exports = {
  name: 'playerinfo',
   description:[''],
        aliases:[],
       trustLevel: 0,
usage:[
"",
],
  execute (context) {
    const bot = context.bot
    const args = context.arguments
    const source = context.source
try{
    //const player = bot.players.find(player => player.profile.name === `${args.join(' ')}`)
const player = bot.players.find(player => player.profile.name === `${args.join(' ')}`)
//bot.players.map(pl => pl.profile.name).filter((name) => name == "Ski")
if(player === undefined) {

bot.tellraw('Unknown Player')
}else{
 bot.sendFeedback([{text:`Player Name: `,color:'dark_gray'},{text:`${player.profile.name}`}])
 bot.sendFeedback([{text:`Player UUID: `,color:'dark_gray'},{text:`${player.uuid}`,color:'gold'}])
 bot.sendFeedback([{text:`Player Gamemode: `,color:'dark_gray'},{text:`${player.gamemode}`,color:'gold'}])
 bot.sendFeedback([{text:`Player Latency: `,color:'dark_gray'},{text:`${player.latency}`,color:'gold'}])
 bot.sendFeedback([{text:`Player DisplayName: `,color:'dark_gray'},{text:`${bot.getMessageAsPrismarine(player.displayName ?? player.profile.name)?.toMotd().replaceAll('§','§')}`}])
 }
}catch(e){ 
bot.tellraw(`${e}`)
  }//bot.players.find(player => player.profile.name === `Ski`); bot.getMessageAsPrismarine(e.displayName)?.toMotd().replaceAll('§','§')
},
discordExecute(context) {
 const bot = context.bot
 const args = context.arguments
 const source = context.source
   }
}
