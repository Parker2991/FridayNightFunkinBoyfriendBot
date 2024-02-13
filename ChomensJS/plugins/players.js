const { EventEmitter } = require('events')

class PlayerList {
  list = []

  addPlayer (player) {
    this.removePlayer(player)

    this.list.push(player)
  }

  hasPlayer (player) {
    return this.getPlayer(player) !== undefined
  }

  getPlayer (player) {
    let identifier

    switch (typeof player) {
      case 'object':
        identifier = player.UUID
        break
      case 'string':
        identifier = player
        break
      default:
        throw new Error(`Get player called with ${player}`)
    }

    return this.list.find((player) => [player.UUID, player.name].some((item) => item === identifier))
  }

  getPlayers () {
    return Array.from(this.list)
  }

  removePlayer (player) {
    this.list = this.list.filter(({ UUID }) => UUID !== player.UUID)
  }
}

function inject (bot, dcclient, config) {
  bot.players = new PlayerList()

  const tabCompletePlayerList = {
    list: [],
    interval: setInterval(async () => {
      bot.write('tab_complete', {
        text: '/scoreboard players add '
      })

      const [packet] = await EventEmitter.once(bot._client, 'tab_complete')

      return packet.matches
        .filter((match) => !match.tooltip)
        .map(({ match }) => match)
    }, 1000 * 3)
  }//???

  bot._client.on('player_info', async (packet) => {
    for (const player of packet.data) {
      switch (packet.action) {
        case 0:
          addPlayer(player, packet)
          break
        case 1:
          updateGamemode(player, packet)
          break
        case 2:
          updatePing(player, packet)
          break
        case 3:
          updateDisplayName(player, packet)
          break
        case 4:
          removePlayer(player, packet)
          break
      }
    }
  })

  function addPlayer (player, packet) {
    if (bot.players.getPlayer(player)) bot.emit('player_unvanished', player, packet)
    else bot.emit('player_added', player, packet)

    bot.players.addPlayer(player)
  }

  function updateGamemode (player, packet) {
    const fullPlayer = bot.players.getPlayer(player)

    bot.emit('onPlayerGamemodeUpdate', player, packet)

    if (fullPlayer === undefined) return

    fullPlayer.gamemode = player.gamemode
  }

  function updatePing (player, packet) {
    const fullPlayer = bot.players.getPlayer(player)

    bot.emit('player_ping_updated', player, packet)

    if (fullPlayer === undefined) return

    fullPlayer.ping = player.ping
  }

  function updateDisplayName (player, packet) {
    const fullPlayer = bot.players.getPlayer(player)

    bot.emit('player_display_name_updated', player, packet)

    if (fullPlayer === undefined) return

    fullPlayer.displayName = player.displayName
  }

  function removePlayer (player, packet) {
    const fullPlayer = bot.players.getPlayer(player)
    const players = tabCompletePlayerList.list

    if (fullPlayer && players.some((name) => name === fullPlayer.name)) {
      bot.emit('player_vanished', player)
    } else {
      bot.emit('player_removed', player, packet)
      bot.players.removePlayer(player)
    }
  }

  bot.on('end', () => {
    clearInterval(tabCompletePlayerList.interval)
  })
}

module.exports = { inject }
