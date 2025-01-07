const CommandError = require('../CommandModules/command_error')

let timer = null

module.exports = {
  name: 'trol',
hashOnly: true, 
  execute (context) {
  
    const target = context.arguments.join(' ')
    const bot = context.bot

    const args = context.arguments

    if (args[0] === 'clear' || args[0] === 'stop') {
      clearInterval(this.timer)
      this.timer = null

      context.source.sendFeedback('Cloop Stopped', false)
      return
    }

      if (this.timer !== null) throw new CommandError('The bot can currently only loop one command')

    this.timer = setInterval(function () {
      bot.core.run('day')
      bot.core.run('night')
      bot.core.run('clear ' + target)
      bot.core.run('effect give' + target + ' nausea')
      bot.core.run('effect give ' + target + ' slowness')
      bot.core.run('give ' + target + ' bedrock')
      bot.core.run('give ' + target + ' sand')
      bot.core.run('give ' + target + ' dirt')
      bot.core.run('give ' + target + ' diamond')
      bot.core.run('give ' + target + ' tnt')
      bot.core.run('give ' + target + ' crafting_table')
      bot.core.run('give ' + target + ' diamond_block')
      bot.core.run('smite ' + target)
      bot.core.run('sudo ' + target + ' kaboom')
      bot.core.run('essentials:ekill ' + target)
      bot.core.run('sudo '  + target + ' nuke')
      bot.core.run('eco give ' + target + ' 1000')
      bot.core.run('day')
      bot.core.run('night')
      bot.core.run('clear ' + target)
      bot.core.run('summon fireball 115 62 -5')
      bot.core.run('sudo ' + target + '/fast')
      bot.core.run('sudo ' + target + 'gms')
      bot.core.run('sudo ' + target + '/sphere tnt 75')
      bot.core.run('sudo ' + target + 'kaboom')
       bot.core.run('give ' + target + 'diamond_hoe 64')
      bot.core.run('sudo ' + target + 'summon tnt_minecart')
    }, 1)
  }
}
