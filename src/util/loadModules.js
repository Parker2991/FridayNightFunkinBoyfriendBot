const fs = require('fs');
const path = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function loadModules (bot, options, config) {
    for (const filename of fs.readdirSync(path.join(__dirname, "../modules"))) {
      try {
         const module = require(path.join(__dirname, '../modules', filename))  
         bot.loadModule = (module) => module(bot, options, config);
         bot.loadModule(module);
      } catch (error) {
        console.error("Failed to load module", filename, ":", error);
      }
  }
  bot.console.useReadlineInterface(rl);  
}
module.exports = { loadModules };
