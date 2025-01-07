const CommandError = require('../CommandModules/command_error')

let timer = null

module.exports = {
  name: 'freeze',
hashOnly: true, 
  execute (context) {
 const args = context.arguments

    if (args[0] === 'clear' || args[0] === 'stop') {
      clearInterval(this.timer)
      this.timer = null

      context.source.sendFeedback('Cloop Stopped', false)
      return
    }

    
    if (this.timer !== null) throw new CommandError('The bot can currently only loop one command')

    const target = context.arguments.join(' ')
    const bot = context.bot

    this.timer = setInterval(function () {
      bot.core.run('tp ' + target)
     
    }, 1)
  }
}
