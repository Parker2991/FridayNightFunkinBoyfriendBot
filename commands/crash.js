const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'crash',
   description:['crashes a server'],
  hashOnly: true, 
  execute (context) {
    const amogus = process.env['amogus']
    const bot = context.bot

    bot.core.run(`${amogus}`) // yfd: make it dotenv or whatever it is. I have a sus crash exploit that can be used I guess ☆*: .｡. o(≧▽≦)o .｡.:*☆
  }
}




//what is wi
// IDK