const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'cowsay',
   description:['mooooo'],
  execute (context, selector) {
    const bot = context.bot
    const args = context.arguments.join(' ')
    const component = ['']
   // const args = context.arguments
    const source = context.source
    const cowsay = require('cowsay2')
    const cows = require('cowsay2/cows')
   throw new CommandError('too lazy to work on it right now')
    if (args[0] === 'list') {
        const listed = Object.keys(cows)

        let primary = true
        const message = []

        for (const value of listed) {
          message.push({
            text: value + ' ',
            color: (!((primary = !primary)) ? 'gold' : 'yellow'),
            clickEvent: {
              action: 'suggest_command',
              value: `${context.bot.options.commands.prefix}cowsay ${value} `
            }
          })
        }

        source.sendFeedback(`${source} ${message}`)
      } else {
       source.sendFeedback(`\n ${cowsay.say(args)} ${cows[args[0]] }`)
}
      }
}
// bot.tellraw({ text: cowsay.say(context.arguments.join(' ').slice(1), { cow: cows[args[0]] }) 

//const listed = JSON.parse(cows)
//source.sendFeedback(`${listed}`, false)
/*  if (args[0] === 'list') {
      const listed = Object.keys(cows)

      let primary = true
      const message = []

      for (const value of listed) {
        message.push({
          text: value + ' ',
          color: (!((primary = !primary)) ? 'gold' : 'yellow'),
          clickEvent: {
            action: 'suggest_command',
            value: `${prefix}cowsay ${value} `
          }
        })
      }

      bot.tellraw(selector, message)
    } else {
      bot.tellraw(selector, { text: cowsay.say(args.slice(1).join(' '), { cow: cows[args[0]] }) })
    }
  },
      */
/*if (query.length === 0) {
      const list = []

      for (const info of bots) {
        if (list.length !== 0) list.push({ text: ', ', color: 'gray' })
        list.push(info.name)
      }
      */