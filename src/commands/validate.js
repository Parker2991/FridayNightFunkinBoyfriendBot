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
    if (args[0] === hash) {
      if (!bot.options.Core.enabled) {
        bot.chat('&aValid Hash')
      } else {
        bot.sendFeedback([{ text: 'Valid ', color: 'green' }, { text: 'Trusted ', color: 'dark_purple' }, { text: 'Hash', color: 'green' }])
      }
    } else if (args[0] === ownerhash) {
      if (!bot.options.Core.enabled) {
        bot.chat('&aValid Owner Hash')
      } else {
        bot.sendFeedback([{ text: 'Valid ', color: 'green' }, { text: 'Owner ', color: 'dark_red' }, { text: 'Hash', color: 'green' }])
      }
    } else if (discordHash) {
      if (!bot.options.Core.enabled) {
        bot.chat('&aValid Hash')
      } else {
        bot.sendFeedback([{ text: 'Valid ', color: 'green' }, { text: 'Trusted ', color: 'dark_purple' }, { text: 'Hash', color: 'green' }])
      }
    }
  }
}
// if (args[0] === hash) {
