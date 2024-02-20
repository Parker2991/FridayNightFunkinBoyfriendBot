const moment = require('moment-timezone')

function inject (bot, _dcclient, config, rl) {
  // readline > fix on log
  function log (...args) {
    rl.output.write('\x1b[2K\r')
    console.log(args.toString())
    rl._refreshLine()
  };

  const chatMessage = require('prismarine-chat')(bot.version)

  function prefix (prefix, _message) {
    const message = `[${moment().format('DD/MM/YY HH:mm:ss')} ${prefix}§r] [${bot.server.host}] `
    const component = chatMessage.MessageBuilder.fromString(message).toJSON()
    return chatMessage.fromNotch(component).toAnsi() + _message
  }
const originalConsole = console
      this.log = (...args) => {
        rl.output.write('\x1b[2K\r')
        originalConsole.log(args.toString())
        rl._refreshLine()
      }
  bot.console = {}
  bot.console.host = 'all'
  bot.console.log = function (message) {
    log(prefix('&6LOG', message))
  }
  bot.console.info = function (message) {
    log(prefix('&aINFO', message))
  }
  bot.console.error = function (error) {
    log(prefix('&cERROR', typeof error === 'string' ? error : error.stack))
  }

  // previous message is op feature to have in console :)
  let previousMessage = ''
  bot.on('message', (message) => {
    if (!bot.options.logging) return
    if (previousMessage === message.toString()) return
    previousMessage = message.toString()
   bot.console.log(message.toAnsi())
  })

  if (!config.console) return

  function handleLine (line) {
    try {
      if (line.toLowerCase() === '' ||
        line.toLowerCase().startsWith(' ')) return

      if (line.startsWith('.csvr ')) {
        const host = line.substring(6)
        for (const eachBot of bot.getBots()) eachBot.console.host = host
        bot.console.info(`Host set to: ${host}`)
        return
      }

      if (bot.server.host !== bot.console.host && bot.console.host !== 'all') return
      if (line === '.kill') process.exit()

      if (line.startsWith('.')) {
        return bot.command_handler.run(
          bot.username,
          config.prefixes[0] + line.substring(1),
          bot.uuid,
          null,
          'h',
          'o'
        )
      }
      bot.tellraw('@a', [
        {
          text: '[',
          color: 'dark_gray'
        },
        {
          text: `${bot.username} Console`,
          color: 'gray'
        },
        {
          text: '] ',
          color: 'dark_gray'
        },
        {
          text: 'chayapak ',
          color: 'green'
        },
        {
          text: '\u203a ',
          color: 'dark_gray'
        },
        chatMessage.MessageBuilder.fromString('&7' + line)
      ])
    } catch (e) {
      bot.console.error(e)
    }
  }

  rl.on('line', handleLine)

  bot.on('end', () => {
    rl.off('line', handleLine)
  })
}

module.exports = { inject }
