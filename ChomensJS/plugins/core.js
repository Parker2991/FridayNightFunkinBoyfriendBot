const nbt = require('prismarine-nbt');
const Vec3 = require('vec3');

const relativePosition = new Vec3(0, 0, 0);

function inject(bot, dcclient, config) {
  const mcData = require('minecraft-data')(bot.version);
  const impulseMode = !bot.options.kaboom;
  const core = {
    // Initialize the height to 0
    height: 0,
    run(command) {
      try {
        // Check if height has reached the maximum configured height
        if (core.height >= config.core.layers) {
          // Reset the height to 0 and the relativePosition to (0, 0, 0)
          core.height = 0;
          relativePosition.x = 0;
          relativePosition.y = 0;
          relativePosition.z = 0;
        }

        const location = {
          x: core.start.x + relativePosition.x,
          y: core.start.y + core.height, // Use the core height
          z: core.start.z + relativePosition.z
        };

        if (impulseMode) bot.write('update_command_block', { location, command: '', mode: 0, flags: 0 });
        bot.write('update_command_block', {
          location,
          command: String(command).substring(0, 32767),
          mode: impulseMode ? 2 : 1,
          flags: 0b101
        });

        // Increment the relativePosition.x and update the height accordingly
        relativePosition.x++;
        if (relativePosition.x >= 16) {
          relativePosition.x = 0;
          relativePosition.z++;
          if (relativePosition.z >= 16) {
            relativePosition.z = 0;
            core.height++; // Increment the height
          }
        }
      } catch (e) {
        bot.console.error(e);
      }
    },
    fillCore() {
      core.start = new Vec3(
        Math.floor(bot.position.x / 16) * 16,
        0 /* bot.position.y */,
        Math.floor(bot.position.z / 16) * 16
      ).floor();
      core.end = core.start.clone().translate(16, config.core.layers, 16).subtract(new Vec3(1, 1, 1));

      placeCore();
    }
  };

  bot.core = core;

  function placeCore() {
    try {
      const fillCommand = `minecraft:fill ${core.start.x} ${core.start.y} ${core.start.z} ${core.end.x} ${core.end.y} ${core.end.z} repeating_command_block{CustomName:'${JSON.stringify(config.core.customName)}'}`;
      const location = { x: Math.floor(bot.position.x), y: Math.floor(bot.position.y) - 1, z: Math.floor(bot.position.z) };

      bot.write('set_creative_slot', {
        slot: 36,
        item: {
          present: true,
          itemId: impulseMode ? mcData.itemsByName.command_block.id : mcData.itemsByName.repeating_command_block.id,
          itemCount: 64,
          nbtData: nbt.comp({
            BlockEntityTag: nbt.comp({
              Command: nbt.string(fillCommand),
              auto: nbt.byte(1),
              TrackOutput: nbt.byte(0)
            })
          })
        }
      });

      bot.write('block_dig', {
        status: 0,
        location,
        face: 1
      });

      bot.write('block_place', {
        location,
        direction: 1,
        hand: 0,
        cursorX: 0.5,
        cursorY: 0.5,
        cursorZ: 0.5,
        insideBlock: false
      });
    } catch (e) {
      bot.console.error(e);
    }
  }

  bot.on('position', bot.core.fillCore);

  const interval = setInterval(bot.core.fillCore, config.core.refillInterval);

  bot.on('end', () => {
    clearInterval(interval);
  });
}

module.exports = { inject };
