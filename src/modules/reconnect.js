const mc = require('minecraft-protocol');
const usernameGen = require("../util/usernameGen");
function reconnect (bot, options, config) {
  bot.on('end', () => {
    //bot = undefined;
  
    bot._client.removeAllListeners();
    //client = undefined;
    //bot._client = undefined;
    if (bot.reconnectDelay < 0) return
    setTimeout(() => {
      if (options.usernameGen) {
        client = options.client ?? mc.createClient(options, options.username = usernameGen(bot))
      } else {
        client = options.client ?? mc.createClient(options)
      }
      bot._client = client
      bot.emit('init_client', bot._client)
    }, options.reconnectDelay);
  })
}

module.exports = reconnect;
