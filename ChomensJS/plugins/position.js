
function inject (bot) {
  bot.position = { x: 0, y: 0, z: 0 }
  bot._client.on('position', (position) => {
    bot.position = position
    bot.write('teleport_confirm', { teleportId: position.teleportId })
    bot.emit('position', position)
  })
}

module.exports = { inject }
