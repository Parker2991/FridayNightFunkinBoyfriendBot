const createBot = require('./bot.js')
const CreayunBot = require('./CreayunBot')
//const FoliaboomBot = require('./FoliaboomBot')
// TODO: Load a default config
const config = require('./config.json')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
require('dotenv').config()
const bots = []
for (const options of config.bots) {
  const bot = createBot(options)
  bots.push(bot)
  bot.bots = bots
  bot.console.useReadlineInterface(rl)

  bot.on('error', console.error)
}
