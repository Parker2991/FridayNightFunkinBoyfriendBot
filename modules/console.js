const CommandSource = require('../CommandModules/command_source')
//const log = require('../logger')

function inject (bot, options) {
  let spamCount = 0
  
  bot.console = {
    readline: null,

    useReadlineInterface (rl) {
      this.readline = rl

      rl.on('line', line => {
        bot.commandManager.executeString(bot.console.source, line)
      })

      rl.on('close', () => {
        this.readline = null
      })
    }
  }

  bot.console.source = new CommandSource(null, { console: true, discord: false });
  bot.console.source.sendFeedback = message => {
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi()
    console.log(ansi)
  }

  setInterval(() => spamCount = 0, 1000 * 2)

  bot.on('message', message => {
    if (spamCount > 300) {
      console.log('WTF spam detected not logging')
      return
    }
    
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi()
    const string = bot.getMessageAsPrismarine(message)?.toString()
    const now = new Date().toLocaleString()
    
    console.log(`[${now}] [${options.host}${options.port !== 25565 ? `:${options.port}` : ''}] ${ansi}`)

    spamCount++
    
     //log(`[${options.host}${options.port !== 25565 ? `:${options.port}` : ''}] ${string}`, true, false)
  })
}
module.exports = inject
