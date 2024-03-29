module.exports = {
  name: 'reload',
   description:[],
        aliases:[],
       trustLevel: 0,
usage:["reload"],
  execute (context) {
    const bot = context.bot
    const args = context.arguments
const source = context.source
try {
source.sendFeedback({text:'Reloading commands,..........'});
for (const eachBot of bot.bots)
eachBot.reload()
}catch(e){
source.sendFeedback(e.stack)
}
}
}
