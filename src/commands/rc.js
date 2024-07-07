const CommandError = require('../util/command_error')
module.exports = {
  name: 'refillcore',
  description:['refill the bots core'],
  trustLevel: 0,
  aliases:['rc'],
  usages:[""],
  execute (context) {
    const bot = context.bot

    if (bot.options.useChat || bot.options.isCreayun) {
        throw new CommandError('&4Could not fill core because useChat or isCreayun is active!')
    } else {
      bot.core.refill()
      bot.sendFeedback('refilling core,......')
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    if (bot.options.useChat || bot.options.isCreayun) {
        throw new CommandError('&4Could not fill core because Coreless mode is active!')
    } else {
      bot.core.refill()
      bot.discord.Message.reply('refilling core,......')
    }
  }
}
