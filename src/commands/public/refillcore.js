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
    const bot = context.bot;
    const config = context.config;
    bot.core.move();
    bot.tellraw("@a", "Refilling core,...")
  },

  discordExecute (context) {
    const bot = context.bot;
    const config = context.config;
    bot.core.move();
    bot.tellraw("@a", "Refilling core,...");
  }
}
