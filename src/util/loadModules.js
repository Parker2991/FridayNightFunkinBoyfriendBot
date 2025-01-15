const fs = require("fs");
const path = require("path");
async function loadModules (bot, options, config, discordClient) {
  bot.modules = [];
  for (const filename of fs.readdirSync(path.join(__dirname, '../', 'modules'))) {
    try {
      if (filename.endsWith(".js")) {
        const module = require(path.join(__dirname, '../modules', filename));
        if (module.data.enabled === false) {
          bot.modules.push(module);
        } else {
          module.inject({ bot, options, config, discordClient });
          bot.modules.push(module);
        }
      } if (filename.endsWith(".mjs")) {
        const module = await import(path.join(__dirname, '../modules', filename));
        module.default({ bot, options, config, discordClient });
      }
    } catch (error) {
      console.error(`Failed to load module ${filename} due to error`);
      console.error(`\x1b[31m${error.stack}\x1b[0m`);
    }
  }
}
module.exports = loadModules;
