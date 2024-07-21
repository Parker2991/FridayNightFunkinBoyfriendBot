module.exports = {
  name: 'kick',
  trustLevel: 1,
  aliases: [
  ],
  description: 'kick or crash players',
  usages: [
    "invalidstring <player>",
  ],
  execute (context) {
    const bot = context.bot
    const args = context.arguments;
    if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
    console.log(Object.keys(bot.exploits))
    switch (args[1]) {
      case 'invalidstring':
        bot.core.run(`minecraft:tellraw ${args.slice(2).join(' ')} ${JSON.stringify(bot.exploits.invalidString)}`)
      break
    }
  }
}
