const mc = require("minecraft-protocol");
const { EventEmitter } = require("node:events");
const fs = require("fs");
const path = require("path");
const util = require("node:util");
const usernameGen = require('./util/usernameGen');
require("events").EventEmitter.defaultMaxListeners = Infinity;
const ChatMessage = require('prismarine-chat')('1.20.2')
function createBot(options = {}) {
  const bot = new EventEmitter();

  // Set some default values in options
  bot.options = {
    host: options.host ??= "localhost",
    username: options.username ??= usernameGen(),
    hideErrors: options.hideErrors ??= true, // HACK: Hide errors by default as a lazy fix to console being spammed with the console
    version: options.version ??= '1.20.2',
  },

  bot.options = options;

  // Create our client object, put it on the bot, and register some events
  bot.on("init_client", (client) => {
    client.on("packet", (data, meta) => {
      bot.emit("packet", data, meta);
      bot.emit('packet.' + meta.name, data)
  });
  const timer = setInterval(() => {
    if (!bot.options.endcredits) {
    return
    } else {             
     bot.chat(`Join the FNFBoyfriendBot discord ${bot.Discord.invite}`)
    }
  }, 280000)
   client.on("login", async function (data) {
      bot.uuid = client.uuid;
      bot.username = client.username;
      bot.port = bot.options.port;
      bot.version = bot.options.version;            
      if (!bot.options.isCreayun) {
        if (bot.options.isCreayun) {
        }
        var day = new Date().getDay()
        if (day === 5) {
          bot.chat("Gettin' freaky on a Friday Night!")
        } else { 
          bot.chat(`${bot.getMessageAsPrismarine(process.env.buildstring)?.toMotd().replaceAll('§','&')}`)
        }
        timer     
       }  
       if (bot.options.useChat) {
	 bot?.console?.warn(`useChat is active for ${bot.options.host} the bot will not be able to run commands in core`)
       } else if (bot.options.isCreayun) {
         bot?.console?.info(`Creayun mode is active for ${bot.options.host} please not that the bot will not read kaboom commands and messages when Creayun mode is active`)
       }
    }) 
    client.on("end", (reason) => {
      bot.emit("end", reason);  
      bot.console.warn(`Disconnected: ${reason.toString()}`);
      bot.cloop.clear()
      bot.memusage.off()
      bot.tps.off()
      bot.bruhifyText = ''
      clearInterval(timer) 
      bot?.discord?.channel?.send('``Disconnected:' + JSON.stringify(reason) + '``' )
    });
  
    client.on("disconnect", (reason) => {
      bot.emit("disconnect", reason);
      bot.console.warn(`Disconnected: ${JSON.stringify(reason)}`);  
      bot?.discord?.channel?.send('``Disconnected:' + reason.toString() + '``' ) 
    });

    client.on("kick_disconnect", (reason) => {
      bot.emit("kick_disconnect", reason);
      bot.console.warn(`Disconnected: ${JSON.stringify(reason)}`);
      bot?.discord?.channel?.send('``Disconnected:' + reason.toString() + '``')
    });
    client.on("keep_alive", ({ keepAliveId }) => {
      bot.emit("keep_alive", { keepAliveId });
    });

    client.on("error", (error) => {
      bot?.discord?.channel?.send('``' + error.toString() + '``' )
      bot.emit("error", error)
     })
  });

  
  const client = options.client ?? mc.createClient(options);
  bot._client = client;
  bot.emit("init_client", client);
  bot.bots = options.bots ?? [bot];  
  return bot;
}


module.exports = createBot;
