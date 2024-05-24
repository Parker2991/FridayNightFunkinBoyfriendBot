function memusage(bot, options) {
  const clamp = require("../util/clamp");
  const bossbarName = "memusage";

  const os = require("os");
  let enabled = false;
  let tag = "FNFBoyfriendBotMemusage";
  bot.memusage = {
    on() {
      enabled = true;
    },
    off() {
      enabled = false;
    },
  };
 

  const interval = setInterval(() => {
    if (!enabled) return;
           const component = {
      translate: `%s`,
      color: "gray",
      bold: false,
      with: [{ text: `Memory used ${Math.floor(
        process.memoryUsage().heapUsed / 1048576,
      )} MiB / ${Math.floor(
        process.memoryUsage().heapTotal / 1048576,
      )} MiB`, color: "green" }],
    };
    bot.core.run(`/minecraft:title @a actionbar ${JSON.stringify(component)}`)
    }, 100); //process.memoryUsage().heapUsed /1024 / 1024
}
module.exports = memusage;
