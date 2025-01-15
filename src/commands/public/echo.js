module.exports = {
  data: {
    name: 'echo',
    trustLevel: 0,
    aliases: [
      "say",
      "botsay",
    ],
    description: 'Make me say something',
    usages: [
      "<message>"
    ],
  },
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    bot.chat.send(args.join(' '));
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    bot.chat.send(args.join(' '));
  }
}
