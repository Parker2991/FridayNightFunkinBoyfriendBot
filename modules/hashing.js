// * Not real hashing
const crypto = require('crypto')
const ownerkey = process.env['FNFBoyfriendBot_Owner_key']
const key = process.env['FNFBoyfriendBot_key']
function inject (bot) {
    bot.hash = ''
    bot.ownerhash = ''
    bot.updatehashes = update
    let hash
    let owner
    const interval = setInterval(() => {
      hash = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + key).digest('hex').substring(0, 16)
      owner = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + ownerkey).digest('hex').substring(0, 16)  
      bot.hash = hash
      bot.ownerhash = owner
    }, 2000)
    function update() {
      hash = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + key).digest('hex').substring(0, 16)
      owner = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + ownerkey).digest('hex').substring(0, 16)
      bot.hash = hash
      bot.ownerhash = owner
    }
    //this should work right?

    // ok
    bot.on('end', () => {
      clearInterval(interval)
    })
  }
module.exports = inject