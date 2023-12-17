module.exports = {
  name: 'cb',
  alias: ['cmd', 'commandblock', 'run'],
  description: 'Executes a command in the command core',
  usage: '<command>',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    bot.core.run(args.join(' '))
  },
  discordExecute (bot, username, sender, prefix, args, channeldc) {
    bot.core.run(args.join(' '))
  }
}
