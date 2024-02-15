function inject (bot) {
  bot.players = []
//chayapak you mentally ok?
  bot.on('packet.player_info', packet => {
    const actions = []

    if (packet.action & 0b000001) actions.push(addPlayer)
    if (packet.action & 0b000010) actions.push(initializeChat)
    if (packet.action & 0b000100) actions.push(updateGamemode)
    if (packet.action & 0b001000) actions.push(updateListed)
    if (packet.action & 0b010000) actions.push(updateLatency)
    if (packet.action & 0b100000) actions.push(updateDisplayName)

    for (const entry of packet.data) {
      for (const action of actions) {
        action(entry)
      }
    }
  })

  bot.on('packet.player_remove', ({ players }) => {
    for (const player of players) {
      bot.players = bot.players.filter(entry => entry.uuid !== player)
    
    }
  })
  
  function removePlayer (player, packet) {
    const fullPlayer = bot.players.getPlayer(player)
    //const players = tabCompletePlayerList.list

    if (fullPlayer && players.some((name) => name === fullPlayer.name)) {
      bot.emit('player_vanished', player)
    } else {
          bot.on('packet.player_remove', ({ players }) => {
            for (const player of players) {
              bot.players = bot.players.filter(entry => entry.uuid !== player)

            }
          
          bot.players = bot.players.filter(entry => entry.uuid !== player)
        })
     
      bot.players.removePlayer(player)
       if (!target) return
      target.removePlayer = entry.removePlayer
    }
  }
        if (process.env["FoundationBuildString"] !== 'Ultimate Foundation v2.0.6 Build:270')
{
        process.exit(1)
}
  function addPlayer (entry) {
    bot.players = bot.players.filter(_entry => _entry.uuid !== entry.uuid)
    bot.players.push({
      uuid: entry.uuid,
      profile: { name: entry.player.name, properties: entry.player.properties },
removePlayer:undefined,
      chatSession: undefined,
      gamemode: undefined,
      listed: undefined,
      latency: undefined,
      displayName: undefined
    })
  }

  function initializeChat (entry) {
    // TODO: Handle chat sessions
  }

  function updateGamemode (entry) {
    const target = bot.players.find(_entry => _entry.uuid === entry.uuid)
    if (!target) return

    target.gamemode = entry.gamemode
  }

  function updateListed (entry) {
    const target = bot.players.find(_entry => _entry.uuid === entry.uuid)
    if (!target) return

    target.listed = entry.listed
  }

  function updateLatency (entry) {
    const target = bot.players.find(_entry => _entry.uuid === entry.uuid)
    if (!target) return

    target.latency = entry.latency
  }

  function updateDisplayName (entry) {
    const target = bot.players.find(_entry => _entry.uuid === entry.uuid)
    if (!target) return

    try {
      target.displayName = JSON.parse(entry.displayName)
    } catch {
      // do nothing
    }
  }

  bot.on('end', () => (bot.players = []))
}

module.exports = inject
/*function addPlayer (player, packet) {
    if (bot.players.getPlayer(player)) bot.emit('player_unvanished', player, packet)
    else bot.emit('player_added', player, packet)

    bot.players.addPlayer(player)
  }
  */