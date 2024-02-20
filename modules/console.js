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
  const ansimap = {
    0: '\x1b[0m\x1b[30m',
    1: '\x1b[0m\x1b[34m',
    2: '\x1b[0m\x1b[32m',
    3: '\x1b[0m\x1b[36m',
    4: '\x1b[0m\x1b[31m',
    5: '\x1b[0m\x1b[35m',
    6: '\x1b[0m\x1b[33m',
    7: '\x1b[0m\x1b[37m',
    8: '\x1b[0m\x1b[90m',
    9: '\x1b[0m\x1b[94m',
    a: '\x1b[0m\x1b[92m',
    b: '\x1b[0m\x1b[96m',
    c: '\x1b[0m\x1b[91m',
    d: '\x1b[0m\x1b[95m',
    e: '\x1b[0m\x1b[93m',
    f: '\x1b[0m\x1b[97m',
    r: '\x1b[0m',
    l: '\x1b[1m',
    o: '\x1b[3m',
    n: '\x1b[4m',
    m: '\x1b[9m',
    k: '\x1b[6m'
  }
  bot.console.source = new CommandSource(null, { console: true, discord: false });
  bot.console.source.sendFeedback = message => {
  const lang = require('../lolus.json')
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi() 
    bot.console.log(ansi)
  }

  bot.on('message', message => {
    const lang = require('../lolus.json')//idk   Parker I can help
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi()
    const string = bot.getMessageAsPrismarine(message)?.toString()
   
    const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
  //  const logtag = (JSON.stringify({"text":"[LOGS]", "color":"#00FF00"}))
    bot.console.log(`[${now} \x1b[0m\x1b[33mLOGS\x1b[0m] [${options.host}:${options.port}] ${ansi}`)

  })
}
module.exports = inject
/*const message = `[${moment().format('DD/MM/YY HH:mm:ss')} ${prefix}§r] [${bot.server.host}] `
    const component = chatMessage.MessageBuilder.fromString(message).toJSON()
    */