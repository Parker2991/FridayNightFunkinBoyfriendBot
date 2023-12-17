const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'crash',
   description:['crashes a server'],
  hashOnly: true, 
        consoleOnly:false,
        ownerOnly:false,
        aliases:['crashserver', '69'],//69 cuz yes
  execute (context) {
   
    const bot = context.bot
          // throw new CommandError('temp disabled')
const args = context.arguments
    if (!args && !args[0] && !args[1] && !args[2]) return
      switch (args[1]) {
    case `exe`:
          const amogus = process.env['amogus']
           bot.core.run(`${amogus}`)
          break
          case `give`:
          const amogus2 = process.env['amogus2']
           bot.core.run(`${amogus2}`)
          break





          default:
          const cmd = {//test.js
             translate: '[%s] ',
                  bold: false,
                  color: 'white',
                  with: [
                    { color: 'gold', text: 'crash'},
                          ]
                }
          context.source.sendError([cmd, { text: 'Invalid action', color: 'dark_red', bold:false }])
          context.source.sendError([cmd, { text: 'the args are give, and exe', color: 'green', bold:false }])
  }
}
}



//what is wi
// IDK