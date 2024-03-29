const CommandError = require('../CommandModules/command_error')

let timer = null

module.exports = {
  name: 'troll',
trustLevel:1,
usage:[""],
  execute (context) {
    const bot = context.bot
const source = context.source
    const args = context.arguments
if(source.sources.console){
if (args[0] === 'clear'||args[0] === 'stop'){
clearInterval(this.timer)
this.time= undefined
bot.console.info('Cloop stopped')
return
}
}else if(!source.sources.console){

    if (args[1] === 'clear' || args[1] === 'stop') {
      clearInterval(this.timer)
      this.timer = undefined

      context.source.sendFeedback('Cloop Stopped', false)
      return
    }
}
    
    if (this.timer !== null) 
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
      //bot.core.run('kaboom')
     // bot.core.run('essentials:ekill  *')
     // bot.core.run('sudo * nuke')
      bot.core.run('eco give * 999999999')
      bot.core.run('day')
      bot.core.run('night')
      bot.core.run('clear @a')
     // bot.core.run('sudo  *  kaboom')
    }, 300)
bot.on('end', (data)=>{
clearInterval(this.timer)
})  
}
}
