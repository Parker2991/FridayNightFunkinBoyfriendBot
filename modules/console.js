const CommandSource = require('../CommandModules/command_source')
//const log = require('../logger')

function inject (bot, options) {
   
  bot.console = {
    readline: null,

    consoleServer: 'all',

    useReadlineInterface (rl) {
      this.readline = rl

      rl.on('line', line => {
        if (bot.options.host !== this.consoleServer && this.consoleServer !== 'all') return
        
        bot.commandManager.executeString(bot.console.source, line)
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
 
  bot.console.source = new CommandSource(null, { console: true, discord: false });
  bot.console.source.sendFeedback = message => {
  const lang = require('../lolus.json')
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi(lang) 
    bot.console.log(ansi)
  }
  bot.on('message', message => {
    const lang = require('../lolus.json')//idk   Parker I can help
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi(lang)
    const string = bot.getMessageAsPrismarine(message)?.toString()
   
    const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
    //new Date().toLocaleString("en-US",{timeZone:"America/LOS_ANGELES"})
    bot.console.log(`[${now}] [${options.host}:${options.port}] ${ansi}`)
//`[${now}] [${options.host}${options.port !== 25565 ? `:${options.port}` : ''}] ${ansi}`
    
    // log(`[${now}] [${options.host}:${options.port}] ${string}`, true, false)
  })
}
module.exports = inject
