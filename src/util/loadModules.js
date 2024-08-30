const fs = require("fs");
const path = require("path");
//const readline = require("readline");
function loadModules (bot, options, config, discordClient) {
  bot.loadModule = module => module(bot, options, config, discordClient)

  for (const filename of fs.readdirSync(path.join(__dirname, '../', 'modules'))) {
    try {
      const module = require(path.join(__dirname, '../', 'modules', filename))
      bot.loadModule(module)
    } catch (error) {
      console.error('Failed to load module', filename, ':', error)
    }
  }
}
module.exports = loadModules;
