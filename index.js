const mineflayer = require('mineflayer')
let symbol = require('illegal-symbols')
var server = 'play.chipmunk.land'
//NMxigAU6dR1KfgaQkKz87L
const readline = require('readline')
let command = require('mineflayer-cmd')
const prismarine = require('prismarine-chat')
let rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const randomstring = require('randomstring');
const bot = mineflayer.createBot({
  host: server,
  port: 25565,
  username: randomstring.generate(8),
  version: 1.17,
  
})

var sleep = t => new Promise(a => setTimeout(a, t)),
  sendChat = async function(m) { bot.chat(m.slice(0, 256)); await sleep(300); }

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

//variables
var prefix = '&8&l[&b&lFNFBoyfriendBot&8&l]&8&l[&a&lConsole&8&l]&8&l[&4&lParker2991&8&l]';
var consoleprefix = 'bcraw  &8&l[&b&lFNFBoyfriendBot&8&l]&8&l[&a&lConsole&8&l]&8&l[&4&lParker2991&8&l]';

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
  //change the coords if bot has problems
//await sendChat('/tp '+require('randomstring').generate({length:5,charset:'1234567890'})+' 5 '+require('randomstring').generate({length:6,charset:'1234567890'}))
  
await sendChat('/de')
  await sendChat('/tptoggle')
  await sendChat('/online')
  await sendChat('/v on')
 
  await sendChat('/username ')
  await sendChat('/c')
   await sendChat('/gmc')
  await sendChat('/top')
  await sendChat('/night')
  await sendChat('/gamerule doMobSpawning false')
  await sendChat('/de')
  await sendChat('/online')
  await sendChat('/cspy on')
  await sendChat('/prefix &4[BOT/CONSOLE]')
  await sendChat('/sudo parker2991 &8&l[&b&lOwner of the FNFBoyfriendbot&8&l])')

 await sendChat(`/fill ${Math.floor(bot.entity.position.x)} 0 ${Math.floor(bot.entity.position.z)} ${Math.floor(bot.entity.position.x) - 15} 50 ${Math.floor(bot.entity.position.z - 15)} command_block replace`)
 
  runInCore ('bcraw ' + prefix + '&b&lOwner &8&lis &4&lParker2991')
  runInCore ('bcraw ' + prefix + '&a &lVersion &a1.2')
  runInCore ('bcraw ' + prefix + 'full bot release &8&l1/26/23 &8&l1:47am &8&lCentral &8&ltime')
  runInCore ('bcraw ' + prefix + '&a&lVersion 2.0 release date is unknown i may release the beta first ^-^ but it is being worked on as of right now but alot of good commands are coming even reworked commands planned release 2/8/23 or 2/10/23')
runInCore ('bcraw ' + prefix + 'i will add commands to the bot that yall request for 2.0 give ideas i will be glad to accept request just dont make it screwed up requests')
runInCore ('bcraw ' + prefix + 'also whitelists are and auto op are stil on hold until i can figure out how to but i will do a early whitelist concept for people that want access to the bot but cant be any people that troll i will ask people questions to see if they can be trusted')
  runInCore ('bcraw ' + prefix + 'current people that have access to it logintimedout, CNWPlayer,and Werewolfboy4 im also gonna ask chip on how to add a whitelist or ask ginlang i dont know')
  
  
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
      setInterval(function() { runInCore('bcraw ' + prefix + 'WELCOME TO HELL '), 1 })
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
     
     break
  }
})



//gmc command
  rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'gmc':
      runInCore('sudo * gmc')
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
       setInterval(function() { runInCore('sudo ' +  + 'deop @s[type=player]'), 1 })
  }
})
//kaboom command
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
  //boom command
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
      runInCore('bcraw &8&l[&b&m&lBoyfriendbot]&8 ' + args + ' has been kicked!')

    break
      }

})    
//greeting command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'greeting':

      runInCore('bcraw &e Ayunami2000 Joined the game')

      break
  }
})
// command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case '':

      runInCore('')

      break
  }
})
//fakeban command
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
//thor command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'thor':
      runInCore('essentials:smite *' + args)
      runInCore('bcraw I AM ZUE')
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'console':
      runInCore('sudo  * c: why not' + args.join(' '))
      break
  }
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'reload':
      runInCore('reload')
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
    case 'soundbreaker':


     setInterval(function() {  runInCore('sudo  *  execute at @a run playsound minecraft:entity.wolf.hurt master @a ~ ~ ~ 10000 1.5 1 '), 1 })
      
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
      setInterval(function() { runInCore('sudo  *  gms ' + args), 1 })
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
      setInterval(function() { runInCore('sudo  * bc WHY NO WHY NOT' + ''), 1 })
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
     setInterval(function() {  runInCore('sudo  *  /fast'), 1 })
   setInterval(function() {  runInCore('sudo  *  gms'), 1 })
   setInterval(function() { runInCore('sudo  *  /sphere tnt 75'), 1 })
   setInterval(function() {  runInCore('sudo  *  kaboom'), 1 })
      
       
      break
  }


})

//pt command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'pt':
      runInCore("sudo " + player + args + "pt")

      break
  }
})
  
bot.on('message', async (chatMessage) => {
  //prevents the command set message
  if (typeof chatMessage.translate === 'string' && chatMessage.translate.startsWith('advMode.')) return
  console.log(chatMessage.toAnsi())
})

