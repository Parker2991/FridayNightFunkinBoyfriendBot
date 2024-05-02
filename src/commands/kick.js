const CommandError = require('../CommandModules/command_error')

const timer = null

module.exports = {
  name: 'kick',
  description: ['kicks a player'],
  trustLevel: 1,
  aliases: [],
  usage: [
   'sussy <player>', 
   'invalidstring <player>',
   'msg <player> <integer>',
   'kick <player> <integer>',
   'me <integer>',
   'whisper <player> <integer>',
  ],
  execute (context) {
    const args = context.arguments
    const bot = context.bot
    //if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
    if (bot.options.useChat ?? bot.options.isCreayun) {
        throw new CommandError('Cannot execute command make sure useChat and isCreayun options are not enabled')
  //      bot.chat('e')
    } else {
    switch (args[1]) {
      case 'sussy':
        if (args[2] === 'clear' || args[2] === 'stop') {
          clearInterval(this.timer)
          this.timer = null

          bot.sendFeedback('Cloop Stopped', false)
          return
        }

        //  if (this.timer !== null) throw new CommandError('The bot can currently only loop one command')
        // anti fard

        const target = context.player// let me hashonly it rq
        this.timer = setInterval(function () { // Wait, is this command public?
          repeat(bot, 400, `minecraft:tellraw ${args[2]} ${JSON.stringify(bot.exploits.sussy)}`)
        }, 80)
        function repeat (bot, repetitions, cmd) {
          for (let i = 0; i < repetitions; i++) {
            bot.core.run(cmd)
          }
        }
        break
      case 'invalidstring':
        bot.core.run(`minecraft:tellraw ${args[2]} ${JSON.stringify(bot.exploits.invalidstring)}`)
        break
      case 'msg':
        if (isNaN(args[3]) === true) {
          bot.sendError('Argument is not a integer!')
        } else {
          bot.core.run(`msg ${args[2]} ` + `@e `.repeat(`${args[3]}`))
        }
        break
      case 'kick':
       if (isNaN(`${args[3]}`)) {
          bot.sendError('Arguments is not a integer!')
        } else {  
        bot.command(`minecraft:kick ${args[2]} ` + `@e `.repeat(`${args[3]}`)) 
        }
        break
      case 'me':
        bot.core.run(`me ` + '@e '.repeat(`${args[2]}`))
        break
      case 'item':
        bot.core.run(`minecraft:give ${args[2]} ${bot.exploits.item}`)
        break
      case 'whisper':
        if (isNaN(args[3])) {
        bot.sendError('Argument is not a integer!')
        } else {
        bot.core.run(`minecraft:w ${args[2]} ` + `${bot.exploits.EntitySelector} `.repeat(`${args[3]}`))
        }
        break
      }
    }
  }
}

