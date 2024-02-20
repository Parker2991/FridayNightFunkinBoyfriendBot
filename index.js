
const createBot = require('./bot.js')
//const chomensjs = require('./ChomensJS')
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
if (process.env['anti-skid'] !== 'amogus is sus') {
  console.log('just no')
  process.exit(0) // emirexyt too dumb
}
//https://beta.character.ai/chat?char=-LojS2FMmI6dLLG4cPzCm1xIIpgwVktHwjHRIImfXSE
