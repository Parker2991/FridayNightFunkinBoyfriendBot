const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'testbench',
//<< this one line of code broke it lmao
  description:[''],
hashOnly:false,
        consoleOnly:false,
  execute (context) {
const bot = context.bot
    const args = context.arguments
      //bot.core.run(`tag ${context.source.player.profile.name} add bruhify`)
      bot.bruhifyTextTellraw = args.join(' ')


   
  }
}
//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 