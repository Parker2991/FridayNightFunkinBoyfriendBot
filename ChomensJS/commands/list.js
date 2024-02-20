const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'list',
  alias: [],
  description: 'List players',
  usage: '',
  trusted: 0,
  execute: async function (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    try {
      const component = []
      component.push({ text: 'Players ', color: 'green' })
      component.push({ text: '(', color: 'dark_gray' })
      component.push({ text: bot.players.list.length, color: 'gray' })
      component.push({ text: ')', color: 'dark_gray' })
      component.push('\n')
      for (const property of bot.players.list) {
        // if (property.match.startsWith('@')) continue;
        component.push({
          text: property.name,
          color: 'yellow',
          clickEvent: {
            action: 'copy_to_clipboard',
            value: property.name
          },
          hoverEvent: {
            action: 'show_text',
            contents: [{
              text: 'Click here to copy the username to your clipboard',
              color: 'green'
            }]
          }
        })
        component.push({
          text: ' › ',
          color: 'dark_gray'
        })
        component.push({
          text: property.UUID,
          color: 'aqua',
          clickEvent: {
            action: 'copy_to_clipboard',
            value: property.UUID
          },
          hoverEvent: {
            action: 'show_text',
            contents: [{
              text: 'Click here to copy the UUID to your clipboard',
              color: 'green'
            }]
          }
        })
        component.push('\n')
      }
      component.pop()
      bot.tellraw(selector, component)
    } catch (e) {

    }
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    try {
      let players = ''
      for (const property of bot.players.list) {
        // if (property.match.startsWith('@')) continue;
        players += `\`${property.name}\` › \`${property.UUID}\`` + '\n'
      }
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle(`Players (${bot.players.list.length})`)
        .setDescription(players.substring(0, 4096))
      channeldc.send({ embeds: [Embed] })
    } catch (e) {

    }
  }
}
