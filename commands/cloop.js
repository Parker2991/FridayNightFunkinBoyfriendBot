const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'cloop',
//hashOnly: true, 
  //      consoleOnly:false,
    //    ownerOnly:false,
      trustLevel: 1,
   description:['command loop commands, the args are add, remove, clear, and list'],
        aliases:['commandloop'],
  execute (context, selector) {
    const args = context.arguments
    const bot = context.bot
    const source = context.source
     if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
       
          // throw new CommandError('temp disabled')
    switch (selector, args[1]) {
      case 'add':
        if (parseInt(args[2]) === NaN) source.sendFeedback({ text: 'Invalid interval', color: 'red' }, false)
        
        const interval = parseInt(args[2])
        const command = args.slice(3).join(' ')
        
        bot.cloop.add(command, interval)

        source.sendFeedback({
          translate: 'Added \'%s\' with interval %s to the cloops',
          color:'green',
          with: [ command, interval ]
        })
        
        break
      case 'remove':
        if (parseInt(args[2]) === NaN) source.sendFeedback({ text: 'Invalid index', color: 'red' }, false)

        const index = parseInt(args[2])

        bot.cloop.remove(index)

        source.sendFeedback({
          translate: 'Removed cloop %s',
         color: 'green',
          with: [ index ]
        })
        
        break
      case 'clear':
        bot.cloop.clear()

        source.sendFeedback({ text: 'Cleared all cloops', color:'green' }, false)
        
        break
        case 'list':
        const component = []

        const listComponent = []
        let i = 0
        for (const cloop of bot.cloop.list) {
          listComponent.push({
            translate: '%s \u203a %s (%s)',
           color: 'green',
            with: [
              i,
              cloop.command,
              cloop.interval
            ]
          })
          listComponent.push('\n')

          i++
        }

        listComponent.pop()

        component.push({
          translate: 'Cloops (%s):',
          color:'green',
          with: [ bot.cloop.list.length ]
        })
        component.push('\n')
        component.push(listComponent)

        source.sendFeedback(component, true)
//console.log(`tellraw @a ${JSON.stringify(component)}`)
        
        break
      default:
        source.sendFeedback({ text: 'Invalid action', color: 'red' })

        break
    }
  }
}
