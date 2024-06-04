const CommandError = require('../CommandModules/command_error.js')
module.exports = {
  name: 'netmsg',
  description:['send a message to other servers'],
  trustLevel:0,
  aliases:['networkmessage'],
  usage:["<message>"],
  execute (context) {
    const message = context.arguments.join(' ')
    const args = context.arguments
    const bot = context.bot
    const source = context.source
    const component = {
       translate: '[%s] %s \u203a %s',
       color: 'gray',
       with: [
             context.bot.options.serverName,   
        context?.source?.player?.displayName ?? context?.source?.player?.profile?.name,
        message
      ]
    }
    if (!message[0]) {
     bot.sendFeedback({text:'Message is empty', color:'red'}, false)
    } else {
    for (const eachBot of bot.bots) 
    if (bot.options.isCreayun || bot.options.useChat) {
      eachBot.chat(`[${bot.options.serverName}] ${bot.getMessageAsPrismarine(context?.source?.player?.displayName ?? context?.source?.player?.profile?.name)?.toMotd().replaceAll('§','&')} \u203a ${message}`)
    } else {
       eachBot?.tellraw(component)
    }
  }
 }
}
/*
 bot.options.host + ':' + bot.options.port,
        context.source.player.displayName ?? context.source.player.profile.name,
        message
        [%s%s%s] [%s] %s \u203a %s
  */