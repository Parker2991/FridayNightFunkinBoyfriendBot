const CommandError = require('../CommandModules/command_error.js')
module.exports = {
  name: 'netmsg',
   description:['send a message to other servers'],
  execute (context) {
     
    const message = context.arguments.join(' ')
    const bot = context.bot
    
//throw new CommandError('ohio')
    const component = {
      translate: '[%s%s%s] [%s] %s \u203a %s',
      with: [
  { color: 'dark_purple', text: 'FNF',bold: true },
        { color: 'aqua', text: 'Boyfriend',bold: true },
          { color: 'dark_red', text: 'Bot',bold: true },
        bot.options.host + ':' + bot.options.port,
        context.source.player.displayName ?? context.source.player.profile.name,
        message
      ]
    }
    if (!message[0]) {
      context.source.sendFeedback({text:'Message is empty', color:'red'}, false)
    } else {
    for (const eachBot of bot.bots) eachBot.tellraw(component)
  }
}
}
/*
if (!args[0]) {
  context.source.sendFeedback({text:'Message is empty', color:'red'}, false)
} else {
  bot.discord.channel.send(args[0])
  console.log(args[0])
  context.source.sendFeedback({ text: `Recieved: ${args[0]}`, color:'green'})
  */