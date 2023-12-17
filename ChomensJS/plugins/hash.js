const crypto = require('crypto')

module.exports = {
  inject: function (bot, dcclient, config) {
    bot.hash = ''

    const interval = setInterval(() => {
     const normalKey = process.env['chomensjs_key']
const ownerHashKey = process.env['chomensjs_owner_key']
      bot.hash = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + normalKey).digest('hex').substring(0, 16)
      bot.ownerHash = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + ownerHashKey).digest('hex').substring(0, 16)
    }, 2000)
    bot.on('end', () => {
      clearInterval(interval)

    })
  }
}
