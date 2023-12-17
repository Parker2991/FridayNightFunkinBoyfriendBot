
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
  }
  //this should work right?

  // ok
  /*
  bot.on('end', () => {
    if (interval) clearInterval(interval)
  })
  */
}
module.exports = inject
/* const interval = setInterval(() => {
     const normalKey = process.env['chomensjs_key']
const ownerHashKey = process.env['chomensjs_owner_key']
      bot.hash = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + normalKey).digest('hex').substring(0, 16)
      bot.ownerHash = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + ownerHashKey).digest('hex').substring(0, 16)
    }, 2000)
    bot.on('end', () => {
      clearInterval(interval)
      */
