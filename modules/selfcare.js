
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
/* if (data.toString().startsWith('You have been muted')) muted = true
    if (data.toString() === 'You have been unmuted.') muted = false
*/
  //bot.on('message', (data) => {
  bot.on('message', (message, data) => {
    // Successfully removed your skin
    const stringmessage = bot.getMessageAsPrismarine(message)?.toString()
    if (stringmessage.startsWith('You have been muted')) unmuted = true
    else if (stringmessage === "You have been unmuted.") unmuted = false
    else if (util.isDeepStrictEqual(message, COMMANDSPY_ENABLED_MESSAGE)) commandSpyEnabled = true
    else if (util.isDeepStrictEqual(message, COMMANDSPY_DISABLED_MESSAGE)) commandSpyEnabled = false
    else if (stringmessage === `You now have the tag: &8[&bPrefix &4${bot.options.commands.prefixes[0]}&8]`) {
      prefix = true
      return
    }
    else if (stringmessage.startsWith("You now have the tag: ") || stringmessage === "You no longer have a tag") prefix = false
      
 else if (stringmessage === `Successfully set your skin to ${bot.options.selfcare.skin.player}'s`) {
      skin = true
      return
    }
//Successfully set your skin to Parker2991's
   //Successfully removed your skin
else if (stringmessage === 'You have been released!') jail = true
else if (stringmessage === 'Jails/Unjails a player, TPs them to the jail specified.') jail = true
else if(stringmessage === `You have been jailed!`){
jail = false
return
}
     else if (stringmessage.startsWith("Successfully set your skin to ") || stringmessage === "Successfully removed your skin") skin = false
   
     else if (stringmessage === `Successfully set your username to "${bot.username}"`) {
      username = true
      return
    }//"Successfully set your username to "${bot.username}"""
    else if (stringmessage.startsWith("Successfully set your username to ")) username = false
    else if (stringmessage === `You already have the username "${bot.username}"`) username = true
//That name is already in use. 
    //Error: Nicknames must be alphanumeric. 
    //You no longer have a nickname. 
    //Your nickname is now sus.
     else if (stringmessage === `You no longer have a nickname.`) {
    nickname = true
      return
    }//"Successfully set your username to "${bot.username}"""
    else if (stringmessage.startsWith("Your nickname is now ")) nickname = false
   // else if (stringmessage === `Error: Nicknames must be alphanumeric.`) nickname = false
    else if (stringmessage === `You no longer have a nickname.`) nickname = false
    //else if (stringmessage === `That name is already in use.`) nickname = false
//God mode enabled. 
    //God mode disabled.
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

    /*
else if (message?.text !== '' || !Array.isArray(message.extra) || message.extra.length < 2 || !message.extra[0]?.text?.startsWith('Vanish for') || message.extra[0].color !== 'gold') return

    const suffix = message.extra[message.extra.length - 1]

    if (suffix?.color !== 'gold') return
//data.toString().startsWith
    if (suffix.text?.endsWith(': enabled')) vanished = true
    else if (suffix.text?.endsWith(': disabled')) vanished = false // Bruh what is this ohio code
//

  */
  })

  bot.on('packet.entity_status', packet => {
    if (packet.entityId !== entityId || packet.entityStatus < 24 || packet.entityStatus > 28) return
    permissionLevel = packet.entityStatus - 24 
  })//
  //TO-DO create a array for nick, prefix, and mabe username in selfcare so that when it joins or has the nick/prefix changed it will change it back to the set nick and prefix in selfcare 
 
  bot.on('packet.game_state_change', packet => {
    if (packet.reason !== 3) return // Reason 3 = Change Game Mode

    gameMode = packet.gameMode
  })
 
  let timer
  bot.on('packet.login', (packet) => {
    entityId = packet.entityId
    gameMode = packet.gameMode
    
    timer = setInterval(() => {
      if (permissionLevel < 2 && bot.options.selfcare.op) bot.command('op @s[type=player]')
     
     if (!commandSpyEnabled && bot.options.selfcare.cspy) bot.command('commandspy:commandspy on')
   
   else if (unmuted && bot.options.selfcare.unmuted) bot.core.run(`essentials:mute ${bot.uuid}`)
     else if (!prefix && bot.options.selfcare.prefix) bot.command(`prefix &8[&bPrefix &4${bot.options.commands.prefixes[0]}&8]`)
    else if (gameMode !== 1 && bot.options.selfcare.gmc) bot.command('gamemode creative @s[type=player]')
    else if (!skin && bot.options.selfcare.skin.enabled) bot.command(`skin ${bot.options.selfcare.skin.player}`)
      else if (!username && bot.options.selfcare.username) bot.command(`username ${bot.username}`)
      else if (!nickname && bot.options.selfcare.nickname) bot.command(`nick off`)
      else if (!god && bot.options.selfcare.god) bot.command('god on')
      else if (!tptoggle && bot.options.selfcare.tptoggle) bot.command('tptoggle off')
             else if (!vanished && bot.options.selfcare.vanished) bot.core.run(`essentials:vanish ${bot.username} enable`)
else if (!jail) bot.command(`unjail ${bot.username}`)  
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
