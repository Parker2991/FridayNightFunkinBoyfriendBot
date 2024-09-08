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
                     color: 'gray',
                     hoverEvent: {
                       action: 'show_text',
                       contents: [{
                         text: 'click here for the servers ip',
                         color: 'gray'
                       }]
                     },
                     clickEvent: {
                       action: 'copy_to_clipboard',
                       value: `${host}:${Number(port ?? 25565)}`
                     }
                   },
                   {
                     text: `Players \u203a `,
                     color: 'gray'
                   },
                   {
                     text: `${server.players.online}`,
                     color: "gold"
                   },
                   {
                     text: ' / ',
                     color: 'gray'
                   },
                   {
                     text: `${server.players.max}\n`,
                     color: "gold"
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
      bot.chat.message(`${e.toString()}`)
    }
  }
}
