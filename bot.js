const mc = require('minecraft-protocol')
const { EventEmitter } = require('events')
const fs = require('fs')
const path = require('path')

function createBot(options = {}) {
  const bot = new EventEmitter()

  // Set some default values in options
  options.host ??= 'localhost'
  options.username ??= 'Player'
  options.hideErrors ??= true // HACK: Hide errors by default as a lazy fix to console being spammed with them

  bot.options = options

  // Create our client object, put it on the bot, and register some events
  bot.on('init_client', client => {
    client.on('packet', (data, meta) => {
      bot.emit('packet', data, meta)
      bot.emit('packet.' + meta.name, data)
    })

    client.on('login', () => {
      bot.uuid = client.uuid
      bot.username = client.username
    })

    client.on('end', reason => bot.emit('end', reason))

    client.on('error', error => bot.emit('error', error))
  })

  const client = options.client ?? mc.createClient(options)
  bot._client = client
  bot.emit('init_client', client)

  bot.bots = options.bots ?? [bot]

  // Modules
  bot.loadModule = module => module(bot, options)

  for (const filename of fs.readdirSync(path.join(__dirname, 'modules'))) {
    try {
      const module = require(path.join(__dirname, 'modules', filename))
      bot.loadModule(module)
    } catch (error) {
      console.error('Failed to load module', filename, ':', error)
    }
  }

  return bot
}

module.exports = createBot