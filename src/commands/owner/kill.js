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
    process.kill(process.pid);
  },
  discordExecute (context) {
    const bot = context.bot;
    process.kill(process.pid);
  }
}
