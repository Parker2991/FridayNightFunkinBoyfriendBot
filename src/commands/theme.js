const CommandError = require('../CommandModules/command_error');
module.exports = {
 name: 'theme',
  description:['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'],
   aliases:[],
  trustLevel: 0,
 usage:[":3"],
  execute (context) {
   const bot = context.bot;
   const args = context.arguments;
   const source = context.source;
if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
  bot.Commands.help.pub_lickColor = args[0] 
  bot.Commands.help.t_rustedColor = args[1]
  bot.Comands.help.own_herColor = args[2]
  bot.sendFeedback({text:`Set Help theme colors to ${bot.helpTheme.pub_lickColor} ${bot.helpTheme.t_rustedColor} ${bot.helpTheme.own_herColor}`})    
  }
}
/*
helpTheme:{
pub_lickColor:"#00FFFF",
t_rustedColor:"dark_purple",
own_herColor:"dark_red",
},
*/
