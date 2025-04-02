const sleep = require('./sleep');

function coreUtil (bot, config, options) {
  if (options.mode === "creayun") return;
  let timer;
  bot.on('packet.block_change', (data) => {
    try {
//    if (bot.options.mode === "savageFriends") return;
    // type 12521 = repeating_command_block
    // type 12533 = chain_command_block
    // type 7912 = command_block
    // type 0 = air
    if (data?.location?.x === bot?.core?.position?.x && data?.location?.y === bot?.core?.position?.y && data?.location?.z === bot?.core?.position?.z && data.type === 0) {
      bot.core.move(bot.position);
    }
    } catch (e) {
      bot.console.warn(e.toString());
    }
  });

  bot.on('move', async () => {
    try {
    if (bot.options.mode === "savageFriends") {
      await sleep(2000);
      bot.chat.command('/removenear commandblock');
      await sleep(2000);
      bot.core.move(bot.position);

    } else {
      bot.core.move(bot.position);
    }
    } catch (e) {
      bot.console.warn(e.toString());
    }
  });

  bot.on('packet.login', () => {
    timer = setInterval(() => {
      bot.core.move(bot.position)
    }, config.core.refillInterval)
  });

  bot.on('end', () => {
    if (timer) clearInterval(timer);
  });


  bot.on('packet.multi_block_change', (data) => {
    try {
    if (bot.options.mode !== "kaboom") return;

    let broken = true;

    if (
      data.chunkCoordinates.x === Math.floor(bot.core.position.x / 16)
      &&
      data.chunkCoordinates.y === Math.floor(bot.core.position.y / 16)
      &&
      data.chunkCoordinates.z === Math.floor(bot.core.position.z / 16)
    ) {
      for (const state of data.records) {
        if ((state >= 7906) && (state >= 7917)) broken = false;
        if ((state >= 12527) && (state >= 12538)) broken = false;
        if ((state >= 12515) && (state >= 12526)) broken = false;
        else broken = true;
      }

      if (broken === true) bot.core.move(bot.position);
//      console.log(broken);
    }

    } catch (e) {
      console.log(e.stack);
    }
  })
}
module.exports = coreUtil;
