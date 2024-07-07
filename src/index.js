const createBot = require('./bot.js');
const readline = require('readline');
const loadModules = require('./util/loadModules');
const js_yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits } = require('discord.js');
const { MessageContent, GuildMessages, Guilds } = GatewayIntentBits;
const discordClient = new Client({ intents: [Guilds, GuildMessages, MessageContent] });
console.log('Starting FNFBoyfriendBot');
try {
  config = js_yaml.load(fs.readFileSync(path.join(__dirname, '../', 'config.yml')))
} catch (e) {
  console.log(e.stack);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const bots = [];
for (const options of config.bots) {
  const bot = createBot(options);
  bots.push(bot);
  bot.bots = bots;
  discordClient.login(config.discord.token);
  loadModules(bot, options, config, discordClient);
  bot.console.useReadlineInterface(rl);
}
