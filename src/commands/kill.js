module.exports = {
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
  async execute (context) {
    const bot = context.bot;
    // ik theres a better way to do but shut the fuck up about it
    await bot.chat.message("killing process");
    await bot.console.info("killing process");
    await bot.discord.channel?.send("killing process");
    await process.exit(69420); // sure why the hell not
  },
  async discordExecute (context) {
    const bot = context.bot;
    await bot.chat.message("killing process");
    await bot.console.info("killing process");
    await bot.discord.channel?.send("killing process");
    await process.exit(69420);
  }
}
