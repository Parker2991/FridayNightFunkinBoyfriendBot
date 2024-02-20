module.exports = {
  name: 'clearchatqueue',
  description: 'Clears the bot\'s chat queue',
  alias: ['ccq'],
  usage: '',
  trusted: 0,
  execute (bot) {
    if (bot._chatQueue[0]) {
      bot.chatQueue = []
      bot._chatQueue = []
    }
  },
  discordExecute (bot) {
    if (bot._chatQueue[0]) {
      bot.chatQueue = []
      bot._chatQueue = []
    }
  }
}
