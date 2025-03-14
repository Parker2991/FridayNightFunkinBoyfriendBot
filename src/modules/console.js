const CommandSource = require('../util/command_source');
const prismarineChat = require('prismarine-chat')('1.20.2');

function inject (context) {
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
    source: new CommandSource({
      profile: {
        name: bot._client.username
      }, uuid: bot._client.uuid },
      { console: true, discord: false
    }),

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
    debug (message) {
      console.log(prismarineChat.fromNotch(`§8[§1${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} §3${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} §6debug§8] §8[${options.serverName}§8] `)?.toAnsi() + message)
    }
  }
  setInterval(() => ratelimit = 0, 1000 * 2);

  bot.on('message', (message) => {
    if (!options.logging) return;

    if (ratelimit > 10 || message?.translate === "fnfboyfriendbot_command_block_output" || message?.translate === "fnfboyfriendbot_request_command_suggestion") return;
    bot.console.log(bot.getMessageAsPrismarine(message)?.toAnsi());
    bot.console.fileLogger(`[${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} logs] [${options.serverName}] ${bot.getMessageAsPrismarine(message)?.toString()}`);
    ratelimit++
  });

}

module.exports = {
  data: {
    enabled: true,
    name: "console",
    type: "logging"
  },
  inject
};
