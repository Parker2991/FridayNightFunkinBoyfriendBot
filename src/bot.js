const mc = require('minecraft-protocol');
const { EventEmitter } = require('events');
EventEmitter.defaultMaxListeners = 5e6;
const util = require('util');
const createRegistry = require('prismarine-registry');
const ChatMessage = require('prismarine-chat');
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
      bot.emit('packet.' + meta.name, data)
    })

    client.on('login', () => {
      bot.uuid = client.uuid
      bot.username = client.username
      bot.registry = createRegistry(client.version)
      bot.registry.language = require('./data/language.json');
      bot.emit('registry_ready', bot.registry)
    })

    client.on('disconnect', data => {
      bot.emit("disconnect", data);
      bot.console.warn(`${ChatMessage(bot._client.version).fromNotch("§8[§bClient Reconnect§8]§r")?.toAnsi()} ${ChatMessage(bot._client.version).fromNotch(data.reason)?.toAnsi()}`)
    })

    client.on('end', reason => {
      bot.emit('end', reason);
      if (reason === "socketClosed") return;
      bot.console.warn(ChatMessage(bot._client.version).fromNotch(`§8[§bClient Reconnect§8]§r ${reason}`)?.toAnsi())
      //      bot = undefined;
//      config = undefined;
    })

    client.on('error', error => {
      bot.console.warn(ChatMessage(bot._client.version).fromNotch('§8[§bClient Reconnect§8]§r ')?.toAnsi() + util.inspect(error.toString()))
      bot?.discord?.channel?.send(error.toString())
    })

    client.on("keep_alive", ({ keepAliveId }) => {
      bot.emit("keep_alive", { keepAliveId })
    })

    client.on('kick_disconnect', (data) => {
      bot.emit("kick_disconnect", data.reason)
      bot.console?.warn(`${ChatMessage(bot._client.version).fromNotch("§8[§bClient Reconnect§8]§r")?.toAnsi()} ${ChatMessage(bot._client.version).fromNotch(data.reason)?.toAnsi()}`)
      bot?.discord?.channel?.send(util.inspect(data.reason))
    })

    process.on("uncaughtException", (e) => {
//      console?.warn(e.stack)
    });
  })

  const client = options.client ?? new mc.createClient(bot.options)
  bot._client = client
  bot.emit('init_client', client)
  bot.bots = options.bots ?? [bot]
  return bot
}
module.exports = createBot;
