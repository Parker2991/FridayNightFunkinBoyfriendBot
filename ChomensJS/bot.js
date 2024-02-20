const mc = require('minecraft-protocol')
const { EventEmitter } = require('events')
const { loadPlugins } = require('./util/loadPlugins')
const util = require('node:util')
const randomstring = require('randomstring')

/**
 * makes the bot
 * @param {object} server the server object used in the config
 * @param {object} config the config file
 * @param {Function} getBots get bots function in index.js
 * @param {Function} setNewBot ig real
 * @param {Class} dcclient discord client
 * @param {object} rl readline.
 * @return {object} the bot object
 */
async function createBot (server, config, getBots, setNewBot, dcclient, rl) {
  const bot = new EventEmitter()
  bot.options = {
    username: server.username ?? randomstring.generate(8),
    host: server.host ?? 'localhost',
    port: server.port ?? 25565,
    version: config.version,
    kaboom: server.kaboom ?? true,
    logging: server.logging ?? true,
    useChat: server.useChat ?? false,
    checkTimeoutInterval: config.timeoutInterval,
    hideErrors: true
  }

  // among us fix for bot.options.host and bot.options.port
  bot.server = {
    host: server.host,
    port: server.port
  }

  bot.visibility = false
  bot.getBots = getBots

  bot.end = (reason = 'end', event) => {
    bot.emit('end', reason, event)
    bot.removeAllListeners()
    bot._client.end()
    bot._client.removeAllListeners()
  }

  bot._client = mc.createClient(bot.options)

  bot.setMaxListeners(Infinity)
  bot._client.setMaxListeners(Infinity)

  bot.version = bot._client.version
  bot.write = (name, data) => bot._client.write(name, data)

  setNewBot(bot.server.host, bot)

  const channel = dcclient.channels.cache.get(config.discord.servers[`${bot.server.host}:${bot.server.port}`])

  channel.send(
    `Connecting to: \`${bot.server.host}:${bot.server.port}\``
  )

  bot._client.on('login', (data) => bot.emit('login', data))

  bot.on('login', async function (data) {
    bot.entityId = data.entityId
    bot.uuid = bot._client.uuid
    bot.username = bot._client.username

    channel.send(
      `Successfully logged in to: \`${bot.server.host}:${bot.server.port}\``
    )
  })

  await loadPlugins(bot, dcclient, config, rl)

  bot._client.on('end', (reason) => {
    bot.end(reason, 'end')
  })

  bot.on('end', (reason, event) => {
    bot.console.info(
        `Disconnected from ${bot.server.host} (${event} event): ${util.inspect(reason)}`
    )
    channel.send(`Disconnected: \`${util.inspect(reason)}\``)

    let timeout = config.reconnectTimeout

    try {
      if (reason.text) {
        if (reason.text ===
          'Wait 5 seconds before connecting, thanks! :)' ||
          reason.text ===
          'You are logging in too fast, try again later.'
        ) timeout = 1000 * 7
      }
    } catch (e) {
      bot.console.error(e)
    }

    setTimeout(() => {
      bot.end()
      createBot(server, config, getBots, setNewBot, dcclient, rl)
    }, timeout)
  })

  bot._client.on('keep_alive', ({ keepAliveId }) => {
    bot.write('keep_alive', { keepAliveId })
  })

  bot._client.on('kick_disconnect', (data) => {
    const parsed = JSON.parse(data.reason)
    bot.end(parsed, 'kick_disconnect')
  })

  bot._client.on('disconnect', (data) => {
    const parsed = JSON.parse(data.reason)
    bot.end(parsed, 'disconnect')
  })

  bot._client.on('error', (data) => {
    bot.end(data, 'error')
  })

  return bot
};

module.exports = { createBot }
