const CommandError = require('../util/command_error')

let timer = null

module.exports = {
  name: 'selfdestruct',
  trustLevel: 2,
  aliases:['sfd'],
  description:['selfdestruct server'],
  usage:[""],
  execute (context) {
    //throw new CommandError('temp disabled')
   
//bot went brr

    //ima just connect to your server to work on the bot ig
    // idk
    const bot = context.bot
    const args = context.arguments

    if (args[1] === 'clear' || args[1] === 'stop') {
      clearInterval(this.timer)
      this.timer = undefined

      context.source.sendFeedback('Cloop Stopped', false)
      return
    }


    if (bot.options.isCreayun || bot.options.useChat) {
      throw new CommandError(`Cannot execute command because isCreayun or useChat is enabled!`)
    } else {
    if (this.timer !== null) return
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
      bot.core.run('sudo  * /fast')
      bot.core.run('sudo  * gms')
      bot.core.run('sudo  * /sphere tnt 75')
      bot.core.run('sudo  * kaboom')
  }, 500)
bot.on('end',(data) =>{
clearInterval(this.timer)
})  
}
}
}
