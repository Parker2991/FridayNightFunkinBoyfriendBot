const CommandError = require('../util/command_error.js')
module.exports = {
  name: 'netmsg',
  trustLevel: 1,
  aliases: [

  ],
  description: 'netmsg to other servers',
  usages: [
    "<message>"
  ],
  execute (context) {
    const args = context.arguments;
    const bot = context.bot;
    const source = context.source;
    const config = context.config;
    if (config.patches.netmsg) {
      component = [
        { text: '[', color: "dark_gray" },
        { text: bot.options.serverName, color: "gray" },
        { text: "] ", color: "dark_gray" },
        source.player.displayName,
        { text: " \u203a ", color: "dark_gray", bold: false },
        { text: args.join(' '), color: "gray", bold: false }
      ]
    } else {
      component = {
        translate: '[%s] %s \u203a %s',
        color: "dark_gray",
        with: [
          { text: bot.options.serverName, color: "gray" },
          source.player.displayName ?? source.player.profile.name,
          { text: args.join(' '), color: "gray" },
        ]
      }
    }
    bot.bots.filter((eachBot) => {
      if (eachBot.options.isSavage && !eachBot.options.useChat && !eachBot.options.isKaboom || eachBot.options.isCreayun && !eachBot.options.isSavage && !eachBot.options.useChat && !eachBot.options.isKaboom) {
        eachBot.chat.message(`[${bot.options.serverName}] ${bot.getMessageAsPrismarine(source.player.displayName ?? source.player.profile.name)?.toMotd().replaceAll('§','&')} \u203a ${args.join(' ')}`)
      } else if (!eachBot.options.serverName !== "Savage Friends" && !eachBot.options.isSavage && !eachBot.options.useChat && eachBot.options.isKaboom) {
        eachBot.tellraw("@a", component);
      } else if (!eachBot.options.serverName !== "Savage Friends" && !eachBot.options.isSavage && eachBot.options.useChat && eachBot.options.isKaboom) {
        eachBot.chat.message(`&7[&7${bot.options.serverName}&7] ${bot.getMessageAsPrismarine(source.player.displayName ?? source.player.profile.name)?.toMotd().replaceAll('§','&')} &7\u203a ${args.join(' ')}`)
      } else if (eachBot.options.useChat && !eachBot.options.isSavage) {
//        eachBot.chat.message(bot.getMessageAsPrismarine(`[${bot.options.host}:${bot.options.port}] ${source.player.displayName ?? source.player.profile.name} \u203a ${args.join(' ')}`)?.toMotd().replaceAll('§','&'))
        eachBot.chat.message(`&7[&7${bot.options.serverName}&7] ${bot.getMessageAsPrismarine(source.player.displayName ?? source.player.profile.name)?.toMotd().replaceAll('§','&')} &7\u203a ${args.join(' ')}`)
      } else if (!eachBot.options.useChat && !eachBot.options.isSavage) {
        eachBot.tellraw("@a", component);
      }
    })
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const source = context.source;
    const component = {
      translate: '[%s] %s \u203a %s',
      with: [
        bot.options.serverName,
        source.player.displayName ?? source.player.profile.name,
        args.join(' ')
      ]
    }
    bot.bots.filter((eachBot) => {
      if (eachBot.options.serverName === "Savage Friends" && eachBot.options.isSavage && !eachBot.options.useChat && !eachBot.options.isKaboom) {
        eachBot.chat.message(`[${bot.options.serverName}] ${bot.getMessageAsPrismarine(source.player.displayName ?? source.player.profile.name)?.toMotd().replaceAll('§','&')} \u203a ${args.join(' ')}`)
      } else if (!eachBot.options.serverName !== "Savage Friends" && !eachBot.options.isSavage && !eachBot.options.useChat && eachBot.options.isKaboom) {
        eachBot.tellraw("@a", component);
      } else if (!eachBot.options.serverName !== "Savage Friends" && !eachBot.options.isSavage && eachBot.options.useChat && eachBot.options.isKaboom) {
        eachBot.chat.message(`&7[&7${bot.options.serverName}&7] ${bot.getMessageAsPrismarine(source.player.displayName ?? source.player.profile.name)?.toMotd().replaceAll('§','&')} &7\u203a ${args.join(' ')}`)
      } else if (eachBot.options.useChat && !eachBot.options.isSavage) {
        eachBot.chat.message(`&7[&7${bot.options.serverName}&7] ${bot.getMessageAsPrismarine(source.player.displayName ?? source.player.profile.name)?.toMotd().replaceAll('§','&')} &7\u203a ${args.join(' ')}`)
      } else if (!eachBot.options.useChat && !eachBot.options.isSavage) {
        eachBot.tellraw("@a", component);
      }
    })
  }
}
