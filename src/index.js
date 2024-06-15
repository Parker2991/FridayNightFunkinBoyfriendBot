const CommandError = require('./CommandModules/command_error.js');
const util = require("util");
const path = require('path');
const fs = require('fs');
const parseYaml = require('js-yaml');
const { loadModules } = require('./util/loadModules')
if (!fs.existsSync(path.join(__dirname, '../config.yml'))) {
 console.log('Config not found creating config from default.yml');
  fs.copyFileSync(
   path.join(__dirname, 'default.yml'),
   path.join(__dirname, '../config.yml'),
);
};
const createBot = require('./bot.js'); 
const readline = require("readline");
try {
  config = parseYaml.load(fs.readFileSync('config.yml', 'utf8'));
} catch (e) {
  console.log(e.toString())
}
require("dotenv").config();
const bots = [];
const core = config.Core;
const commands = config.Commands;
const Console = config.console; 
const discord = config.Discord;
const validation = config.validation;
const savage = config.savage;
for (const options of config.bots) {
    const bot = createBot(options);
    bots.push(bot);
    bot.bots = bots;
    bot.Core = core;
    bot.Commands = commands;
//    bot.Console = Console;
    bot.discord = discord;
    bot.validation = validation;
    bot.savage = savage;
    bot.options.username; 
    loadModules(bot, options, config);
}
//bot.console.useReadlineInterface(rl); 
process.on("uncaughtException", (e) => {
  console?.warn(e.stack)
});


