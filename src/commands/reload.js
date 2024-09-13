module.exports = {
  name: 'reload',
  trustLevel: 3,
  aliases: [
  ],
  description: 'reloads commands',
  usages: [
    ""
  ],
  execute (context) {
    const bot = context.bot
    bot.tellraw("@a", [
      { text: "Reloading ", color: "gray" },
      { text: '(', color: "gray" },
      { text: `${bot.commandManager.commandlist.length}`, color: "gold" },
      { text: ') ', color: "gray" },
      { text: 'commands', color: "gray" },
    ])
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
