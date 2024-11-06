module.exports = {
  data: {
    name: 'vanish',
    trustLevel: 2,
    aliases: [
      "vanishtoggle"
    ],
    description: 'toggle the bots vanish selfcare',
    usages: [

    ],
  },
  execute (context) {
    const bot = context.bot
    const args = context.arguments;
    if (args.slice(1).join('') === 'true') {
      bot.vanished = true
      bot.chat.message('enabled vanish selfcare')
    }
    if (args.slice(1).join('') === 'false') {
      bot.vanished = false;
      bot.chat.message('disabled vanish selfcare')
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    bot.vanished = false;
    bot.chat.message('disabling vanish selfcare,...');
    bot.chat.command('v off')
  }
}
