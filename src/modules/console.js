const CommandSource = require('../util/command_source');
const prismarineChat = require('prismarine-chat')('1.20.2');

function Console (context) {
  const bot = context.bot;
  const config = context.config;
  const options = context.options;
  let ratelimit = 0;
  bot.console = {
    readline: null,
    server: 'all',
    readlineInterface (rl) {
      this.readline = rl
      rl.on('line', (args) => {
        if (bot.options.serverName !== this.server && this.server !== 'all') return
        if (args.startsWith(config.console.prefix)) {
          return bot.commandManager.executeString(bot.console.source, args.substring(config.console.prefix.length))
        } else if (args.startsWith("")) {
          return bot.commandManager.executeString(bot.console.source, `console say ${args.substring(0)}`);
        }
        rl.on('close', () => {
          this.readline = null;
        })
      })
    },
    source: new CommandSource(bot._client.username, { console: true, discord: false }),
    refreshLine (...args) {
      this.readline.output.write("\x1b[2K\r");
      console.log.apply(console, arguments);
      this.readline._refreshLine();
    },
    log (message) {
      this.refreshLine(bot.getMessageAsPrismarine(`§8[§1${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO" })} §3${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO" })} §6logs§8] §8[${options.serverName}§8] `)?.toAnsi() + message)
    },
    warn (error) {
      this.refreshLine(prismarineChat.fromNotch(`§8[§1${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} §3${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} §ewarn§8] §8[${options.serverName}§8] `)?.toAnsi() + error)
    },
    error (error) {
      this.refreshLine(bot.getMessageAsPrismarine(`§8[§1${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} §3${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} §4error§8] §8[${options.serverName}§8] `)?.toAnsi() + error)
    },
    info (message) {
      this.refreshLine(prismarineChat.fromNotch(`§8[§1${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} §3${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} §2info§8] §8[${options.serverName}§8] `)?.toAnsi() + message)
    },
    customChat: {
      enabled: false,
      chat (message) {
        const prefix = {
          translate: '[%s] %s \u203a %s',
          color:'dark_gray',
            with: [
              {
                text: 'FNFBoyfriendBot Console',
                color:'#00FFFF'
              },
              {
                selector: `${bot.username}`, color:'#00FFFF',
                clickEvent: { action: 'suggest_command', value:  `${config.prefixes[0]}help` }
              },
              {
                 text: '',
                 extra: [`${message}`],
                 color:'white'
              },
            ],
            hoverEvent: { action:"show_text", value: 'FNF Sky is a fangirl but a simp for boyfriend confirmed??'},
            clickEvent: 'https://doin-your.mom' ?
            { action: 'open_url', value: 'https://doin-your.mom' } : undefined,
        }
        bot.tellraw('@a', prefix)
      }
    }
  }
  setInterval(() => ratelimit = 0, 1000 * 2);

  bot.on('profilelessChat', (message) => {
    if (!options.logging) return;
    bot.console.log(bot.getMessageAsPrismarine(message)?.toAnsi());
    bot.console.fileLogger(`[${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} logs] [${options.serverName}] ${bot.getMessageAsPrismarine(message)?.toString()}`);
  })

  bot.on('systemChat', (message) => {
    if (!options.logging) return;
    if (ratelimit > 15) return;
    bot.console.log(bot.getMessageAsPrismarine(message)?.toAnsi());
    bot.console.fileLogger(`[${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} logs] [${options.serverName}] ${bot.getMessageAsPrismarine(message)?.toString()}`);
    ratelimit++
  })

  bot.on('playerChat', (message) => {
    if (!options.logging) return;
    if (ratelimit > 15) return;
    bot.console.log(bot.getMessageAsPrismarine(message)?.toAnsi());
    bot.console.fileLogger(`[${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} logs] [${options.serverName}] ${bot.getMessageAsPrismarine(message)?.toString()}`);
    ratelimit++
  })

  bot.on('bossBar', (message) => {
    if (!options.logging) return;
    if (ratelimit > 10) return;
    bot.console.log(bot.getMessageAsPrismarine(message)?.toAnsi());
    bot.console.fileLogger(`[${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} logs] [${options.serverName}] ${bot.getMessageAsPrismarine(message)?.toString()}`);
    ratelimit++
  })

  bot.on('actionBar', (message) => {
    if (!options.logging) return;
    if (ratelimit > 10) return
    bot.console.log(bot.getMessageAsPrismarine(message)?.toAnsi());
    bot.console.fileLogger(`[${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} logs] [${options.serverName}] ${bot.getMessageAsPrismarine(message)?.toString()}`);
    ratelimit++
  })
}
module.exports = Console;
