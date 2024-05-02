const util = require('util')

const COMMANDSPY_ENABLED_MESSAGE = { text: 'Successfully enabled CommandSpy' }
const COMMANDSPY_DISABLED_MESSAGE = { text: 'Successfully disabled CommandSpy' }
//You now have the tag: &8[&bPrefix &4d~&8]
function selfcare (bot) {
  let entityId
  let gameMode
  let permissionLevel = 2
  let unmuted = false
  let commandSpyEnabled = false
  let vanished = false
  let prefix = false
  let skin = false
  let username = false
  let nickname = false
  let god = false
  let tptoggle = false
  let jail = false
  let creayunJoin = false
/* if (data.toString().startsWith('You have been muted')) muted = true
    if (data.toString() === 'You have been unmuted.') muted = false
*/
/* tptoggle creayun
Teleportation enabled.
Teleportation disabled.
*/
/* creayun vanish
You are now completely invisible to normal users, and hidden from in-game commands.
You are once again visible.
You do not have access to that command.
*/
//Welcome to survivayun!  Welcome to ayunami2000's boxes server!
  //bot.on('message', (data) => {
  bot.on('message', (message, data) => {
    // Successfully removed your skin
    stringmessage = bot.getMessageAsPrismarine(message)?.toString()
    if (bot.options.isCreayun) {

    if (stringmessage === 'Welcome to creayun!' || stringmessage === 'Already connecting to this server!') {
    creayunJoin = true
    return
    }

    else if (stringmessage.startsWith('Welcome ') || stringmessage === "Welcome to ayunami's boxes server") creayunJoin = false

    else if (stringmessage.startsWith('Welcome ') || stringmessage === 'Welcome to survivayun!') creayunJoin = false

    if (stringmessage === `Your prefix has been set to: [Prefix: ~]` || stringmessage === 'Something went wrong while saving the prefix. Please check console.' || stringmessage === 'Unknown command. Type /help for help' || stringmessage === '[SuffEx] Your prefix has been set to: [Prefix: ~]' || stringmessage === 'Unknown command. Type /help for help.') {
      prefix = true
      return
    } 
    
    else if (stringmessage.startsWith("Your prefix has been set to: ") || stringmessage.startsWith('[SuffEx] Your prefix has been set to: ') || stringmessage === '[SuffEx] Your prefix has been reset' || stringmessage === "Your prefix has been reset.") prefix = false

    else if (stringmessage === 'You no longer have a nickname.' || stringmessage === '[SuffEx] Your nick has been reset!') {
      nickname = true
      return
    }

    else if (stringmessage.startsWith("Your nick has been set to: ") || stringmessage.startsWith("[SuffEx] Your nick has been set to: ")) nickname = false  
   
    else if (stringmessage === "You are now completely invisible to normal users, and hidden from in-game commands." || stringmessage === "You do not have access to that command." || stringmessage === "Unknown command. Type /help for help.") {
       vanished = true
       return
    }

    else if (stringmessage === "You are once again visible.") vanished = false

    else if (stringmessage === "Teleportation enabled.") {
      tptoggle = false
      return
    }

    else if (stringmessage === "Teleportation disabled.") tptoggle = true

    } if (bot.options.isKaboom) { //Your prefix has been reset.

    if (stringmessage.startsWith('You have been muted')) unmuted = true

    else if (stringmessage.startsWith('You have been unmuted')) unmuted = false

    else if (util.isDeepStrictEqual(message, COMMANDSPY_ENABLED_MESSAGE)) commandSpyEnabled = true

    else if (util.isDeepStrictEqual(message, COMMANDSPY_DISABLED_MESSAGE)) commandSpyEnabled = false

    else if (stringmessage === `You now have the tag: &8[&bPrefix: &4${bot.Commands.prefixes[0]}&8]` || stringmessage === 'Something went wrong while saving the prefix. Please check console.') {
      prefix = true
      return
    }

    else if (stringmessage.startsWith("You now have the tag: ") || stringmessage === "You no longer have a tag") prefix = false
      
    else if (stringmessage === `Successfully set your skin to Parker2991's` || stringmessage === "A player with that username doesn't exist") {
      skin = true
      return
    }

    else if (stringmessage.startsWith("Successfully set your skin to ") || stringmessage === "Successfully removed your skin") skin = false

    else if (stringmessage === 'You have been released!') jail = true

    else if (stringmessage === 'Jails/Unjails a player, TPs them to the jail specified.') jail = true
  
    else if(stringmessage === `You have been jailed!`){
      jail = false
      return
    }

    else if (stringmessage === `Successfully set your username to "${bot.username}"`) {
      username = true
      return
    }

    else if (stringmessage.startsWith("Successfully set your username to ")) username = false

    else if (stringmessage === `You already have the username "${bot.username}"`) username = true

    else if (stringmessage === `You no longer have a nickname.`) {
      nickname = true
      return
    }

    else if (stringmessage.startsWith("Your nickname is now ")) nickname = false

    else if (stringmessage === `You no longer have a nickname.`) nickname = false

    else if (stringmessage === `God mode enabled.`) {
      god = true
      return
    }

    else if (stringmessage === 'God mode disabled.') god = false
      else if (stringmessage === `Teleportation enabled.`) {
      tptoggle = false
        return
      }
      else if (stringmessage === 'Teleportation disabled.') tptoggle = true

      else if(stringmessage === `Vanish for ${bot.options.username}: disabled`) {
	vanished = false
	return
      }
      else if (stringmessage === `Vanish for ${bot.options.username}: enabled`) vanished = true
      }
  })

  bot.on('packet.entity_status', packet => {
    if (packet.entityId !== entityId || packet.entityStatus < 24 || packet.entityStatus > 28) return
    permissionLevel = packet.entityStatus - 24 
  })

  bot.on('packet.game_state_change', packet => {
    if (packet.reason !== 3) return // Reason 3 = Change Game Mode

    gameMode = packet.gameMode
  })
 
  let timer
  bot.on('packet.login', (packet) => {
    entityId = packet.entityId
    gameMode = packet.gameMode
    
    timer = setInterval(() => {
   if (bot.options.isCreayun) {
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

    else if (!username && bot.options.selfcare.username) bot.command(`username ${bot.username}`)

    else if (!nickname && bot.options.selfcare.nickname) bot.core.run(`/nick ${bot.options.username} off`)

    else if (!god && bot.options.selfcare.god) bot.core.run(`/god ${bot.username} on`)

    else if (!tptoggle && bot.options.selfcare.tptoggle) bot.core.run(`/tptoggle ${bot.options.username} off`)

    else if (!vanished && bot.options.selfcare.vanished) bot.core.run(`/essentials:vanish ${bot.username} enable`)
//else if (!jail) bot.command(`unjail ${bot.username}`)
   }  
 }, bot.options.selfcare.interval)
})

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
