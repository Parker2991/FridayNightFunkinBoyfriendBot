module.exports = {
  name: 'cloop',
hashOnly: true, 
  execute (context) {
    const args = context.arguments
    const bot = context.bot
    const source = context.source

    switch (args[0]) {
      case 'add':
        if (parseInt(args[1]) === NaN) source.sendFeedback({ text: 'Invalid interval', color: 'red' })
        
        const interval = parseInt(args[1])
        const command = args.slice(2).join(' ')
        
        bot.cloop.add(command, interval)

        source.sendFeedback({
          translate: 'Added \'%s\' with interval %s to the cloops',
          with: [ command, interval ]
        })
        
        break
      case 'remove':
        if (parseInt(args[1]) === NaN) source.sendFeedback({ text: 'Invalid index', color: 'red' })

        const index = parseInt(args[1])

        bot.cloop.remove(index)

        source.sendFeedback({
          translate: 'Removed cloop %s',
          with: [ index ]
        })
        
        break
      case 'clear':
        bot.cloop.clear()

        source.sendFeedback({ text: 'Cleared all cloops' })
        
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
