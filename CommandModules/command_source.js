class CommandSource {
  constructor (player, sources, hash, owner, discordMessageEvent = null, consoleOnly, name, profile, bot, prefix = "~") {
    this.player = player//kaboom on crack!
   // idk fr // mabe
   // /shrug
     //am i good to restart it?
    this.sources = sources
          this.profile = bot
    this.hash = hash

            this.owner = owner
    this.consoleOnly = consoleOnly
   this.discordMessageEvent = discordMessageEvent
   this.prefix = prefix
         
        
  }

  sendFeedback () {}
  sendError (message) {
    this.sendFeedback([{ text: '', color: 'red' }, message], false)
           
  }
}

module.exports = CommandSource
