const CommandError = require('../CommandModules/command_error');
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'ping', // command name here
  description: [''], // command desc here
  aliases: [], // command aliases here if there is any
  trustLevel: 0, // 0 = public, 1 = trusted, 2 = owner, 3 = console
  usages: [], // command usage here
  execute (context) {
    const bot = context.bot
    const args = context.arguments
    const source = context.source
    const player = source.player
    
    if (args.join(' ') === null || bot.players.find(player => player.profile.name === `${args.join(' ')}`) === undefined) {
      bot.sendFeedback([{ text: 'Pong!', color: 'dark_gray' }, { text: ' 🏓\n', color: 'dark_gray' }, { text: `${bot.getMessageAsPrismarine(source.player.displayName)?.toMotd()}`, color: 'dark_gray' },{ text: '\nPing: ', color: 'dark_gray' },{ text: `${source.player.latency}`, color: 'green' }])
    } else if (args.join(' ') !== null) { 
      bot.sendFeedback([{ text: `Pong! 🏓\n`, color: 'dark_gray' }, { text: `${bot.getMessageAsPrismarine(bot.players.find(player => player.profile.name === `${args.join(' ')}`).displayName)?.toMotd()}`, color: 'dark_gray' }, { text: '\nPing: ', color: 'dark_gray' },{ text: `${bot.players.find(player => player.profile.name === `${args.join(' ')}`).latency}`, color: 'green' }])
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    if (args.join(' ') === null || bot.players.find(player => player.profile.name === `${args.join(' ')}`) === undefined) {
       throw new CommandError('Incorrect player')
    } else { 
      const Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription('```' + bot.getMessageAsPrismarine([{ text: `Pong! 🏓\n`, color: 'dark_gray' }, { text: `${bot.getMessageAsPrismarine(bot.players.find(player => player.profile.name === `${args.join(' ')}`).displayName)?.toMotd()}`, color: 'dark_gray' }, { text: '\nPing: ', color: 'dark_gray' },{ text: `${bot.players.find(player => player.profile.name === `${args.join(' ')}`).latency}`, color: 'green' }])?.toString() + '```')
              bot.discord.Message.reply({embeds: [Embed]})
    }
  }
}