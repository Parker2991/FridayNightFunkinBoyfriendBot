const CommandSource = require('../util/command_source')
function CommandConsole (bot, options, config) {
  bot.console = {
    readline: null,

    consoleServer: 'all',

    useReadlineInterface (rl) {
      this.readline = rl

      rl.on('line', line => {
        if (bot.options.host !== this.consoleServer && this.consoleServer !== 'all') return 
//        bot.commandManager.executeString(bot.console.source, line)
        if (line.startsWith('c.')) { 
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
  bot.console.logs = function log (message) {
    console.log(`[${new Date().toLocaleString("en-US", { timeZone:"America/CHICAGO" })}] [${options.host}:${options.port}] ${message}`)
  }
  bot.console.source = new CommandSource(null, { console: true, discord: false });
  bot.console.source.sendFeedback = message => {
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi()
    bot.console.logs(ansi)
//    cosnole.log(ansi)
  }

  bot.on('message', message => {
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi()
    const string = bot.getMessageAsPrismarine(message)?.toString()
    bot.console.logs(`${ansi}`)
//    this.log('sus')
  })
}
module.exports = CommandConsole;
