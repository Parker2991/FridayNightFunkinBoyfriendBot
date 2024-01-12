const clamp = require("../util/clamp");
function tpsbar(bot, config) {
  const bossbarName = "tps";

  let enabled = false;
  bot.tps = {
    on() {
      enabled = true;
    },
    off() {
      enabled = false;
      bot.core.run(`minecraft:bossbar remove ${bossbarName}`);
    },
  };

  const tickRates = [];
  let nextIndex = 0;
  let timeLastTimeUpdate = -1;
  let timeGameJoined;

  const interval = setInterval(() => {
    if (!enabled) return;

    const component = {
      translate: `https://doin-your.mom TPS - %s`,
      color: "gray",
      bold: false,
      with: [{ text: getTickRate(), color: "green" }],
    };
    bot.core.run(`minecraft:bossbar add ${bossbarName} ""`);
    bot.core.run(`minecraft:bossbar set ${bossbarName} players @a`);
    bot.core.run(`minecraft:bossbar set ${bossbarName} color yellow`);
    bot.core.run(`minecraft:bossbar set ${bossbarName} visible true`);
    bot.core.run(`minecraft:bossbar set ${bossbarName} style progress`);
    bot.core.run(
      `minecraft:bossbar set ${bossbarName} name ${JSON.stringify(component)}`,
    );
    bot.core.run(`minecraft:bossbar set ${bossbarName} max 20`);
    bot.core.run(
      `minecraft:bossbar set ${bossbarName} value ${Math.floor(getTickRate())}`,
    );
    //  bot.tellraw(Math.floor(getTickRate()))
  }, 100);

  function getTickRate() {
    if (Date.now() - timeGameJoined < 4000) return "Calculating...";

    let numTicks = 0;
    let sumTickRates = 0.0;
    for (const tickRate of tickRates) {
      if (tickRate > 0) {
        sumTickRates += tickRate;
        numTicks++;
      }
    }

    const value = (sumTickRates / numTicks).toFixed(2);
    if (value > 20) return 20;
    else return value;
  }

  bot.on("login", () => {
    nextIndex = 0;
    timeGameJoined = timeLastTimeUpdate = Date.now();
  });

  bot._client.on("update_time", () => {
    const now = Date.now();
    const timeElapsed = (now - timeLastTimeUpdate) / 1000.0;
    tickRates[nextIndex] = clamp(20.0 / timeElapsed, 0.0, 20.0);
    nextIndex = (nextIndex + 1) % tickRates.length;
    timeLastTimeUpdate = now;
  });

  bot.on("end", () => clearInterval(interval));
}

module.exports = tpsbar;
