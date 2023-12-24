const mc = require('minecraft-protocol')
const { EventEmitter } = require('node:events')
const fs = require('fs')
const path = require('path')
const util = require('node:util')
console.log(`Starting ${process.env["buildstring"]} .......`)
 console.log(`Foundation: ${process.env["FoundationBuildString"]}`)
console.log('this may take a few moments....')

 function createBot(options = {}) {
  const bot = new EventEmitter()
const rs = require('randomstring')
  // Set some default values in options
 let r = Math.floor(Math.random() * 255) + 1;
  options.host ??= 'localhost'
  options.username ??= 'FNFBoyfriendBot'
  options.hideErrors ??= false // HACK: Hide errors by default as a lazy fix to console being spammed with them
  options.console ??= true
options.input ??= true

         //  MainPrefix: "~",
            //  SecondaryPrefix:'%',
              //TertiaryPrefix:'@'
                   
         options.commands.MainPrefix ??= '!'
         options.commands.SecondaryPrefix ??= '!'
          options.commands.TertiaryPrefix ??= '!'
   options.selfcare.unmuted ??= true
         
   options.selfcare.vanished ??= true
         
   options.selfcare.prefix ??= true
         
   options.selfcare.skin ??= true
         
   options.selfcare.cspy ??= true
         
   options.selfcare.op ??= true
         
   options.selfcare.gmc ??= true
         
   options.selfcare.interval ??= 500
         
   options.Core.core ??= true
         
  
         
   options.discord.commandPrefix ??= '!'
         
   options.reconnectDelay ??= 1000
         
   options.Core.customName ??= '@'
         
   options.selfcare.username ??= true
         
   options.selfcare.nickname ??= true
         
   options.selfcare.god ??= true
         
   options.selfcare.tptoggle ??= true
  bot.options = options

  // Create our client object, put it on the bot, and register some events
  bot.on('init_client', client => {
    client.on('packet', (data, meta) => {
      bot.emit('packet', data, meta)
      bot.emit('packet.' + meta.name, data)
    })

    client.on('login', async function (data) {
      
     bot.uuid = client.uuid
      bot.username = client.username
    bot.entityId = data.entityId
     bot.host = bot.options.host
      bot.port = bot.options.port
      bot.buildstring = process.env['buildstring']
      bot.fbs = process.env['FoundationBuildString']
    bot.version = bot.options.version
      console.log(`Username: ${bot.username}`)
      console.log(`Host: ${bot.host}:${bot.port}`)
      console.log(`Minecraft java version: ${bot.version}`)
    })
  //bot.visibility = false
    client.on('end', reason => { bot.emit('end', reason)
     
    })
   client.on('keep_alive', ({ keepAliveId }) => {
    bot.emit('keep_alive', { keepAliveId })
   })
    client.on('error', error => bot.emit('error', error), )
   
  })
  
const buildstring = process.env['buildstring']
bot.end = (reason = 'end', event) => {
    bot.emit('end', reason, event)
    bot.removeAllListeners()
    bot._client.end()
    bot._client.removeAllListeners()
  }

  const client = options.client ?? mc.createClient(options)
  bot._client = client
  bot.emit('init_client', client)
  
  bot.bots = options.bots ?? [bot]
bot.setMaxListeners(20)
  bot._client.setMaxListeners(20)

  // Modules
  bot.loadModule = module => module(bot, options)

  for (const filename of fs.readdirSync(path.join(__dirname, 'modules'))) {
    try {
      const module = require(path.join(__dirname, 'modules', filename))
      bot.loadModule(module)
       //console.log(filename.length);
    } catch (error) {
  
      console.error('\x1b[0m\x1b[91m[ERROR]: \x1b[0m\x1b[90mFailed to load module', filename, ':', error)
     
    }
  }
  
  return bot
}//path.join(__dirname, 'modules', filename)
    //path.join(amonger + 'FridayNightFunkinBoyfriendBot') !== path.join(amonger)
//fs.stat
              const amonger = '../'
  if (fs.existsSync('../FridayNightFunkinBoyfriendBot') == false)  {
    process.exit(1) 
  }           
//path.join('') != fs. existsSync('~/FridayNightFunkinBoyfriendBot/index.js')

         const modules = './modules';
const util2 = './util';
const CommandModules = './CommandModules';
const commands = './commands';
const chat = './chat'
         fs.readdir(util2, (err, files) => {
           console.log('Successfully loaded: '  + files.length + ' util files');
         });
         fs.readdir(modules, (err, files) => {
            console.log('Successfully loaded: '  + files.length + ' module files');
          });
fs.readdir(commands, (err, files) => {
   console.log('Successfully loaded: '  + files.length + ' command files');
 });
fs.readdir(CommandModules, (err, files) => {
   console.log('Successfully loaded: '  + files.length + ' CommandModule files');
 });
fs.readdir(chat, (err, files) => {
   console.log('Successfully loaded: '  + files.length + ' chat files');
 });

// ABot username function mabe mabe

module.exports = createBot
