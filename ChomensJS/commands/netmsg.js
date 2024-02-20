module.exports = {
  name: 'netmsg',
  alias: ['networkmessage', 'irc'],
  description: 'Broadcasts a message to all of the servers that the bot is connected',
  usage: '<message>',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    const message = args.join(' ')

    if (message.toLowerCase().includes('netmsg')) return // lazy fix

    const component = [
      {
        text: '[',
        color: 'dark_gray'
      },
      {
        text: bot.server.host === 'kitsune.icu' ? 'kit' : bot.server.host,
        color: 'gray'
      },
      bot.server.host === 'kitsune.icu'
        ? {
            text: 'sune.icu',
            color: 'gray'
          }
        : '',
      {
        text: '] ',
        color: 'dark_gray'
      },
      {
        text: username,
        color: 'gray'
      },
      {
        text: ' \u203a ',
        color: 'dark_gray'
      },
      {
        text: message,
        color: 'gray'
      }
    ]

    const bots = bot.getBots()
    for (const bot of bots) {
      bot.tellraw(selector, component)
    }
  }
}
