class CommandSource {
  constructor (player, sources, hash, owner, discordMessageEvent = null, consoleOnly, name, profile, bot) {//this worked just fine in v4.3.4
   //does it get defined in discord thingy wherever dat is
   // sus
       
    this.player = player
       this.name = player
    this.sources = sources
          this.profile = bot
    this.hash = hash
          this.trustLevel
            this.owner = owner
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
