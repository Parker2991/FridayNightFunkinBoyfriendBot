// * Not real hashing
const crypto = require('crypto')

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
//discord channel id:1120122720001208390
module.exports = inject
/*
const crypto = require('crypto')

async function inject (bot) {
  bot.hashing = {
    _hash: crypto.randomBytes(4).toString('hex').substring(0,16),
 //const key = process.env['FNFBoyfriendBotX_key']
    get hash () { return this._hash },
    set hash (value) {
      const channel = bot.discord.client.channels.cache.get('1120122720001208390')
      
      this._hash = value
      bot.hashingdiscordChannel?.send(`Hash for server ${bot.options.host}:${bot.options.port}: ${value}`)
    },

    generateHash,

    updateHash () {
      this.hash = this.generateHash()
    }
  }
  
bot.discord.client?.on('ready', () => {
    bot.hashing.discordChannel = bot.discord.client.channels.cache.get('1120122720001208390')
    bot.hashing.discordChannel?.send(`Hash for server ${bot.options.host}:${bot.options.port}: ` + bot.hashing.hash)
  })
}
*/