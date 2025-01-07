const between = require('../util/between')

module.exports = {
  name: 'tpr',

  execute (context) {
    const bot = context.bot
    const sender = context.source.player

    if (!sender) return
    
    const x = between(-1_000_000, 1_000_000)
    const y = 100
    const z = between(-1_000_000, 1_000_000)

    bot.core.run(`tp ${sender.uuid} ${x} ${y} ${z}`)
  }
}
