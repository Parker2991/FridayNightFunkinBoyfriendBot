const fs = require('fs/promises')
const fileExist = require('./util/file-exists')
const path = require('path')
const { createBot } = require('./bot')

let config

function load () {
  // these stuff takes time to load so i move it here
  const readline = require('node:readline')
  const { stdin: input, stdout: output } = require('node:process')
  const rl = readline.createInterface({ input, output })
  const { Client, GatewayIntentBits } = require('discord.js')
const { MessageContent, GuildMessages, Guilds } = GatewayIntentBits

  const dcclient = new Client({ intents: [Guilds, GuildMessages, MessageContent] })

  let bots = []

  dcclient.on('ready', () => {
    for (const server of config.servers) {
      const getBots = () => bots
      const setNewBot = (server, bot) => {
        bots = bots.filter((eachBot) => eachBot.server.host !== server)
        bots.push(bot)
      }
      createBot(server, config, getBots, setNewBot, dcclient, rl)
    }
  })
  require('dotenv').config()
  dcclient.login(process.env.discordtoken)
}

// TODO: improve this thing
async function checkConfig () {
  if (!await fileExist(path.join(__dirname, 'config.js'))) {
    console.error('Config file doesn\'t exist, so the default one was created')
    await fs.copyFile(path.join(__dirname, 'default.js'), path.join(__dirname, 'config.js'))
  }
  config = require('./config')
  load()
}

checkConfig()

process.on('uncaughtException', (e) => {
  console.log('uncaught ' + e.stack)
})
