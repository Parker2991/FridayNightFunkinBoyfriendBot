const CommandError = require("../CommandModules/command_error")

module.exports = {
  name: 'discordmsg',
  description:['make me say something in discord'],
  trustLevel: 0,
  aliases:['discordmessage', 'ddmsg'],
  usage:["message"],
  execute (context) {
    const bot = context.bot
    const args = context.arguments
    if (!args[0]) {
      bot.sendFeedback({text:'Message is empty', color:'red'}, false)
    } else {
      bot.discord.channel.send(args.join(' '))
      console.log(args[0])
      bot.sendFeedback({ text: `Recieved: ${args.join(' ')}`, color:'green'})
 
    }
  }, 
  discordExecute (context) {
  const bot = context.bot;
  const args = context.arguments;
    if (!args[0]) {
      bot.discord.Message.reply('Recieve too few arguments')
    } else {
     bot.discord.Message.reply(`${args.join(' ')}`)
   }
  }
}