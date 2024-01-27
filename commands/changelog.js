
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
        {//
    name: { text: 'v5.0.2', color: 'green', bold:false },
    authors: [''],
   
    foundation: '12/26/23',
    exclaimer:'fixed the issue with the cpu checking in the info command added discord hashing back into the bot to work along side the keys made it check to see if the config file is in the directory and if not it will recreate the config from default.js',
  },
        {//
    name: { text: 'v5.0.3', color: 'green', bold:false },
    authors: [''],
   
    foundation: '12/29/23',
    exclaimer:'mabe the bot last update of 2023 cuz next year will be 2024 www but anyway expanded the disconnect messages for both console and discord but thats pretty much it',
  },
        {//
    name: { text: 'v5.0.4', color: 'green', bold:false },
    authors: [''],
   
    foundation: '1/12/24',
    exclaimer:'first update of 2024 for the bot but anyway merged the test and errortest commands into cmdtest, changed the colors for the help command public is #00FFFF, trusted is dark_purple and owner remained as dark red. moved the module loader from bot.js to index.js to split the boot time in half which now allows module functions like bot.chat() to be used in bot.js and also since the command manager is a module it also loads the commands thats a w on all ends also removed some modules to improve the bots boot time and moved the functions for the sctoggle command into the command itself and not as a module which helped the boot time as well and last but not least merged the memused usage in the info command with the serverinfo usage and made the memusage command use the bossbar and not the actionbar',
  },
        {//
    name: { text: 'v5.0.5', color: 'dark_red', bold:false },
    authors: ['§#f001dbQT §#740000KB §0Termination'],
   
    foundation: '1/26/24',
    exclaimer:'added a new feature to the bot called Coreless Mode to where the core can be toggled and most commands using tellraw will use chat instead along with the discord relay chat, fixed the bug with trust and owner commands not running in console along with removing alot of useless commands and made the 3 prefixes a array and added ratelimit for console logging and command usage and added file chat logging back',
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
