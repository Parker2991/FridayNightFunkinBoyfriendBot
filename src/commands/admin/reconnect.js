module.exports = {
  data: {
    name: "reconnect",
    aliases: [
      "end"
    ],
    description: "reconnects the bot",
    usages: [
      ""
    ],
    trustLevel: 2,
  },
  execute (context) {
    const bot = context.bot;
    bot._client.end();
    bot.chat.message('reconnecting')
  },
  discordExecute (context) {
    const bot = context.bot;

    bot._client.end();
    bot?.discord?.message?.reply('reconnecting');
  }
}
