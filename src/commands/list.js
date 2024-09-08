const CommandError = require('../util/command_error');
const { EmbedBuilder } = require('discord.js');
const fixansi = require('../util/ansi');
module.exports = {
  name: 'list',
  description:['check the player list'],
  trustLevel: 0,
  aliases:['playerlist', 'plist', 'pl'],
  usage:[""],
  execute (context) {
    const bot = context.bot
    const args = context.arguments
    const players = bot.players
    const source = context.source
    const component = []
    for (const player of players) {
      component.push({
        translate: `%s \u203a %s [%s %s %s %s %s]`,
        color: 'gray',
        with: [
          player.displayName ?? player.profile.name,
          {
            text: `${player.uuid}`,
            color: 'gray',
            clickEvent: {
              action: 'copy_to_clipboard',
              value: `${player.uuid}`
            },
            hoverEvent: {
              action: 'show_text',
              contents: [{
                text: 'click here to copy the player\'s uuid',
                color: 'aqua'
              }]
            }
          },
          { text: `Ping:`, color: 'dark_green' },
          { text: `${player.latency}`, color: 'gold' },
          { text: '/', color: 'gray' },
          { text: `Gamemode:`, color: 'dark_purple' },
          { text: `${player.gamemode}`, color: 'gold' },
        ]
      })
      component.push('\n')
    }
    component.pop()
    bot.tellraw(`@a[name="${source.player.profile.name}"]`, [
                  { text: `Players: `, color:'gray' },
                  { text: '(' , color: 'gray' },
                  { text: `${JSON.stringify(bot.players.length)}`, color: 'gold' },
                  { text: ')\n', color: 'gray' },
                  component
    ])
   // bot.tellraw(component)
  },
  discordExecute(context) {
    const bot = context.bot
    const players = bot.players
    const component = []
//    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi(bot.registry.language)
    for (const player of players) {
      component.push({
        translate: `%s \u203a %s [%s %s %s %s %s]`,
        with: [
          player.displayName ?? player.profile.name,
          player.uuid,
          { text: `Ping:`, color: 'dark_green' },
          { text: `${player.latency}`, color: 'gold' },
          { text: '/', color: 'gray' },
          { text: `Gamemode:`, color: 'dark_purple' },
          { text: `${player.gamemode}`, color: 'gold' },
        ]
      })
      component.push('\n')
    }
    component.pop()
    const ansi = bot.getMessageAsPrismarine([{ text: `Players: `, color:'gray' }, { text: '(' , color: 'gray' }, { text: `${JSON.stringify(bot.players.length)}`, color: 'gold' }, { text: ')\n', color: 'gray' }, component])?.toAnsi()
/*    bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, [
                  { text: `Players: `, color:'gray' },
                  { text: '(' , color: 'gray' },
                  { text: `${JSON.stringify(bot.players.length)}`, color: 'gold' },
                  { text: ')\n', color: 'gray' },
                  component
    ])*/
    const fix = fixansi(ansi.replaceAll('`', '`\u200b'))
    const Embed = new EmbedBuilder()
            .setColor(`${config.colors.discord.embed}`)
            .setTitle(`${this.name} Command`)
            .setDescription(`\`\`\`ansi\n${fix}\n\`\`\``)
    bot.discord.message.reply({ embeds: [Embed] })
  } // `\`\`\`ansi\n${discordQueue.join('\n').substring(0, 1984)}\n\`\`\``
}
