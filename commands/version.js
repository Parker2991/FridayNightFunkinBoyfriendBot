const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'version',

  execute (context) {    
    context.source.sendFeedback('v4.0.0-Alpha', false)
    context.source.sendFeedback('Foundation:Ultimate v1.0.0 Build:20')
      context.source.sendFeedback('BotEngine:Node-Minecraft-Protocol', false)
       context.source.sendFeedback('FNFBoyfriendBotX nmp rewrite of the FNFBoyfriendBot along with being a continuation of the bot', false)
context.source.sendFeedback('FNFBoyfriendBot Build:80')
  }
}
