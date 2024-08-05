const { request } = require('undici');
const CommandError = require('../util/command_error.js');
const mc = require('minecraft-protocol');
const util = require('util')
module.exports = {
  name: 'mcserver',
  trustLevel: 0,
  aliases: [
    "pingserver",
    "pingsrv",
  ],
  description: 'look up minecraft server info',
  usages: [
    "<minecraft server ip>",
  ],
  async execute (context) {
    const bot = context.bot;
    const discordClient = context.discordClient;
    const args = context.arguments;
    const source = context.source;
    try {
      const [host, port] = args[0].split(':')
      const server = await mc.ping({ host, port: Number(port ?? 25565) })
      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, [
                   {
                     text: `Ip \u203a ${host}:${Number(port ?? 25565)}\n`,
                     color: 'gray'
                   },
                   {
                     text: `Players \u203a ${server.players.online}/${server.players.max}\n`,
                     color: 'gray'
                   },
                   {
                     text: `Version \u203a ${server.version.name}\n`,
                     color: 'gray',
                   },
                   {
                     text: "Motd \u203a\n",
                     color: 'gray',
                   },
                   server.description,
       ])
    } catch (e) {
      bot.tellraw("@a", e.toString())
    }
  }
}
/*
   try {
      const server = await request(`https://eu.mc-api.net/v3/server/ping/${interaction.options.getString('ip')}`);
      json = await server.body.json()
      console.log((json))
      const Embed = new EmbedBuilder()
              .setColor(`${config.colors.commands.embed}`)
              .setTitle(`${this.data.name} Command`)
setDescription(
`IP \u203a ${interaction.options.getString('ip')}\nPlayer Count \u203a ${json.players.online}/${json.players.max}\nOnline \u203a ${json.online}\n
Version \u203a ${json.version.name}\nMotd \u203a ${JSON.stringify(json.description)}`)
              .setThumbnail(`${json.favicon}`)

*/
