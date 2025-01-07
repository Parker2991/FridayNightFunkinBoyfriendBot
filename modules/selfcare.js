
const util = require('util')

const COMMANDSPY_ENABLED_MESSAGE = { text: 'Successfully enabled CommandSpy' }
const COMMANDSPY_DISABLED_MESSAGE = { text: 'Successfully disabled CommandSpy' }
const PREFIX_OFF_MESSAGE = { text: 'You no longer have a tag' }
const PREFIX_CHANGE_MESSAGE = 'You now have the tag: &8&l[&b&lPrefix &4&l~&8&l]'
const MUTE_MESSAGE = { text: 'You have been muted!', color: 'gold'}

function inject (bot) {
  let entityId
   let gameMode
  let permissionLevel = 2

  let commandSpyEnabled = false
  let vanished = false
  let prefix = false
  bot.on('message', message => {
    if (util.isDeepStrictEqual(message, COMMANDSPY_ENABLED_MESSAGE)) commandSpyEnabled = true
    else if (util.isDeepStrictEqual(message, COMMANDSPY_DISABLED_MESSAGE)) commandSpyEnabled = false

    if (message?.text !== '' || !Array.isArray(message.extra) || message.extra.length < 2 || !message.extra[0]?.text?.startsWith('Vanish for') || message.extra[0].color !== 'gold') return

    const suffix = message.extra[message.extra.length - 1]

    if (suffix?.color !== 'gold') return

    if (suffix.text?.endsWith(': enabled')) vanished = true
    else if (suffix.text?.endsWith(': disabled')) vanished = false // Bruh what is this ohio code

    const stringText = bot.getMessageAsPrismarine(message)?.toString()

    if (stringText === PREFIX_CHANGE_MESSAGE) prefix = true
    else if (message === PREFIX_OFF_MESSAGE) prefix = false
  })

  bot.on('packet.entity_status', packet => {
    if (packet.entityId !== entityId || packet.entityStatus < 24 || packet.entityStatus > 28) return
    permissionLevel = packet.entityStatus - 24 
  })//my mouth hurts after chewing on a lid ;-;
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
   // else if (!prefix) bot.command('prefix &8&l[&b&lPrefix &4&l~&8&l]')
    else if (gameMode !== 1) bot.command('gamemode creative @s[type=player]')
    }, 500)
  })

  bot.on('end', () => {
    if (timer) clearInterval(timer)

    commandSpyEnabled = false
    vanished = false
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