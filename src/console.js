const CommandSource = require('../util/command_source');
function CommandConsole (bot, options, config) {
  const ChatMessage = require('prismarine-chat')(options.version);
//  let ratelimit = 0;
  bot.console = {
    readline: null,
    consoleServer: 'all',
    useReadlineInterface (rl) {
      this.readline = rl
      rl.on('line', line => {
        if (bot.options.serverName !== this.consoleServer && this.consoleServer !== 'all') return
        if (line.startsWith(config.console.prefix)) {
          return bot.commandManager.executeString(bot.console.source, line.substring(config.console.prefix.length))
        } if (line.startsWith("")) {
          return bot.commandManager.executeString(bot.console.source, `console say ${line.substring(0)}`)
        }
      })

      rl.on('close', () => {
        this.readline = null
      })
      log = function (...args) {
        rl.output.write("\x1b[2K\r");
        console.log.apply(console, arguments);
        rl._refreshLine();
      }
    }
  }
  bot.console.logs = function (message) {
    log(ChatMessage.fromNotch(`§8[§1${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} §3${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} §6logs§8] §8[${options.serverName}§8] `)?.toAnsi() + message)
  }
  bot.console.info = function (message) {
    log(ChatMessage.fromNotch(`§8[§1${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} §3${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} §2info§8] §8[${options.serverName}§8] `)?.toAnsi() + message)
  }
  bot.console.warn = function (message) {
    console.log(ChatMessage.fromNotch(`§8[§1${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} §3${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} §ewarn§8] §8[${options.serverName}§8] `)?.toAnsi() + message)
  }
  bot.console.source = new CommandSource(bot.options.username, { console: true, discord: false });
  bot.console.source.sendFeedback = message => {
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi(bot.registry.language).replaceAll('BlackStone Mafia On Top!', "Fuck off you god damn cunt")
    if (!options.logging) return
    bot.console.logs(ChatMessage.fromNotch('§8[§6Command§8] ')?.toAnsi() + ansi);
  }
  bot.console.error = function (message) {
   console.log(ChatMessage.fromNotch(`§8[§1${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} §3${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} §4error§8] §8[${options.serverName}§8] `)?.toAnsi() + message)
  }
  bot.console.customChat = {
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
              clickEvent: { action: 'suggest_command', value:  '~help' }
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
//  setInterval(() => ratelimit = 0, 1000)
  bot.on('message', message => {
/*    if (ratelimit > 300) {
//      bot.console.warn('WTF spam detected not logging')
      bot.options.logging = false;
      return;
    }*/
//    options.logging = true;
//    if (ratelimit++ >= 300) return
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi(bot.registry.language).replaceAll('BlackStone Mafia On Top!', "Fuck off you god damn cunt")
    const string = bot.getMessageAsPrismarine(message)?.toString(bot.registry.language).replaceAll('BlackStone Mafia On Top!', "Fuck off you god damn cunt")
//    if (!options.logging) return
//    bot.console.logs(`${ansi}`)
//    bot.console.filelogging(`[${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} logs] [${options.serverName}] ${string}`)
  })
}
module.exports = CommandConsole;
