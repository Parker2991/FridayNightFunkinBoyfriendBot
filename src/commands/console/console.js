module.exports = {
  data: {
    name: 'console',
    trustLevel: 4,
    description: "runs commands made for the bots console",
    aliases: [
      "c"
    ],
    usages: [
      'server/srv <all/servername>',
      'customchat <on/true/enable/off/false/disable>',
      'say <message>',
      'validate/validation/val <owner/o/admin/a/trusted/t>',
      'logging/togglelogging/logtoconsole <on/true/enable/off/false/disable>'
    ],
  },
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
          bot.customChat.enabled = false
          bot.console.info('Custom Chat disabled');
        } if (args[1] === 'on' || args[1] === 'true' || args[1] === 'enable') {
          bot.customChat.enabled = true;
          bot.console.info('Custom Chat enabled');
        }
      break
      case 'say':
        if (bot.customChat.enabled === false) {
          bot.chat.send(args.slice(1).join(' '))
//          bot.commandManager.executeString(bot.console.source, `echo ${args.slice(1).join(' ')}`)
        } else if (bot.customChat.enabled === true) {
          if (args.slice(1).join(' ').startsWith('/')) {
            bot.chat.command(`${args.slice(1).join(' ').substring(1)}`)
            return;
          }
          bot.customChat.chat(args.slice(1).join(' '));
        }

      break
      case "validate":
      case "validation":
      case "val":
        switch (args[1]?.toLowerCase()) {
          case "owner":
          case "o":
            if (bot.customChat.enabled === true) {
              bot.customChat.chat(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.owner} ${args.slice(3).join(' ')}`)
            } else if (bot.customChat.enabled === false) {
              bot.chat.message(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.owner} ${args.slice(3).join(' ')}`)
            }
          break
          case "admin":
          case "a":
            if (bot.customChat.enabled === true) {
              bot.customChat.chat(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.admin} ${args.slice(3).join(' ')}`)
            } else if (bot.customChat.enabled === false) {
              bot.chat.message(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.admin} ${args.slice(3).join(' ')}`)
            }
          break
          case "trusted":
          case "t":
            if (bot.customChat.enabled === true) {
              bot.customChat.chat(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.trusted} ${args.slice(3).join(' ')}`);
            } else if (bot.customChat.enabled === false) {
              bot.chat.message(`${config.prefixes[0]}${args.slice(2).shift()} ${bot.validation.trusted} ${args.slice(3).join(' ')}`);
            }
          break
          default:
            bot.chat.message(bot.getMessageAsPrismarine({ translate: "command.unknown.argument", color: "dark_red" })?.toMotd().replaceAll("§","&"))
        }
      break
      case 'logging':
      case 'togglelogging':
      case 'logtoconsole':
        switch (args[1]?.toLowerCase()) {
          case 'on':
          case 'enable':
          case 'enabled':
          case 'true':
            if (bot.options.logging === true) {
              bot.console.info(`logging for ${bot.options.serverName} is already enabled!`);
            } else {
              bot.console.info(`logging for ${bot.options.serverName} is now enabled`);
              bot.options.logging = true;
            }
          break
          case 'off':
          case 'disable':
          case 'disabled':
          case 'false':
            if (bot.options.logging === false) {
              bot.console.info(`logging for ${bot.options.serverName} is already disabled!`);
            } else {
              bot.console.info(`logging for ${bot.options.serverName} is now disabled`);
              bot.options.logging = false;
            }
          break
        }
      break
      default:
        bot.chat.message(bot.getMessageAsPrismarine({ translate: "command.unknown.argument", color: "dark_red" })?.toMotd().replaceAll("§","&"))
    }
  }
}
