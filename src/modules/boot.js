function boot (bot, options, discordClient, config) {
  bot.on("packet.login", (data) => {
    bot.chat.message('&9FNF&3Boyfriend&1Bot &fcreated by &4Parker&02991');
  }) // &9 &3 &1
}
module.exports = boot;
