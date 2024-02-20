
const util = require('util')

const COMMANDSPY_ENABLED_MESSAGE = { text: 'Successfully enabled CommandSpy' }
const COMMANDSPY_DISABLED_MESSAGE = { text: 'Successfully disabled CommandSpy' }
//You now have the tag: &8[&bPrefix &4d~&8]
function inject (bot) {
  let entityId
   let gameMode
  let permissionLevel = 2
let muted = false
  let commandSpyEnabled = false
  let vanished = false
  let prefix = false
  let skin = false
/* if (data.toString().startsWith('You have been muted')) muted = true
    if (data.toString() === 'You have been unmuted.') muted = false
*/
  //bot.on('message', (data) => {
  bot.on('message', (message, data) => {
    // Successfully removed your skin
    const stringmessage = bot.getMessageAsPrismarine(message)?.toString()
    if (stringmessage.startsWith('You have been muted')) muted = true
    else if (stringmessage === "You have been unmuted.") muted = false
    else if (util.isDeepStrictEqual(message, COMMANDSPY_ENABLED_MESSAGE)) commandSpyEnabled = true
    else if (util.isDeepStrictEqual(message, COMMANDSPY_DISABLED_MESSAGE)) commandSpyEnabled = false
    else if (stringmessage === `You now have the tag: &8[&bPrefix &4${bot.options.commands.prefix}&8]`) {
      prefix = true
      return
    }
    else if (stringmessage.startsWith("You now have the tag: ") || stringmessage === "You no longer have a tag") prefix = false
 else if (stringmessage === `Successfully set your skin to Parker2991's`) {
      skin = true
      return
    }
 else if (stringmessage.startsWith("Successfully removed your skin") || stringmessage === "Successfully removed your skin") skin = false
    if (message?.text !== '' || !Array.isArray(message.extra) || message.extra.length < 2 || !message.extra[0]?.text?.startsWith('Vanish for') || message.extra[0].color !== 'gold') return

    const suffix = message.extra[message.extra.length - 1]

    if (suffix?.color !== 'gold') return
//data.toString().startsWith
    if (suffix.text?.endsWith(': enabled')) vanished = true
    else if (suffix.text?.endsWith(': disabled')) vanished = false // Bruh what is this ohio code
//

  
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
      if (permissionLevel < 2) bot.command('op @s[type=player]')
      else if (!commandSpyEnabled) bot.command('commandspy:commandspy on')
      else if (!vanished) bot.command('essentials:vanish enable')
   else if (muted) bot.command(`essentials:mute ${bot.uuid}`)
     else if (!prefix) bot.command(`prefix &8[&bPrefix &4${bot.options.commands.prefix}&8]`)
    else if (gameMode !== 1) bot.command('gamemode creative @s[type=player]')
    else if (!skin) bot.command('skin Parker2991')
    }, 500)
  })

  bot.on('end', () => {
    if (timer) clearInterval(timer)
    prefix = false
    muted = false
    commandSpyEnabled = false
    vanished = false
    skin = false
  })
}

module.exports = inject
/*const buildstring = process.env['buildstring']
  bot.on('login', async () => {
 console.log(`starting ${buildstring}`)
await bot.discord.channel.send(`Starting ${buildstring}`)         
       await sendChat('/prefix &8[&4Prefix ~ &8]')
 await sendChat(buildstring)
              await sendChat('Prefix ~')
         })
}*/