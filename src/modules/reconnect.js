const mc = require('minecraft-protocol');
const usernameGen = require("../util/usernameGen");
function inject (context) {
  const bot = context.bot;
  const config = context.config;
  const options = context.options;
  bot.on('end', () => {
    bot._client.removeAllListeners();
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

module.exports = {
  data: {
    enabled: true,
    name: "reconnect",
    type: "client"
  },
  inject
};
