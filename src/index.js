const createBot = require('./bot.js');
const readline = require('readline');
const js_yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits } = require('discord.js');
const { MessageContent, GuildMessages, Guilds } = GatewayIntentBits;
const discordClient = new Client({ intents: [Guilds, GuildMessages, MessageContent] });

console.log('Starting FNFBoyfriendBot');
process.stdout.write('\x1b]2;Starting FNFBoyfriendBot please wait,.....\x1b\x5c');

if (!fs.existsSync(path.join(__dirname, "../config.yml"))) {
  console.warn("Config not found creating config from the default config");
  fs.copyFileSync(
    path.join(__dirname, "./data/default_config.yml"),
    path.join(__dirname, "../config.yml")
  )
}

try {
  config = require('js-yaml').load(fs.readFileSync(path.join(__dirname, '../', 'config.yml')))
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
  require('./util/loadModules')(bot, options, config, discordClient);
  bot.console.readlineInterface(rl);
}
