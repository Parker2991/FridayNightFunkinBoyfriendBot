function death (bot, options, config) {
  bot.isAlive = true

  bot._client.on('respawn', (packet) => {
    bot.isAlive = false
    bot.emit('respawn')
  })
  const respawn = () => {
    if (bot.isAlive) return
    bot._client.write('client_command', bot.supportFeature('respawnIsPayload') ? { payload: 0 } : { actionId: 0 })
  }
  bot.respawn = respawn
}
module.exports = death;
