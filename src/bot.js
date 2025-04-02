const mc = require('minecraft-protocol');
const { EventEmitter } = require('events');
EventEmitter.defaultMaxListeners = 200;

function createBot(options = {}, config) {
  const bot = new EventEmitter();
  bot.options = {
  // Set some default values in options
    host: options.host ??= 'localhost',
    username: options.username ??= 'Player',
    hideErrors: options.hideErrors ??= true, // HACK: Hide errors by default as a lazy fix to console being spammed with them
  };
  bot.options = options;
  // Create our client object, put it on the bot, and register some events
  bot.on('init_client', client => {
    client.on('packet', (data, meta) => {
      bot.emit('packet', data, meta)
      bot.emit('packet.' + meta.name, data);
    })

    client.on('login', (data) => {
      bot.uuid = client.uuid;
      bot.username = client.username;
    })

    client.on('disconnect', data => {
      bot.emit("clientDisconnect", data.reason);
    })

    client.on('end', reason => {
      bot.emit('end', reason);
    })

    client.on('error', error => {
      bot.emit('clientDisconnect', error.toString());
    })

    client.on("keep_alive", ({ keepAliveId }) => {
    })

    client.on('kick_disconnect', (data) => {
      bot.emit("clientDisconnect", data.reason)
    })

    process.on("uncaughtException", (e) => {

    });
  })

  const client = options.client ?? new mc.createClient(bot.options)
  bot._client = client
  bot.emit('init_client', client)
  bot.bots = options.bots ?? [bot]
  return bot
}
module.exports = createBot;
