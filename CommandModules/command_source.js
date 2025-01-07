class CommandSource {
  constructor (player, sources, hash = false, discordMessageEvent = null) {
    this.player = player
    this.sources = sources
    this.hash = hash
    this.discordMessageEvent = discordMessageEvent
  }

  sendFeedback () {}

  sendError (message) {
    this.sendFeedback([{ text: '', color: 'dark_red' }, message], false)
  }
}

module.exports = CommandSource
