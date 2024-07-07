const CommandError = require('../util/command_error')
module.exports = {
  name: 'mcserver', // command name here
  description: ['look up minecraft server info'], // command desc here
  aliases: [], // command aliases here if there is any
  trustLevel: 0, // 0 = public, 1 = trusted, 2 = owner, 3 = console
  usages: [], // command usage here
  execute (context) {
    const bot = context.bot
    const args = context.arguments
    const source = context.source
  }
}
