module.exports = {
  name: 'mineflayerbot',
hashOnly:true,
  execute (context) {
    const mineflayer = require('mineflayer')


//const server = require('../mineflayerconfig.js')
//const botCount = 5;

const randomstring = require('randomstring')
 const bot = mineflayer.createBot({
 host: context.bot.options.host, 
  port: context.bot.options.port,
  username:'FNFBFBotMinion' + randomstring.generate(2),
  version: '1.19.2',
    })
  
var sleep = t => new Promise(a => setTimeout(a, t)),
  sendChat = async function(m) { bot.chat(m.slice(0, 256)); await sleep(300); }

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}
function runInCore(cmd) {
  bot._client.write('update_command_block', { location: { x: between(Math.floor(bot.entity.position.x) + 1, Math.floor(bot.entity.position.x) - 15), y: between(0, 3), z: between(Math.floor(bot.entity.position.z) + 1, Math.floor(bot.entity.position.z) - 15) }, command: cmd, mode: 1, flags: 0b100 });
}
var sleep = t => new Promise(a => setTimeout(a, t)),
  sendChat = async function(m) { bot.chat(m.slice(0, 256)); await sleep(300); }

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}
bot.on('login', async () => {
})
  
const cmd = require('mineflayer-cmd').plugin
   cmd.allowConsoleInput = false // Optional config argument
bot.loadPlugin(cmd)
//logs message
function sayCommand(sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')

   bot.chat(message)
    resolve()


  })
}
   bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('say', sayCommand,
    'make me say something', // help text
    'say <message>') // usage text

    // Add a flag called 'color' that expects 1 input
    .addFlag('color', 1, ['color code'], 'Changes the chat color')

    // Add a flag called 'showsender' that expects 0 inputs
    .addFlag('showsender', 0, [], 'If present, displays the sender who sent this message')
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
  //console.log(chatMessage.toAnsi())
})
    
  }
}
