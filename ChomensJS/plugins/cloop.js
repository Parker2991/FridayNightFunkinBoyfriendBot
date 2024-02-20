function inject (bot) {
  bot.cloop = {
    list: [],
    add (command, interval, list = true /* list is used in the cloop command listing and eaglercrash */) {
      const id = setInterval(() => bot.core.run(command), interval)

      const thingsToPush /* ig not the best variable name */ = { id, interval, command, list }
      bot.cloop.list.push(thingsToPush)

      return thingsToPush
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

module.exports = { inject }
