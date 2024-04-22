const createRegistry = require('prismarine-registry')

function registry (bot) {
  bot.on('packet.login', packet => {
    bot.registry = createRegistry(bot._client.version)
  //  bot.registry.loadDimensionCodec(packet.dimensionCodec)
//bot.registry.language = 'lolcats_us'
    bot.emit('registry_ready', bot.registry)
  })
}
//1.20.2 support wooooooo
module.exports = registry
