class CommandSource {
  constructor (player, sources, hash, owner = false, discordMessageEvent = null) {
    this.player = player
    this.sources = sources
    this.hash = hash
    this.owner = owner
    this.discordMessageEvent = discordMessageEvent
  }

  sendFeedback () {}

  sendError (message) {
    this.sendFeedback([{ text: '', color: 'dark_red' }, message], false)
  }
}

module.exports = CommandSource
