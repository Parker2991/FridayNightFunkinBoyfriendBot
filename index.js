const util = require('util')
const createBot = require('./bot.js')
//const chomensjs = require('./ChomensJS')
// TODO: Load a default config
const fs = require('fs/promises')
const fileExist = require('./util/file-exists')
const path = require('path')

function load () {
//const config = require('./config.js')
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
     
//  bot.on('error', (error), util.inspect(error))
       
         try{
bot.on('error', console.error)
         }catch(error){
                
                 console.log(error.stack)
         }
}
}
async function checkConfig () {
  if (!await fileExist(path.join(__dirname, 'config.js'))) {
    console.error('Config not found! Creating a new Config from ')
    await fs.copyFile(path.join(__dirname, 'default.js'), path.join(__dirname, 'config.js'))
  }   if (await fileExist(path.join(__dirname, 'config.js'))){
          console.log('Config found! loading config please wait,......')
  }
        
   config = require('./config.js')
  load()
}

checkConfig()

process.on('uncaughtException', (e) => {
  console.log('uncaught ' + e.stack)
})

