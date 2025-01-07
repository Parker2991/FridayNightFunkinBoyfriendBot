const crypto = require('crypto')

module.exports = {
  name: 'chomeval',

  consoleOnly: true,

  execute (context) {
    const bot = context.bot
    
    const prefix = '*' // mabe don't hardcode the prefix
    
    const args = context.arguments

    const key = process.env['chomens_bot_key']

    const time = Math.floor(Date.now() / 5_000)
    
    const value = bot.uuid + args[0] + time + key
    
    const hash = crypto.createHash('sha256').update(value).digest('hex').substring(0, 16)

    const command = `${prefix}${args.shift()} ${hash} ${args.join(' ')}`

    bot.chat(command)
  }
}
