
module.exports = {
  name: 'clearchat',
  alias: ['cc'],
  description: 'Clears the chat',
  usage: '[player]',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    if (args[0]) {
      bot.tellraw(args.join(' '), [{ text: '\n'.repeat(100), color: 'white' }, { text: `Your chat has been cleared by ${username}.`, color: 'dark_green' }])
    } else {
      bot.tellraw('@a', [{ text: '\n'.repeat(100), color: 'white' }, { text: 'The chat has been cleared.', color: 'dark_green' }])
    }
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message) {
    if (args[0]) {
      bot.tellraw(args.join(' '), [{ text: '\n'.repeat(100), color: 'white' }, { text: `Your chat has been cleared by ${username} (on Discord).`, color: 'dark_green' }])
    } else {
      bot.tellraw('@a', [{ text: '\n'.repeat(100), color: 'white' }, { text: 'The chat has been cleared.', color: 'dark_green' }])
    }
  }
}
