const mc = require('minecraft-protocol')
const { EventEmitter } = require('events')
//require("events").EventEmitter.defaultMaxListeners = Infinity;
EventEmitter.defaultMaxListeners = Infinity
const util = require('util');
function createBot(options = {}, config) {
  const bot = new EventEmitter();
  bot.options = {
  // Set some default values in options
    host: options.host ??= 'localhost',
    username: options.username ??= 'Player',
    hideErrors: options.hideErrors ??= true, // HACK: Hide errors by default as a lazy fix to console being spammed with them
  };
  bot.options = options;
  const ChatMessage = require('prismarine-chat')(bot.options.version);
  // Create our client object, put it on the bot, and register some events
  bot.on('init_client', client => {
    client.on('packet', (data, meta) => {
      bot.emit('packet', data, meta)
      bot.emit('packet.' + meta.name, data)
    })

    client.on('login', () => {
      bot.uuid = client.uuid
      bot.username = client.username
    })
    client.on('disconnect', (data) => {
      bot.emit("disconnect", data)
//      bot.console.info(JSON.stringify(data))
//      bot?.discord?.channel?.send(util.inspect(data.reason))
      if (config.console.filelogger) {
//        bot?.console?.filelogging(`[${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} logs] [${options.serverName}] ` + '[Client Reconnect] ' + util.inspect(data.reason))
      }
    })
    client.on('end', reason => {
      bot.emit('end', reason);
    })

    client.on('error', error => {
      bot.console.warn(ChatMessage.fromNotch('§8[§bClient Reconnect§8]§r ')?.toAnsi() + util.inspect(error.toString()))
//      bot?.discord?.channel?.send(error.toString())
      if (config.console.filelogger) {
  //      bot?.console?.filelogging(`[${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} logs] [${options.serverName}] ` + '[Client Reconnect] ' + util.inspect(error.toString()))
      }
    })

    client.on("keep_alive", ({ keepAliveId }) => {
      bot.emit("keep_alive", { keepAliveId })
    })

    client.on('kick_disconnect', (data) => {
      bot.emit("kick_disconnect", data.reason)
      bot.console?.warn(ChatMessage.fromNotch(`§8[§bClient Reconnect§8]§r `)?.toAnsi() + util.inspect(data.reason))
      bot?.discord?.channel?.send(util.inspect(data.reason))
      if (config.console.filelogger) {
    //    bot?.console?.filelogging(`[${new Date().toLocaleTimeString("en-US", { timeZone: "America/CHICAGO", })} ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO", })} logs] [${options.serverName}] ` + '[Client Reconnect] ' + util.inspect(data.reason))
      }
    })

    process.on("uncaughtException", (e) => {
//      console?.warn(e.stack)
    });
  })

  const client = options.client ?? new mc.createClient(options)
  bot._client = client
  bot.emit('init_client', client)
  bot.bots = options.bots ?? [bot]
  return bot
}
module.exports = createBot
