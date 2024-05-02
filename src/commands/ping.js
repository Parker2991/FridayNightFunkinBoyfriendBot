const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'ping', // command name here
  description: [''], // command desc here
  aliases: [], // command aliases here if there is any
  trustLevel: 0, // 0 = public, 1 = trusted, 2 = owner, 3 = console
  usages: [], // command usage here
  execute (context) {
    const bot = context.bot
    const args = context.arguments
    const source = context.source
    const player = source.player
    
    if (args.join(' ') === null) {
      bot.sendFeedback([{ text: 'Pong!', color: 'dark_gray' }, { text: ' 🏓\n', color: 'dark_gray' }, { text: `${bot.getMessageAsPrismarine(player.displayName)?.toMotd()}`, color: 'dark_gray' },{ text: '\nPing: ', color: 'dark_gray' },{ text: `${player.latency}`, color: 'green' }])
    } else if (args.join(' ') !== null) { 
      bot.sendFeedback([{ text: `${args.join(' ')} 🏓\n`, color: 'dark_gray' }, { text: `${bot.getMessageAsPrismarine(player.displayName)?.toMotd()}`, color: 'dark_gray' }, { text: '\nPing: ', color: 'dark_gray' },{ text: `${player.latency}`, color: 'green' }])
    }
  }
}
