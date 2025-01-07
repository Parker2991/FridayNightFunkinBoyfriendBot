// TODO: Maybe add more authors
const bots = [
  {
    name: { text: 'HBot', color: 'aqua', bold:true },
    authors: ['hhhzzzsss'],
    exclaimer:'HBOT HARRYBUTT LMAOOOOOOOOOOOOOOOOO',
    foundation: 'java/mcprotocollib',
    prefixes: ['#']
  },
  {
    name: [{ text: 'Evil', color: 'dark_red' }, {text:'Bot', color:'dark_purple'}],
    authors: ['FusseligerDev'],
    exclaimer:'',
    foundation: 'Java/Custom',
    prefixes: ['!']
  },
  {
    name: { text: 'SBot Java', color: 'white', bold:true }, // TODO: Gradient
    authors: ['evkc'],
    foundation: 'Java/MCProtocolLib',
    prefixes: [':']
  },
   {
    name: { text: 'SBot Rust', color: 'white', bold:true }, // TODO: Gradient
    authors: ['evkc'],
    foundation: 'Rust',
    prefixes: ['re:']
  },
   {
    name: { text: 'Z-Boy-Bot', color: 'dark_purple' }, // TODO: Gradient
    exclaimer: 'Most likely skidded along with kbot that the dev used',
     authors: ['Romnci'],
    foundation: 'NodeJS/mineflayer or Java/mcprotocollib idfk',
    prefixes: ['Z]']
  },
    {
    name: { text: 'ABot', color: 'gold', bold:true }, // TODO: Gradient
    exclaimer: '',
     authors: ['yfd'],
    foundation: 'NodeJS/Node-Minecraft-Protocol',
    prefixes: ['<']
  },
  {
  name: { text: 'FardBot', color: 'dark_purple' },
    authors: ['_yfd'],
    exclaimer: 'bot is dead lol',
    foundation: 'NodeJS/Mineflayer',
    prefixes: ['<']
  },
  
  {
    name: { text: 'ChipmunkBot', color: 'green'  },
    authors: ['_ChipMC_'],
    exclaimer: 'chips? also shoutout to chip and chayapak for helping in the rewrite',
  
    foundation: 'Java/MCProtocolLib',
    prefixes: ["'", "/'"]
  },
  {
    name: { text: 'ChipmunkBot Old', color: 'green'  },
    authors: ['_ChipMC_'],
    foundation: 'NodeJS/Node-Minecraft-Protocol',
   
  },
   {
    name: { text: 'TestBot', color: 'aqua'  },
    authors: ['Blackilykat'],
    foundation: 'Java/MCProtocolLib',
    prefixes: ["-"]
  },
   {
    name: { text: 'UBot', color: 'grey'  },
    authors: ['HexWoman'],
    exclaimer: 'UwU OwO',
  
    foundation: 'NodeJS/node-minecraft-protocol',
    prefixes: ['"']
  },
  {
    name: { text: 'ChomeNS Bot Java', color: 'yellow'},
    authors: ['chayapak'],
  exclaimer: 'wow its my bot !! ! 4374621q43567%^&#%67868-- chayapak',
    foundation: 'Java/MCProtocolLib',
    prefixes: ['*', 'cbot ', '/cbot ']
  },
   {
    name: { text: 'ChomeNS Bot NodeJS', color: 'yellow'},
    authors: ['chayapak'],

    foundation: 'NodeJS/Node-Minecraft-Protocol',
    prefixes: ['*', 'cbot', '/cbot']
  },
  {
    name: { text: 'RecycleBot', color: 'dark_green'},
    foundation: ['MorganAnkan'],
    exclaimer: 'nice bot',
    language: 'NodeJS/node-minecraft-protocol',
    prefixes: ['=']
  },
  {
    name: { text: 'ManBot', color: 'dark_green' , },
    exclaimer: '(more like men bot :skull:) OH HAAAAAAAAAAAAAAIIILL LOGINTIMEDOUT',
    authors: ['Man/LogintimedOut'],
    foundation: 'NodeJS/mineflayer',
    prefixes: ['(Note:I dont remember!!)']
  },
  {
    name: [{ text: 'Useless', color: 'red', bold:false}, { text: 'Bot', color: 'gray', bold:false}],
    exclaimer: 'it isnt useless its a good bot................',
    authors: ['IuCC'],
    foundation: 'NodeJS/node-minecraft-protocol',
    prefixes: ['[']
  },
  {
    name: [{ text: 'Blurry', color: 'dark_purple'}, { text: 'Bot', color: 'red' }],
    exclaimer: '',
    authors: ['SirLennox'],
    foundation: 'Java/custom',
    prefixes: [',']
  },
   {
    name: [{ text: 'KittyCorp', color: 'yellow' }, { text: 'Bot', color: 'yellow' }],
    exclaimer: '3 words ginlang is gay',
    authors: ['ginlang , G6_, ArrayBuffer, and i guess more??'],
    foundation: 'NodeJS/node-minecraft-protocol',
    prefixes: ['^']
  },
  
  {
    name: [{ text:'FNF', color: 'dark_purple', bold: true}, {text:'Boyfriend', color: 'aqua', bold:true}, {text:'Bot', color:'dark_red', bold:true}, {text:'X', color:'black', bold:true}],
    authors: [{ text:'Parker2991', color: 'dark_red'}, {text:' _ChipMC_', color: 'dark_green', bold:true}, {text:' chayapak', color:'yellow', bold:true}],
    exclaimer: '4.0 (this Bot) also the Ultimate version of the FNFBoyfriendBot Builds',
    foundation: 'NodeJS/node-minecraft-protocol',
    prefixes: ['~']
  },
  {
   name: [{ text:'FNF', color: 'dark_purple', bold: true}, {text:'Boyfriend', color: 'aqua', bold:true}, {text:'Bot', color:'dark_red', bold:true}, {text:' Legacy', color:'green', bold:true}],
    authors: [{text:'Parker2991', color:'dark_red' }, {text:' _ChipMC_', color:'dark_green', bold:true }],
    exclaimer:'1037 LINES OF CODE WTFARD!??! also this version is in console commands only' ,
    foundation: 'NodeJS/mineflayer',
    prefixes: []
  }
]

module.exports = {
  name: 'bots',

  execute (context) {
    const query = context.arguments.join(' ').toLowerCase()

    if (query.length === 0) {
      const list = []

      for (const info of bots) {
        if (list.length !== 0) list.push({ text: ', ', color: 'gray' })
        list.push(info.name)
      }

      context.source.sendFeedback(['Known bots (', bots.length, ') - ', ...list], false)
      return
    }

    for (const info of bots) {
      const plainName = String(context.bot.getMessageAsPrismarine(info.name)).toLowerCase()
      if (plainName.includes(query)) this.sendBotInfo(info, context.bot)
    }
  },

  sendBotInfo (info, bot) {
    const component = ['']
    component.push('Name: ', info.name)
    if (info.exclaimer) component.push('\n', 'Exclaimer: ', info.exclaimer)
    if (info.authors && info.authors.length !== 0) {
      component.push('\n', 'Authors: ')
      for (const author of info.authors) {
        component.push(author, { text: ', ', color: 'gray' })
      }
      component.pop()
    }
    if (info.foundation) component.push('\n', 'Foundation: ', info.foundation)
    if (info.prefixes && info.prefixes.length !== 0) {
      component.push('\n', 'Prefixes: ')
      for (const prefix of info.prefixes) {
        component.push(prefix, { text: ', ', color: 'gray' })
      }
      component.pop()
    }
    bot.tellraw([component])
  }
}//it doing it just for the ones i added lol
// prob a replit moment, it probably thinks there are regexes in the strings
