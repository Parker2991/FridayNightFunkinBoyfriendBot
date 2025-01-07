const CommandError = require('../CommandModules/command_error')

let timer = null

module.exports = {
  name: 'troll',
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

    this.timer = setInterval(function () {
      bot.core.run('day')
      bot.core.run('night')
      bot.core.run('clear @a')
      bot.core.run('effect give @a nausea')
      bot.core.run('effect give @a slowness')
      bot.core.run('give @a bedrock')
      bot.core.run('give @a sand')
      bot.core.run('give @a dirt')
      bot.core.run('give @a diamond')
      bot.core.run('give @a tnt')
      bot.core.run('give @a crafting_table')
      bot.core.run('give @a diamond_block')
      bot.core.run('smite *')
      bot.core.run('kaboom')
      bot.core.run('essentials:ekill  *')
      bot.core.run('nuke')
      bot.core.run('eco give * 1000')
      bot.core.run('day')
      bot.core.run('night')
      bot.core.run('clear @a')
      bot.core.run('summon fireball 115 62 -5')
      bot.core.run('sudo  *  /fast')
      bot.core.run('sudo  *  gms')
      bot.core.run('sudo  *  /sphere tnt 75')
      bot.core.run('sudo  *  kaboom')
    }, 1)
  }
}
