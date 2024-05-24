const CommandError = require('./CommandModules/command_error.js');
const util = require("util");
const path = require('path');
const fs = require('fs');
const parseYaml = require('js-yaml')
/* if (!fs.existsSync('config.js')) {
 console.log('Config not found creating config from default.js');
  fs.copyFileSync(
   path.join(__dirname, 'default.yml'),
   path.join(__dirname, 'config.js'),
);
}; */
if (!fs.existsSync('config.yml')) {
 console.log('Config not found creating config from default.yml');
  fs.copyFileSync(
   path.join(__dirname, 'default.yml'),
   path.join(__dirname, 'config.yml'),
);
};
// const config = require(`../config.js`);
try {
  config = parseYaml.load(fs.readFileSync('config.yml', 'utf8'));
  console.log(config)
} catch (e) {
  console.log(e.toString())
}
const { createBot } = require('./bot.js'); 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function load() {
  require("dotenv").config();
  const bots = [];
  const core = config.Core;
  const commands = config.Commands;
  const Console = config.console; 
  const tellrawtag = config.tellrawTag;
//  const helptheme = config.helpTheme;
  const discord = config.Discord;
  const matrix = config.matrix;
  const validation = config.validation;
for (const options of config.bots) {
    const bot = createBot(options);
    bots.push(bot);
    bot.bots = bots;
    bot.Core = core;
    bot.Commands = commands;
    bot.Console = Console;
    bot.Discord = discord;
    bot.tellrawTag = tellrawtag;
//    bot.helpTheme = helptheme;
    bot.matrix = matrix;
    bot.validation = validation;
    bot.options.username;
    bot.loadModule = (module) => module(bot, options);
  
    for (const filename of fs.readdirSync(path.join(__dirname, "modules"))) {
      try {
        const module = require(path.join(__dirname, "modules", filename));
        bot.loadModule(module);
      } catch (error) {
        console.log(
          "Failed to load module",
          filename,
          ":",
          error,
       );
      }
}

  
    bot.console.useReadlineInterface(rl);

 
    try {
      bot.on("error", error => {
bot?.console?.warn(error.toString())
});
    } catch (error) {
      console.log(error.stack);
    }
  
  }
}

process.on("uncaughtException", (e) => {
//console.log(e.stack)
});

load()
