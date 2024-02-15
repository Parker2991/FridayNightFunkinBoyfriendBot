const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'rc',
       description:['refill the bots core'],
       trustLevel: 0,
        aliases:['refillcore'],
  execute (context) {
     const bot = context.bot

if (!bot.options.Core.enabled){
        throw new CommandError('&4Could not fill core because Coreless mode is active!')
}else {
          
      bot.core.refill()
  context.source.sendFeedback('Successfully Refilled Core!')
  }
}
}