const { EmbedBuilder } = require('discord.js');
module.exports = {
  name: 'validate',
  trustLevel: 1,
  aliases: [
    "val"
  ],
  description: 'validate through the bot',
  usages: [
    ""
  ],
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const source = context.source;
    if (args[0] === bot.validation.trusted) {
      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, { text: "Valid Trusted hash", color: "dark_green" });
    } if (args[0] === bot.validation.owner) {
      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, { text: "Valid Owner hash", color: "dark_green" });
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const event = bot?.discord?.message
    const roles = event?.member?.roles?.cache
    const source = context.source;
    console.log(Object.keys(bot.discord.message.member.user.username));
    if (roles?.some(role => role.name === `${config.discord.roles.trusted}`)) {
      bot.discord.message.reply('Valid trusted user')
      bot.chat.message(`Valid trusted user [${bot.discord.message.member.user.username}]`)
    } else if (roles?.some(role => role.name === `${config.discord.roles.owner}`)) {
      bot.discord.message.reply('Valid Owner user')
      bot.chat.message(`Valid Owner User [${bot.discord.message.member.user.username}]`);
    }
  }
}
