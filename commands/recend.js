const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'recend',
   description:['reconnect or end the bot the usages are end, and reconnect'],
  hashOnly:true,
        consoleOnly:false,
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
    const args = context.arguments
//throw new CommandError('disabled until owner hash is added')
    if (!args && !args[0] && !args[1] && !args[2]) return
      switch (args[1]) {
    case `end`:
          context.source.sendFeedback('farding right now....')
          process.exit()
          break
          case `reconnect`:
           const randomstring = require('randomstring')
            context.source.sendFeedback({ text: `Reconnecting to ${bot.options.host}:${bot.options.port}`, color: 'dark_green'})


          bot._client.end()
          break




          
          default:
          const cmd = {//test.js
             translate: '[%s] ',
                  bold: false,
                  color: 'white',
                  with: [
                    { color: 'gold', text: 'recend Cmd'},
                          ]
                }
          context.source.sendError([cmd, { text: 'Invalid action', color: 'dark_red', bold:false }])
          context.source.sendError([cmd, { text: 'the args for the info command is reconnect, and end', color: 'green', bold:false }])
  }
}
}
/*context.source.sendFeedback('farding right now....')
    process.exit(1)
    */