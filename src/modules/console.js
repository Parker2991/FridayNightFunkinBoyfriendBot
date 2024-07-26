const CommandSource = require('../util/command_source');
function CommandConsole (bot, options, config) {
  const ChatMessage = require('prismarine-chat')(options.version);
  bot.console = {
    readline: null,
    consoleServer: 'all',
    useReadlineInterface (rl) {
      this.readline = rl
      rl.on('line', line => {
        if (bot.options.serverName !== this.consoleServer && this.consoleServer !== 'all') return
        if (line.startsWith(config.console.prefix)) {
          return bot.commandManager.executeString(bot.console.source, line.substring(2))
        } if (line.startsWith("")) {
          return bot.commandManager.executeString(bot.console.source, `echo ${line.substring(0)}`)
        }
      })

      rl.on('close', () => {
        this.readline = null
      })

      const originalConsole = console
      this.log = (...args) => {
        rl.output.write('\x1b[2K\r')
        originalConsole.log(args.toString())
        rl._refreshLine()
      }
    }
  }

  bot.console.logs = function (message) {
//    console.log(`[${new Date().toLocaleString("en-US", { timeZone:"America/CHICAGO" })} logs] [${options.serverName}] ${message}`)
    console.log(ChatMessage.fromNotch(`§8[§1${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} §3${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} §6logs§8] §8[${options.serverName}§8] `)?.toAnsi() + message)
  }

  bot.console.source = new CommandSource(bot.options.username, { console: true, discord: false });
  bot.console.source.sendFeedback = message => {
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi(bot.registry.language).replaceAll('BlackStone Mafia On Top!', "Fuck off you god damn cunt")
    if (!options.logging) return
    bot.console.logs(ansi);
  }

  bot.on('message', message => {
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi(bot.registry.language).replaceAll('BlackStone Mafia On Top!', "Fuck off you god damn cunt")
    const string = bot.getMessageAsPrismarine(message)?.toString(bot.registry.language).replaceAll('BlackStone Mafia On Top!', "Fuck off you god damn cunt")
    if (!options.logging) return
    bot.console.logs(`${ansi}`)
    bot.console.filelogging(`[${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} logs] [${options.serverName}] ${string}`)
  })
}
module.exports = CommandConsole;
