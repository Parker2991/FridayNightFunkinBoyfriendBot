
function inject (bot, client, target, config) {
  let cspy = false
  let op = true
  // let gameMode = 1

  target.on('message', (data) => {
    if (data.toString() === 'Successfully enabled CommandSpy' || data.toString() === ' Enabled your command spy.' || data.toString() === ' Your command spy is already enabled.') cspy = true
    if (data.toString() === 'Successfully disabled CommandSpy' || data.toString() === ' Disabled your command spy.') cspy = false
  })

  target.on('entity_status', (data) => {
    if (data.entityId !== target.entityId) return

    switch (data.entityStatus) {
      case 24:
        op = false
        break
      case 28:
        op = true
        break
    }
  })

  // target.on('game_state_change', (data) => {
  // if (data.reason !== 3) return
  //
  // gameMode = data.gameMode
  // })
  //
  // target.on('login', (data) => {
  // gameMode = data.gameMode
  // })

  const interval = setInterval(() => {
    if (bot.options.kaboom) {
      if (!op && config.self_care.op) target.sendMessage('/minecraft:op @s[type=player]')
      if (!cspy && config.self_care.cspy) target.sendMessage('/commandspy:commandspy on')
    }
    // if (gameMode !== 1 && config.self_care.gamemode) target.sendMessage('/minecraft:gamemode creative @s[type=player]')
  }, config.self_care_check_interval)

  bot.on('end', () => {
    clearInterval(interval)
  })
};

module.exports = { inject }
