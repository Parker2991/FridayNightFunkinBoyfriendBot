class CommandSource {
  constructor (player, sources, hash = false, discordMessageEvent = null, consoleOnly = sources) {
    this.player = player
    this.sources = sources
    this.hash = hash
    this.consoleOnly = consoleOnly
   this.discordMessageEvent = discordMessageEvent
          this.displayName = player
  }

  sendFeedback () {}

  sendError (message) {
    this.sendFeedback([{ text: '', color: 'red' }, message], false)
  }
}

module.exports = CommandSource
