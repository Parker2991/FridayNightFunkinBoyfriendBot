const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'testbench',
//<< this one line of code broke it lmao
  description:['represents a actual error'],

  execute (context) {
//const bot = context.bot
    const message = context.arguments.join(' ')

   const prefix = {
 translate: '%s%s ',
      bold: true,
      color: 'dark_gray',
      with: [
        { color: 'dark_red', text: 'a' },
        { color: 'gold', text: 'e' },
         
              ]
    }

    bot.chat(['tellraw', prefix])
  }
}
//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 