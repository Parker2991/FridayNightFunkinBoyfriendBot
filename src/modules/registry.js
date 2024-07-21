const createRegistry = require('prismarine-registry')

function registry (bot) {
  bot.on('packet.login', packet => {
    bot.registry = createRegistry(bot._client.version)
    bot.registry.language = require('../data/language.json');
    bot.emit('registry_ready', bot.registry)
  })
}

module.exports = registry;
