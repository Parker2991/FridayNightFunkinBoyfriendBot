const mc = require('minecraft-protocol')
const { EventEmitter } = require('events')
const fs = require('fs')
const path = require('path')


function createBot(options = {}) {
  const bot = new EventEmitter()
const rs = require('randomstring')
  // Set some default values in options
 let r = Math.floor(Math.random() * 255) + 1;
  options.host ??= 'localhost'
  options.username ??= 'Player' + Math.floor(Math.random() * 1000)
  options.hideErrors ??= false // HACK: Hide errors by default as a lazy fix to console being spammed with them
  
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
    bot.latency = client.latency
    })

    client.on('end', reason => bot.emit('end', reason))
   
    client.on('error', error => bot.emit('error', error))
 
  })
  
const buildstring = process.env['buildstring']

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
  
      console.error('\x1b[0m\x1b[91m[ERROR]: \x1b[0m\x1b[90mFailed to load module', filename, ':', error)
      
    }
  }

  return bot
}

// ABot username function mabe mabe

module.exports = createBot
