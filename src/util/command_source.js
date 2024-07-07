class CommandSource {
  constructor (player, sources) {
    this.player = player;
    this.sources = sources;
  }
/*  sendFeedback () {}

  sendError (message) {
    this.sendFeedback([{ text: '', color: 'dark_red' }, message], false)
  }*/
  
}

module.exports = CommandSource
