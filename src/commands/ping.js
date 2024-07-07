module.exports = {
  name: 'ping',
  trustLevel: 0,
  execute (context) {
    const source = context.source;
    const bot = context.bots;
    if (context.arguments.length !== 0) {
      const argumentList = []

      for (const argument of context.arguments) {
        if (argumentList.length !== 0) argumentList.push(' ')
        argumentList.push(argument)
      }

      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, { text: 'Ping Arguments: ', extra: argumentList }, false)
      return
    }

    bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, 'Pong!', false)
  }
}
