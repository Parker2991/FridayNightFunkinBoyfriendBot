const mineflayer = require('mineflayer')
let symbol = require('illegal-symbols')
  var server = 'play.chipmunk.land'
//NMxigAU6dR1KfgaQkKz87L
const readline = require('readline')
var gameMode = require('mineflayer-cmd')



let rl = readline.createInterface({ input: process.stdin, output: process.stdout })


const randomstring = require('randomstring');
const bot = mineflayer.createBot({
  host: server,
  port: 25565,
  username: randomstring.generate(8),
  version: 1.17


})



var sleep = t => new Promise(a => setTimeout(a, t)),
  sendChat = async function(m) { bot.chat(m.slice(0, 256)); await sleep(300); }

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

//variables
var prefix = '&8&l[&b&lFNFBoyfriendBot&8&l]&8&l[&4&lVersion&a&l2.0&8&l]&8&l[&4&lParker2991&8&l]&8&l[&5&lSpim&5&lThe&5&lO&5&lc&5&lt&5&lo&5&ll&5&li&5&ln&5&lg&8&l]';
var consoleprefix = 'bcraw  &8&l[&b&lFNFBoyfriendBot&8&l]&8&l[&4&lVersion&a&l2.0&8&l]&8&l[&4&lParker2991&8&l]&8&l[&5&lSpim&5&lThe&5&lO&5&lc&5&lt&5&lo&5&ll&5&li&5&ln&5&lg&8&l]';

function randomchar() {
  const crypto = require("crypto");
  var hash = crypto.createHash("md5");
  var randomBytes = crypto.randomBytes(16);
  hash.update(randomBytes);
  var hashi = hash.digest(Math.round(Math.random()) ? "hex" : "Base64");

  return hashi.substring(0, 16);
}


function runInCore(cmd) {
  bot._client.write('update_command_block', { location: { x: between(Math.floor(bot.entity.position.x) + 1, Math.floor(bot.entity.position.x) - 15), y: between(0, 3), z: between(Math.floor(bot.entity.position.z) + 1, Math.floor(bot.entity.position.z) - 15) }, command: cmd, mode: 1, flags: 0b100 });
}
bot.on('login', async () => {


   
 
  

  console.log(`logged in as ${bot.username}`)




  //change the coords if bot has problems
  //await sendChat('/tp '+require('randomstring').generate({length:5,charset:'1234567890'})+' 5 '+require('randomstring').generate({length:6,charset:'1234567890'}))




  await sendChat('/world 3')
  await sendChat('/tptoggle parker2991')
  await sendChat('/tp parker2991')
  await sendChat('/tptoggle parker2991')
  await sendChat('/tptoggle')
  await sendChat('/v on')
  await sendChat('/console ')
  await sendChat('/username')
  await sendChat('/c')
  await sendChat('/night')
  await sendChat('/gamerule doMobSpawning false')
  await sendChat('/de')
  await sendChat('/online')
  await sendChat('/cspy on')
  await sendChat('/prefix &4[BOT/CONSOLE]')
  await sendChat('/sudo parker2991 prefix &8&l[&4&lOwner &a&lof &a&lthe &b&lFNFBoyfriend&4&lbot&8&l]&8&l[&9&lDiscord&8&l]')
  await sendChat('/sudo spimtheoctoling prefix &8&l[&5&lOwner of the VeemoBot&8&l]')
  await sendChat(`/fill ${Math.floor(bot.entity.position.x)} 0 ${Math.floor(bot.entity.position.z)} ${Math.floor(bot.entity.position.x) - 15} 50 ${Math.floor(bot.entity.position.z - 15)} command_block replace`)


  runInCore('bcraw ' + prefix + '&b&lOwner &4&lis &4&lParker2991')
  runInCore('bcraw  ' + prefix + ' &b&lCo-Owner &5&lSpimTheOctoling')

  runInCore('bcraw  ' + prefix + ' Release date 2/7/23 8:01pm for &4&l2.0')
  runInCore('bcraw  ' + prefix + '&b&lFull bot release 1/26/23 1:47am')

  runInCore('bcraw ' + prefix + '&a&l Version &a&l2.0 &a&l RELEASE')
  runInCore('bcraw ' + prefix + 'Users of the bot Parker2991 and SpimTheOctoling')

  runInCore('bcraw ' + prefix + 'full bot release &8&l1/26/23 &8&l1:47am &8&lCentral &8&ltime')

  runInCore('bcraw ' + prefix + 'i got a discord now if anyone wants a bot go to here https://discord.gg/PaxKxXTs')

})
const cmd = require('mineflayer-cmd').plugin

cmd.allowConsoleInput = false // Optional config argument
bot.loadPlugin(cmd)
//nuke command
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
      setInterval(function() { runInCore('bcraw ' + prefix + 'WELCOME TO HELL'), 1 })
      break
  }
})
//fakekick command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'fakekick':
      runInCore('msg ' + args + ' @e @e @e @e @e @e @e @e @e')
      runInCore('bcraw &8&l[&b&m&lFNFBoyfriendbot&8&l]&8&l[&5&lVeemoBot&8&l] ' + args + ' has been kicked!')
      break
  }
})


//gmc command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'gmc':
     sendChat('/minecraft:gamemode creative')
      runInCore('bcraw &4DOWN IN OHIO!')
      break
  }

})
//deop command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'deop':
      setInterval(function() { runInCore('sudo + playerusername deop @s[type=player]'), 1 })
  }
})
//kaboom command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()
  switch (command) {

    case 'kaboom':
      setInterval(function() { runInCore('sudo  * kaboom'), 8 })
      runInCore('bcraw have fun =)')

      break
  }

})
//BOOM command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()



  switch (command) {

    case 'BOOM':
      runInCore('sudo  *  /fast')
      runInCore('sudo  *  god')
      runInCore('sudo  *  gms')
      runInCore('sudo  *  /sphere tnt 75')
      runInCore('sudo  *  kaboom')
      runInCore('BOOM GOES THE DINOMITE')

      break
  }

})
//kick command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {

    case 'kick':
      runInCore('/console @e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e')
      runInCore('bcraw &8&l[&b&m&lBoyfriendbot&8&l]&8&l[&5&lVeemoBot&8&l] ' + args + ' has been kicked!')

      break
  }

})
//greeting command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'greeting':

      runInCore('bcraw &eAyunami2000 Joined the game')

      break
  }
})
//fakeban commnad
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'fakeban':
      runInCore('msg ' + args + ' @e @e @e @e @e @e @e @e @e')
      runInCore('bcraw &4&l&mConsole Has Perm Banned ' + args + 'For 22 Days And 14 Hours')

      break
  }
})
//thor commnad
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'thor':
      runInCore('essentials:smite *' + args)
      runInCore('bcraw ' + prefix + '&4&lI AM ZEUS')
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'vanish':
      sendChat('/vanish on ' + bot.username + '')
      
      break
  }
})
//OHHAIL console
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'OHHAIL':
      runInCore('sudo  * c: OH HAIL FIRE MOTHER FUCKER' + args.join(' '))
      break
  }
})
//servercrash command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'servercrash':
      setInterval(function() { runInCore('essentials:sudo  * kick @e[type=player] @e @e @e'), 1 })
      break
  }
})
//explode command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'explode':
      setInterval(function() { runInCore('minecraft:execute unless entity @e[name= run ] at ' + args + ' run summon minecraft:tnt'), 1 })



      break
  }
})
//trol command
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
//cloop command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'cloop':

      setInterval(function() { runInCore(args.join(' ')), 1 })
      break
  }
})

//altcrash command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'altcrash':
      setInterval(function() { runInCore('sudo  *  execute at @a run give @a diamond_hoe 64'), 1 })
      setInterval(function() { runInCore('bcraw ' + prefix + '&8&l Have fun with hoes =) '), 1 })
      runInCore
      break
  }
})
//Myhead command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'MyHead':
      runInCore('give @a minecraft:player_head{SkullOwner:Parker2991}')
      runInCore('give @a minecraft:player_head{SkullOwner:SpimTheOctoling}')
      runInCore('bcraw ' + prefix + 'My Head')
      break
  }
})
//MYLEG! command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'MYLEG':
      runInCore('bcraw ' + prefix + '&4&lM&4&lY &4&lLEG!!!')
      runInCore('give @a bone 64')
      break
  }
})
//KFCFINGERLICKINGOOD command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'KFC':
      runInCore('give @a cooked_chicken 64')
      runInCore('bcraw ' + prefix + 'KFC FINGER LICKIN GOOD')
      break
  }
})
//GODSWORD!! command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'GODSWORD':
      runInCore('give @a diamond_sword')
      runInCore('sudo  *  enchantall')
      runInCore('bcraw ' + prefix + 'GOD SWORD!!!!!!!!!!!!!!!!!')
      break
  }
})
//technoblade command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'technoblade':
      runInCore('sudo  *  summon pig')
      runInCore('bcraw ' + prefix + 'Rest in peace technoblade we will always love and remember what you have done for youtube technoblade if you can here me i love your youtube channel')
      break
  }
})
//DREAMSTANALERT command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'DREAMSTANALERT':
      runInCore('bcraw ' + prefix + 'OH HELL NO DREAM STAN ALERT')
      runInCore('execute unless entity @s[name= run ] run stop')
      break
  }
})

//test command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'test':


      setInterval(function() { runInCore('sudo  * ' + args + ' summon minecraft:iron_golem'), 1 })
      break
  }
})
//soundbreaker
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'soundbreaker':


      setInterval(function() { runInCore('sudo  *  execute at @a run playsound minecraft:entity.wolf.hurt master @a ~ ~ ~ 10000 1.5 1 '), 1 })
      setInterval(function() { runInCore('sudo  *  execute at @a run playsound minecraft:entity.cat.hurt master @a ~ ~ ~ 10000 1.5 1 '), 1 })
      setInterval(function() { runInCore('sudo  *  execute at @a run playsound minecraft:entity.wolf.hurt master @a ~ ~ ~ 10000 1 1 '), 1 })
      setInterval(function() { runInCore('sudo  *  execute at @a run playsound minecraft:entity.cat.hurt master @a ~ ~ ~ 10000 1 1 '), 1 })
      setInterval(function() { runInCore('sudo  *  execute at @a run playsound minecraft:entity.cat.hiss master @a ~ ~ ~ 10000 1.5 1 '), 1 })
      setInterval(function() { runInCore('sudo  *  execute at @a run playsound minecraft:entity.cat.hiss master @a ~ ~ ~ 10000 1 1 '), 1 })
      break
  }
})
//entityspam
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'entityspam':
      setInterval(function() { runInCore('sudo  *  summon fireball '), 1 })
      setInterval(function() { runInCore('sudo  *  summon ender_dragon '), 1 })
      setInterval(function() { runInCore('sudo  *  summon zombie '), 1 })
      setInterval(function() { runInCore('sudo  *  summon creeper'), 1 })
      setInterval(function() { runInCore('sudo  *  blaze'), 1 })
      setInterval(function() { runInCore('sudo  *  summon horse '), 1 })
      setInterval(function() { runInCore('sudo  *  summon spider '), 1 })
      setInterval(function() { runInCore('sudo  *  summon fireball '), 1 })
      setInterval(function() { runInCore('sudo  *  summon ender_dragon '), 1 })
      setInterval(function() { runInCore('sudo  *  summon zombie '), 1 })
      setInterval(function() { runInCore('sudo  *  ummon creeper '), 1 })
      setInterval(function() { runInCore('sudo  *  summon blazed '), 1 })
      setInterval(function() { runInCore('sudo  *  summon horse '), 1 })
      setInterval(function() { runInCore('sudo  *  summon spider '), 1 })
      break
  }
})
//tp command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'tp':
      runInCore('essentials:sudo  * tp ' + args)
      break
  }
})
//gms command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'gms':
      setInterval(function() { runInCore('sudo  *  gms ' + args), 1 })
      break
  }
})
//stop command
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
//tntspam command 
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'tntspam':
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt'), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { runInCore('sudo  *  summon tnt'), 1 })

      break
  }
})
//prefix command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'prefix':
      runInCore('sudo  * prefix ' + args)
      break
  }
})
//annoy command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'annoy':
      setInterval(function() { runInCore('sudo  * c:WHYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY' + ''), 1 })
      setInterval(function() { runInCore('sudo  * playsound minecraft:entity.cat.hurt master @a ~ ~ ~ 10000 1.5 1' + ''), 1 })

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

//icu command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'icu':
      setInterval(function() { runInCore('tp ' + args + ' Parker2991'), 1 })
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
    case 'op':
      sendChat('/op ' + bot.username + '')
      
      break
  }
})
//sudo command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'sudo':
      runInCore('sudo ' + args.join(' '))

      break
  }
})
//tpe command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'tpe':
      runInCore('execute unless entity @s[name= run ] run tp @e[type=!player] ' + args)

      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

switch (command) {
    case 'refillcore':
sendChat(`/fill ${Math.floor(bot.entity.position.x)} 0 ${Math.floor(bot.entity.position.z)} ${Math.floor(bot.entity.position.x) - 15} 50 ${Math.floor(bot.entity.position.z - 15)} command_block replace`)
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
      
      break
  }
})
//selfdestruct command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'selfdestruct':

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
      setInterval(function() { runInCore('essentials:ekill  *'), 1 })
      setInterval(function() { runInCore('nuke'), 1 })
      setInterval(function() { runInCore('eco give * 1000'), 1 })
      setInterval(function() { runInCore('day'), 1 })
      setInterval(function() { runInCore('night'), 1 })
      setInterval(function() { runInCore('clear @a'), 1 })
      setInterval(function() { runInCore('summon fireball 115 62 -5'), 1 })
      setInterval(function() { runInCore('sudo  *  /fast'), 1 })
      setInterval(function() { runInCore('sudo  *  gms'), 1 })
      setInterval(function() { runInCore('sudo  *  /sphere tnt 75'), 1 })
      setInterval(function() { runInCore('sudo  *  kaboom'), 1 })


      break
  }


})






bot.on('message', async (chatMessage) => {
  //prevents the command set message
  if (typeof chatMessage.translate === 'string' && chatMessage.translate.startsWith('advMode.')) return
  console.log(chatMessage.toAnsi())
})


