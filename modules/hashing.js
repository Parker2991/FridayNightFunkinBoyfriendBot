
// * Not real hashing
const crypto = require('crypto')
const ownerkey = process.env['FNFBoyfriendBot_Owner_key']
const trustedkey = process.env['FNFBoyfriendBot_key']
function inject(bot) {
  bot.hash = ''
  bot.owner = ''
  bot.updatehashes = update
        
  let hash
  let owner
  let interval = setInterval(() => {
    hash = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + trustedkey).digest('hex').substring(0, 16)
    owner = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + ownerkey).digest('hex').substring(0, 16)
    bot.hash = hash
    bot.owner = owner
  
  }, 2000)
         
  function update() {
    hash = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + trustedkey).digest('hex').substring(0, 16)
    owner = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + ownerkey).digest('hex').substring(0, 16)
    bot.hash = hash
    bot.owner = owner
  
  //this should work right?
/*
  bot.discord.channel = client.channels.cache.get(options.discord.channelId)
*/
  // ok
  /*
  bot.on('end', () => {
    if (interval) clearInterval(interval)
  })
  */
}
          
let _hash = generateHash()
const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
             const time = new Date().toLocaleTimeString("en-US", {timeZone:"America/CHICAGO"})
const date = new Date().toLocaleDateString("en-US", {timeZone:"America/CHICAGO"})
             
//bot.hashing = ''
     bot.hashing = {
    _hash: crypto.randomBytes(4).toString('hex').substring(0,16),
 //const key = process.env['FNFBoyfriendBotX_key']
    get hash () { return this._hash },
    set hash (value) {
   this._hash = value
      this.discordChannel?.send('```ansi\nTime: ' + time + ' ' + date + ' ' + '```' + '```ansi\n Hash for server ' + `${bot.options.host}:${bot.options.port}: ` + bot.hashing.hash + '\n```')
    },
//`Hash for server ${bot.options.host}:${bot.options.port}: ${value}`
    generateHash () {
      return crypto.randomBytes(4).toString('hex').substring(0, 16)
    },

    updateHash () {
      this.hash = this.generateHash()
    }
  }
 
  bot.discord.client?.on('ready', () => {
 //bot.discord.client?.setMaxListeners(25)
          bot.hashing.discordChannel = bot.discord.client.channels.cache.get('1188677777336057987')
    //bot.hashing.discordChannel?.send()
          bot.hashing.discordChannel?.send('```ansi\nTime: ' + time + ' ' + date + ' ' + '```' + '```ansi\n Hash for server ' + `${bot.options.host}:${bot.options.port}: ` + bot.hashing.hash + '\n```')
  })// + bot.hashing.hash
}//`Hash for server ${bot.options.host}:${bot.options.port}: ${value}`
//nvm what?
function generateHash () {
  return crypto.randomBytes(4).toString('hex')
}
module.exports = inject




/* const crypto = require('crypto')

let _hash = generateHash()

function inject (bot) {
  bot.hashing = {
    _hash: crypto.randomBytes(4).toString('hex').substring(0,16),
 //const key = process.env['FNFBoyfriendBotX_key']
    get hash () { return this._hash },
    set hash (value) {
   this._hash = value
      this.discordChannel?.send('```ansi\n Hash for server ' + `${bot.options.host}:${bot.options.port}: ${value}` + '\n```')
    },
//`Hash for server ${bot.options.host}:${bot.options.port}: ${value}`
    generateHash () {
      return crypto.randomBytes(4).toString('hex').substring(0, 16)
    },

    updateHash () {
      this.hash = this.generateHash()
    }
  }
 
  bot.discord.client?.on('ready', () => {
    bot.hashing.discordChannel = bot.discord.client.channels.cache.get('1120122720001208390')
    bot.hashing.discordChannel?.send('```ansi\n Hash for server ' + `${bot.options.host}:${bot.options.port}: ` + bot.hashing.hash + '\n```')
  })// + bot.hashing.hash
}//`Hash for server ${bot.options.host}:${bot.options.port}: ${value}`
//nvm what?
function generateHash () {
  return crypto.randomBytes(4).toString('hex')
}
      */
