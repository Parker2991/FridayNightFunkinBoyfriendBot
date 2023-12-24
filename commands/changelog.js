
const bots = [
{//
    name: { text: 'v5.0.0-Beta', color: 'blue', bold:false },
    authors: ['Monochrome'],
   
    foundation: '12/18/23',
    exclaimer:'added owner validation to the bot thats about it',
  },
        {//
    name: { text: 'v5.0.0', color: 'dark_red', bold:false },
    authors: ['Monochrome'],
   
    foundation: '12/20/23',
    exclaimer:'since the old validation system was able to barely handle owner validation it was completely remove and replaced with trust levels which handle validation way better also added command aliases (shoutouts to poopbob with the command aliases). made a whole new changelog command for v5.0.0 and renamed the old one changelogv4.3.4. also fixed the issue with the console not properly refreshing lines that are sent',
  },
        {//
    name: { text: 'v5.0.1', color: 'green', bold:false },
    authors: [''],
   
    foundation: 'added botsrun for the funni along with making the bot be able to auto refill its core now and fill the core from a command block(edit: nevermind its very buggy reverting it back to how it originally filled its core) and adding a hover event to netmsg along with having the test command tellraw the players display name in the command and added support for 3 command prefixes',
    exclaimer:'12/23/23',
  },
]//
//back
  

/*{//
    name: { text: '', color: 'gray', bold:false },
    authors: [''],
   
    foundation: '',
    exclaimer:'',
  },*/
module.exports = {
  name: 'changelog',
   description:['check the bots changelog'],
       trustLevel: 0,
        aliases:['cl', 'changes'],
  execute (context) {
    const query = context.arguments.join(' ').toLowerCase()

    if (query.length === 0) {
      const list = []

      for (const info of bots) {
        if (list.length !== 0) list.push({ text: ', ', color: 'gray' })
        list.push(info.name)
      }
      const category = {
 translate: ' (%s%s%s%s%s%s%s%s%s) ',
      bold: false,
      color: 'white',
      with: [
       
                { color: 'aqua', text: 'Alpha Release'},
         { color: 'white', text: ' | '},
                { color: 'blue', text: 'Beta Release'},
        { color: 'white', text: ' | '},
        { color: 'green', text: 'Minor release'},
                { color: 'white', text: ' | '},
        { color: 'gold', text: 'Revision Release'},
              { color: 'white', text: ' | '},
                { color: 'dark_red', text: 'Major Release'},
      
      ]
    }
      context.source.sendFeedback(['Changelogs (', bots.length, ')', category, ' - ', ...list], false)
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
    bot.tellraw([component])
  }
}//it doing it just for the ones i added lol
// prob a replit moment, it probably thinks there are regexes in the strings
