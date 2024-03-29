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
       translate: '[%s] [%s] %s \u203a %s',
      with: [
        {
          translate: '%s%s%s',
          bold:false,
          with: [
            {
              text: 'FNF',
              bold: true,
              color: 'dark_purple'
            },
            {
              text: 'Boyfriend',
              bold: true,
              color: 'aqua'
            },
            {
              text: 'Bot',
              bold: true,
              color: 'dark_red'
            },
          ],
        },
              bot.options.serverName,
              
        context.source.player.displayName ?? context.source.player.profile.name,
     message
      ]//command.split(' ')[0]
    }//string.replace()
    if (!message[0]) {
      context.source.sendFeedback({text:'Message is empty', color:'red'}, false)
    } else {
    for (const eachBot of bot.bots) 
if(!bot.options.Core.enabled){
eachBot.chat(`[${bot.options.serverName}] ${bot.getMessageAsPrismarine(context.source.player.displayName ?? context.source.player.profile.name)?.toMotd().replaceAll('§','&')} \u203a ${message}`)
}else{
eachBot.tellraw(component)
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
