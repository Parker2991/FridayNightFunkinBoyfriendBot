const CommandError = require('../util/command_error')
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'list',
   description:['check the player list'],
      trustLevel: 0,
        aliases:['playerlist', 'plist', 'pl'],
usage:[""],
 async execute (context) {
    const bot = context.bot
const args = context.arguments
    const players = bot.players
const source = context.source
    const component = []
       // if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
   if (args.length !== 0){
throw new CommandError({translate:"Too many Arguments!", color:"red"})
   }

   if (bot.options.isCreayun) {
     bot.chat('&4Cannot execute command because isCreayun is active in the config!')
   } else {
    for (const player of players) {
      component.push({
        translate: `%s \u203a %s [%s %s %s %s %s]`,
        with: [
         
          player.displayName ?? player.profile.name,
          player.uuid,
           {text:`Ping:`,color:'dark_green'},
           {text:`${player.latency}`,color:'gold'},
           {text:'/',color:'dark_gray'},
           {text:`Gamemode:`, color:'dark_purple'},
           {text:`${player.gamemode}`,color:'gold'},
        ]
      })

      component.push('\n')
    }

    component.pop()
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
         /*
 for (const player of players) {
      component.push({
        translate: '%s \u203a %s [%s %s %s]',
        with: [
         
          player.displayName ?? player.profile.name,
          player.uuid,
          {text: `Ping: ${player.latency}`,color:'dark_green'},
          {text:'/',color:'dark_gray'},
          {text:`Gamemode: ${player.gamemode}`, color:'dark_purple'},
         
        ]
      })

      component.push('\n')
    }
         */
         if(source.sources.console){

               bot.console.info(bot.getMessageAsPrismarine(component)?.toAnsi())

         }else
                 if(!bot.options.Core.enabled){

        const ChatMessage = require('prismarine-chat')(bot.options.version)
for (const player of players){

        bot.chat(ChatMessage.fromNotch(await sleep(500) ?? player.displayName ?? player.profile.name ).toMotd().replaceAll('§', '&') + `\u203a ${player.uuid} Ping: [&a${player.latency}&f]`)
}
}else{   
 
//const players = bot.players          
        
bot.tellraw([{text:`Players: `,color:'dark_gray',},{text:'(',color:'blue'},{text:`${JSON.stringify(bot.players.length)}`,color:'gold'},{text:')',color:'blue'}])
    bot.tellraw(component)
  
}     
}
},
discordExecute(context) {
const bot = context.bot
const players = bot.players
/*
const Embed = new EmbedBuilder()
                  .setColor('#00FFFF')
                  .setTitle('help Command')
                  .setDescription(`help \u203a ${command.name}`)
                  .addFields( 
                  { name: '', value:`` },
                  )
 bot?.discord?.Message?.reply({embeds: [Embed]}) 
 bot?.discord?.Message.react('♋')
 for (const player of players) {
      component.push({
        translate: '%s \u203a %s [%s %s %s]',
        with: [
         
          player.displayName ?? player.profile.name,
          player.uuid,
          {text: `Ping: ${player.latency}`,color:'dark_green'},
          {text:'/',color:'dark_gray'},
          {text:`Gamemode: ${player.gamemode}`, color:'dark_purple'},
         
        ]
      })

*/
    const component = []
for (const player of players) {
      component.push({
        translate: '%s \u203a %s [%s %s %s]',
        with: [
         
          player.displayName ?? player.profile.name,
          player.uuid,
          {text: `Ping: ${player.latency}`,color:'dark_green'},
          {text:'/',color:'dark_gray'},
          {text:`Gamemode: ${player.gamemode}`, color:'dark_purple'},
         
        ]
      })

      component.push('\n')
    }
const Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`${bot.getMessageAsPrismarine(`Players: (` + bot.players.length + ')')?.toString()}` + `${bot.getMessageAsPrismarine('\n')?.toString()}` + `${bot.getMessageAsPrismarine(component)?.toString()}`)
              bot.discord.Message.reply({embeds: [Embed]})

}
}
//what is wi
// IDK
