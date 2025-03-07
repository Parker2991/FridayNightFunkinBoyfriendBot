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
    if (args.includes("@everyone") || args.includes("@here")) {
      bot.discord.message.reply("go fuck yourself");
    } else {
      bot.discord.message.channel.send(args.join(' '));
    }
  }
}
