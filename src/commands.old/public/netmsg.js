const CommandError = require('../../util/command_error.js')
module.exports = {
  data: {
    name: 'netmsg',
    trustLevel: 0,
    aliases: [

    ],
    description: 'netmsg to other servers',
    usages: [
      "<message>"
    ],
  },
  execute (context) {
    const args = context.arguments;
    const bot = context.bot;
    const source = context.source;
    const config = context.config;
    if (bot.options.private) {
      component = {
        translate: '[%s] %s \u203a %s',
        color: "dark_gray",
        with: [
          { text: bot.options.serverName, color: "blue" },
          source.player.displayName ?? source.player.profile.name,
          { text: args.join(' '), color: "blue" },
        ]
      }
    } else if (!bot.options.private) {
      component = {
        translate: '[%s:%s] %s \u203a %s',
        color: "dark_gray",
        with: [
          { text: bot.options.host, color: "blue" },
          { text: `${bot.options.port}`, color: "gold" },
          source.player.displayName ?? source.player.profile.name,
          { text: args.join(' '), color: "blue" },
        ]
      }
    }
    bot.bots.filter((eachBot) => {
      if (!eachBot.options.isKaboom || eachBot.options.useChat) {
        eachBot.chat.message(`${bot.getMessageAsPrismarine(component)?.toMotd().replaceAll('§','&')}`);
      } else if (eachBot.options.isKaboom && !eachBot.options.useChat) {
        eachBot.tellraw("@a", component);
      }
    })
  },

  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const source = context.source;
    if (bot.options.private) {
      component = {
        translate: '[%s] %s \u203a %s',
        color: "dark_gray",
        with: [
          { text: bot.options.serverName, color: "blue" },
          source.player.displayName ?? source.player.profile.name,
          { text: args.join(' '), color: "blue" },
        ]
      }
    } else if (!bot.options.private) {
      component = {
        translate: '[%s:%s] %s \u203a %s',
        color: "dark_gray",
        with: [
          { text: bot.options.host, color: "blue" },
          { text: `${bot.options.port}`, color: "gold" },
          source.player.displayName ?? source.player.profile.name,
          { text: args.join(' '), color: "blue" },
        ]
      }
    }
    bot.bots.filter((eachBot) => {
      if (!eachBot.options.isKaboom || eachBot.options.useChat) {
        eachBot.chat.message(`${bot.getMessageAsPrismarine(component)?.toMotd().replaceAll('§','&')}`);
      } else if (eachBot.options.isKaboom && !eachBot.options.useChat) {
        eachBot.tellraw("@a", component);
      }
    })
  }
}
