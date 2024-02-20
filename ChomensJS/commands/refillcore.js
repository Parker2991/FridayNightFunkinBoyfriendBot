module.exports = {
  name: 'refillcore',
  alias: ['rc'],
  description: 'Resets the bot\'s command core',
  usage: '',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    bot.core.fillCore()
  },
  discordExecute (bot) {
    bot.core.fillCore()
  }
}
