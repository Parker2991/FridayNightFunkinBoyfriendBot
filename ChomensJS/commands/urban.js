const urban = require('urban-dictionary')
module.exports = {
  name: 'urban',
  alias: [],
  description: 'Working Urban Dictionary',
  usage: '<word>',
  trusted: 0,
  async execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    try {
      const definitions = await urban.define(args.join(' '))

      for (const definition of definitions) {
        bot.tellraw(selector, [{ text: '[', color: 'dark_red' }, { text: 'Urban', color: 'red' }, { text: '] ', color: 'dark_red' }, { text: definition.word, color: 'white' }, { text: ' - ', color: 'white' }, { text: definition.definition, color: 'white' }])
      }//
    } catch (e) {
      bot.tellraw(selector, { text: e.toString(), color: 'red' })
    }
  }
}
