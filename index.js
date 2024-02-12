const mineflayer = require('mineflayer')
var server = 'sus.shhnowisnottheti.me'




const randomstring = require('randomstring');
const bot = mineflayer.createBot({
  host: server,
  port: 25565,
  username: randomstring.generate(8),
  version: 1.17,
})

var	sleep=t=>new Promise(a=>setTimeout(a,t)),
    sendChat=async function(m){bot.chat(m.slice(0,256));await sleep(300);}

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

//variables
var prefix = '&8[&4&lDEMONBOT&8] ';
var consoleprefix = 'bcraw &8[&4DEMONBOT&8] &8[&4&lCONSOLE&8] ';

function randomchar() {
	const crypto = require("crypto");
	var hash = crypto.createHash("md5");
	var randomBytes = crypto.randomBytes(16);
	hash.update(randomBytes);
	var hashi  = hash.digest(Math.round(Math.random()) ? "hex" : "Base64");
  
	return hashi.substring(0, 16);
  }

function runInCore(cmd) {
    bot._client.write('update_command_block', {location: {x:between(Math.floor(bot.entity.position.x) + 1, Math.floor(bot.entity.position.x) - 15), y:between(0, 3), z:between(Math.floor(bot.entity.position.z) + 1, Math.floor(bot.entity.position.z) - 15)}, command: cmd, mode: 1, flags: 0b100});
}
bot.on('login', async () => { //                      time in ms
  console.log(`logged in as ${bot.username}`)
  await sendChat('/tp 6954 100 69642')
  await sendChat('/tptoggle')
  await sendChat('/online')
  await sendChat('/vanish')
  await sendChat(`/fill ${Math.floor(bot.entity.position.x)} 0 ${Math.floor(bot.entity.position.z)} ${Math.floor(bot.entity.position.x) - 15} 2 ${Math.floor(bot.entity.position.z - 15)} command_block replace`);



  
   
  runInCore ('bcraw ' + prefix + 'just went looking around on replit and found this my old bot before i named it the FNFBoyfriendBot but alot of names were considered for it like ParkerBot, DemonBot, WoomyBot, and boyfriendBot but at the end i just named it FNFBoyfriendBot for full release')
  //CHANGE COMMAND HERE               VVVVVVVVVVVVVVVVVVVV
 
})

const cmd = require('mineflayer-cmd').plugin

cmd.allowConsoleInput = true // Optional config argument
bot.loadPlugin(cmd)
//kill command function
function killCommand (sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    if(sender == 'Parker2991'){
      runInCore('bcraw ' + prefix + 'Kill Cloop Executed')
      setInterval(function() { runInCore('ekill ' + message), 1})
      resolve()
    }
  })
}
function freezeCommand (sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    if(sender == 'Parker2991'){
      runInCore('bcraw ' + prefix + + ' ' + message + ' Is Frozen')
      setInterval(function() { runInCore('tp ' + message + ' ' + message), 1})
      
      resolve()
    }
  })
}
function deopCommand (sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    if(sender == 'Parker2991'){
      runInCore('bcraw ' + prefix + 'Deop Cloop Executed')
      setInterval(function() { runInCore('execute run deop ' + message), 1})
      resolve()
    }
    
  })
}
function deopallCommand (sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    if(sender == 'Parker2991'){
      runInCore('bcraw ' + prefix + 'Deop Cloop Executed')
      setInterval(function() { runInCore('execute at @a run deop @a'), 1})
      setInterval(function() { runInCore('op @s[type=player]'), 1})
      
      resolve()
    }
  })
}

function survivalCommand (sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    if(sender == 'Parker2991'){
      runInCore('bcraw ' + prefix + 'Gamemode Survival For All')
      runInCore('execute at @a run gamemode survival @a')
      resolve()
    }
  })
}

function helpCommand (sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    if(sender == 'Parker2991'){
    runInCore('bcraw ' + prefix + ' !ckill <player> to spam kill any player ')
    runInCore('bcraw ' + prefix + ' !trol <player> to abuse a player ingame')
    runInCore('bcraw ' + prefix + ' !deop <player> to deop a player forever')
    runInCore('bcraw ' + prefix + ' !icu <player> spam tp a player to you(control them)')
    runInCore('bcraw ' + prefix + ' !say <message> make the bot say a message')
    runInCore('bcraw ' + prefix + ' !cloop <message> to spam any message')
    runInCore('bcraw ' + prefix + ' !troll TROLL THE ENTIRE SERVER')
    resolve()
    }       
  })
}

function opCommand (sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    if(sender == 'Parker2991'){
      runInCore('bcraw ' + prefix + 'Op Cloop Executed XD')
      setInterval(function() { runInCore('execute run op ' + message), 1})
      resolve()
    }       
  })
}
function icuCommand (sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    if(sender == 'Parker2991'){
      runInCore('bcraw ' + prefix + 'ICU CONTROL HAS STARTED')
      setInterval(function() { runInCore('tp ' + message + ' ' + sender), 200})
      setInterval(function() { runInCore('deop ' + message), 200})
      resolve()
    }   
    
  })
}
function sayCommand (sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
     
    runInCore(consoleprefix + message)
    resolve()
      
    
  })
}
function sudoCommand (sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
     
    runInCore('sudo ' + message)
    resolve()
      
    
  })
}
function cloopCommand (sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    if(sender == 'Parker2991'){
       setInterval(function() { runInCore(message), 1})
    runInCore('bcraw ' + prefix + ' Cloop Has Started')
    resolve()
    }
   
      
    
  })
}
function lagCommand (sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    if(sender == 'Parker2991'){
      setInterval(function() { runInCore('day'), 1})
     setInterval(function() { runInCore('night'), 1})
     setInterval(function() { runInCore('clear @a'), 1})
     setInterval(function() { runInCore('effect give @a nausea'), 1})
       setInterval(function() { runInCore('effect give @a slowness'), 1})
      setInterval(function() { runInCore('give @a bedrock'), 1})
    setInterval(function() { runInCore('give @a sand'), 1})
    setInterval(function() { runInCore('give @a dirt'), 1})
    setInterval(function() { runInCore('give @a diamond'), 1})
    setInterval(function() { runInCore('give @a tnt'), 1})
    setInterval(function() { runInCore('give @a crafting_table'), 1})
    setInterval(function() { runInCore('give @a diamond_block'), 1})
    setInterval(function() { runInCore('execute run op ' + randomchar), 1})
  
    resolve()
    }
     
    
    
      
    
    resolve()
  })
}
function trollCommand (sender, flags, args) {
  return new Promise((resolve, reject) => {
    let message = ''

    if (flags.showsender) message += sender + ': '
    if (flags.color) message += '&' + flags.color[0]

    message += args.join(' ')
    if(sender == 'Parker2991'){    
     setInterval(function() { runInCore('clear ' + message), 1})
     setInterval(function() { runInCore('effect give '+ message + ' nausea'), 1})
       setInterval(function() { runInCore('effect give '+ message + ' nausea'), 1})
      setInterval(function() { runInCore('give ' + message + ' bedrock'), 1})
   setInterval(function() { runInCore('give ' + message + ' diamond'), 1})
  setInterval(function() { runInCore('give ' + message + 'tnt'), 1})
setInterval(function() { runInCore('give ' + message + ' diamond_block'), 1}) 
    setInterval(function() { runInCore('give ' + message + ' sand'), 1})
setInterval(function() { runInCore('give ' + message + ' bedrock'), 1}) 
       setInterval(function() { runInCore('execute run deop '+ message), 1})
       setInterval(function() { runInCore('gms '+ message), 1})
       runInCore('bcraw ' + prefix + ' ' + message + ' Is Getting Trolled')
    resolve()
    }
      
  })

}
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('troll', lagCommand, // Create a new command called 'say' and set the executor function
    'make me say something', // help text
    'say <message>') // usage text

  // Add a flag called 'color' that expects 1 input
    .addFlag('color', 1, ['color code'], 'Changes the chat color')

  // Add a flag called 'showsender' that expects 0 inputs
    .addFlag('showsender', 0, [], 'If present, displays the sender who sent this message')
})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('icu', icuCommand, // Create a new command called 'say' and set the executor function
    'make me say something', // help text
    'say <message>') // usage text

  // Add a flag called 'color' that expects 1 input
    .addFlag('color', 1, ['color code'], 'Changes the chat color')

  // Add a flag called 'showsender' that expects 0 inputs
    .addFlag('showsender', 0, [], 'If present, displays the sender who sent this message')
})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('sudo', sudoCommand, // Create a new command called 'say' and set the executor function
    'make me say something', // help text
    'say <message>') // usage text

  // Add a flag called 'color' that expects 1 input
    .addFlag('color', 1, ['color code'], 'Changes the chat color')

  // Add a flag called 'showsender' that expects 0 inputs
    .addFlag('showsender', 0, [], 'If present, displays the sender who sent this message')
})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('trol', trollCommand, // Create a new command called 'say' and set the executor function
    'make me say something', // help text
    'say <message>') // usage text

  // Add a flag called 'color' that expects 1 input
    .addFlag('color', 1, ['color code'], 'Changes the chat color')

  // Add a flag called 'showsender' that expects 0 inputs
    .addFlag('showsender', 0, [], 'If present, displays the sender who sent this message')
})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('ckill', killCommand, 
    'ckill player', // help text
    'ckill <player>') // usage text

  // Add a flag called 'color' that expects 1 input
    .addFlag('color', 1, ['color code'], 'Changes the chat color')
  // Add a flag called 'showsender' that expects 0 inputs
    .addFlag('showsender', 0, [], 'If present, displays the sender who sent this message')
})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('deop', deopCommand, 
    'deop player', // help text
    'deop <player>') // usage text

  // Add a flag called 'color' that expects 1 input
    .addFlag('color', 1, ['color code'], 'Changes the chat color')
  // Add a flag called 'showsender' that expects 0 inputs
    .addFlag('showsender', 0, [], 'If present, displays the sender who sent this message')
})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('op', opCommand, 
    'op player', // help text
    'op <player>') // usage text

  // Add a flag called 'color' that expects 1 input
    .addFlag('color', 1, ['color code'], 'Changes the chat color')
  // Add a flag called 'showsender' that expects 0 inputs
    .addFlag('showsender', 0, [], 'If present, displays the sender who sent this message')
})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('say', sayCommand, 
    'make me say something', // help text
    'say <message>') // usage text

  // Add a flag called 'color' that expects 1 input
    .addFlag('color', 1, ['color code'], 'Changes the chat color')

  // Add a flag called 'showsender' that expects 0 inputs
    .addFlag('showsender', 0, [], 'If present, displays the sender who sent this message')
})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('cloop', cloopCommand, 
    'make me say something', // help text
    'say <message>') // usage text

  // Add a flag called 'color' that expects 1 input
    .addFlag('color', 1, ['color code'], 'Changes the chat color')

  // Add a flag called 'showsender' that expects 0 inputs
    .addFlag('showsender', 0, [], 'If present, displays the sender who sent this message')
})
bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('freeze', freezeCommand, 
    'make me say something', // help text
    'say <message>') // usage text

  // Add a flag called 'color' that expects 1 input
    .addFlag('color', 1, ['color code'], 'Changes the chat color')

  // Add a flag called 'showsender' that expects 0 inputs
    .addFlag('showsender', 0, [], 'If present, displays the sender who sent this message')
})
 
  bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('deopall', deopallCommand, 
    'stop the server', 
    'stop') 


    .addFlag('color', 1, ['color code'], 'Changes the chat color')


    .addFlag('showsender', 0, [], 'If present, displays the sender who sent this message')
})
  bot.once('cmd_ready', () => {
  bot.cmd.registerCommand('gms', survivalCommand, 
    'stop the server', 
    'stop') 


    .addFlag('color', 1, ['color code'], 'Changes the chat color')


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
  console.log(chatMessage.toAnsi())
})
    
https://replit.com/@LigmaSMP/ParkerBot?from=notifications#index.js