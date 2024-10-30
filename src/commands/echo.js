module.exports = {
  name: 'echo',
  trustLevel: 0,
  aliases: [
    "say",
    "botsay",
  ],
  description: 'Make me say something',
  usages: [
    "<message>"
  ],
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
    if (message.startsWith('/')) {
      bot.chat.command(message.substring(1))
      return
    }
    
//    if
    bot.chat.message(message)
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
//    const interaction = context.interaction
//interaction.options.getString('input')
    if (args.join(' ').startsWith('/')) {
      bot.chat.command(args.join(' ').substring(1))
      return
    }
    bot.chat.message(args.join(' '))
//    bot.chat.message('e')
  }
}
