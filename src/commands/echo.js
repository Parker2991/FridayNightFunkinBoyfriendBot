const CommandError = require('../CommandModules/command_error');
module.exports = {
  name: 'echo',
  description:['make me say something in chat'],
  aliases:['chatsay', 'say', 'botsay'],
  trustLevel: 0,
  usage:[
    "<command/message>",
  ],
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const message = context.arguments.join(' ')
    if (bot.options.isCreayun && args.join(' ') === '/sex') {
       throw new CommandError('NUH UH FUCK YOU 🖕')
    } else {
    if (message.startsWith('/')) {
      bot.command(message.substring(1))
      return
    }
    bot.chat(message)  
    }
 },
 discordExecute(context) {
   const bot = context.bot
    const message = context.arguments.join(' ')
    if (message.startsWith('/')) {
      bot.command(message.substring(1))
      return
    }

    bot.chat(message) 
  }
}