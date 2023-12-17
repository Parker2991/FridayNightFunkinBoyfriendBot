const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'uuid',
  alias: [],
  description: 'Gets the UUID of a player. If no player specified it will show your UUID instead',
  usage: '[player (required on Discord)]',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    if (args[0]) {
      const playername = args.join(' ')
      const player = bot.players.list.find((user) => user.name === playername)
      if (!player) throw new SyntaxError('Invalid username')
      const playerUUID = player.UUID
      bot.tellraw(selector,
        [
          {
            text: `${playername}'s UUID: `,
            color: 'green'
          },
          {
            text: playerUUID,
            color: 'aqua',
            clickEvent: {
              action: 'copy_to_clipboard',
              value: playerUUID
            },
            hoverEvent: {
              action: 'show_text',
              contents: [
                {
                  text: 'Click here to copy the UUID to your clipboard',
                  color: 'green'
                }
              ]
            }
          }
        ])
    } else {
      bot.tellraw(selector,
        [
          {
            text: 'Your UUID: ',
            color: 'green'
          },
          {
            text: sender,
            color: 'aqua',
            clickEvent: {
              action: 'copy_to_clipboard',
              value: sender
            },
            hoverEvent: {
              action: 'show_text',
              contents: [
                {
                  text: 'Click here to copy the uuid to your clipboard',
                  color: 'green'
                }
              ]
            }
          }
        ])
    }
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    if (args[0]) {
      const playername = args.join(' ')
      const player = bot.players.list.find((user) => user.name === playername)
      if (!player) throw new SyntaxError('Invalid username')
      const playerUUID = player.UUID
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('UUID')
        .setDescription(`${playername}'s UUID: ${playerUUID}`)
      channeldc.send({ embeds: [Embed] })
    } else {
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.error)
        .setTitle('Error')
        .setDescription('No player name specified')
      channeldc.send({ embeds: [Embed] })
    }
  }
}
