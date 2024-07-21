module.exports = {
  name: 'discordtest',
  trustLevel: 2,
  description: 'Make me say something',
  execute () {

  },
  discordExecute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
    bot.chat.message("mrrow");
    bot.discord.message.reply("mrrow :cat:")
  }
}
