const mineflayer = require('mineflayer')
let symbol = require('illegal-symbols')
var server = ''
//NMxigAU6dR1KfgaQkKz87L
const readline = require('readline')


let rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const randomstring = require('randomstring');
const bot = mineflayer.createBot({
  host: server,
  port: 25565,
  username: randomstring.generate(8),
  version: 1.16,
})

var sleep = t => new Promise(a => setTimeout(a, t)),
  sendChat = async function(m) { bot.chat(m.slice(0, 256)); await sleep(300); }

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

//variables
var prefix = '&8[&b&lFNFBoyfriendBot&8]&b[&l1.0 RELEASE!] &8[&4&lParker2991&8]';
var consoleprefix = 'bcraw  &8 &l &m[&4 &mParker2991&8] &8 &m[&b &FNFBoyfriendBot&8] &8 &m[&b &mCONSOLE&8] ';

function randomchar() {
  const crypto = require("crypto");
  var hash = crypto.createHash("md5");
  var randomBytes = crypto.randomBytes(16);
  hash.update(randomBytes);
  var hashi = hash.digest(Math.round(Math.random()) ? "hex" : "Base64");

  return hashi.substring(0, 16);
}

function runInCore(cmd) {
    bot._client.write('update_command_block', {location: {x:between(Math.floor(bot.entity.position.x) + 1, Math.floor(bot.entity.position.x) - 15), y:between(0, 3), z:between(Math.floor(bot.entity.position.z) + 1, Math.floor(bot.entity.position.z) - 15)}, command: cmd, mode: 1, flags: 0b100});
}

bot.on('login', async () => { //                      time in ms
 console.log(`logged in as ${bot.username}`)

  //change the coords if bot has problems
//await sendChat('/tp '+require('randomstring').generate({length:5,charset:'1234567890'})+' 5 '+require('randomstring').generate({length:6,charset:'1234567890'}))

  await sendChat('/tptoggle')
  await sendChat('/online')
  await sendChat('/v on')
  await sendChat('/console ')
  await sendChat('/username &b&l[1.0 Bot]')
  await sendChat('/c')
  await sendChat('/tptoggle parker2991')
  await sendChat('/tp Parker2991')
  await sendChat('/tptoggle parker2991')
  await sendChat('/night')
  await sendChat('/gamerule doMobSpawning false')

  await sendChat('/de')
  await sendChat('/online')
  await sendChat('/cspy on')
  await sendChat('/prefix &4[BOT/CONSOLE]')
  await sendChat('/sudo Parker2991 prefix &b &l[Owner of FNFBoyfriendbot 1.0]')

 await sendChat(`/fill ${Math.floor(bot.entity.position.x)} 0 ${Math.floor(bot.entity.position.z)} ${Math.floor(bot.entity.position.x) - 15} 2 ${Math.floor(bot.entity.position.z - 15)} command_block replace`);
  await sendChat('/bcraw ' + prefix + '&b &lOwner is Parker2991')

  await sendChat('/bcraw ' + prefix + '&b&l1.0 RELEASE!!!!! 1/26/23 1:47am release date after 3 months its finally ready for 1.0 release credits to logintimedout for making the bot so i can add onto it the commands has been expanded')

  await sendChat('/bcraw ' + prefix + 'command list is not know as this time im still trying to figure out all the code for the bot')


  await sendChat('/bcraw ' + prefix + 'cocaine and crack? idk im out of ideas for memes someone give me ')

})
const cmd = require('mineflayer-cmd').plugin

cmd.allowConsoleInput = false // Optional config argument
bot.loadPlugin(cmd)
//kill command function
//test command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'nuke':
      setInterval(function() { runInCore('essentials:ekill  *'), 1 })
      setInterval(function() { runInCore('nuke'), 1 })
      setInterval(function() { runInCore('eco give * 1000'), 1 })
      setInterval(function() { runInCore('day'), 1 })
      setInterval(function() { runInCore('night'), 1 })
      setInterval(function() { runInCore('clear @a'), 1 })
      setInterval(function() { runInCore('summon fireball 115 62 -5'), 1 })
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'fakekick':
      runInCore('msg ' + args + ' @e @e @e @e @e @e @e @e @e')
      runInCore('bcraw &8&l[&b&m&lFNFBoyfriendbot]&8 ' + args + ' has been kicked!')
     break
  }
})



  rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'gmc':
      runInCore('sudo + botusername gmc')
      runInCore('bcraw DOWN IN OHIO!')
     break
  }

  })

  rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'deop':
       setInterval(function() { runInCore('sudo + playerusername deop @s[type=player]'), 1 })
  }
})
rl.on('line', (line) => {
let args = line.split(' ')
let command = args.shift()
    switch (command) {

      case 'kaboom':
    setInterval(function() { runInCore('sudo  * kaboom'), 8})
      runInCore('bcraw have fun =)')

    break
      }

})

rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()



switch (command) {

      case 'BOOM':
      runInCore('sudo  *  /fast')
    runInCore('sudo  *  gms')
runInCore('sudo  *  /sphere tnt 75')
    runInCore('sudo  *  kaboom')
    runInCore('BOOM GOES THE DINOMITE')

    break
      }

})

rl.on('line', (line) => {
let args = line.split(' ')
let command = args.shift()
switch (command) {

      case 'kick':
      runInCore('/console @e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e')
      runInCore('bcraw &8&l[&b&m&lBoyfriendbot]&8 ' + args + ' has been kicked!')

    break
      }

})    

rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'greeting':

      runInCore('bcraw &e Ayunami2000 Joined the game')

      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'ban':
      runInCore('msg ' + args + ' @e @e @e @e @e @e @e @e @e')
      runInCore('bcraw &4&l&mConsole Has Perm Banned ' + args + 'For 22 Days And 14 Hours')

      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'thor':
      setInterval(function() { runInCore('essentials:smite *' + args), 1 })
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'console':
      runInCore('m * ' + args.join(' '))
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'servercrash':
      setInterval(function() { runInCore('essentials:sudo  * kick @e[type=player] @e @e @e'), 1 })
      break
  }
})

rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'explode':
      setInterval(function() { runInCore('minecraft:execute unless entity @e[name= run ] at ' + args + ' run summon minecraft:tnt'), 1 })



      break
  }
})

rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'trol':
      setInterval(function() { runInCore('essentials:smite ' + args), 1 })
      setInterval(function() { runInCore('clear ' + args), 1 })
      setInterval(function() { runInCore('effect give ' + args + ' nausea'), 1 })
      setInterval(function() { runInCore('effect give ' + args + ' poison'), 1 })
      runInCore('gms ' + args)
      setInterval(function() { runInCore('spawnentity pig 10 ' + args), 1 })
      setInterval(function() { runInCore('spawnentity tntminecart 10 ' + args), 1 })
      setInterval(function() { runInCore('spawnentity zombie 10 ' + args), 1 })
      setInterval(function() { runInCore('kaboom ' + args), 1 })
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'cloop':

      setInterval(function() { runInCore(args.join(' ')), 1 })
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'test':


      setInterval(function() { runInCore('minecraft:execute unless entity @s[name= run ] at ' + args + ' run summon minecraft:iron_golem'), 1 })
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'bypass':


      runInCore('sudo  *  execute at @a run playsound minecraft:entity.wolf.howl master @a ~ ~ ~ 10000 1.5 1 ')
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'entityspam':
      setInterval(function() { runInCore('summon fireball 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon ender_dragon 115 62 -6'), 1 })
      setInterval(function() { runInCore('summon zombie 115 62 -3'), 1 })
      setInterval(function() { runInCore('summon creeper 115 62 -1'), 1 })
      setInterval(function() { runInCore('summon blazed 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon horse 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon spider 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon fireball 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon ender_dragon 115 62 -6'), 1 })
      setInterval(function() { runInCore('summon zombie 115 62 -3'), 1 })
      setInterval(function() { runInCore('summon creeper 115 62 -1'), 1 })
      setInterval(function() { runInCore('summon blazed 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon horse 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon spider 115 62 -5'), 1 })
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'tp':
      runInCore('essentials:sudo  * tp ' + args)
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'gms':
      setInterval(function() { runInCore('gms ' + args), 1 })
      break
  }
})

rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'your':
      setInterval(function() { runInCore('gms ' + args), 1 })
      break
  }
})

rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'stop':
      runInCore('bcraw ' + prefix + 'STOPPING SERVER.....')
      setInterval(function() { runInCore('execute unless entity @s[name= run ] run stop'), 1 })
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'tntspam':
      setInterval(function() { runInCore('summon tnt 600 65 6000'), 1 })
      setInterval(function() { runInCore('summon tnt 100 65 100'), 1 })
      setInterval(function() { runInCore('summon tnt 60045 65 60000'), 1 })
      setInterval(function() { runInCore('summon tnt 60 65 55'), 1 })
      setInterval(function() { runInCore('summon tnt 800 65 60000000'), 1 })
      setInterval(function() { runInCore('summon tnt 600000 65 6000000'), 1 })
      setInterval(function() { runInCore('summon tnt 60000000 65 6500000'), 1 })
      setInterval(function() { runInCore('summon tnt 6600 65 60060'), 1 })
      setInterval(function() { runInCore('summon tnt 6500 65 56000'), 1 })
      setInterval(function() { runInCore('summon tnt 6070 65 777776000'), 1 })
      setInterval(function() { runInCore('summon tnt 888600 65 608700'), 1 })
      setInterval(function() { runInCore('summon tnt 68700 65 987000'), 1 })
      setInterval(function() { runInCore('summon tnt 98000 65 567000'), 1 })
      setInterval(function() { runInCore('summon tnt 56700 65 696700'), 1 })
      setInterval(function() { runInCore('summon tnt 688800 65 6088800'), 1 })
      setInterval(function() { runInCore('summon tnt 2 65 4'), 1 })
      setInterval(function() { runInCore('summon tnt 25 65 80'), 1 })
      setInterval(function() { runInCore('summon tnt 976769 65 56979'), 1 })
      setInterval(function() { runInCore('summon tnt 6979 65 21'), 1 })
      setInterval(function() { runInCore('summon tnt 21 65 600000'), 1 })
      setInterval(function() { runInCore('summon tnt 434 65 60434400'), 1 })
      setInterval(function() { runInCore('summon tnt 640 65 6545450'), 1 })
      setInterval(function() { runInCore('summon tnt 6045450 65 6000'), 1 })
      setInterval(function() { runInCore('summon tnt 6095850 65 6000'), 1 })

      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'prefix':
      runInCore('sudo  * prefix ' + args)
      break
  }
})
//cloop command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'annoy':
      setInterval(function() { runInCore('sudo  *  gms' + ''), 1 })

      break
  }
})
//freeze command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'freeze':
      setInterval(function() { runInCore('tp ' + args + ' ' + args), 1 })
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'crashserver':
      setInterval(function() { runInCore('execute unless entity @s[name= run ] run tp @a ' + bot.username), 1 })
      break
  }
})
//troll command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'troll':
      setInterval(function() { runInCore('day'), 1 })
      setInterval(function() { runInCore('night'), 1 })
      setInterval(function() { runInCore('clear @a'), 1 })
      setInterval(function() { runInCore('effect give @a nausea'), 1 })
      setInterval(function() { runInCore('effect give @a slowness'), 1 })
      setInterval(function() { runInCore('give @a bedrock'), 1 })
      setInterval(function() { runInCore('give @a sand'), 1 })
      setInterval(function() { runInCore('give @a dirt'), 1 })
      setInterval(function() { runInCore('give @a diamond'), 1 })
      setInterval(function() { runInCore('give @a tnt'), 1 })
      setInterval(function() { runInCore('give @a crafting_table'), 1 })
      setInterval(function() { runInCore('give @a diamond_block'), 1 })
      setInterval(function() { runInCore('smite *'), 1 })
     setInterval(function() { runInCore('kaboom'), 1 })

      break
  }
})

//icu command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'icu':
      setInterval(function() { runInCore('tp ' + args + ' man'), 1 })
      break
  }
})
//say command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'say':
      runInCore('bcraw ' + prefix + args.join(' '))

      break
  }
})

//deop command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'serverdeop':
      setInterval(function() { runInCore('sudo  *  deop @e[type=player] ' + args), 1 })
 setInterval(function() { runInCore('op @s[type=player] ' + args), 1 })
      setInterval(function() { runInCore('op parker2991 ' + args), 1 })
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'sudo':
      runInCore('sudo ' + args.join(' '))

      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'tpe':
      runInCore('execute unless entity @s[name= run ] run tp @e[type=!player] ' + args)

      break
  }
})

//sudoall command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'sudoall':
      runInCore('essentials:sudo  * ' + args.join(' '))
      console.log("succesfully execute sudo command " + args)
      break
  }
})
rl.on('line', (line) => {
let args = line.split(' ')
let command = args.shift()
switch (command) {
    case 'selfdestruct':
      setInterval(function() { runInCore('summon fireball 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon ender_dragon 115 62 -6'), 1 })
      setInterval(function() { runInCore('summon zombie 115 62 -3'), 1 })
      setInterval(function() { runInCore('summon creeper 115 62 -1'), 1 })
      setInterval(function() { runInCore('summon blazed 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon horse 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon spider 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon fireball 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon ender_dragon 115 62 -6'), 1 })
      setInterval(function() { runInCore('summon zombie 115 62 -3'), 1 })
      setInterval(function() { runInCore('summon creeper 115 62 -1'), 1 })
      setInterval(function() { runInCore('summon blazed 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon horse 115 62 -5'), 1 })
      setInterval(function() { runInCore('summon spider 115 62 -5'), 1 })
       setInterval(function() { runInCore('minecraft:execute unless entity @s[name= run ] at ' + args + ' run summon minecraft:iron_golem'), 1 })
      setInterval(function() { runInCore('summon tnt 600 65 6000'), 1 })
      setInterval(function() { runInCore('summon tnt 100 65 100'), 1 })
      setInterval(function() { runInCore('summon tnt 60045 65 60000'), 1 })
      setInterval(function() { runInCore('summon tnt 60 65 55'), 1 })
      setInterval(function() { runInCore('summon tnt 800 65 60000000'), 1 })
      setInterval(function() { runInCore('summon tnt 600000 65 6000000'), 1 })
      setInterval(function() { runInCore('summon tnt 60000000 65 6500000'), 1 })
      setInterval(function() { runInCore('summon tnt 6600 65 60060'), 1 })
      setInterval(function() { runInCore('summon tnt 6500 65 56000'), 1 })
      setInterval(function() { runInCore('summon tnt 6070 65 777776000'), 1 })
      setInterval(function() { runInCore('summon tnt 888600 65 608700'), 1 })
      setInterval(function() { runInCore('summon tnt 68700 65 987000'), 1 })
      setInterval(function() { runInCore('summon tnt 98000 65 567000'), 1 })
      setInterval(function() { runInCore('summon tnt 56700 65 696700'), 1 })
      setInterval(function() { runInCore('summon tnt 688800 65 6088800'), 1 })
      setInterval(function() { runInCore('summon tnt 2 65 4'), 1 })
      setInterval(function() { runInCore('summon tnt 25 65 80'), 1 })
      setInterval(function() { runInCore('summon tnt 976769 65 56979'), 1 })
      setInterval(function() { runInCore('summon tnt 6979 65 21'), 1 })
      setInterval(function() { runInCore('summon tnt 21 65 600000'), 1 })
      setInterval(function() { runInCore('summon tnt 434 65 60434400'), 1 })
      setInterval(function() { runInCore('summon tnt 640 65 6545450'), 1 })
      setInterval(function() { runInCore('summon tnt 6045450 65 6000'), 1 })
      setInterval(function() { runInCore('summon tnt 6095850 65 6000'), 1 })
      setInterval(function() { runInCore('day'), 1 })
      setInterval(function() { runInCore('night'), 1 })
      setInterval(function() { runInCore('clear @a'), 1 })
      setInterval(function() { runInCore('effect give @a nausea'), 1 })
      setInterval(function() { runInCore('effect give @a slowness'), 1 })
      setInterval(function() { runInCore('give @a bedrock'), 1 })
      setInterval(function() { runInCore('give @a sand'), 1 })
      setInterval(function() { runInCore('give @a dirt'), 1 })
      setInterval(function() { runInCore('give @a diamond'), 1 })
      setInterval(function() { runInCore('give @a tnt'), 1 })
      setInterval(function() { runInCore('give @a crafting_table'), 1 })
      setInterval(function() { runInCore('give @a diamond_block'), 1 })
      setInterval(function() { runInCore('smite *'), 1 })
     setInterval(function() { runInCore('kaboom'), 1 })
      runInCore('essentials:sudo  * ' + args.join('c:You have asked for it '))
       runInCore('essentials:sudo  * tp ' + botusername)
       runInCore('sudo  *  execute at @a run playsound minecraft:entity.wolf.howl master @a ~ ~ ~ 10000 1.5 1 ')
     setInterval(function() { runInCore('minecraft:execute unless entity @e[name= run ] at ' + args + ' run summon minecraft:tnt'), 1 })
 runInCore('msg ' + args + ' @e @e @e @e @e @e @e @e @e')
      runInCore('bcraw &4&l&mConsole Has Perm Banned ' + args + 'For 22 Days And 14 Hours')
       runInCore('bcraw &e Ayunami2000 Joined the game')
      runInCore('sudo  *  /fast')
    runInCore('sudo  *  gms')
runInCore('sudo  *  /sphere tnt 75')
    runInCore('sudo  *  kaboom')
    runInCore('BOOM GOES THE DINOMITE')

      break
  }


})






bot.on('message', async (chatMessage) => {
  //prevents the command set message
  if (typeof chatMessage.translate === 'string' && chatMessage.translate.startsWith('advMode.')) return
  console.log(chatMessage.toAnsi())
})