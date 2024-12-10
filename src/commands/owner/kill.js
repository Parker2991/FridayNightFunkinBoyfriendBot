module.exports = {
  data: {
    name: 'kill',
    trustLevel: 3,
    aliases: [
      "suicide",
      "quit",
    ],
    description: 'kill the bots process',
    usages: [
      ""
    ],
  },
  execute (context) {
    const bot = context.bot;
    process.exit(1);
  },

  discordExecute (context) {
    const bot = context.bot;
    process.exit(1)
  }
}
