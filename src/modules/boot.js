function boot (context) {
  const bot = context.bot;
  const config = context.config;
  const options = context.options;
  bot.on("packet.login", (data) => {
    if (bot.options.isCreayun) return
    if (new Date().getDay() === 5) {
      bot.chat.message('Gettin\' freaky on a friday night!');
    } else {
      bot.chat.message('&9FNF&3Boyfriend&1Bot &fcreated by &4Parker&02991');
    }
  })
  setInterval(() => {
    process.stdout.write(`\x1b]2; FNFBoyfriendBot | Time: ${new Date().toLocaleString("en-US",{timeZone: "America/CHICAGO"})} | \x1b\x5c`)
  }, 1000)
}
module.exports = boot;
