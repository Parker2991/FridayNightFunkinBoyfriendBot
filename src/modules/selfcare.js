const util = require('util')

const COMMANDSPY_ENABLED_MESSAGE = { text: 'Successfully enabled CommandSpy' }
const COMMANDSPY_DISABLED_MESSAGE = { text: 'Successfully disabled CommandSpy' }
//You now have the tag: &8[&bPrefix &4d~&8]
function selfcare (bot) {
  let register;
  let login;
  let time = new Date; time.getMilliseconds();
  let positionPackets = 0;
  let entityId;
  let gameMode;
  let permissionLevel = 2;
  let unmuted = false;
  let commandSpyEnabled = false;
  let vanished = false;
  let prefix = false;
  let skin = false;
  let username = false;
  let nickname = false;
  let god = false;
  let tptoggle = false;
  let jail = false;
  let creayunJoin = false;
  bot.on('message', (message, data) => {
    ansiMessage = bot.getMessageAsPrismarine(message)?.toAnsi()
    stringmessage = bot.getMessageAsPrismarine(message)?.toString()

    if (bot.options.isSavage) {
     // savage vanish selfcare
      if (stringmessage === `Vanish for ${bot.options.username}: enabled`) vanished = true;

      else if (stringmessage === `Vanish for ${bot.options.username}: disabled`) vanished = false;

      // savage prefix selfcare
      else if (JSON.stringify(message) === `{"extra":[{"bold":true,"color":"aqua","text":" > "},{"color":"white","text":"Prefix for user "},{"color":"aqua","text":"${bot.options.username}"},{"color":"white","text":" "},{"color":"green","text":"set to"},{"color":"white","text":": "},{"color":"dark_gray","text":"["},{"color":"aqua","text":"Prefix"},{"color":"dark_gray","text":": "},{"color":"dark_red","text":"${bot.Commands.prefixes[0]}"},{"color":"dark_gray","text":"]"}],"text":""}`) prefix = true

      else if (stringmessage === 'Prefix for user ${bot.options.username} removed.') prefix = false

      else if (stringmessage.startsWith(`> Prefix for user ${bot.options.username} set to: `) || stringmessage === `> Prefix for user ${bot.options.username} removed.`) prefix = false

      // savage login selfcare
      else if (stringmessage === 'Please, register to the server with the command: /register <password> <ConfirmPassword>') register = false;

      else if (stringmessage === 'Successfully registered!') register = true;

      else if (stringmessage === 'You already have registered this username!') register = true;

      else if (stringmessage === 'Please, login with the command: /login <password>') login = true;

      else if (stringmessage === 'Successful login!') login = true;

      else if (stringmessage === "You're already logged in!") login = true; 

      else if (stringmessage === "You're already logged in!") registry = true;
      // You're already logged in!
    } // Please, register to the server with the command: /register <password> <ConfirmPassword>
    // Please, login with the command: /login <password>
    // Successfully registered!
    // Successful login!
    // You already have registered this username!
    if (bot.options.isCreayun) {
    
    // creayun join selfcare
    if (stringmessage === 'Welcome to creayun!' || stringmessage === 'Already connecting to this server!') {
    creayunJoin = true
    return
    }

    else if (stringmessage?.startsWith('Welcome ') || stringmessage === "Welcome to ayunami's boxes server") creayunJoin = false

    else if (stringmessage?.startsWith('Welcome ') || stringmessage === 'Welcome to survivayun!') creayunJoin = false

    if (stringmessage === `Your prefix has been set to: [Prefix: ~]` || stringmessage === 'Something went wrong while saving the prefix. Please check console.' || stringmessage === 'Unknown command. Type /help for help' || stringmessage === '[SuffEx] Your prefix has been set to: [Prefix: ~]' || stringmessage === 'Unknown command. Type /help for help.') {
      prefix = true
      return
    }
   
    // creayun prefix selfcare
    else if (stringmessage?.startsWith("Your prefix has been set to: ") || stringmessage.startsWith('[SuffEx] Your prefix has been set to: ') || stringmessage === '[SuffEx] Your prefix has been reset' || stringmessage === "Your prefix has been reset.") prefix = false

    else if (stringmessage === 'You no longer have a nickname.' || stringmessage === '[SuffEx] Your nick has been reset!') {
      nickname = false
      return
    }
  
    // creayun nick selfcare
    else if (stringmessage?.startsWith("Your nick has been set to: ") || stringmessage.startsWith("[SuffEx] Your nick has been set to: ")) nickname = true 
   
    // creayun vanish selfcare
    else if (stringmessage === "You are now completely invisible to normal users, and hidden from in-game commands." || stringmessage === "You do not have access to that command." || stringmessage === "Unknown command. Type /help for help.") {
       vanished = true
       return
    }

    else if (stringmessage === "You are once again visible.") vanished = false

    else if (stringmessage === "Teleportation enabled.") {
      tptoggle = false
      return
    }

    // creayun tptoggle selfcare
    else if (stringmessage === "Teleportation disabled.") tptoggle = true

    } if (bot.options.isKaboom) { //Your prefix has been reset.

    // kaboom mute selfcare
    if (stringmessage?.startsWith('You have been muted')) unmuted = true

    else if (stringmessage?.startsWith('You have been unmuted')) unmuted = false

    // kaboom CommandSpy selfcare
    else if (JSON.stringify(message) === '{"text":"Successfully enabled CommandSpy"}') commandSpyEnabled = true

    else if (JSON.stringify(message) === '{"text":"Successfully disabled CommandSpy"}') commandSpyEnabled = false

    // kaboom prefix selfcare
    else if (JSON.stringify(message) === `{"extra":[{"text":"&8[&bPrefix: &4${bot.Commands.prefixes[0]}&8]"}],"text":"You now have the tag: "}` || stringmessage === 'Something went wrong while saving the prefix. Please check console.') {
      prefix = true
      return
    }

    else if (stringmessage?.startsWith("You now have the tag: ") || JSON?.stringify(message) === '{"text":"You no longer have a tag"}') prefix = false
      
    // kaboom skin selfcare
    else if (JSON.stringify(message) === `{"extra":[{"text":"Parker2991"},{"text":"'s"}],"text":"Successfully set your skin to "}` || JSON.stringify(message) === `{"text":"A player with that username doesn't exist"}`) {
      skin = true
      return
    }
    // {"extra":[{"text":"Parker2991"},{"text":"'s"}],"text":"Successfully set your skin to "}
    // {"text":"Successfully removed your skin"}
    else if (stringmessage?.startsWith("Successfully set your skin to ") || JSON.stringify(message) === `{"text":"Successfully removed your skin"}`) skin = false

    // kaboom jail selfcare
    else if (stringmessage === 'You have been released!') jail = true

    else if (stringmessage === 'Jails/Unjails a player, TPs them to the jail specified.') jail = true
  
    else if(stringmessage === `You have been jailed!`){
      jail = false
      return
    }
  
  // kaboom username selfcare
    else if (stringmessage === `Successfully set your username to "${bot.username}"`) {
      username = false
      return
    }
    else if (stringmessage?.startsWith("Successfully set your username to ")) username = true

    else if (stringmessage === `You already have the username "${bot.username}"`) username = false
    
    // kaboom nickname selfcare
    else if (JSON.stringify(message) === `{"color":"gold","text":"You no longer have a nickname."}`) {
      nickname = false
      return
    }
    
    else if (JSON.stringify(message) === `{"color":"gold","extra":[{"color":"red","extra":[{"color":"gold","text":"."}],"text":"${bot.options.username}"}],"text":"Your nickname is now "}`) nickname = true

    // kaboom god selfcare
    else if (JSON.stringify(message) === `{"color":"gold","extra":[{"color":"red","extra":[{"color":"gold","text":"."}],"text":" enabled"}],"text":"God mode"}`) {
      god = true
      return
    }

    else if (JSON.stringify(message) === '{"color":"gold","extra":[{"color":"red","extra":[{"color":"gold","text":"."}],"text":" disabled"}],"text":"God mode"}') god = false
      
      // kaboom tptoggle selfcare
      else if (JSON.stringify(message) === '{"color":"gold","extra":[{"color":"red","extra":[{"color":"gold","text":"."}],"text":"enabled"}],"text":"Teleportation "}') {
      tptoggle = false
        return
      }
      else if (JSON.stringify(message) === '{"color":"gold","extra":[{"color":"red","extra":[{"color":"gold","text":"."}],"text":"disabled"}],"text":"Teleportation "}') tptoggle = true

      // kaboom vanish selfcare
      else if (JSON.stringify(message) === `{"color":"gold","extra":[{"color":"red","text":"${bot.options.username}"},{"text":": disabled"}],"text":"Vanish for "}`) {
	vanished = false
	return
      }
        else if (JSON.stringify(message) === `{"color":"gold","text":"Vanish for ${bot.options.username}: enabled"}`) vanished = true
      }
  })
  
  // op selfcare
  bot.on('packet.entity_status', packet => {
    if (packet.entityId !== entityId || packet.entityStatus < 24 || packet.entityStatus > 28) return
    permissionLevel = packet.entityStatus - 24 
  })
 
  // gmc selfcare
  bot.on('packet.game_state_change', packet => {
    if (packet.reason !== 3) return // Reason 3 = Change Game Mode

    gameMode = packet.gameMode
  })
  let timer
  bot.on('packet.login', (packet) => {
    entityId = packet.entityId
    gameMode = packet.gameMode
    timer = setInterval(() => {
   if (bot.options.isSavage) {
     if (!register) bot.command(`register ${bot.savage.password} ${bot.savage.password}`);

     else if (!login) bot.command(`login ${bot.savage.password}`);

     else if (permissionLevel < 2 && bot.options.selfcare.op) bot.command(`op ${bot.options.username}`);

     else if (gameMode !== 1 && bot.options.selfcare.gmc) bot.command('gamemode creative @s[type=player]');

     else if (!vanished && bot.options.selfcare.vanished) bot.core.run(`/essentials:vanish ${bot.username} enable`);

     else if (!prefix && bot.options.selfcare.prefix) bot.command(`rank ${bot.options.username} &8[&bPrefix&8: &4${bot.Commands.prefixes[0]}&8]`);
   } else if (bot.options.isCreayun) {
    if (!creayunJoin) bot.command(`server creative`)
    else if (!prefix && bot.options.selfcare.prefix) bot.command(`prefix &8[&bPrefix: &4${bot.Commands.prefixes[0]}&8]`)

    else if (!nickname && bot.options.selfcare.nickname) bot.command(`nick off`)

    else if (!vanished && bot.options.selfcare.vanished) bot.command(`v on`)

    else if (!tptoggle && bot.options.selfcare.tptoggle) bot.command(`tptoggle off`)

    } else if (bot.options.isKaboom) {

    if (permissionLevel < 2 && bot.options.selfcare.op) bot.command('op @s[type=player]')

    else if (!commandSpyEnabled && bot.options.selfcare.cspy) bot.command('commandspy:commandspy on')

    else if (unmuted && bot.options.selfcare.unmuted) bot.core.run(`/essentials:mute ${bot.uuid}`)  

    else if (!prefix && bot.options.selfcare.prefix) bot.command(`prefix &8[&bPrefix: &4${bot.Commands.prefixes[0]}&8]`)

    else if (gameMode !== 1 && bot.options.selfcare.gmc) bot.command('gamemode creative @s[type=player]')

    else if (!skin && bot.options.selfcare.skin) bot.command(`skin Parker2991`)

    else if (username && bot.options.selfcare.username) bot.command(`username ${bot.username}`)

    else if (nickname && bot.options.selfcare.nickname) bot.core.run(`/nick ${bot.options.username} off`)

    else if (!god && bot.options.selfcare.god) bot.core.run(`/god ${bot.username} on`)

    else if (!tptoggle && bot.options.selfcare.tptoggle) bot.core.run(`/tptoggle ${bot.options.username} off`)

    else if (!vanished && bot.options.selfcare.vanished) bot.core.run(`/essentials:vanish ${bot.username} enable`)
//else if (!jail) bot.command(`unjail ${bot.username}`)
   }  
 }, bot.options.selfcare.interval)
})
//  bot.on('message', (message) => {
//    if (username && bot.options.selfcare.username) bot.command(`username ${bot.options.username}`);
//  })

  bot.on('end', () => {
    if (timer) clearInterval(timer)
    prefix = false
    muted = false
    commandSpyEnabled = false
    vanished = false
    skin = false
    username = false
    nickname = false
    god = false
    tptoggle = false
  })
}

module.exports = selfcare
/*const buildstring = process.env['buildstring']
  bot.on('login', async () => {
 console.log(`starting ${buildstring}`)
await bot.discord.channel.send(`Starting ${buildstring}`)         
       await sendChat('/prefix &8[&4Prefix ~ &8]')
 await sendChat(buildstring)
              await sendChat('Prefix ~')
         })
}*/
