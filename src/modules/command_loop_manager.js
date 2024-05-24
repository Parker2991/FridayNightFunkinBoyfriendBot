function command_loop_manager (bot, options) {
  bot.cloop = {
    list: [],
    add (command, interval, list = true) {
      setTimeout(() => {
        const id = setInterval(() => bot.core.run(command), interval)

        const thingsToPush = { id, interval, command, list }
  
        bot.cloop.list.push(thingsToPush)

        return thingsToPush
      }, bot.options.Core.resetDelay)
    }, 

    remove (item) {
      clearInterval(bot.cloop.list[item].id)

      bot.cloop.list.splice(item, 1)
    },

    clear () {
      for (const interval of bot.cloop.list) clearInterval(interval.id)

      bot.cloop.list = []
    }
  }
}

module.exports = command_loop_manager
