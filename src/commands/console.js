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
             eachBot.console.consoleServer = 'all'
             bot.console.logs("Set the console server to all");
             continue
           }
           const server = servers.find(server => server.toLowerCase().includes(args[1]))
           if (!server) {
             bot.console.logs("Invalid server");
             return
           }
           bot.console.logs(`Set the console server to ` + server);
           eachBot.console.consoleServer = server;
        }
      break
      case "validate":
      case "validation":
      case "val":
//        bot.chat.message(`${config.prefixes[0]}${args.slice(1).shift()} ${bot.validation.owner} ${args.slice(2).join(' ')}`)
        switch (args[1]?.toLowerCase()) {
          case "owner":
          case "o":
            bot.chat.message(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.owner} ${args.slice(3).join(' ')}`)
          break
          case "admin":
          case "a":
            bot.chat.message(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.admin} ${args.slice(3).join(' ')}`)
          break
          case "trusted":
          case "t":
            bot.chat.message(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.trusted} ${args.slice(3).join(' ')}`)
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
