const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: '', // command name here
  description: [''], // command desc here
  aliases: [], // command aliases here if there is any
  trustLevel: 0, // 0 = public, 1 = trusted, 2 = owner, 3 = console
  usages: [], // command usage here
  execute (context) {
    const bot = context.bot
    const args = context.arguments
    const source = context.source
  }
}
