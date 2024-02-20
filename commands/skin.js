const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'skin',
  description:['make everyone wear the same skin'],

  execute (context) {
    
    const bot = context.bot
const message = context.arguments.join(' ')
    
      bot.core.run('sudo * skin ' + message)
      bot.core.run('sudo fnfboyfriendbotx c:oh look we got little ' + message + '"s running around now great', false)
 
  }
}
