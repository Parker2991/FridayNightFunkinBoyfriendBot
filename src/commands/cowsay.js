const cowsay = require('cowsay2');
const cows = require('cowsay2/cows')
module.exports = {
  name: 'cowsay',
  trustLevel: 0,
  aliases: [
  ],
  description: 'amogus',
  usages: [
    "just wait till the command is ready :3"
  ],
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const source = context.source;
    if (args[0] === "list") {
      const list = Object.keys(cows);
      let content = [];
      let color = true;
      for (const value of list) {
        content.push([
          {
            text: value + ' ',
            color: (!((color = !color)) ? 'blue' : 'dark_blue'),
          }
        ])
      }
      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, content)
    } else if (cows[args[0]]) {
      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, {
        text: cowsay.say(args.slice(1).join(' '),
        { cow: cows[args[0]] })
      })
    } else {
      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, { text: cowsay.say(args.slice(0).join(' ')) })
    }
  }
}
