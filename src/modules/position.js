function inject (context) {
  const bot = context.bot;
  const config = context.config;
  bot.position = null;

  bot.on('packet.position', packet => {
    bot.position = {
      x: packet.flags & 1 ? (this.x + packet.x) : packet.x,
      y: packet.flags & 2 ? (this.y + packet.y) : packet.y,
      z: packet.flags & 4 ? (this.z + packet.z) : packet.z
    };

    bot._client.write('teleport_confirm', { teleportId: packet.teleportId })

    bot.emit('move')
  })

  bot.on('move', () => {
    if (config?.debug?.position?.bot === true) {
      bot.console.debug(`Bot Position: ${JSON.stringify(bot.position)}`)
    } if (config?.debug?.position?.core === true) {
      bot.console.debug(`Core Position: ${JSON.stringify(bot.core.position)}`)
    } if (config?.debug?.position?.coreItem === true) {
      bot.console.debug(`Core Item Position: ${JSON.stringify(bot.core.itemPosition)}`)
    }
  });

  bot.on('end', () => { bot.position = null })
}

module.exports = {
  data: {
    enabled: true,
    name: "position",
    type: "client"
  },
  inject
};
