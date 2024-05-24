const { EmbedBuilder } = require('discord.js');
module.exports = {
  name: 'validate',
  description: ['validate in the bot'],

  trustLevel: 1,
  aliases: ['val'],
  usage: ['<hash>'],
  execute (context) {
    const source = context.source
    const bot = context.bot
    const hash = bot.hash
    const args = context.arguments
    const ownerhash = bot.owner
    const discordHash = bot.hashing.hash
    if (args[0] === bot.hash ?? args[0] === bot.hashing.hash) {
       if (bot.options.isCreayun) {

       } else {
         bot.sendFeedback([{ text: 'Valid ', color: 'dark_green' },{ text: 'Trusted ', color: 'dark_purple' },{ text: 'hash', color: 'dark_green'}])
       }
    } else if (args[0] === bot.owner) {
       if (bot.options.isCreayun) {
          bot.chat('&aValid &4Owner &aHash')
       } else {
        bot.sendFeedback([{ text: 'Valid ', color: 'dark_green' },{ text: 'Owner ', color: 'dark_red' },{ text: 'hash', color: 'dark_green'}])
       }
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const event = bot?.discord?.Message
    const roles = event?.member?.roles?.cache
    if (roles?.some(role => role.name === `${bot.validation.discord.roles.trusted}`)) {
      bot.discord.Message.reply('Valid trusted user')
    } else if (roles?.some(role => role.name === `${bot.validation.discord.roles.owner}`)) {
      bot.discord.Message.reply('Valid Owner user')
    }
  }
}