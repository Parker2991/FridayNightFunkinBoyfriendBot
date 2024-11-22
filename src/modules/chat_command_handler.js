const CommandSource = require('../util/command_source');
module.exports = (context) => {
  let ratelimit = 0;
  const bot = context.bot;
  const config = context.config;
  const options = context.options;
  bot.on("parsed_message", (data) => {
    if (data.type !== "minecraft:chat") return;
    const prefixes = config.prefixes;
    prefixes.map((prefix) => {
      const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString();
      if (!plainMessage.startsWith(prefix)) return
      const command = plainMessage.substring(prefix.length)
      const source = new CommandSource(data.sender, { discord: false, console: false }, true)
      ratelimit++
      setTimeout(() => {
        ratelimit--
      }, 1000)
      if (ratelimit > 2) {
        bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, { text: 'You are using commands too fast!', color: 'dark_red'})
      } else if (command.split(" ")[0].length === 0) {
      } else {
        bot.commandManager.executeString(source, command)
      }
    })
  })
}
