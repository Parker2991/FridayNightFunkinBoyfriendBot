const mc = require("minecraft-protocol");
const { EventEmitter } = require("node:events");
const fs = require("fs");
const path = require("path");
const util = require("node:util");

require("events").EventEmitter.defaultMaxListeners = Infinity;
const ChatMessage = require('prismarine-chat')('1.20.2')
function createBot(options = {}) {
  const bot = new EventEmitter();
//  const rs = require("randomstring");
  // Set some default values in options
  bot.options = {
 host: options.host ??= "localhost",
 username: options.username ??= "FNFBoyfriendBot",
 hideErrors: options.hideErrors ??= true, // HACK: Hide errors by default as a lazy fix to console being spammed with the console
 version: options.version ??= '1.20.2',

},

  bot.options = options;

  // Create our client object, put it on the bot, and register some events
  bot.on("init_client", (client) => {
    client.on("packet", (data, meta) => {
      bot.emit("packet", data, meta);
      try{
        bot.emit('packet.' + meta.name, data)
      } catch(e) {
      if(e.toString() === 'RangeError: Invalid string length'){
      bot._client.chat('Leaving to prevent crashing')
      bot._client.end()
      } else {
      console.log(e)
      }
    }
});
const timer = setInterval(() => {
  if(!bot.options.endcredits){
  return
  }else{             
  bot.chat(`Join the FNFBoyfriendBot discord ${bot.options.discord.invite}`)
  }
}, 280000)
    
client.on("login", async function (data) {
      bot.uuid = client.uuid;
      bot.username = client.username;
      bot.port = bot.options.port;
      bot.version = bot.options.version;            
      if (bot.options.isCreayun) {
       bot.command('server creative')
      }
      try {
      var day = new Date().getDay()
      if (day === 5) {
      bot.sendFeedback({text:"Gettin' freaky on a Friday Night!"})
      } else {
      bot.sendFeedback({text:`${process.env.buildstring}`})
      } 
      }catch(e){
      }
      timer       
     }) 
    client.on("end", (reason) => {
     bot.emit("end", reason);  
     bot.console.warn(`Disconnected: ${reason.toString()}`);
     bot.cloop.clear()
     bot.memusage.off()
     bot.tps.off()
     bot.bruhifyText = ''
     clearInterval(timer) 
     bot?.discord?.channel?.send('``Disconnected:' + reason.toString() + '``' )

   });
  
    client.on("disconnect", (reason) => {
      bot.emit("disconnect", reason);
      bot.console.warn(`Disconnected: ${reason.toString()}`);  
      bot?.discord?.channel?.send('``Disconnected:' + reason.toString() + '``' )
  
    });

    client.on("kick_disconnect", (reason) => {
      bot.emit("kick_disconnect", reason);
      bot.console.warn(`Disconnected: ${reason.toString()}`);
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
