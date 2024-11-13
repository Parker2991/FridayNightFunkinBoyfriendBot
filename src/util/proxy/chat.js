module.exports = (bot, options, config, discordClient, proxyClient) => {
  proxyClient.on('packet.player_chat', (packet) => {
    proxyClient.emit('playerChat', packet.unsignedChatContent)
  })
}
