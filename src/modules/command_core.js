async function command_core (bot, options) {
  bot.core = {   
    // what you think im doing? look at line 17
    area: {
      start: /*bot.Core.area.start, ??*/ { x: 0, y: 0, z: 0 },
      end: /*bot.Core.area.end, ??*/ { x: 15, y: 0, z: 15 }
    },
    position: null,
    currentBlockRelative: { x: 0, y: 0, z: 0 },

    refill () {
      const pos = bot.core.position
      const { start, end } = bot.core.area

      if (!pos) return

      bot.command(`fill ${pos.x + start.x} ${pos.y + start.y} ${pos.z + start.z} ${pos.x + end.x} ${pos.y + end.y} ${pos.z + end.z} repeating_command_block${bot.Core.JSON} destroy`)
  
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
      if (!corePosition) return -1
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
      if (bot.options.useChat ?? bot.options.isCreayun) {
        if (command.startsWith('/')) {
      bot.command(command.substring(1))
      return
      }
      bot.chat(command)  
      } else {
      bot._client.write('update_command_block', { command: command.substring(0, 32767), location, mode: 1, flags: 0b100 })

      bot.core.incrementCurrentBlock()

      // added .substring(0, 32767) so it won't kick the bot if the command is too long.
      }
    },  
  }
  if (bot.options.useChat ?? bot.options.isCreayun) return
  bot.on('move', () => {
    bot.core.move(bot.position)

   //setTimeout(() => bot.core.run('say hi'), 100)
  })
   bot.on('packet.login', (data) => {
      const timer = setInterval(() => {
       bot.core.refill()
      }, bot.options.Core.interval)
   bot.on('end', (bot) => {
      clearInterval(timer)
                        
  })
 })
}
module.exports = command_core
