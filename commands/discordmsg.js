module.exports = {
  name: 'discordmsg',

  execute (context) {
    const args = context.arguments
    const bot = context.bot
    const player = context.player

    bot.discord.channel.send(args.join(' '))
  }
}
