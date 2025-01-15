module.exports = {
  data: {
    name: 'reconnect',
    trustLevel: 1,
    aliases: [
      "end",
      "recon",
    ],
    description: 'reconnect the bot',
    usages: [

    ],
  },
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
    bot._client.end("disconnect :3")
  },
  discordExecute (context) {
    const bot = context.bot;
    bot._client.end("disconnect :3")
  }
}
