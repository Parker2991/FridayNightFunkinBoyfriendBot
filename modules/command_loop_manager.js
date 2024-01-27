function command_loop_manager (bot, options) {
  bot.cloop = {
    list: [],
    
    add (command, interval) {
    
            this.list.push({ timer: setInterval(() => bot.core.run(command), interval), command, interval })
    },

          /*
           if (message.startsWith('/')) {
      bot.command(message.substring(1))
      return
    }
    bot.chat(message)  
          */
    remove (index) {
      clearInterval(this.list[index].timer)
    },
    
    clear () {
      for (const cloop of this.list) clearInterval(cloop.timer)
      
      this.list = []
    }
  }
      
}

module.exports = command_loop_manager
