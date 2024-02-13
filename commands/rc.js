module.exports = {
  name: 'rc',
       description:['refill the bots core'],
        hashOnly:false,
        consoleOnly:false,
  execute (context) {
      const bot = context.bot
   
      bot.core.refill()
  context.source.sendFeedback('Successfully Refilled Core!')
  }
}