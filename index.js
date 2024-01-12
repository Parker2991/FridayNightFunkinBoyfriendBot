const util = require("util");
const createBot = require("./bot.js");
// TODO: Load a default config
const fs = require("fs");
const fileExist = require("./util/file-exists");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function load() {
  //const config = require('./config.js')

  require("dotenv").config();
  const bots = [];
  for (const options of config.bots) {
    const bot = createBot(options);
    bots.push(bot);
    bot.bots = bots;
    bot.options.username;
    bot.loadModule = (module) => module(bot, options);

    for (const filename of fs.readdirSync(path.join(__dirname, "modules"))) {
      try {
        const module = require(path.join(__dirname, "modules", filename));
        bot.loadModule(module);
      } catch (error) {
        console.error(
          "\x1b[0m\x1b[91m[ERROR]: \x1b[0m\x1b[90mFailed to load module",
          filename,
          ":",
          error,
        );
      }
    }

    bot.console.useReadlineInterface(rl);

    //  bot.on('error', (error), util.inspect(error))

    try {
      bot.on("error", console.error);
    } catch (error) {
      console.log(error.stack);
    }
  }
}

const modules = "./modules";
const util2 = "./util";
const CommandModules = "./CommandModules";
const commands = "./commands";
const chat = "./chat";
fs.readdir(util2, (err, files) => {
  console.log("Successfully loaded: " + files.length + " util files");
});
fs.readdir(modules, (err, files) => {
  console.log("Successfully loaded: " + files.length + " module files");
});
fs.readdir(commands, (err, files) => {
  console.log("Successfully loaded: " + files.length + " command files");
});
fs.readdir(CommandModules, (err, files) => {
  console.log("Successfully loaded: " + files.length + " CommandModule files");
});
fs.readdir(chat, (err, files) => {
  console.log("Successfully loaded: " + files.length + " chat files");
});

async function checkConfig() {
  if (!(await fileExist(path.join(__dirname, "config.js")))) {
    console.error("Config not found! Creating a new Config from ");
    await fs.copyFile(
      path.join(__dirname, "default.js"),
      path.join(__dirname, "config.js"),
    );
  }
  if (await fileExist(path.join(__dirname, "config.js"))) {
    console.log("Config found! loading config please wait,......");
  }

  config = require("./config.js");

  load();
}

checkConfig();

process.on("uncaughtException", (e) => {
  console.log("uncaught " + e.stack);
});
