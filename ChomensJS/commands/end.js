module.exports = {
  name: 'end',
  alias: [],
  description: 'Ends the bot\'s client',
  usage: '<hash>',
  trusted: 1,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    bot.end('end command')
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message) {
    bot.end('end command')
  }
}
