
const createBot = require('./bot.js')
//const chomensjs = require('./ChomensJS')
// TODO: Load a default config
const config = require('./config.js')
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
             bot.options.username
 bot.console.useReadlineInterface(rl)
     
  bot.on('error', console.error)
  
}



