const CommandError = require('../util/command_error.js')
module.exports = {
  name: 'netmsg',
  trustLevel: 0,
  aliases: [

  ],
  description: 'netmsg to other servers',
  usages: [
    "<message>"
  ],
  execute (context) {
    const args = context.arguments;
    const bot = context.bot;
    const source = context.source
//throw new CommandError('ohio')
    const component = {
      translate: '[%s] %s \u203a %s',
      with: [
        bot.options.serverName,
        source.player.displayName ?? source.player.profile.name,
        args.join(' ')
      ]
    }
    const component2 = {
      translate: '[%s] %s \u203a %s',
      with: [
        bot.options.serverName,
        source.player.displayName ?? source.player.profile.name,
        args.join(' ')
      ]
    }
//  bot.bots.filter((eachBot) => { if (eachBot.options.useChat) eachBot.chat.message('sussy'); 
// else if (!eachBot.options.useChat) eachBot.chat.message('baka!')})
//    for (const eachBot of bot.bots) eachBot.tellraw("@a", component)
//    for (const eachBot of bot.bots) {
    bot.bots.filter((eachBot) => {
      if (eachBot.options.serverName === "Savage Friends" && eachBot.options.isSavage && !eachBot.options.useChat && !eachBot.options.isKaboom) {
        eachBot.chat.message(`[${bot.options.serverName}] ${bot.getMessageAsPrismarine(source.player.displayName ?? source.player.profile.name)?.toMotd().replaceAll('§','&')} \u203a ${args.join(' ')}`)
         
      } else if (!eachBot.options.serverName !== "Savage Friends" && !eachBot.options.isSavage && !eachBot.options.useChat && eachBot.options.isKaboom) {
        eachBot.tellraw("@a", component);
//      } else if (eachBot.options.serverName === "Savage Friends" && eachBot.options.isSavage && !eachBot.options.useChat && eachBot.options.isKaboom) {
//        eachBot.tellraw("@a", component2);
  //    } else if (eachBot.options.serverName === "Savage Friends" && eachBot.options.isSavage && eachBot.options.useChat && !eachBot.options.isKaboom) {
  //      eachBot.chat.message(bot.getMessageAsPrismarine(`[${bot.options.serverName}] ${source.player.displayName ?? source.player.profile.name} \u203a ${args.join(' ')}`)?.toMotd().replaceAll('§','&'))
      } else if (!eachBot.options.serverName !== "Savage Friends" && !eachBot.options.isSavage && eachBot.options.useChat && eachBot.options.isKaboom) {
        eachBot.chat.message(`&7[&7${bot.options.serverName}&7] ${bot.getMessageAsPrismarine(source.player.displayName ?? source.player.profile.name)?.toMotd().replaceAll('§','&')} &7\u203a ${args.join(' ')}`)
      } else if (eachBot.options.useChat && !eachBot.options.isSavage) {
//        eachBot.chat.message(bot.getMessageAsPrismarine(`[${bot.options.host}:${bot.options.port}] ${source.player.displayName ?? source.player.profile.name} \u203a ${args.join(' ')}`)?.toMotd().replaceAll('§','&'))
        eachBot.chat.message(`&7[&7${bot.options.serverName}&7] ${bot.getMessageAsPrismarine(source.player.displayName ?? source.player.profile.name)?.toMotd().replaceAll('§','&')} &7\u203a ${args.join(' ')}`)
      } else if (!eachBot.options.useChat && !eachBot.options.isSavage) {
        eachBot.tellraw("@a", component);
      }
    })
/*      if (bot.options.isSavage && !bot.options.isKaboom) {
        if (bot.options.serverName === "Savage Friends") {
//          eachBot.chat.message(bot.getMessageAsPrismarine(`[${bot.options.serverName}] ${source.player.displayName ?? source.player.profile.name} \u203a ${args.join(' ')}`)?.toMotd().replaceAll('§', '&'))
//            eachBot.chat.message(`&7[&7${bot.options.serverName}&7] ${bot.getMessageAsPrismarine(source.player.displayName ?? source.player.profile.name)?.toMotd()?.replaceAll('§','&')} &7\u203a ${args.join(' ')}`)
        }
      } else {
        eachBot.tellraw("@a", component)
      }*/
//    }
  }
}
