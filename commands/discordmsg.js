module.exports = {
  name: 'discordmsg',
   description:['make me say something in discord'],
  execute (context) {
    const args = context.arguments
    const bot = context.bot
    const player = context.player

    bot.discord.channel.send(args.join(' '))
  
  }
}
