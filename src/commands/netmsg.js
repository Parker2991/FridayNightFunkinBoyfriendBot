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
    
//throw new CommandError('ohio')
    const component = {
       translate: '%s [%s] %s \u203a %s',
       color: 'dark_gray',
       with: [
	 {
           translate: '%s%s%s',
             with: [
               {
	         text: 'FNF',
	         color: 'dark_purple'
	       },
	       {
	         text: 'Boyfriend',
                 color: 'aqua'
               },
               {
                 text: 'Bot',
                 color: 'dark_red'
                }
	      
           ]
	},
             bot.options.serverName,
              
        context?.source?.player?.displayName ?? context?.source?.player?.profile?.name,
        message
      ]
    }
    if (!message[0]) {
     bot.sendFeedback({text:'Message is empty', color:'red'}, false)
    } else {
    for (const eachBot of bot.bots) 
    if (bot.options.isCreayun) {
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
