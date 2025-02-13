const between = require('../../util/between')
const CommandError = require('../../util/command_error')
module.exports = {
  data: {
    name: 'tpr',
    description: 'teleport to very fucked up coords',
    trustLevel: 1,
    aliases: [
      'rtp',
      'teleportrandom',
      'randomteleport'
    ],
    usages: [
      ""
    ],
  },
  execute (context) {
    const bot = context.bot
    const args = context.arguments;
    const source = context.source
    if (bot.options.isKaboom) {
      x = between(-30_000_000, 30_000_000)
      y = 100
      z = between(-30_000_000, 30_000_000)
    } else if (bot.options.isSavage) {
      x = between(-4096, 4096);
      y = 100
      z = between(-4096, 4096);
    }
    if (args.slice(1).join(' ')) {
      bot.tellraw("@a", [
        { text: 'Randomly Teleported: ', color: 'gray' },
        { text: args.slice(1).join(' '), color: 'blue' },
        { text: ' to ', color: 'gray' },
        { text: `${x} `, color: 'gold' },
        { text: `${y} `, color: 'gold' },
        { text: `${z}`, color: 'gold' }
      ])
      if (bot.options.isSavage) {
        bot.chat.command(`minecraft:tp ${args.slice(1).join(' ')} ${x} ${y} ${z}`)
      } else if (bot.options.isKaboom) {
        bot.core.run(`minecraft:tp ${args.slice(1).join(' ')} ${x} ${y} ${z}`);
      }
    } else {
      bot.tellraw("@a", [
        { text: 'Randomly Teleported: ', color: 'gray' },
        { text: source.player.profile.name, color: 'blue' },
        { text: ' to ', color: 'gray' },
        { text: `${x} `, color: 'gold' },
        { text: `${y} `, color: 'gold' },
        { text: `${z}`, color: 'gold' }
      ])
      if (bot.options.isSavage) {
        bot.chat.command(`minecraft:tp ${source.player.profile.name} ${x} ${y} ${z}`)
      } else if (bot.options.isKaboom) {
        bot.core.run(`minecraft:tp ${source.player.profile.name} ${x} ${y} ${z}`);
      }
    }
  }
}
