const CommandError = require('../util/command_error')
const { EmbedBuilder } = require('discord.js');
module.exports = {
  name: 'reconnect',
  description:['reconnect the bot when?'],
  trustLevel: 1,
  aliases:['rec', 'end', 'reconnect-client'],
  usage:[""],
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
    const args = context.arguments
    const source = context.source
    bot.sendFeedback({ text: `Reconnecting to ${bot.options.host}:${bot.options.port}`, color: 'dark_green'})
    bot._client.end(`Reconnecting to ${bot.options.host}:${bot.options.port} requested by ${bot.getMessageAsPrismarine(source?.player?.displayName ?? source?.player?.profile?.name)?.toMotd()}`)
  },
  discordExecute (context) {
    const bot = context.bot;
    const source = context.source;
    const Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`Reconnecting to ${bot.options.host}:${bot.options.port}`)
   bot?.discord?.Message?.reply({embeds: [Embed]}) 
   bot._client.end(`Reconnecting to ${bot.options.host}:${bot.options.port} requested by ${source?.player?.displayName ??source?.player?.profile?.name}`)
  }
}
/*context.source.sendFeedback('farding right now....')
    process.exit(1)
    */
