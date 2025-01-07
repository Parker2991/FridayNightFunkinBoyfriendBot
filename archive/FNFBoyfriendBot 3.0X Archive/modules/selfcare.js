function inject (bot) {
  let permissionLevel = 4
  let gamemode = 1

  bot._client.on('entity_status', packet => {
    if (packet.entityId !== bot.entity.id || packet.entityStatus < 24 || packet.entityStatus > 28) return
    permissionLevel = packet.entityStatus - 24
  })

  bot._client.on('login', packet => {
    gamemode = packet.gameMode
  })

  bot._client.on('game_state_change', packet => {
    if (packet.reason === 3) gamemode = packet.gameMode
  })

  let timer

  bot.on('login', () => {
    timer = setInterval(() => {
      if (permissionLevel < 2) bot.chat('/op @s[type=player]')
      else if (gamemode !== 1) bot.chat('/gamemode creative')
    }, 200)
  })

  bot.on('end', () => {
    if (timer) clearInterval(timer)
  })
}

module.exports = inject
