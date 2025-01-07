module.exports = {
  name: 'rc',

  execute (context) {
      const bot = context.bot
   
      bot.core.refill()
  context.source.sendFeedback('Successfully Refilled Core!')
  }
}