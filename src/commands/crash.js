const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'crash',
  description:['crashes a server'],
  trustLevel: 1,
  aliases:['crashserver', '69'],//69 cuz yes
  usage:["exe","give"],
  execute (context) { 
    const bot = context.bot
    const args = context.arguments
    const source = context.source
    if (!args && !args[0] && !args[1] && !args[2]) return
    if (bot.options.useChat ?? bot.options.isCreayun) {
              throw new CommandError('cannot execute command because useChat or isCreayun is enabled')
     } else {
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
            bot.sendError([{ text: 'Invalid action', color: 'dark_red', bold:false }])
        }
      }
    }
  }
