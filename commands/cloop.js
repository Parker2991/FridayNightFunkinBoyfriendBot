module.exports = {
  name: 'cloop',
hashOnly: true, 
   description:['command loop commands'],
  execute (context, selector) {
    const args = context.arguments
    const bot = context.bot
    const source = context.source
     if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
    switch (selector, args[1]) {
      case 'add':
        if (parseInt(args[2]) === NaN) source.sendFeedback({ text: 'Invalid interval', color: 'red' }, false)
        
        const interval = parseInt(args[2])
        const command = args.slice(3).join(' ')
        
        bot.cloop.add(command, interval)

        source.sendFeedback({
          translate: 'Added \'%s\' with interval %s to the cloops',
          with: [ command, interval ]
        })
        
        break
      case 'remove':
        if (parseInt(args[2]) === NaN) source.sendFeedback({ text: 'Invalid index', color: 'red' }, false)

        const index = parseInt(args[2])

        bot.cloop.remove(index)

        source.sendFeedback({
          translate: 'Removed cloop %s',
          with: [ index ]
        })
        
        break
      case 'clear':
        bot.cloop.clear()

        source.sendFeedback({ text: 'Cleared all cloops' }, false)
        
        break
      case 'list':
        const component = []

        const listComponent = []
        let i = 0
        for (const cloop of bot.cloop.list) {
          listComponent.push({
            translate: '%s \u203a %s (%s)',
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
          with: [ bot.cloop.list.length ]
        })
        component.push('\n')
        component.push(listComponent)

        source.sendFeedback(component)
        
        break
      default:
        source.sendFeedback({ text: 'Invalid action', color: 'red' })

        break
    }
  }
}
