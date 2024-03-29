module.exports = {
  name: 'sus',
   description:['make me say something in chat'],
        aliases:['chatsay'],
       trustLevel: 0,
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')

    if (message.startsWith('/')) {
      bot.command(message.substring(1))
      return
    }
    bot.chat(message)  
  }
}
