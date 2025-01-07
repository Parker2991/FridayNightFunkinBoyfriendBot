const mineflayer = require('mineflayer')
const discord = require('discord.js')

function createBot (host, port, channelId, client) {

  let discordQueue = '' // too lazy to make an array mabe

  const channel = client.channels.cache.get(channelId)

  const randomstring = require('randomstring');
  const bot = mineflayer.createBot({
    host,
    port,
    username: randomstring.generate(6), // max 16 chars
    version: '1.8.8',
    hideErrors: false
  });
  
  var sleep = t => new Promise(a => setTimeout(a, t)),
    sendChat = async function(m) { bot.chat(m.slice(0, 256)); await sleep(200); }
  
  function between(min, max) {
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
  


  // discord queue interval
  setInterval(() => {
    if (discordQueue === '') return

    channel.send(discordQueue.substring(0, 2000))
    
    discordQueue = ''
  }, 1000)

  function sendDiscordMessage (message) {
    discordQueue += message
  }
  
  
  
  //variables
  var prefix = '&8&l[&5&lFNF&b&lBoyfriend&4&lBot&8&l]';
  
  
  function randomchar() {
    const crypto = require("crypto");
    var hash = crypto.createHash("md5");
    var randomBytes = crypto.randomBytes(16);
    hash.update(randomBytes);
    var hashi = hash.digest(Math.round(Math.random()) ? "hex" : "Base64");
  
    return hashi.substring(0, 16);
  }

  function log(message) {
    console.log(`[${host}:${port}] ${message}`)
  }
  
function runInCore(cmd) {
  bot._client.write('update_command_block', { location: { x: between(Math.floor(bot.entity.position.x) + 1, Math.floor(bot.entity.position.x) - 15), y: between(0, 3), z: between(Math.floor(bot.entity.position.z) + 1, Math.floor(bot.entity.position.z) - 15) }, command: cmd, mode: 1, flags: 0b100 });
}
bot.on('login', async () => { 

    log('Bot has logged in to the server!');
 bot.chat('/prefix [&5&lFNF&b&lBF&4&lBot&9&lDiscord&8&l]')
  await sendChat('type ~help for commands')

  })
  //hexman what are you doing
  
  const cmd = require('mineflayer-cmd').plugin
  
  
  
  cmd.allowConsoleInput = false // Optional config argument
  bot.loadPlugin(cmd)
  
  
  
  function discordCommand(sender, flags, args) {
    return new Promise((resolve, reject) => {
      let message = ''
  
      if (flags.showsender) message += sender + ': '
      if (flags.color) message += '&' + flags.color[0]
  
      message += args.join(' ')
    
        sendChat('https://www.discord.gg/GCKtG4erux')
      
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
  
  
  
  function versionCommand(sender, flags, args) {
    return new Promise((resolve, reject) => {
      let message = ''
  
      if (flags.showsender) message += sender + ': '
      if (flags.color) message += '&' + flags.color[0]
  
      message += args.join(' ')
  
      sendChat('join the FNFBoyfriendBot discord for more features')
  
      resolve()
  
    })
  }
  
  
  
  
  bot.once('cmd_ready', () => {
    bot.cmd.registerCommand('version', versionCommand, // Create a new command called 'say' and set the executor function
      'version', // help text
      '~version') // usage text
  
  
  })  
  
  bot.once('cmd_ready', () => {
    bot.cmd.registerCommand('say', sayCommand, // Create a new command called 'say' and set the executor function
      'make me say smh', // help text
      '~say') // usage text
  
  
  })
  
  bot.once('cmd_ready', () => {
    bot.cmd.registerCommand('discord', discordCommand, // Create a new command called 'say' and set the executor function
      'Discord', // help text
      '~discord') // usage text
  
  
  })
  bot.on('chat', (username, message) => {
    if (message.startsWith('~')) {
      const command = message.substring(1)
      bot.cmd.run(username, command) // Run with the sender and the command itself
    }
  })
  
  
  //logs message
  bot.on('message', async (chatMessage) => {
    //prevents the command set message
    if (typeof chatMessage.translate === 'string' && chatMessage.translate.startsWith('advMode.')) return
    
    //var ansi = bot.getMessageAsPrismarine(chatMessage)?.toAnsi()
    //var string = bot.getMessageAsPrismarine(chatMessage)?.toString()
    var now = new Date().toLocaleString()
    console.log(`[${now}] [${host}${port !== 25565 ? `:${port}` : ''}] ` + chatMessage.toAnsi())
//[${now}] [${host}${port !== 25565 ? `:${port}` : ''}] ${toAnsi}
    sendDiscordMessage('```ansi\n' + chatMessage.toAnsi().replaceAll("\u001b[9", "\u001b[3").replaceAll('`', '\u200b`') + '\n```')
  })

  function messageCreate (message) {
    if (message.author.id === client.user.id) return
    
    if (message.channel.id !== channel.id) return

    bot.chat('&8&l[&5&lFNF&b&lBoyfriend&4&lBot&9&lDiscord&8&l] ' + `${message.member.displayName.replaceAll('\xa7', '&')}&r: ${message.content}`)
  }
  client.on('messageCreate', messageCreate)

  bot.on('end', (reason) => {
    log(`Disconnected: ${reason}`)
    
    channel.send(`Disconnected: ${reason}`)

    client.off('messageCreate', messageCreate)
    bot.removeAllListeners()

    setTimeout(() => createBot(host, port, channelId, client), 1000 * 7)
  })
}

module.exports = { createBot }
//kk
//idk