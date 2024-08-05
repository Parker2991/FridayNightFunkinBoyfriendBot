module.exports = {
  name: 'coresettings',
  trustLevel: 0,
  aliases: [
  ],
  description: 'Make me say something',
  usages: [
    "<message>"
  ],
  execute (context) {
    const bot = context.bot
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
  }
}
