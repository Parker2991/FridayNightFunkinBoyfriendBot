const mcData = require('minecraft-data')('1.20.2');

function core (context) {
  const bot = context.bot;
  const config = context.config;
  const options = context.options;
  bot.core = {
    area: {
      start: config.core?.area.start ?? { x: 0, y: 0, z: 0 },
      end: config.core?.area.end ?? { x: 15, y: 0, z: 15 }
    },

    position: null,

    currentBlockRelative: { x: 0, y: 0, z: 0 },

    refill () {
      const pos = bot.core.position
      const { start, end } = bot.core.area

      if (!pos) return
      if (bot.options.useChat || bot.options.isCreayun || bot.options.isSavage) return
      if (isNaN(pos.x + start.x)) {
        bot.chat.command('spawn');
        return
      }
      /*^^^
      for checking is the core pos is null and if so
      it will not refill core until the pos is not NaN
      instead of tping to a set cords cuz fuck you im not doing that
      */
      const command = `minecraft:fill ${pos.x + start.x} ${pos.y + start.y} ${pos.z + start.z} ${pos.x + end.x} ${pos.y + end.y} ${pos.z + end.z} repeating_command_block{CustomName:'${JSON.stringify(config.core.name)}'} destroy`
      if (config.core.method === 'chat') {
        bot.chat.command(`${command}`)
      } else if (config.core.method === 'item') {
        bot._client.write('set_creative_slot', {
          slot: 36,
          item: {
            present: true,
            itemId: mcData.itemsByName.command_block.id,
            itemCount: 1,
            nbtData: { }
          }
        });

        bot._client.write('block_dig', {
          status: 0,
          location: {
            x: bot.position.x,
            y: bot.position.y,
            z: bot.position.z
          },
          face: 0
        });

        bot._client.write('block_place', {
          hand: 0,
          location: {
            x: bot.position.x,
            y: bot.position.y,
            z: bot.position.z
          },
          direction: 0,
          cursorX: 0.1,
          cursorY: 0,
          cursorZ: 0.1,
          insideBlock: false
        });

        bot._client.write('update_command_block', {
          location: bot.position,
          command,
          flags: 5,
          mode: 1
        })
      }
    },

    move (pos = bot.position) {
      bot.core.position = {
        x: Math.floor(pos.x / 16) * 16,
        y: 0,
        z: Math.floor(pos.z / 16) * 16
      }
      bot.core.refill()
    },

    currentBlock () {
      const relativePosition = bot.core.currentBlockRelative
      const corePosition = bot.core.position
      if (!corePosition) return null
      return { x: relativePosition.x + corePosition.x, y: relativePosition.y + corePosition.y, z: relativePosition.z + corePosition.z }
    },

    incrementCurrentBlock () {
      const relativePosition = bot.core.currentBlockRelative
      const { start, end } = bot.core.area

      relativePosition.x++

      if (relativePosition.x > end.x) {
        relativePosition.x = start.x
        relativePosition.z++
      }

      if (relativePosition.z > end.z) {
        relativePosition.z = start.z
        relativePosition.y++
      }

      if (relativePosition.y > end.y) {
        relativePosition.x = start.x
        relativePosition.y = start.y
        relativePosition.z = start.z
      }
    },

    run (command) {
      const eee = Math.floor(Math.random() * 10000)
      const location = bot.core.currentBlock()
      if (!location) return
      if (bot.options.isSavage || bot.options.isCreayun || bot.options.useChat) {
        return
      } else {
        bot._client.write('update_command_block', { command: command.substring(0, 32767), location, mode: 1, flags: 0b100 });
        bot._client.write('query_block_nbt', ({ location: location, transactionId: eee}));
        bot.core.incrementCurrentBlock();
      }
    },

    runTracked (command) {
      const transactionId = Math.floor(Math.random() * 1000);
      const location = bot.core.currentBlock();
      if (!location) return;

      if (bot.position.y !== bot.core.position.y) {
        bot.chat.command(`minecraft:tp ${bot.core.position.x} ${bot.core.position.y} ${bot.core.position.z}`)
      }

      bot._client.write('update_command_block', {
        command: command.substring(0, 32767),
        location,
        flags: 5,
        mode: 1,
//        LastOutput: true,
      });

      bot.core.incrementCurrentBlock();

      bot._client.write('query_block_nbt', {
        location,
        transactionId
      });

      bot.on('packet.nbt_query_response', (data) => {
//          transactionId,
        try {
        if (data.transactionId === transactionId) {
          bot.tellraw("@a", require('util').inspect(data.value))
          bot.tellraw("@a", JSON.stringify(data.value))
        }
        } catch (e) {
          bot.tellraw("@a", require("util").inspect(e.stack));
        }
      })
    }
  }

  if (bot.options.isSavage || bot.options.isCreayun) return
  bot.on('move', () => {
    bot.core.move(bot.position)
  })

  bot.on('packet.block_change', (data) => {
//    console.log('data pos ' + JSON.stringify(data.location))
//    console.log('core pos ' +JSON.stringify(bot.core.position));
    if (data.type === 0) {
//      console.log('data pos ' + JSON.stringify(data.location));
//      console.log('core position ' + JSON.stringify(bot.core.position));
//      bot.core.refill();
    }
  })
}
module.exports = core;
