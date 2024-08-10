function command_loop (bot, options, config) {
  bot.cloop = {
    list: [],
    add (command, interval) {
      setTimeout(() => {
        this.list.push({ timer: setInterval(() => bot.core.run(command), interval), command, interval })
      }, 10)
      bot.on('end', () => {
        this.clear()
      })
    },

    remove (index) {
      clearInterval(this.list[index].timer)
      bot.cloop.list.splice(index, 1)
    },
    clear () {
      for (const cloop of this.list) clearInterval(cloop.timer)
      this.list = []
    }
  }
/*  bot.on('end', () => {
//    clearInterval(this.list);
   for (const cloop of this.list) console.log(cloop)
    console.log('e')
  })*/
}
module.exports = command_loop;
