
function inject (bot, dcclient, config) {
  let vanish = false
  let nickname = true
  let socialspy = false
  let cspy = false
  let prefix = false

  let op = false
  let gameMode = 1
  let muted = false

  bot.on('message', (data) => {
    if (data.toString() === 'You are now completely invisible to normal users, and hidden from in-game commands.') vanish = true
    if (!bot.visibility && data.toString() === `Vanish for ${bot.username}: disabled`) vanish = false

    if (data.toString() === 'You no longer have a nickname.') nickname = true
    if (data.toString().startsWith('Your nickname is now ')) nickname = false

    if (data.toString() === `SocialSpy for ${bot.username}: enabled`) socialspy = true
    if (data.toString() === `SocialSpy for ${bot.username}: disabled`) socialspy = false

    if (data.toString().startsWith('You have been muted')) muted = true
    if (data.toString() === 'You have been unmuted.') muted = false

    if (data.toString() === 'Successfully enabled CommandSpy' || data.toString() === ' Enabled your command spy.' || data.toString() === ' Your command spy is already enabled.') cspy = true
    if (data.toString() === 'Successfully disabled CommandSpy' || data.toString() === ' Disabled your command spy.') cspy = false

    if (data.toString() === 'You now have the tag: [ChomeNS Bot]' || // for 1.19.2 (or 1.19?) and older clones
        data.toString() === 'You now have the tag: &8[&eChomeNS Bot&8]'
    ) {
      prefix = true
      return
    }
    if (data.toString().startsWith('You no longer have a tag')) prefix = false
    if (data.toString().startsWith('You now have the tag: ')) prefix = false
  })

  bot._client.on('entity_status', (data) => {
    if (data.entityId !== bot.entityId) return

    switch (data.entityStatus) {
      case 24:
        op = false

        bot.emit('deop')
        break
      case 28:
        op = true

        bot.emit('op')
        break
    }

    bot.emit('entity_status', data)
  })

  bot._client.on('game_state_change', (data) => {
    if (data.reason === 4 && config.self_care.endCredits) bot.write('client_command', { payload: 0 })

    if (data.reason !== 3) return

    gameMode = data.gameMode
  })

  bot._client.on('login', (data) => {
    gameMode = data.gameMode
  })

  const interval = setInterval(() => {
    if (bot.options.kaboom) {
      if (!prefix && config.self_care.prefix) bot.chat('/extras:prefix &8[&eChomeNS Bot&8]')
      if (!op && config.self_care.op) bot.chat('/minecraft:op @s[type=player]')
      if (!cspy && config.self_care.cspy) bot.chat('/commandspy:commandspy on')
    }

    if (!vanish && config.self_care.vanish) bot.chat('/essentials:vanish enable')
    //if (!socialspy && config.self_care.socialspy) bot.chat('/essentials:socialspy enable')
    if (!nickname && config.self_care.nickname) bot.chat('/essentials:nickname off')

    if (gameMode !== 1 && config.self_care.gamemode) bot.chat('/minecraft:gamemode creative @s[type=player]')
    if (muted && config.self_care.mute) bot.chat('/essentials:mute ' + bot.uuid)
  }, config.self_care_check_interval)

  bot.on('end', () => {
    clearInterval(interval)
  })
};

module.exports = { inject }
