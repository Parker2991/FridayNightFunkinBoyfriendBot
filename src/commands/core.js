const CommandError = require('../CommandModules/command_error');
const { EmbedBuilder } = require('discord.js');
module.exports = {
  name: 'core',
  description: ['make me run a command in core'],
  aliases: ['cb','corerun','run','commandblockrun','cbrun'],
  trustLevel: 0,
  usage: ["<command/message>"],
  execute (context) {
    const bot = context.bot
    const args = context.arguments
    const source = context.source
    const message = context.arguments.join(' ')
    if (message.startsWith('/')) {
       bot.core.run(args.join(' ').substring(1))
       return
    }
    bot.core.run(`${args.join(' ')}`)  
   },
 discordExecute (context) {
   const bot = context.bot;
   const args = context.arguments;
   bot.core.run(`${args.join(' ')}`)
 }
}