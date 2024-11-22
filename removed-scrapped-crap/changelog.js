const bots = require('../data/changelog.json');
module.exports = {
  name: 'changelog',
  description: ['check the bots changelog'],
  trustLevel: 0,
  aliases: ['clv', 'changes'],
  usage:[""],
  execute (context) {
    const query = context.arguments.join(' ').toLowerCase()
    const bot = context.bot
    if (query.length === 0) {
      const list = []

      for (const info of bots) {
        if (list.length !== 0) list.push({ text: ', ', color: 'gray' })
        list.push(info.name)
      }
      const category = {
        translate: ' (%s%s%s%s%s%s%s%s%s) ',
        bold: false,
        color: 'gray',
        with: [
          { color: 'aqua', text: 'Alpha Release' },
          { color: 'gray', text: ' | ' },
          { color: 'blue', text: 'Beta Release' },
          { color: 'gray', text: ' | ' },
          { color: 'green', text: 'Minor release' },
          { color: 'gray', text: ' | ' },
          { color: 'gold', text: 'Revision Release' },
          { color: 'gray', text: ' | ' },
          { color: 'dark_red', text: 'Major Release' }
        ]
     }
     bot.tellraw("@a", [{ text: 'Changelogs (', color: 'gray' }, { text: JSON.stringify(bots.length), color: 'gold' }, { text: ')', color: 'gray' }, category, ' - ', ...list])
      return
    }

    for (const info of bots) {
      const plainName = String(context.bot.getMessageAsPrismarine(info.name)).toLowerCase()
      if (plainName.includes(query)) this.sendBotInfo(info, context.bot)
    }
  },

  sendBotInfo (info, bot) {
    const component = ['']
    component.push('', info.name)
    if (info.exclaimer) component.push('\n', ' ', info.exclaimer)
    if (info.authors && info.authors.length !== 0) {
      component.push('\n', 'Codename ')
      for (const author of info.authors) {
        component.push(author, { text: ', ', color: 'gray' })
      }
      component.pop()
    }
    if (info.foundation) component.push('\n', 'Date: ', info.foundation)
    if (info.prefixes && info.prefixes.length !== 0) {
      component.push('\n', '')
      for (const prefix of info.prefixes) {
        component.push(prefix, { text: ' ', color: 'gray' })
      }
      component.pop()
    }
    bot.tellraw('@a', [component])
  }
}
