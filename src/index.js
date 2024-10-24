const createBot = require('./bot.js');
const readline = require('readline');
const loadModules = require('./util/loadModules');
const js_yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const checks = require('./util/checks');
const { Client, GatewayIntentBits } = require('discord.js');
const { MessageContent, GuildMessages, Guilds } = GatewayIntentBits;
const discordClient = new Client({ intents: [Guilds, GuildMessages, MessageContent] });
console.log('Starting FNFBoyfriendBot');
checks();
/*
if (!fs.existsSync(path.join(__dirname, "../config.yml"))) {
  console.log("Config not found creating config from the default config");
  fs.copyFileSync(
    path.join(__dirname, "./data/default_config.yml"),
    path.join(__dirname, "../config.yml")
  )
}
*/
try {
  config = js_yaml.load(fs.readFileSync(path.join(__dirname, '../', 'config.yml')))
} catch (e) {
  console.log(e.stack);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
if (config.discord.enabled) discordClient.login(config.discord.token);
const bots = [];
for (const options of config.bots) {
  const bot = new createBot(options, config);
  bots.push(bot);
  bot.bots = bots;
  loadModules(bot, options, config, discordClient);
  bot.console.readlineInterface(rl);
}
