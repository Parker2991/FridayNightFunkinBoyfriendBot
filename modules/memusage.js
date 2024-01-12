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
     bot.core.run(`minecraft:bossbar remove ${bossbarName}`);
    },
  };//
 

  const interval = setInterval(() => {
    if (!enabled) return;

   /* const component = {
      text: `Mem used ${Math.floor(
        process.memoryUsage().heapUsed / 1000 / 1000,
      )} MiB / ${Math.floor(
        process.memoryUsage().heapTotal / 1000 / 1000,
      )} MiB. `,
      color: "dark_gray",
    };*/
           const component = {
      translate: `memusage %s`,
      color: "gray",
      bold: false,
      with: [{ text: `Memory used ${Math.floor(
        process.memoryUsage().heapUsed / 1000 / 1000,
      )} Mebibytes / ${Math.floor(
        process.memoryUsage().heapTotal / 1000 / 1000,
      )} Mebibytes.`, color: "green" }],
    };
          //process.cpuUsage
    bot.core.run(`minecraft:bossbar add ${bossbarName} ""`);
    bot.core.run(`minecraft:bossbar set ${bossbarName} players @a`);
    bot.core.run(`minecraft:bossbar set ${bossbarName} color yellow`);
    bot.core.run(`minecraft:bossbar set ${bossbarName} visible true`);
    bot.core.run(`minecraft:bossbar set ${bossbarName} style progress`);
    bot.core.run(
      `minecraft:bossbar set ${bossbarName} name ${JSON.stringify(component)}`,
    );
    bot.core.run(`minecraft:bossbar set ${bossbarName} max 20`);
  }, 100); //process.memoryUsage().heapUsed /1024 / 1024
}
module.exports = memusage;
