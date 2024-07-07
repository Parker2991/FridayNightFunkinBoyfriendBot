const CommandSource = require("../util/command_source");
const CommandError = require("../util/command_error");
const { execSync } = require('child_process');
function chat_command_handler(bot, options, config) {
  let ratelimit = 0
  bot.on("parsed_message", (data) => {
    if (data.type !== "minecraft:chat") return;
    const prefixes = config.Commands.prefixes;
    prefixes.map((prefix) => {
      const plainMessage = bot
        .getMessageAsPrismarine(data.contents)
        ?.toString();
      if (!plainMessage.startsWith(prefix)) return;
      const command = plainMessage.substring(prefix.length);
      const source = new CommandSource(data.sender, {
        discord: false,
        console: false
      });
      bot.sendFeedback = (message) => {
        if (bot.options.useChat) {
          bot.tellraw([message]);
        } else {
          bot.tellraw(["", message]);
        }
      };
      bot.sendError = (message) => {
        bot.sendFeedback([{
          text: '',
          color: `red`
        }, message], false)
      }
      try {
        ratelimit++
        setTimeout(() => {
          ratelimit--
        }, 1000)
        if (ratelimit > config.Commands.ratelimit) {
          bot.sendFeedback({
            text: 'You are using commands too fast!',
            color: 'dark_red'
          })
        } else {
          bot.commandManager.executeString(source, command);
//          bot.tellraw("Please note that other bots will start using namespaced prefixes but FNFBoyfriendBot will continue using the ~ prefix with the addition of namespace prefixes");
        }
      } catch (e) {
        console.log(e.stack)
      };
    });
  }) 
}
module.exports = chat_command_handler;
/*
for (const player of blacklist.players) {
    console.log('whos blacklisted?',[player]);
}
*/
