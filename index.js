
const createBot = require('./bot.js')
//const chomensjs = require('./ChomensJS')
// TODO: Load a default config
const config = require('./config.json')
const readline = require('readline')
var buildstring = 'FNFBoyfriendBotX V4.0.8A Build:97'
  var foundationbuildstring = 'Ultimate Foundation V1.0.1 Build:31'
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
//https://beta.character.ai/chat?char=-LojS2FMmI6dLLG4cPzCm1xIIpgwVktHwjHRIImfXSE
