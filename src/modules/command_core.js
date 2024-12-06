const mcData = require('minecraft-data')('1.20.2');
const nbt = require('prismarine-nbt');

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

    itemPosition: null,

    currentBlockRelative: { x: 0, y: 0, z: 0 },

    usePlacedCommandBlock: false,

    chatRefill () {
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
      bot.chat.command(`${command}`)
    },

    itemRefill () {
      const pos = bot.core.position;
      const { start, end } = bot.core.area;
      const itemPosition = bot.core.itemPosition;

      if (!pos) return;
      if (bot.options.useChat || bot.options.isCreayun || bot.options.isSavage) return;
      if (isNaN(pos.x + pos.x)) {
        bot.chat.command('spawn');
        return
      }
      /*^^^
      for checking is the core pos is null and if so
      it will not refill core until the pos is not NaN
      instead of tping to a set cords cuz fuck you im not doing that
      */
      const command = `minecraft:fill ${pos.x + start.x} ${pos.y + start.y} ${pos.z + start.z} ${pos.x + end.x} ${pos.y + end.y} ${pos.z + end.z} repeating_command_block{CustomName:'${JSON.stringify(config.core.name)}'} destroy`

      bot._client.write('set_creative_slot', {
        slot: 36,
        item: {
          present: true,
          itemId: mcData.itemsByName.repeating_command_block.id,
          itemCount: 1,
          nbtData: nbt.comp({
            BlockEntityTag: nbt.comp({
              CustomName: nbt.string(JSON.stringify(config.core.itemName))
            })
          })
        }
      });

      bot._client.write('block_dig', {
        status: 0,
        location: itemPosition,
        face: 0
      });

      bot._client.write('block_place', {
        hand: 0,
        location: itemPosition,
        direction: 0,
        cursorX: 0.1,
        cursorY: 0,
        cursorZ: 0.1,
        insideBlock: false
      });

      if (bot.core.usePlacedCommandBlock) {
        return
      } else {
        bot._client.write('update_command_block', {
          location: itemPosition,
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
      };

      bot.core.itemPosition = {
        x: pos.x,
        y: pos.y -1,
        z: pos.z
      }

      if (config.core.itemRefill === true) {
        bot.core.itemRefill();
      } else {
        bot.core.chatRefill();
      }
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
      const location = bot.core.currentBlock();
      const itemPosition = bot.core.itemPosition;

      if (!location) return;
      if (bot.options.isSavage || bot.options.isCreayun || bot.options.useChat) {
        return
      } else {
        if (bot.core.usePlacedCommandBlock) {
          bot._client.write('update_command_block', {
            command: command.substring(0, 32767),
            location: itemPosition,
            mode: 1,
            flags: 5,
          });

          bot.core.incrementCurrentBlock();
        } else {
          bot._client.write('update_command_block', {
            command: command.substring(0, 32767),
            location,
            mode: 1,
            flags: 5
          });

          bot.core.incrementCurrentBlock();
        }
      }
    },
  }

  if (bot.options.isSavage || bot.options.isCreayun) return
  bot.on('move', () => {
    bot.core.move(bot.position)
  })

  bot.on('packet.block_change', (data) => {
//    console.log('data pos ' + JSON.stringify(data.location))
//    console.log('core pos ' +JSON.stringify(bot.core.position));
  //  if (data.type === 0) {
//      console.log('data pos ' + JSON.stringify(data.location));
//      console.log('core position ' + JSON.stringify(bot.core.position));
//      bot.core.refill();
    //}
  })
}
module.exports = core;
