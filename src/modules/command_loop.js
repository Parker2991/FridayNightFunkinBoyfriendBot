function command_loop (bot, options, config) {
  bot.cloop = {
    list: [],
    add (command, interval) {
      let timer;
      timer = ({ timer: setInterval(() => bot.core.run(command), interval), command, interval })
      this.list.push(timer)

      bot.on('end', () => {
        this.clear()
      })

      bot.on('packet.login', () => {
        timer = ({ timer: setInterval(() => bot.core.run(command), interval), command, interval })
        this.list.push(timer);
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
}
module.exports = command_loop;
