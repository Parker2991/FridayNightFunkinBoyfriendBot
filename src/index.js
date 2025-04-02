const createBot = require('./bot.js');
const readline = require('readline');
const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits } = require('discord.js');
const { MessageContent, GuildMessages, Guilds } = GatewayIntentBits;
const discordClient = new Client({ intents: [Guilds, GuildMessages, MessageContent] });
const CommandSource = require('./util/command_source');

console.log('Starting FNFBoyfriendBot');

if (!fs.existsSync(path.join(__dirname, "../config.js"))) {
  console.warn("Config not found creating config from the default config");
  fs.copyFileSync(
    path.join(__dirname, "./data/default_config.js"),
    path.join(__dirname, "../config.js")
  )
}

const config = require('../config.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

if (config.discord.enabled) discordClient.login(config.discord.token);

const bots = [];
let bot;

for (const options of config.bots) {
  bot = createBot(options, config);
  bots.push(bot);
  bot.bots = bots;
  require('./util/loadModules')(bot, options, config, discordClient);

  let disconnectCount = 0;
  bot.console.readlineInterface(rl);

  bot.on('clientDisconnect', (data) => {
    try {
      disconnectCount++

      if (disconnectCount === 10) {
        bot.console.info('stopped logging disconnect messages for now...');
        bot?.discord?.channel?.send('stopped logging disconnect messages for now...');
        return;
      } else if (disconnectCount > 10) {
        return;
      } else {
        bot.console.warn(bot.getMessageAsPrismarine(`§8[§bClient Reconnect§8]§r ${data}`)?.toAnsi())
        bot?.discord?.channel?.send(data.toString());
      }
    } catch (e) {
      console.log(e.stack);
    }
  });
}

discordClient.on('messageCreate', (message) => {
  try {
    if (message.author.id === bot.discord.client.user.id) return;

    const ChatMessage = require('prismarine-chat')('1.20.2');
    bot.getMessageAsPrismarine = (message) => {
      return new ChatMessage(message);
    }
    config.prefixes.map((prefix) => {
      if (message.content.startsWith(prefix)) {
        const source = new CommandSource({
          profile: {
            name: `${message?.member.nickname || message?.author.displayName}`
          }
        }, {
          discord: true,
          console: false,
        }, false, message);

        bot.commandManager.executeString(source, message.content.substring(prefix.length));
        return;
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
});
