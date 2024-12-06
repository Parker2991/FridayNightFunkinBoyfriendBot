const CommandError = require('../../util/command_error');

module.exports = {
  data: {
    name: 'coresettings',
    trustLevel: 2,
    aliases: [
      "cbsettings"
    ],
    description: 'change the bots core settings',
    usages: [
      "useplacedcommandblock <on/off/true/false/enable/disable>",
      "area start <positions>",
      "area end <positions>",
      "refillmethod/rcmethod <item/chat>"
    ],
  },
  execute (context) {
    const bot = context.bot
    const args = context.arguments;
    const config = context.config;
    if (!args && !args[0] && !args[1] && !args[2] && !args[3] && !args[4] && !args[5]) return;
    switch (args[1]?.toLowerCase()) {
      case "useplacedcommandblock":
        switch (args[2]?.toLowerCase()) {
          case "on":
          case "true":
          case "enable":
            bot.core.usePlacedCommandBlock = true;
            bot.chat.message('now using the placed command block');
          break;
          case "off":
          case "false":
          case "disable":
            bot.core.usePlacedCommandBlock = false;
            bot.chat.message('no longer using the placed command block');
          break;
          default:
            if (bot.core.usePlacedCommandBlock) {
              bot.chat.message("the bot is currently using the placed command block to run its commands");
            } else {
              bot.chat.message("the bot is currently using its command block core to run its commands");
            }
        }
      break;
      case "area":
        switch (args[2]?.toLowerCase()) {
          case "start":
            if (isNaN(args[3]) || isNaN(args[4]) || isNaN(args[5])) {
              bot.core.area.start = config.core.area.start;
              bot.chat.message("arguments were NaN, defaulting to config core start coords");
            } else {
              bot.core.area.start = {
                x: Number(args[3]),
                y: Number(args[4]),
                z: Number(args[5])
              };
              bot.chat.message(`setting core start pos to x: ${args[3]}, y: ${args[4]}, z: ${args[5]}`);
            }
          break;
          case "end":
            if (isNaN(args[3]) || isNaN(args[4]) || isNaN(args[5])) {
              bot.core.area.end = config.core.area.end;
              bot.chat.message("arguments were NaN, defaulting to config core end coords");
            } else {
              bot.core.area.end = {
                x: Number(args[3]),
                y: Number(args[4]),
                z: Number(args[5])
              };

              bot.chat.message(`setting core end pos to x: ${args[3]}, y: ${args[4]}, z: ${args[5]}`);
            }
          break;
          default:
            bot.chat.message(`core start pos: x: ${bot.core.area.start.x}, y: ${bot.core.area.start.y}, z: ${bot.core.area.start.z}, and end pos: x: ${bot.core.area.end.x}, y: ${bot.core.area.end.y}, z: ${bot.core.area.end.z} `)
        }
      break;
      case "refillmethod":
      case "rcmethod":
        switch (args[2]?.toLowerCase()) {
          case "item":
            config.core.itemRefill = true;
            bot.chat.message('now refilling via item');
          break;
          case "chat":
            config.core.itemRefill = false;
            bot.chat.message('now refilling via chat');
          break;
          default:
            if (config.core.itemRefill) {
              bot.chat.message("currently filling core via item");
            } else {
              bot.chat.message("currently filling core via chat");
            }
        }
      break;
      default:
        throw new CommandError('invalid argument');
    }
  },
}
