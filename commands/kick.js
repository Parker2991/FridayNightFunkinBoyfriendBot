const CommandError = require('../CommandModules/command_error')

let timer = null

module.exports = {
  name: 'kick',
hashOnly:true,//now its not
   description:['kicks a player'],
       
        consoleOnly:false,
        ownerOnly:false,
        aliases:[],
  execute(context) {
   // throw new CommandError('temp disabled')
    //throw new CommandError('command temporarily disabled until hashing is implemented')
    const args = context.arguments

    if (args[0] === 'clear' || args[0] === 'stop') {
      clearInterval(this.timer)
      this.timer = null

      context.source.sendFeedback('Cloop Stopped', false)
      return
    }


    //  if (this.timer !== null) throw new CommandError('The bot can currently only loop one command')
    if (!args && !args[0] && !args[1]) return // anti fard
    
    const target = context.player//let me hashonly it rq
    this.timer = setInterval(function() { // Wait, is this command public? 
      repeat(context.bot, 400, `tellraw ${args[1]} {"text":"${'ඞ'.repeat(20000)}","bold":true,"italic":true,"obfuscated":true,"color":"#FF0000"}`)

    }, 10)
  }
}//i found that there is a limit

// Repeat the command over and over.
function repeat(bot, repetitions, cmd) {
  for (let i = 0; i < repetitions; i++) {
    bot.core.run(cmd)
  }
}