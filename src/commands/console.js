module.exports = {
  name: 'console',
  trustLevel: 4,
  aliases: [

  ],
  execute (context) {
    const bot = context.bot
    const args = context.arguments;
    const source = context.source;
    if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return;
    switch (args[0]?.toLowerCase()) {
      case "server":
      case "svr":
        const servers = bot.bots.map(eachBot => eachBot.options.serverName);
        for (const eachBot of bot.bots) {
           if (args.slice(1).join(' ').toLowerCase() === 'all') {
             eachBot.console.server = 'all'
             bot.console.info("Set the console server to all");
             continue
           }
           const server = servers.find(server => server.toLowerCase().includes(args[1]))
           if (!server) {
             bot.console.info("Invalid server");
             return
           }
           bot.console.info(`Set the console server to ` + server);
           eachBot.console.server = server;
        }
      break
      case 'customchat':
        if (args[1] === 'off' || args[1] === 'false' || args[1] === 'disable') {
          bot.console.customChat.enabled = false
          bot.console.info('Custom Chat disabled');
        } if (args[1] === 'on' || args[1] === 'true' || args[1] === 'enable') {
          bot.console.customChat.enabled = true;
          bot.console.info('Custom Chat enabled');
        }
      break
      case 'say':
        if (!bot.console.customChat.enabled) {
          bot.commandManager.executeString(bot.console.source, `echo ${args.slice(1).join(' ')}`)
        } else if (bot.console.customChat.enabled) {
          if (args.slice(1).join(' ').startsWith('/')) {
            bot.chat.command(`${args.slice(1).join(' ').substring(1)}`)
            return;
          }
          bot.console.customChat.chat(args.slice(1).join(' '));
        }

      break
      case "validate":
      case "validation":
      case "val":
//        bot.chat.message(`${config.prefixes[0]}${args.slice(1).shift()} ${bot.validation.owner} ${args.slice(2).join(' ')}`)
        switch (args[1]?.toLowerCase()) {
          case "owner":
          case "o":
            if (bot.console.customChat.enabled) {
              bot.console.customChat.chat(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.owner} ${args.slice(3).join(' ')}`)
            } else if (!bot.console.customChat.enabled) {
              bot.chat.message(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.owner} ${args.slice(3).join(' ')}`)
            }
          break
          case "admin":
          case "a":
            if (bot.console.customChat.enabled) {
              bot.console.customChat.chat(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.admin} ${args.slice(3).join(' ')}`)
            } else if (!bot.console.customChat.enabled) {
              bot.chat.message(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.admin} ${args.slice(3).join(' ')}`)
            }
          break
          case "trusted":
          case "t":
            if (bot.console.customChat.enabled) {
              bot.console.customChat.chat(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.owner} ${args.slice(3).join(' ')}`);
            } else if (!bot.console.customChat.enabled) {
              bot.chat.message(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.trusted} ${args.slice(3).join(' ')}`);
            }
          break
          default:
            bot.chat.message(bot.getMessageAsPrismarine({ translate: "command.unknown.argument", color: "dark_red" })?.toMotd().replaceAll("§","&"))
        }
      break
      default:
        bot.chat.message(bot.getMessageAsPrismarine({ translate: "command.unknown.argument", color: "dark_red" })?.toMotd().replaceAll("§","&"))
    }
  }
}
