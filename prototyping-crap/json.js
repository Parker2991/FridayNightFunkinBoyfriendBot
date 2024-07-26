const CommandError = require('../util/command_error.js');
module.exports = {
  name: 'json',
  trustLevel: 0,
  aliases: [
  ],
  description: 'placeholder text here',
  usages: [
  ],
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    try {
//      bot.tellraw("@a", [
  //     { text: `Result \u203a` },
       //JSON.parse(args.join(' ')),
    //  ])
//      bot.tellraw("@a", `Result ${JSON.stringify(JSON.parse(args.join(' ')))}` )
      bot.tellraw("@a", JSON.parse(JSON.stringify(args.join(' '))))
//      console.log([ { text: `Result \u203a` }, { text: JSON.parse(args.join(' ')) } ])
    } catch (e) {
       bot.tellraw("@a", { text: e.toString(), color: "dark_red" })
    }
  }
}

