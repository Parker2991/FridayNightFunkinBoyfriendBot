module.exports = {
  name: 'echo',
  alias: [],
  description: 'Says a message',
  usage: '<message>',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    bot.chat(args.join(' '))
  },
  discordExecute (bot, username, sender, prefix, args, channeldc) {
    bot.chat(args.join(' '))
  }
}
