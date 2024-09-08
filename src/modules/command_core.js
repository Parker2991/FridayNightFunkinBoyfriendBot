function core (bot, options, config) {
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
      if (bot.options.useChat ?? bot.options.isCreayun ?? bot.options.isSavage) return
//      if (isNaN(pos.x + start.x)) bot.chat.command('world 3');
//      console.log(isNaN(pos.x + start.x))
      bot.chat.command(`minecraft:fill ${pos.x + start.x} ${pos.y + start.y} ${pos.z + start.z} ${pos.x + end.x} ${pos.y + end.y} ${pos.z + end.z} repeating_command_block{CustomName:'${JSON.stringify(config.core.name)}'}`)
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
      const location = bot.core.currentBlock()
      if (!location) return
      if (bot.options.isSavage || bot.options.isCreayun || bot.options.useChat) {
        bot.chat.command(`${command?.substring(0, 256)}`)
      } else {
        bot._client.write('update_command_block', { command: command.substring(0, 32767), location, mode: 1, flags: 0b100 })
        bot.core.incrementCurrentBlock()
      }
    }
  }
 // if (bot.options.useChat ?? bot.options.isCreayun ?? bot.options.isSavage) return
  if (bot.options.isSavage) return
  bot.on('move', () => {
//    if (bot.options.isSavage) return
    bot.core.move(bot.position)
//     setTimeout(() => bot.core.run('say Hello, world!'), 1000)
  })
}

module.exports = core;
