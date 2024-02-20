const { between } = require('../util/between')
module.exports = {
  name: 'rtp',
  alias: [],
  description: 'Randomly teleports the player',
  usage: '',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    const pos = `${between(1000, 10000)} 100 ${between(1000, 10000)}`
    bot.tellraw(selector, [{ text: 'Teleporting ', color: 'white' }, { text: username, color: 'aqua' }, { text: ' to ', color: 'white' }, { text: pos, color: 'green' }, { text: '...', color: 'white' }])
    bot.core.run(`essentials:teleport ${sender} ${pos}`)
  }
}
