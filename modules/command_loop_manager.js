function inject (bot, options) {
  bot.cloop = {
    list: [],
    
    add (command, interval) {
      this.list.push({ timer: setInterval(() => bot.core.run(command), interval), command, interval })
    },

    remove (index) {
      clearInterval(this.list[index].timer)
    },
    
    clear () {
      for (const cloop of this.list) clearInterval(cloop.timer)
      
      this.list = []
    }
  }
}

module.exports = inject
