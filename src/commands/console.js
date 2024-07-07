const CommandError = require('../util/command_error')
module.exports = {
  name: 'console', // command name here
  description: [''], // command desc here
  aliases: [], // command aliases here if there is any
  trustLevel: 3, // 0 = public, 1 = trusted, 2 = owner, 3 = console
  usages: [], // command usage here
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const source = context.source;
    const config = context.config;
    let enabled = false;
    customChat = {
      on() {
        enabled = true
      },
      off() {
        enabled = false
      }
    }
    if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
    switch (args[0].toLowerCase()) {
      case 'customchat':
        console.log(customChat);
        if (args[1].toLowerCase() === 'off' || args[1].toLowerCase() === 'false' || args[1].toLowerCase() === 'disable') {
          customChat.off();
          bot.console.info('Custom Chat disabled');
        } else if (args[1].toLowerCase() === 'on' || args[1].toLowerCase() === 'true' || args[1].toLowerCase() === 'enable') {
          customChat.on();
          bot.console.info('Custom Chat enabled');
        }
      break
      case 'say':
        console.log(enabled)
        if (!enabled) {
          bot.chat(`${args.slice(1).join(' ')}`);
        } else if (enabled) {
          bot.console.log('test :3');
        }
      break
    }
  }
}
