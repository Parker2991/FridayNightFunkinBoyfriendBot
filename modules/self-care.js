const util = require('util')

const COMMANDSPY_ENABLED_MESSAGE = { text: 'Successfully enabled CommandSpy' }
const COMMANDSPY_DISABLED_MESSAGE = { text: 'Successfully disabled CommandSpy' }

function inject (bot) {
  let entityId
   let gameMode
  let permissionLevel = 2

  let commandSpyEnabled = false
  let vanished = false

  bot.on('message', message => {
    if (util.isDeepStrictEqual(message, COMMANDSPY_ENABLED_MESSAGE)) commandSpyEnabled = true
    else if (util.isDeepStrictEqual(message, COMMANDSPY_DISABLED_MESSAGE)) commandSpyEnabled = false

    if (message?.text !== '' || !Array.isArray(message.extra) || message.extra.length < 2 || !message.extra[0]?.text?.startsWith('Vanish for') || message.extra[0].color !== 'gold') return

    const suffix = message.extra[message.extra.length - 1]

    if (suffix?.color !== 'gold') return

    if (suffix.text?.endsWith(': enabled')) vanished = true
    else if (suffix.text?.endsWith(': disabled')) vanished = false
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
      if (permissionLevel < 2) bot.command('op @s[type=player]')
      else if (!commandSpyEnabled) bot.command('commandspy:commandspy on')
      else if (!vanished) bot.command('essentials:vanish enable')
    else  if (gameMode !== 1) bot.command('gamemode creative @s[type=player]')
    }, 200)
  })

  bot.on('end', () => {
    if (timer) clearInterval(timer)

    commandSpyEnabled = false
    vanished = false
  })
}

module.exports = inject
