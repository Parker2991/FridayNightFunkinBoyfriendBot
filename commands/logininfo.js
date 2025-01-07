module.exports = {
  name: 'logininfo',

  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')

//context.bot.options.port
    context.source.sendFeedback(`Bot Username: ${bot.username}`)  
    context.source.sendFeedback(`Minecraft Java Version: ${context.bot.options.version}`)
  context.source.sendFeedback(`Server: ${context.bot.options.host}`)
  context.source.sendFeedback(`Port: ${context.bot.options.port}`)
  }
}
