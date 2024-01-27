const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'crash',
   description:['crashes a server'],
trustLevel: 1,
        aliases:['crashserver', '69'],//69 cuz yes
  execute (context) {
   
    const bot = context.bot
          // throw new CommandError('temp disabled')
const args = context.arguments
          const source = context.source
    if (!args && !args[0] && !args[1] && !args[2]) return
   
          if(!bot.options.Core.enabled){
              throw new CommandError('&4Coreless mode is active can not execute command!')
      }else {
              switch (args[1] ?? (!source.sources.console && args[0])) {
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
                              if(source.sources.console){
                                 bot.console.info([cmd, { text: 'Invalid action', color: 'dark_red', bold:false }])    
                                      bot.console.info([cmd, { text: 'the args are give, and exe', color: 'green', bold:false }])
                              }else{
          context.source.sendError([cmd, { text: 'Invalid action', color: 'dark_red', bold:false }])
          context.source.sendError([cmd, { text: 'the args are give, and exe', color: 'green', bold:false }])
  }
}
}
}
}

//what is wi
// IDK