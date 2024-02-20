module.exports = {
  name: 'validate',
  description: 'Validates a hash',
  alias: ['checkhash'],
  usage: '<hash|ownerHash>',
  trusted: 1,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    if (args[0] === hash) {
      bot.tellraw(selector, { text: 'Valid hash', color: 'green' })
    } else if (args[0] === ownerhash) {
      bot.tellraw(selector, { text: 'Valid OwnerHash', color: 'green' })
    }
  }
}
