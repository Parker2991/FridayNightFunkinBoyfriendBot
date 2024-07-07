module.exports = {
  name: 'validate',
  trustLevel: 1,
  aliases: [
    "val"
  ],
  description: 'validate through the bot',
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const source = context.source;
    if (args[0] === bot.trusted) {
      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, { text: "Valid Trusted hash", color: "dark_green" });
    } if (args[0] === bot.owner) {
      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, { text: "Valid Owner hash", color: "dark_green" });
    }
  }
}
