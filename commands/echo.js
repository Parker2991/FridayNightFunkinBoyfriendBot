module.exports = {
  name: 'echo',
   description:['make me say something in chat'],
        hashOnly:false,
        consoleOnly:false,
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
