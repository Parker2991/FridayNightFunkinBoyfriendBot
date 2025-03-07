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

    if (bot.options.mode === "savageFriends") {
      bot.core.run(args.join(' '));
    } else if (bot.options.mode === "kaboom") {
      bot.core.runTracked(args.join(' '));
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;

    if (bot.options.mode === "savageFriends") {
      bot.core.run(args.join(' '));
    } else if (bot.options.mode === "kaboom") {
      bot.core.runTracked(args.join(' '));
    }
  }
}
