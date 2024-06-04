const CommandError = require('../CommandModules/command_error');
module.exports = {
 name: 'theme',
  description:['change the bots theme'],
  aliases:[],
  trustLevel: 0,
  usage:["<color 1> <color 2> <color 3>"],
  execute (context) {
   const bot = context.bot;
   const args = context.arguments;
   const source = context.source;
if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
 if (args[0] === undefined || args[1] === undefined || args[2] === undefined) {
  bot.Commands.colors.help.pub_lickColor = 'white'
  bot.Commands.colors.help.t_rustedColor = 'white'
  bot.Commands.colors.help.own_herColor = 'white'
  bot.sendFeedback(`Reseting theme colors,.,.,..`)
  } else {
  bot.Commands.colors.help.pub_lickColor = args[0] 
  bot.Commands.colors.help.t_rustedColor = args[1]
  bot.Commands.colors.help.own_herColor = args[2]
  bot.sendFeedback({text:`Set Help theme colors to ${bot.Commands.colors.help.pub_lickColor} ${bot.Commands.colors.help.t_rustedColor} ${bot.Commands.colors.help.own_herColor}`})    
  }
 }
}
/*
helpTheme:{
pub_lickColor:"#00FFFF",
t_rustedColor:"dark_purple",
own_herColor:"dark_red",
},
*/