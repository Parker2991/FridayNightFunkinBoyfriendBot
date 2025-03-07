module.exports = {
  data: {
    name: "netmsg",
    aliases: [
      "networkmessage",
      "netmessage"
    ],
    description: "send a message to other servers",
    trustLevel: 0,
    usages: [
      "message"
    ]
  },
  execute (context) {
    const bot = context.bot;
    const config = context.config;
    const args = context.arguments;
    const source = context.source;

    let component = [];

    if (bot.options.private === true) {
      component.push({
        translate: "[%s] %s \u203a %s",
        color: config.colors.commands.tertiary,
        with: [
          { text: `${bot.options.serverName}`, color: config.colors.commands.primary },
          source?.player?.displayName ?? source?.player?.profile?.name,
          { text: `${args.join(' ')}`, color: config.colors.commands.secondary }
        ]
      })
    } else {
      component.push({
        translate: "[%s:%s] %s \u203a %s",
        color: config.colors.commands.tertiary,
        with: [
          { text: `${bot.options.host}`, color: config.colors.commands.primary },
          { text: `${bot.options.port}`, color: config.colors.commands.primary },
          source.player.displayName ?? source.player.profile.name,
          { text: `${args.join(' ')}`, color: config.colors.commands.secondary }
        ]
      })
    }

    for (const eachBot of bot.bots) {
/*      if (eachBot.options.mode === "savageFriends" || eachBot.options.mode === "creayun") {
        eachBot.chat.message(`${bot.getMessageAsPrismarine(component)?.toMotd()?.replaceAll('§','&')}`)
      } else {*/
        eachBot.tellraw("@a", component)
//      }
    }
  }
}
