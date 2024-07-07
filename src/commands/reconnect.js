module.exports = {
  name: 'reconnect',
  trustLevel: 1,
  aliases: [
    "end",
    "recon",
  ],
  description: 'reconnect the bot',
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
    bot._client.end() 
  }
}
