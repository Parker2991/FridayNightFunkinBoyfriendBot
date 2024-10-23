const fs = require("fs");
const path = require("path");
async function loadModules (bot, options, config, discordClient) {
//  let module
  bot.loadModule = module => module(bot, options, config, discordClient)
  for (const filename of fs.readdirSync(path.join(__dirname, '../', 'modules'))) {
    try {
      if (filename.endsWith(".mjs")) {
//        const module = await import(path.join(__dirname, '../', 'modules', filename));
//        bot.loadModule(module);
      } else if (filename.endsWith(".js")) {
        const module = require(path.join(__dirname, '../', 'modules', filename));
        bot.loadModule(module);
      }
      //bot.loadModule(module)
    } catch (error) {
      console.error('Failed to load module', filename, ':', error)
    }
  }
}
module.exports = loadModules;
/*
  for (const filename of fs.readdirSync(path.join(__dirname, '../commands'))) {
    try {
      if (filename.endsWith('.mjs')) {
         let commands = await import(path.join(__dirname, '../commands', filename))
         bot.commandManager.register(commands.command);
         bot.commandManager.commandlist.push(commands.command);
      } if (filename.endsWith('.js')) {
        let commands = require(path.join(__dirname, '../commands', filename));
        bot.commandManager.register(commands);
        bot.commandManager.commandlist.push(commands);
      }
    } catch (error) {
      console.error('Failed to load command', filename, ':', error)
    }
  }
*/
