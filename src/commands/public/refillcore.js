module.exports = {
  data: {
    name: 'refillcore',
    trustLevel: 0,
    aliases: [
      "rc",
      "refill",
    ],
    description: 'refill the bots core',
    usages: [

    ],
  },
  execute (context) {
    const bot = context.bot
    bot.core.refill()
    bot.tellraw("@a", "Refilling core,...")
  },
  discordExecute (context) {
    const bot = context.bot;
    bot.core.refill();
    bot.tellraw("@a", "Refilling core,...");
  }
}
