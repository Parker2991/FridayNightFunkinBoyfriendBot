
const util = require('util')
const mc = require('minecraft-protocol')
const { loadPlugins } = require('../util/loadPlugins')
const minecraftVersionToNumber = require('../util/minecraftVersionToNumber')

function inject (bot, dcclient, config) {
  if (!config.proxy.enabled) return

  let index
  config.servers.forEach((server, _index) => {
    if (bot.server.host !== server.host) return
    index = _index
  })

  bot.proxy = {}

  const version = config.proxy.version
  const srv = mc.createServer({
    'online-mode': false,
    port: 25566 + index,
    keepAlive: false,
    version
  })

  srv.on('login', (client) => {
    bot.console.info(`[Proxy] ${client.username} connected to proxy`)
    let clientEnded = false
    // eslint-disable-next-line no-unused-vars
    let targetEnded = false

    const target = mc.createClient({
      username: client.username,
      host: bot.server.host,
      port: bot.server.port,
      version
    })

    const clientPacketBlacklist = []
    const targetPacketBlacklist = []

    // should this be here or in the chat plugin?
    target.sendMessage = function (message) {
      if (message.startsWith('/') && minecraftVersionToNumber(target.version) >= 1.19) {
        // totallynotskidded™️ from mineflayer
        const command = message.slice(1)
        const timestamp = BigInt(Date.now())
        target.write('chat_command', {
          command,
          timestamp,
          salt: 0n,
          argumentSignatures: [],
          signedPreview: false,
          messageCount: 0,
          acknowledged: Buffer.alloc(3),
          // 1.19.2 Chat Command packet also includes an array of last seen messages
          previousMessages: []
        })
      } else {
        target.chat(message)
      }
    }

    target.on('login', (packet) => {
      bot.console.info(`[Proxy] ${client.username} target logged in`)
      target.entityId = packet.entityId
      loadPlugins(bot, null, config, null, target, client, true, clientPacketBlacklist, targetPacketBlacklist)
    })

    target.on('packet', (data, meta) => {
      if (!clientEnded &&
            meta.state === mc.states.PLAY &&
            client.state === mc.states.PLAY &&
            !targetPacketBlacklist.includes(meta.name)
      ) client.write(meta.name, data)
    })

    target.on('error', () => {})

    target.on('end', targetEndListener)
    target.on('kick_disconnect', ({ reason }) => targetEndListener(JSON.parse(reason)))
    target.on('disconnect', ({ reason }) => targetEndListener(JSON.parse(reason)))

    function targetEndListener (reason) {
      target.end()
      client.end(`Target disconnected with reason: ${util.inspect(reason)}`)
      targetEnded = true
    }

    client.on('end', () => {
      clientEnded = true
      target.end()
      target.removeAllListeners()
      client.removeAllListeners()
      bot.console.info(`[Proxy] ${client.username} ended`)
    })

    client.on('error', () => {
      clientEnded = true
      target.removeAllListeners()
      client.removeAllListeners()
      bot.console.info(`[Proxy] ${client.username} got error`)
    })

    client.on('packet', (data, meta) => {
      if (clientPacketBlacklist.includes(meta.name)) return
      target.write(meta.name, data)
    })

    bot.proxy[client.username] = {
      target,
      client
    }

    function botEndListener (reason) {
      delete bot.proxy[client.username]
      client.end(`Bot disconnected with reason: ${util.inspect(reason)}`)
      bot.off('end', botEndListener)
    }
    bot.on('end', botEndListener)
  })

  bot.on('end', () => {
    srv.close()
    srv.removeAllListeners()
  })
};

module.exports = { inject }
