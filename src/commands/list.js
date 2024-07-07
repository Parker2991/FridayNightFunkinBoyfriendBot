const CommandError = require('../util/command_error')
const { EmbedBuilder } = require('discord.js')
const { request } = require('undici');
module.exports = {
  name: 'list',
  description:['check the player list'],
  trustLevel: 0,
  aliases:['playerlist', 'plist', 'pl'],
  usage:[""],
  async execute (context) {
    const bot = context.bot
    const args = context.arguments
    const players = bot.players
    const source = context.source
    const component = []
    const url = await request(`https://eu.mc-api.net/v3/server/ping/${bot.options.host}`)
    const server = await url.body.json()
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
    bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, [
                  { text: `Players: `, color:'gray' },
                  { text: '(' , color: 'gray' },
                  { text: `${JSON.stringify(bot.players.length)}`, color: 'gold' },
                  { text: ` / `, color: 'gray' },
                  { text: `${server.players.max}`, color: 'gold' },
                  { text: ')\n', color: 'gray' },
                  component
    ])
   // bot.tellraw(component)
  },
  discordExecute(context) {
    const bot = context.bot
    const players = bot.players
  }
}
//what is wi
// IDK
