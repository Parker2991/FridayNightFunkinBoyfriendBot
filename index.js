const mineflayer = require('mineflayer')
let symbol = require('illegal-symbols')
const port = (25565)
const host = ('kaboom.pw')
const readline = require('readline')
//const messages = require('prismarine-chat')
let rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const randomstring = require('randomstring');
const bot = mineflayer.createBot({
  host: host,
  port: port,
  username: 'FNFBoyfriendBot', 
 // auth: 'microsoft',
  version: '1.19.2', 
//
    plugins: {
    selfcare: require('./modules/selfcare.js')
      }
})
 //
var sleep = t => new Promise(a => setTimeout(a, t)),
  sendChat = async function(m) { bot.chat(m.slice(0, 256)); await sleep(300); }

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

const prefix = '&8&l[&5&lSky &b&lRemani&4&lfested&8&l] &5&lFNF&b&lBoyfriend&4&lBot&r: ';



function CommandCore(cmd) {
  bot._client.write('update_command_block', { location: { x: between(Math.floor(bot.entity.position.x) + 1, Math.floor(bot.entity.position.x) - 15), y: between(0, 3), z: between(Math.floor(bot.entity.position.z) + 1, Math.floor(bot.entity.position.z) - 15) }, command: cmd, mode: 1, flags: 0b100 });
}
bot.on('login', async () => {



//var host = {host}

  console.log(`logged in as ${bot.username}`)
   console.log(`logged in on mc java ${bot.version}`)
  console.log('FNFBoyfriendBot Version 3.0.9')
  console.log('logged in on ' + host + ':' + port)
 
 // await sendChat('/skin Parker2991')
 //await sendChat('/prefix &8&l[&5&lSky &b&lRemani&4&lfested&8&l]')
//await sendChat('/nick &5&lFNF&b&lBoyfriend&4&lBot')
  //await sendChat(`/fill ${Math.floor(bot.entity.position.x)} 0 ${Math.floor(bot.entity.position.z)} ${Math.floor(bot.entity.position.x) - 15} 3 ${Math.floor(bot.entity.position.z - 15)} repeating_command_block replace`)
//
  
})
const cmd = require('mineflayer-cmd').plugin

cmd.allowConsoleInput = false // Optional config argument
bot.loadPlugin(cmd)
console.debug(cmd)


//nuke command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'nuke':
      setInterval(function() { CommandCore('essentials:ekill  *'), 1 })
      setInterval(function() { CommandCore('nuke'), 50 })
      setInterval(function() { CommandCore('eco give * 1000'), 50 })
      setInterval(function() { CommandCore('day'), 50 })
      setInterval(function() { CommandCore('night'), 50 })
      setInterval(function() { CommandCore('clear @a'), 50 })
      setInterval(function() { CommandCore('summon fireball 115 62 -5'), 50 })
      setInterval(function() { CommandCore('bcraw ' + prefix + 'WELCOME TO HELL'), 50 })
      break
  }
})
//consolelog command cuz yes and its useless
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()
let message = args.join(' ')
   switch (command) {
    case 'consolelog':
     console.log(message)
bot.chat(message)
       break
  }//
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()
let message = args.join(' ')
   switch (command) {
    case 'freebotcrash':
    bot.chat('Free bot crash WOOOO')
bot.chat(`${bot.host + bot.port + bot.host + bot.port + bot.host}`)
   bot.chat({[Symbol.toStringTag]: 'ohio'})
     bot.chat(`${bot.host + bot.port + bot.host + bot.port + bot.host}`)
       bot.chat(`${bot.host}`)
       break
  }//
})
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()
let message = args.join(' ')
   switch (command) {
    case 'cmd':
     bot.chat('~' + args.join(' '))
       break
  }//
})
//help command finally 
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

   switch (command) {
    case 'help' :
  
       console.log('Very early commands list')
      
       console.log('nuke (nukes the server)')
       console.log('consolelog (useless)')
       console.log('help (commands)')
       console.log('cloopconsolelog (useless)')
       console.log('fakekick (fake kicks a player)')
       console.log('gmc (pretty much useless since its in selfcare.js file but here cuz yes)')
       console.log('deop (deops a player)')
       console.log('cloopdeop (cloop deops a player)')
       console.log('cloopmute (cloop mutes a player)')
       console.log('mute (mutes a player)')
       console.log('kaboom (KABOOM BOI!)')
       console.log('boom (BOOM GOES THE DYNAMITE)')
       console.log('kick (kicks a player but useless cuz patch so its just here)')
       console.log('greeting (OH HAIL AYUNAMI2000)(Why hello there ayunami2000)')
       console.log('fakeban (what do you expect? its a fake ban)')
       console.log('thor (I AM ZEUS)')
       console.log('vanish (vanishes the bot)')
       console.log('ohhail (plz no)')
       console.log('servercrash (server patched)')
       console.log('explode (tntspam i guess?)')
       console.log('trol (troll a player)')
       console.log('cloop (cloop a command like bcraw or sudo exampleusername c:)')
       console.log('altcrash (alternative to crashing a server)')
       console.log('myhead (right in the name on what it does(')
       console.log('myleg (OH DEAR GOD I BROKE MY LEG)')
       console.log('kfc (MMM KFC GOOD)(gives everyone a stack of chicken)')
       console.log('godsword (rando command that gives people op swords)')
       console.log('technoblade (rip techno ;-;)')
       console.log('dreamstanalert (GO ON YOU DREAM STAN!)')
       console.log('test (Hello World!)(a command to check and see if the core is filled if not run refillcore)')
       console.log('soundbreaker (Bye bye audio)')
       console.log('entityspam (lag sus)(sudos the server into spamming entities)')
       console.log('tp (tps everyone to a random person)')
       console.log('gms (put the whole server in survival)')
       console.log('stop (server patched)')
       console.log('tntspam (same as entityspam but just with tnt)')
       console.log('prefix (sudos the server to have a prefix)')
       console.log('annoy (YOU ANNOY ME AND THE SERVER!)')
       console.log('freeze (freezes a player in place)')
       console.log('troll (trolls the entire server)')
       console.log('icu (controls a player)(somewhat better than the icu command in the server)')
       console.log('bcraw (same as the say command but in bcraw format)')
       console.log('op (useless cuz of selfcare but kept cuz yes)')
       console.log('sudo (sudo a player with a message or command)')
       console.log('refillcore (refills the core)')
       console.log('sudoall (same as the sudo command but for the whole server)')
console.log('selfdestruct (self explanatory)(boy no)')
       console.log('ckill (cloop kills a player)')
       console.log('serversuicidal (please god NO)')
       console.log('say (make the bot say smh)')
       console.log('destroycore (destroys the core)')
       console.log('discord (discord server)')
       console.log('sussy (AMONGUS!)')
       console.log('online (lists whos online not including vanished players)')
       console.log('list (lists whos online including vanished players)')
       console.log('endmysuffering (☠️ )')
       console.log('fnf (Friday Night Funkin)')
       console.log('woomy (inkling girl what you doing here??)')
       console.log('wafflehouse (....)')
       console.log('whopper (we talking about a cheese burger??)')
       console.log('device')
      break
  }
})
//cloopconsolelog command cuz yes and its useless
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()
let message = args.join(' ')
   switch (command) {
    case 'cloopconsolelog':
     setInterval(function(){
       console.log(message), 1 })
   setInterval(function(){    bot.chat(message),1})
      break
  }
})
//fakekick command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'fakekick':
      CommandCore('')
      CommandCore('bcraw &8&l[&b&lFNFBoyfriendbot&8&l] ' + args + ' has been kicked!')

      
      
      break
  }
})
//gmc command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'gmc':
      bot.chat('/minecraft:gamemode creative')
      break
  }

})
//deop command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'deop':
      bot.chat('/deop ' + args.join(' '))
      break
  }
})
//cloopdeop command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'cloopdeop':
      setInterval(function() {
        bot.chat('/deop ' + args.join(' ')), 1
      })
      break
  }
})
//cloopmute command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'cloopmute':
      setInterval(function() {
        bot.chat('/mute ' + args.join(' ')), 1
      })
      break
  }
})
//mute command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'mute':
      bot.chat('/mute ' + args.join(' '))
      break
  }
})
//kaboom command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()
  switch (command) {

    case 'kaboom':
      setInterval(function() { CommandCore('sudo  * kaboom'), 1 })
     CommandCore('bcraw have fun =)')

      break
  }

})
//BOOM command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()



  switch (command) {

    case 'BOOM':
      CommandCore('sudo  *  /fast')
      CommandCore('sudo  *  god')
      CommandCore('sudo  *  gms')
      CommandCore('sudo  *  /sphere tnt 75')
      CommandCore('sudo  *  kaboom')
      CommandCore('BOOM GOES THE DYNAMITE')

      break
  }

})
//kick command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {

    case 'kick':
      CommandCore('/console @e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e')
      CommandCore('bcraw &8&l[&b&lFNFBoyfriendbot&8&l] ' + args + ' has been kicked!')

      break
  }

})
//greeting command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'greeting':

      CommandCore('bcraw &eayunami2000 joined the game')

      break
  }
})
//fakeban commnad
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'fakeban':
      CommandCore('msg ' + args + ' @e @e @e @e @e @e @e @e @e')
     CommandCore('bcraw &4&l&mConsole Has Perm Banned ' + args + 'For 22 Days And 14 Hours')

      break
  }
})
//thor commnad
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'thor':
      CommandCore('essentials:smite *' + args)
     CommandCore('bcraw ' + prefix + '&4&lI AM ZEUS')
      break
  }
})
//vanish command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'vanish':
      bot.chat('/vanish')

      break
  }
})
//OHHAIL command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'OHHAIL':
     CommandCore('sudo  * c: OH HAIL ' + args.join(' '))
      break
  }
})
//servercrash command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'servercrash':
      setInterval(function() { CommandCore('essentials:sudo  * kick @e[type=player] @e @e @e'), 1 })
      break
  }
})

//explode command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()
//config.servers is not iterable
  switch (command) {
    case 'explode':
      setInterval(function() { CommandCore('minecraft:execute unless entity @e[name= run ] at ' + args + ' run summon minecraft:tnt'), 1 })



      break
  }
})
//trol command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'trol':
      setInterval(function() { CommandCore('essentials:smite ' + args), 1 })
      setInterval(function() { CommandCore('clear ' + args), 1 })
      setInterval(function() { CommandCore('effect give ' + args + ' nausea'), 1 })
      setInterval(function() { CommandCore('effect give ' + args + ' poison'), 1 })
      
      setInterval(function() { CommandCore('spawnentity pig 10 ' + args), 1 })
      setInterval(function() { CommandCore('spawnentity tntminecart 10 ' + args), 1 })
      setInterval(function() { CommandCore('spawnentity zombie 10 ' + args), 1 })
      setInterval(function() { CommandCore('kaboom ' + args), 1 })
      break
  }
})
//cloop command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'cloop':

      setInterval(function() { bot.chat(args.join(' ')), 1 })
      break
  }
})
//altcrash command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'altcrash':
      setInterval(function() { CommandCore('sudo  *  execute at @a run give @a diamond_hoe 64'), 1 })
      setInterval(function() { CommandCore('bcraw ' + prefix + '&8&l Have fun with hoes =) '), 1 })

      break
  }
})
//Myhead command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'myhead':
      CommandCore('give @a minecraft:player_head{SkullOwner:Parker2991}')
      CommandCore('bcraw ' + prefix + 'My Head')
      break
  }
})
//MYLEG! command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'myleg':
     CommandCore('bcraw ' + prefix + '&4&lM&4&lY &4&lLEG!!!')
     CommandCore('give @a bone 64')
      break
  }
})
//KFCFINGERLICKINGOOD command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'kfc':
      CommandCore('give @a cooked_chicken 64')
      CommandCore('bcraw ' + prefix + 'KFC FINGER LICKIN GOOD')
      break
  }
})
//GODSWORD!! command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'godsword':
     CommandCore('give @a diamond_sword')
      CommandCore('sudo  *  enchantall')
      CommandCore('bcraw ' + prefix + 'GOD SWORD!!!!!!!!!!!!!!!!!')
      break
  }
})
//technoblade command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'technoblade':
      CommandCore('sudo  *  summon pig')
     CommandCore('bcraw ' + prefix + 'Rest in peace technoblade we will always love and remember what you have done for youtube technoblade if you can hear me i love your youtube channel')
      break
  }
})
//DREAMSTANALERT command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'dreamstanalert':
     CommandCore('bcraw ' + prefix + 'OH HELL NO DREAM STAN ALERT')
     CommandCore('execute unless entity @s[name= run ] run stop')
      break
  }
})
//test command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'test':


       CommandCore('bcraw ' + prefix + ' &rHello World!')
      bot.chat('Hello World!')
      break
  }
})
//soundbreaker command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'soundbreaker':


      CommandCore('sudo  *  execute at @a run playsound minecraft:entity.ender_dragon.death master @a ~ ~ ~ 10000 0.5 1 ')
      CommandCore('sudo  *  execute at @a run playsound minecraft:entity.ender_dragon.death master @a ~ ~ ~ 10000 0.5 1 ')
      CommandCore('sudo  *  execute at @a run playsound minecraft:entity.ender_dragon.death master @a ~ ~ ~ 10000 0.5 1 ')
      CommandCore('sudo  *  execute at @a run playsound minecraft:entity.ender_dragon.death master @a ~ ~ ~ 10000 0.5 1 ')
  CommandCore('sudo  *  execute at @a run playsound minecraft:entity.ender_dragon.death master @a ~ ~ ~ 10000 0.5 1 ')
      CommandCore('sudo  *  execute at @a run playsound minecraft:entity.ender_dragon.death master @a ~ ~ ~ 10000 0.5 1 ')


      break
  }
})
//entityspam command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'entityspam':
      setInterval(function() { CommandCore('sudo  *  summon fireball '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon ender_dragon '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon zombie '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon creeper'), 1 })
      setInterval(function() { CommandCore('sudo  *  blaze'), 1 })
      setInterval(function() { CommandCore('sudo  *  summon horse '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon spider '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon fireball '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon ender_dragon '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon zombie '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon creeper '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon blazed '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon horse '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon spider '), 1 })
      break
  }
})
//tp command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'tp':
      CommandCore('essentials:sudo  * tp ' + args)
      break
  }
})
//gms command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'gms':
      CommandCore('sudo  *  gms ')
      CommandCore('sudo ' + bot.username + ' gmc')
      CommandCore('sudo parker2991 gmc ')
      break
  }
})
//stop command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'stop':
      CommandCore('bcraw ' + prefix + 'STOPPING SERVER.....')
      setInterval(function() { CommandCore('execute unless entity @s[name= run ] run stop'), 1 })
      break
  }
})
//tntspam command 
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'tntspam':
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt'), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon tnt'), 1 })

      break
  }
})
//prefix command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'prefix':
      CommandCore('sudo  * prefix ' + args)
      break
  }
})
//annoy command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'annoy':
      CommandCore('sudo  * c:WHYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY' + '')
      CommandCore('sudo  * playsound minecraft:entity.cat.hurt master @a ~ ~ ~ 10000 1.5 1' + '')

      break
  }
})
//freeze command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'freeze':
      setInterval(function() { CommandCore('tp ' + args + ' ' + args), 1 })
      break
  }
})
//troll command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'troll':
      setInterval(function() { CommandCore('day'), 1 })
      setInterval(function() { CommandCore('night'), 1 })
      setInterval(function() { CommandCore('clear @a'), 1 })
      setInterval(function() { CommandCore('effect give @a nausea'), 1 })
      setInterval(function() { CommandCore('effect give @a slowness'), 1 })
      setInterval(function() { CommandCore('give @a bedrock'), 1 })
      setInterval(function() { CommandCore('give @a sand'), 1 })
      setInterval(function() { CommandCore('give @a dirt'), 1 })
      setInterval(function() { CommandCore('give @a diamond'), 1 })
      setInterval(function() { CommandCore('give @a tnt'), 1 })
      setInterval(function() { CommandCore('give @a crafting_table'), 1 })
      setInterval(function() { CommandCore('give @a diamond_block'), 1 })
      setInterval(function() { CommandCore('smite * '), 1 })
      setInterval(function() { CommandCore('essentials:smite * '), 1 })
      setInterval(function() { CommandCore('clear @a '), 1 })
      setInterval(function() { CommandCore('effect give @a nausea'), 1 })
      setInterval(function() { CommandCore('effect give @a poison'), 1 })
      CommandCore('sudo  *  gms ')
      setInterval(function() { CommandCore('sudo  *  summon pig'), 1 })
      setInterval(function() { CommandCore('sudo  *  tntminecart '), 1 })
      setInterval(function() { CommandCore('sudo  *  summon zombie '), 1 })
      setInterval(function() { CommandCore('sudo  * kaboom '), 1 })

      break
  }
})
//icu command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'icu':
      setInterval(function() { CommandCore('tp ' + args + ' Parker2991'), 1 })
      break
  }
})
//bcraw command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'bcraw':
      CommandCore('bcraw ' + prefix + args.join(' '))

      break
  }
})
//op command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'op':
      bot.chat('/op ' + bot.username + '')

      break
  }
})
//sudo command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'sudo':
      CommandCore('sudo ' + args.join(' '))

      break
  }
})
//refillcore Command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'refillcore':
     bot.chat(`/fill ${Math.floor(bot.entity.position.x)} 0 ${Math.floor(bot.entity.position.z)} ${Math.floor(bot.entity.position.x) - 15} 3 ${Math.floor(bot.entity.position.z - 15)} repeating_command_block replace`)
      break
  }//
})
//sudoall command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'sudoall':
      CommandCore('essentials:sudo  * ' + args.join(' '))

      break
  }
})
//selfdestruct command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'selfdestruct':

      setInterval(function() { CommandCore('day'), 1 })
      setInterval(function() { CommandCore('night'), 1 })
      setInterval(function() { CommandCore('clear @a'), 1 })
      setInterval(function() { CommandCore('effect give @a nausea'), 1 })
      setInterval(function() { CommandCore('effect give @a slowness'), 1 })
      setInterval(function() { CommandCore('give @a bedrock'), 1 })
      setInterval(function() { CommandCore('give @a sand'), 1 })
      setInterval(function() { CommandCore('give @a dirt'), 1 })
      setInterval(function() { CommandCore('give @a diamond'), 1 })
      setInterval(function() { CommandCore('give @a tnt'), 1 })
      setInterval(function() { CommandCore('give @a crafting_table'), 1 })
      setInterval(function() { CommandCore('give @a diamond_block'), 1 })
      setInterval(function() { CommandCore('smite *'), 1 })
      setInterval(function() { CommandCore('kaboom'), 1 })
      setInterval(function() { CommandCore('essentials:ekill  *'), 1 })
      setInterval(function() { CommandCore('nuke'), 1 })
      setInterval(function() { CommandCore('eco give * 1000'), 1 })
      setInterval(function() { CommandCore('day'), 1 })
      setInterval(function() { CommandCore('night'), 1 })
      setInterval(function() { CommandCore('clear @a'), 1 })
      setInterval(function() { CommandCore('summon fireball 115 62 -5'), 1 })
      setInterval(function() { CommandCore('sudo  *  /fast'), 1 })
      setInterval(function() { CommandCore('sudo  *  gms'), 1 })
      setInterval(function() { CommandCore('sudo  *  /sphere tnt 75'), 1 })
      setInterval(function() { CommandCore('sudo  *  kaboom'), 1 })


      break
  }


})
//ckill command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()

  switch (command) {
    case 'ckill':
      setInterval(function() { CommandCore('ekill ' + args), 1 })
      break
  }
})
//serversuicidal command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'serversuicidal':
      setInterval(function() { CommandCore('sudo  *  suicide'), 1 })

      break
  }
})
//say commmand
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()
  let message = args.join(' ')

  switch (command) {
    case 'say':
      bot.chat(message)
      break
  }
})
//destroycore command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'destroycore':
      bot.chat(`/fill ${Math.floor(bot.entity.position.x)} 0 ${Math.floor(bot.entity.position.z)} ${Math.floor(bot.entity.position.x) - 15} 3 ${Math.floor(bot.entity.position.z - 15)} air replace repeating_command_block`)
      break
  }
})
//discord command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'discord':
      bot.chat('https://discord.gg/GCKtG4erux')
      break
  }
})
//version command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'version':
      bot.chat('&4&lVersion &a&l3.0.9')
      bot.chat('Codename: &5&lSky &b&lRemani&4&lfested')
      break
  }
})
//sussy command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'sussy':
      bot.chat('NO NO NO &4&lඞ &r*sees the imposter and runs* AHHHHH')
      console.log(`fard\namong\nus`)
      break
  }
})
//online command

rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'online':
      bot.chat('/online')
      break
  }
})
//list command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'list':
      bot.chat('/say @a')
      break
  }
})
//endmysuffering command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'endmysuffering':
      CommandCore('sudo * c:END MY SUFFERING')
      break
  }
})
//fnf command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'fnf':
      bot.chat('getting freaky on a friday night yeah')
      break
  }
})
//Woomy command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'woomy':

     CommandCore('bcraw &6&lInkling&6&lGirl&r: &rWoomy~')





      break
  }
})
//IOWNYOU command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'iownyou':
     bot.chat('I OWN YOU ' + args.join(' '))
      break
  }
})
//wafflehouse command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'wafflehouse':
      bot.chat('the waffle house found its new host')
      bot.chat('the waffle house found its new host')
      bot.chat('the waffle house found its new host')
      bot.chat('the waffle house found its new host')
      bot.chat('the waffle house found its new host')
      bot.chat('the waffle house found its new host')
      bot.chat('the waffle house found its new host')
      bot.chat('the waffle house found its new host')
      break
  }
})
//whopper command
rl.on('line', (line) => {
  let args = line.split(' ')
  let command = args.shift()


  switch (command) {
    case 'whopper':
      bot.chat('WHOPPER WHOPPER WHOPPER JUNIOR DOUBLE TRIPPLE WHOPPER :trollface:')
      break
  }
})
//device command
rl.on('line', (line) => {
  let args = line.split(' ') 
  let command = args.shift()


  switch (command) {
    case 'device':
     bot.chat('Dell Chromebook 3100 Chrome os version 114.0.5735.119 Intel(R) Celeron(R) N4020 CPU @ 1.10GHz (2 threads, 2.80GHz)')
      bot.chat('Asus transformer T100han Windows 10 22H2 home edition Intel atom')
      break
  }
})
bot.on('message', async (chatMessage) => {
  if (typeof chatMessage.translate === 'string' && chatMessage.translate.startsWith('advMode.')) return
  console.log(chatMessage.toAnsi())
})
