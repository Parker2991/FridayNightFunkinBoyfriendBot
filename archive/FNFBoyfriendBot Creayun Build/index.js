const ඞ = require('mineflayer')
const keep_alive = require('./keep_alive.js')






const randomstring = require('randomstring');
const bot = ඞ.createBot({
  host: '<Server IP Here>',
  port: 25565,
  username: '<Username Here>',
  version: '1.19'
});

var sleep = t => new Promise(a => setTimeout(a, t)),
  sendChat = async function(m) { bot.chat(m.slice(0, 256)); await sleep(200); }

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}





//variables
var prefix = '<Prefix Here>';


function randomchar() {
  const crypto = require("crypto");
  var hash = crypto.createHash("md5");
  var randomBytes = crypto.randomBytes(16);
  hash.update(randomBytes);
  var hashi = hash.digest(Math.round(Math.random()) ? "hex" : "Base64");

  return hashi.substring(0, 16);
}

bot.on('login', () => {
  console.log('Bot has logged in to the server!');

  
  
 



})


const cmd = require('mineflayer-cmd').plugin



cmd.allowConsoleInput = true // Optional config argument
bot.loadPlugin(cmd)


function broadcastCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
  
      sendChat('/bc ' + prefix + message)
    resolve()


  })
}
function discordCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
  
      sendChat('<Discord Link Here>')
    
    resolve()


  })
}
function sayCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')

    sendChat(message + '')
    resolve()


  })
}
function onlineCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')

    sendChat('/online')
    resolve()


  })
}

function cloopCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    

      setInterval(function() {
        sendChat(message), 1
      })

    resolve()




  })
}

function VanishCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    sleep(300)

    sendChat('/v')
    resolve()

  })
}
function announcementCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')

     sendChat('final build of the bot for here due to the other version of this bot the main Bot 3.0 in developement')
    resolve()

  })
}
function socialspyCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
   
      sendChat('/socialspy')

    resolve()

  })
}
function versionCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')

    sendChat('Version 1.0 forked of 2.2 and .5 of the main bot FNFBoyfriendBot 2.2 is no longer being worked on')

    resolve()

  })
}
function tptoggleCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')

    sendChat('/tptoggle')

    resolve()

  })
}
function prefixCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''
  
      if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    if (sender == '') {
      sendChat('/prefix ' + '')
      resolve()
    }
  })
}
function kickCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
   {

      sendChat('/tp ' + message + '30000000 1  30000000')

      resolve()
    }
  })
}
function icuCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
   {
      sendChat('ICU CONTROL HAS STARTED')
      setInterval(function() { sendChat('/tp ' + message + ' ' + sender), 200 })

      resolve()
    }

  })
}
function nickCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    {

      sendChat('/nick ' + args.join) + ''
      resolve()
    }



  })
}
function SussyCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')

   {
      sendChat(' ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ')
      resolve()
    }



  })
}
function trollCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    {

      sendChat('')
      resolve()
    }



  })
}
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('prefix', prefixCommand, // Create a new command called 'say' and set the executor function
    'set the prefix of the bot', // help text
    '!prefix message') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('discord', discordCommand, // Create a new command called 'say' and set the executor function
    'set the prefix of the bot', // help text
    '!prefix message') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('Sussy', SussyCommand, // Create a new command called 'say' and set the executor function
    'set the prefix of the bot', // help text
    '!prefix message') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('version', versionCommand, // Create a new command called 'say' and set the executor function
    'set the prefix of the bot', // help text
    '!prefix message') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('troll', trollCommand, // Create a new command called 'say' and set the executor function
    'troll a player', // help text
    '!troll playername') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('broadcast', broadcastCommand, // Create a new command called 'say' and set the executor function
    'make the bot broadcast', // help text
    '!broadcast message') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('online', onlineCommand, // Create a new command called 'say' and set the executor function
    'make the bot check whos online', // help text
    '^online') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('tptoggle', tptoggleCommand, // Create a new command called 'say' and set the executor function
    'tptoggle the bot', // help text
    '!tptoggle') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('nick', nickCommand, // Create a new command called 'mute' and set the executor function
    'make the bot change its name', // help text
    '!nick message') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('say', sayCommand, // Create a new command called 'say' and set the executor function
    'make the bot say smh', // help text
    '!say msg') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('socialspy', socialspyCommand, // Create a new command called 'say' and set the executor function
    'make me say something', // help text
    'say <message>') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('cloop', cloopCommand, // Create a new command called 'say' and set the executor function
    'make the bot cloop a message', // help text
    '!cloop message') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('vanish', VanishCommand, // Create a new command called 'say' and set the executor function
    'vanish the bot', // help text
    '!vanish') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('announcement', announcementCommand, // Create a new command called 'say' and set the executor function
    'announcement', // help text
    'announcement') // usage text


})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('kick', kickCommand,
    'make the bot kick', // help text
    '!kick message') // usage text


})

bot.on('chat', (username, message) => {
  if (message.startsWith('!')) {
    const command = message.substring(1)
    bot.cmd.run(username, command) // Run with the sender and the command itself
  }
})


//logs message
bot.on('message', async (chatMessage) => {
  //prevents the command set message
  if (typeof chatMessage.translate === 'string' && chatMessage.translate.startsWith('advMode.')) return
  console.log(chatMessage.toAnsi())
})


