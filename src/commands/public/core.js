module.exports = {
  data: {
    name: "core",
    aliases: [
      "cb",
      "cbrun",
      "corerun"
    ],
    trustLevel: 0
  },
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;

    bot.core.run(args.join(' '));
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;

    bot.core.run(args.join(' '));
  }
}