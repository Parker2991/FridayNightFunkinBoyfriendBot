const CommandError = require('../../util/command_error')
const sleep = require('../../util/sleep');
module.exports = {
  data: {
    name: 'core',
    trustLevel: 0,
    aliases: [
      "cb",
      "corerun",
      "commandcorerun",
    ],
    description: 'run commands in core!',
    usages: [
      "<command>",
    ],
  },
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ');
    bot.core.runTracked(message);
/*    bot.on('commandBlockOutput', (packet) => {
      bot.tellraw("@a", require('util').inspect(packet));
      console.log(packet);
    })*/
//    bot.core.commandBlockOutput()
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    bot.core.run(args.join(' '));
  }
}
