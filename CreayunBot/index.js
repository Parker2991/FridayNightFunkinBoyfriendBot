const mineflayer = require('mineflayer')


 //run in the shell if any of the relay chats isnt working
//pidof node | awk 'BEGIN { RS = " " } { print $1}' | while read line ; do kill $line ; done
//and then run kill 1
//const CreayunAndFoliaboom = require('./Relay chat(creayun and foliaboom)')
const { createBot } = require('./bot.js')

const config = require('./config.js')


const { Client, GatewayIntentBits } = require('discord.js')
const { MessageContent, GuildMessages, Guilds } = GatewayIntentBits

const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] })

let channel;
client.on('ready', () => {
  for (const server of config.servers) {
   createBot(server.host, server.port, server.discordChannelId, client)
  }
})
require('dotenv').config()
client.login(process.env['discordtoken'])