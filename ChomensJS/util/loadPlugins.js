const fs = require('fs/promises')
const util = require('util')
const path = require('path')

/**
  * load plugins
  * @param {object} bot the bot object
  * @param {object} dcclient discord client
  * @param {object} config the config
  * @param {object} rl readline
  * @param {object} target proxy target
  * @param {object} client proxy client
  * @param {boolean} proxy is proxy
  * @param {array} clientPacketBlacklist the client packet blacklist
  * @param {array} targetPacketBlacklist target packet blacklist
*/
async function loadPlugins (bot, dcclient, config, rl, target, client, proxy, clientPacketBlacklist, targetPacketBlacklist) {
  const dir = path.join(__dirname, '..', 'plugins', proxy ? 'proxy' : '')
  const plugins = await fs.readdir(dir)
  plugins.forEach((plugin) => {
    if (!plugin.endsWith('.js')) return
    try {
      const plug = require(path.join(dir, plugin))
      if (!proxy) plug.inject(bot, dcclient, config, rl)
      else plug.inject(bot, client, target, config, clientPacketBlacklist, targetPacketBlacklist)
    } catch (e) {
      console.log(`Plugin ${plugin} is having exception loading the plugin:`)
      console.log(util.inspect(e))
    }
  })
};

module.exports = { loadPlugins }
