module.exports = {
  name: 'echo',

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
