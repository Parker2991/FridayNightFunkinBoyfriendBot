const readline = require('readline');

function boot (bot, options, discordClient, config) {
  bot.on("packet.login", (data) => {
    bot.chat.message('&9FNF&3Boyfriend&1Bot &fcreated by &4Parker&02991');
  }) // &9 &3 &1
}
module.exports = boot;
/*
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.on('keypress', (str, key) => {
//  console.log(str)
//  console.log(key)
   if (key && key.ctrl && key.name === 'c') {
     console.log('mrrow >:3');
     process.exit(69420);
   }
})
*/
