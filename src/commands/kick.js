const CommandError = require('../CommandModules/command_error')

const timer = null

module.exports = {
  name: 'kick',

  description: ['kicks a player'],

  trustLevel: 1,
  aliases: [],
  usage: ['sussy <player>', 'invalidstring <player>'],
  execute (context) {
    // throw new CommandError('temp disabled')
    // throw new CommandError('command temporarily disabled until hashing is implemented')
    const args = context.arguments
    const bot = context.bot
    if (!args && !args[0] && !args[1] && !args[2]) return
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
          repeat(context.bot, 400, `tellraw ${args[2]} {"text":"${'ඞ'.repeat(20000)}","bold":true,"italic":true,"obfuscated":true,"color":"#FF0000"}`)
        }, 10)

        // i found that there is a limit

        // Repeat the command over and over.
        function repeat (bot, repetitions, cmd) {
          for (let i = 0; i < repetitions; i++) {
            bot.core.run(cmd)
          }
        }
        break
      case 'invalidstring':
        bot.core.run(`minecraft:tellraw ${args[2]} ${process.env.invalidstring}`)
        break
    }
  }
}
