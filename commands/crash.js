const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'crash',
  hashOnly: true, 
  execute (context) {

    const bot = context.bot

    bot.core.run(`execute as @e${' as @p[limit=99]'.repeat(Math.floor((32767 - 22) / 16))} run help`)
  }
}




//what is wi
// IDK