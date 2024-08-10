module.exports = {
  name: 'reload',
  trustLevel: 0,
  aliases: [
  ],
  description: 'reloads commands',
  usages: [
    ""
  ],
  execute (context) {
    const bot = context.bot
    bot.tellraw("@a", "Reloading Commands,..........")
    for (const eachBot of bot.bots) {
      eachBot.commandManager.reload();
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    bot.discord.message.reply("Reloading Commands,.........");
    for (const eachBot of bot.bots) {
      eachBot.commandManager.reload();
    }
  }
}
