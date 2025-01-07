const CommandError = require('../CommandModules/command_error')

let timer = null

module.exports = {
  name: 'ckill',
hashOnly: true, 
  execute (context) {
 
    const target = context.arguments.join(' ')
    const bot = context.bot
const args = context.arguments

    if (args[0] === 'clear' || args[0] === 'stop') {
      clearInterval(timer)
      timer = null
      return
    }

    if (timer !== null) return

    setInterval(function () {
      bot.core.run('sudo ' + target + ' suicide')
    }, 1)
  }
}
