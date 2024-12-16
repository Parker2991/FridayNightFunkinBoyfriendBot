const { request } = require('undici');
const CommandError = require('../../util/command_error.js');
const mc = require('minecraft-protocol');
const util = require('util')
module.exports = {
  data: {
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
  },
  async execute (context) {
    const bot = context.bot;
    const discordClient = context.discordClient;
    const args = context.arguments;
    const source = context.source;
    let component = [];
    try {
      const [host, port] = args[0].split(':')
      const server = await mc.ping({ host, port: Number(port ?? 25565) })
      component.push({
        translate: '%s %s %s:%s\n%s %s %s / %s\n%s %s %s\n%s %s %s',
        color: 'dark_gray',
        with: [
          { text: 'Ip', color: 'dark_blue' },
          { text: '\u203a' },
          { text: `${host}`, color: 'dark_blue' },
          { text: `${Number(port ?? 25565)}`, color: 'gold' },
          { text: 'Players', color: 'dark_blue' },
          { text: '\u203a' },
          { text: `${server.players.online}`, color: 'gold' },
          { text: `${server.players.max}`, color: 'gold' },
          { text: 'Version', color: 'dark_blue' },
          { text: '\u203a' },
          { text: `${server.version.name}`, color: 'blue' },
          { text: 'Motd', color: 'dark_blue' },
          { text: '\u203a' },
          server.description
        ]
      })

      if (bot.options.isSavage) {
        bot.chat.message(`Ip \u203a ${host}:${Number(port ?? 25565)}`);
        bot.chat.message(`Players \u203a ${server.players.online} / ${server.players.max}`);
        bot.chat.message(`Version \u203a ${server.version.name}`);
        bot.chat.message(bot.getMessageAsPrismarine(server.description)?.toMotd().replaceAll('§','&'));
      } else {
        bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, component);
      }
    } catch (e) {
      bot.chat.message(`${e.toString()}`)
    }
  }
}
