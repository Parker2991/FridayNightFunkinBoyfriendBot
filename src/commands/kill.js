module.exports = {
  name: 'kill',
  trustLevel: 2,
  aliases: [
    "suicide",
  ],
  description: 'kill the bots process',
  usages: [
   ""
  ],
  async execute (context) {
    const bot = context.bot
    await bot.chat.message("killing process");
    await process.exit(69420) // sure why the hell not
  }
}
