const { EmbedBuilder } = require('discord.js')
const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'reload',
   description:['Reload the bots files'],
        aliases:[],
       trustLevel: 0,
usage:["reload"],
  execute (context) {
    const bot = context.bot
    const args = context.arguments
const source = context.source
try {
bot.sendFeedback({text:'Reloading crap'});
for (const eachBot of bot.bots)
eachBot.reload()
}catch(e){
bot.sendFeedback(e.stack)
}
},
discordExecute(context) {
const bot = context.bot
const source = context.source
try {
const Embed = new EmbedBuilder()
                  .setColor('#00FFFF')
                  .setTitle(`${this.name} Command`)
                  .setDescription(`reloading commands`)
              bot.discord.Message.reply({embeds: [Embed]})
for (const eachBot of bot.bots)
eachBot.reload()
}catch(e) {
throw new CommandError(e.stack)
}
}
}
