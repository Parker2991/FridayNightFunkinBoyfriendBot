 const mc = require("minecraft-protocol");
const { EventEmitter } = require("node:events");
const fs = require("fs");
const path = require("path");
const util = require("node:util");

require("events").EventEmitter.defaultMaxListeners = 31;
const ChatMessage = require('prismarine-chat')('1.20.2')
function createBot(options = {}) {
  const bot = new EventEmitter();
  const rs = require("randomstring");
  // Set some default values in options
  let r = Math.floor(Math.random() * 255) + 1;
  options.host ??= "localhost";
  options.username ??= "FNFBoyfriendBot";
  options.hideErrors ??= false; // HACK: Hide errors by default as a lazy fix to console being spammed with them
  options.Console.enabled ??= true;
options.Console.filelogging ??= false;
  
  options.selfcare.vanished ??= true;

  options.selfcare.prefix ??= true;

  options.selfcare.skin ??= true;

  options.selfcare.cspy ??= true;

  options.selfcare.op ??= true;

  options.selfcare.gmc ??= true;

  options.selfcare.interval ??= 500;

  options.selfcare.username ??= true;

  options.selfcare.nickname ??= true;

  options.selfcare.god ??= true;

  options.selfcare.tptoggle ??= true;

  options.discord.commandPrefix ??= "~";

  options.reconnectDelay ??= 1000;

  bot.options = options;

  // Create our client object, put it on the bot, and register some events
  bot.on("init_client", (client) => {
    client.on("packet", (data, meta) => {
      bot.emit("packet", data, meta);
      bot.emit("packet." + meta.name, data);
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

            
    

if(!bot.options.Core.enabled){
var day = new Date().getDay()
if(day === 5){
bot.chat('Getting freaky on a Friday Night!')
}else{
var day = new Date().getDay()
if(day === 5){
bot.chat('Getting freaky on a Friday Night!')
}else{
const buildstring = process.env["buildstring"]
            bot.chat(ChatMessage.fromNotch(JSON.stringify(process.env['buildstring'])).toMotd().replaceAll('§', '&'))      
} 
}
timer       
       
}
})
 
    client.on("end", (reason) => {
      bot.emit("end", reason);
      bot.console.warn(`Disconnected: ${JSON.stringify(reason)}`);
            bot.cloop.clear()
            bot.memusage.off()
bot.tps.off()
           clearInterval(timer)
bot?.discord?.channel?.send('``Disconnected:' + JSON.stringify(reason) + '``' )
    });
         
    client.on("disconnect", (reason) => {
      bot.emit("disconnect", reason);
      bot.console.warn(`Disconnected: ${JSON.stringify(reason)}`);
 
bot?.discord?.channel?.send('``Disconnected:' + JSON.stringify(reason) + '``' )
  });

    client.on("kick_disconnect", (reason) => {
      bot.emit("kick_disconnect", reason);
    bot.console.warn(`Disconnected: ${JSON.stringify(reason)}`);
//console.log(reason) 
bot?.discord?.channel?.send('``Disconnected:' + JSON.stringify(reason) + '``' )
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
const amonger = "../";
if (fs.existsSync("../FridayNightFunkinBoyfriendBot") == false) { // this isn't full proof. if the replit name is the same as this value, it will count as not a amonger | I have an idea, my idea is like check if the name of the system / info is whatever so if it's win32 but it should be whatever ubuntu or something it doesn't run | I might put it in minecraft-protocol files :skull:
  process.exit(1);//but that would be overwritten when minecraft-protocol is being updated or smh
}

module.exports = createBot;
