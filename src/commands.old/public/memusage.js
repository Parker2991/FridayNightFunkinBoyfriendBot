module.exports = {
  data: {
    name: 'memusage',
    trustLevel: 0,
    aliases: [
    ],
    description: 'check the bots and the servers ram usage',
    usages: [
      "on/enable/true",
      "off/disable/false",
    ],
  },
  execute (context) {
    const bot = context.bot
    const args = context.arguments;
    switch (args[0]?.toLowerCase()) {
      case "on":
      case "enable":
      case "true":
        bot.memUsage.enabled = true;
        bot.chat.message('enabled memusage');
      break;
      case "off":
      case "enable":
      case "false":
        bot.memUsage.enabled = false;
        bot.chat.message('disabled memusage');
      break;
      throw new CommandError({ translate: "command.unknown.argument", color: "dark_red" });
    }
  },
}
