const CommandError = require('../util/command_error');
const { EmbedBuilder } = require('discord.js');
const fixansi = require('../util/ansi');
module.exports = {
  name: 'list',
  description:['check the player list'],
  trustLevel: 0,
  aliases:['playerlist', 'plist', 'pl'],
  usages:[""],
  execute (context) {
    const bot = context.bot
    const args = context.arguments
    const players = bot.players
    const source = context.source
    const component = []
    for (const player of players) {
      component.push({
        translate: `%s \u203a %s [%s: %s %s %s: %s]`,
        color: 'dark_gray',
        with: [
          player.displayName ?? player.profile.name,
          {
            text: `${player.uuid}`,
            color: 'dark_blue',
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
          { text: `Ping`, color: 'dark_blue' },
          { text: `${player.latency}`, color: 'gold' },
          { text: '/', color: 'dark_gray' },
          { text: `Gamemode`, color: 'dark_blue' },
          { text: `${player.gamemode}`, color: 'gold' },
        ]
      })
      component.push('\n')
    }
    component.pop()
    if (bot.options.isSavage) {
      bot.chat.message(`${bot.getMessageAsPrismarine([{ text: `Players: `, color:'gray' }, { text: '(' , color: 'gray' }, { text: `${JSON.stringify(bot.players.length)}`, color: 'gold' }, { text: ')\n', color: 'gray' }])?.toMotd().replaceAll('§','&')}`)
      setTimeout(() => {
        for (const player of bot.players) {
          bot.chat.message(`${bot.getMessageAsPrismarine([player.displayName ?? player.profile.name, ' &8', player.uuid,` &r&8[&2Ping: &6${player.latency}&8 / &5Gamemode: &6${player.gamemode}&8]`]).toMotd().replaceAll('§', '&')}`)
        }
      }, 300)
    } else if (bot.options.isKaboom) {
      bot.tellraw(`@a[name="${source.player.profile.name}"]`, [
        { text: `Players`, color: 'dark_blue' },
        { text: ': ', color: 'dark_gray' },
        { text: '(' , color: 'dark_gray' },
        { text: `${JSON.stringify(bot.players.length)}`, color: 'gold' },
        { text: ')\n', color: 'dark_gray' },
        component
      ])
    }
  },
  discordExecute(context) {
    const bot = context.bot
    const players = bot.players
    const component = []
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
    const fix = fixansi(ansi.replaceAll('`', '`\u200b').substring(0, 3080))
    const Embed = new EmbedBuilder()
            .setColor(`${config.colors.discord.embed}`)
            .setTitle(`${this.name} Command`)
            .setDescription(`\`\`\`ansi\n${fix}\n\`\`\``)
    bot.discord.message.reply({ embeds: [Embed] })
  }
}
