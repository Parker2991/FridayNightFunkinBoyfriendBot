const mc = require('minecraft-protocol');
const util = require('util');

module.exports = {
  data: {
    name: "mcserver",
    aliases: [
      "pingserver"
    ],
    description: "pings minecraft servers",
    trustLevel: 0,
    usages: [
      "<ip>"
    ]
  },
  async execute (context) {
    const bot = context.bot;
    const config = context.config;
    const args = context.arguments;
    const [host, port] = args[0].split(':');
    const server = await mc.ping({ host, port: Number(port ?? 25565) });
    let component = [];

    try {
      component.push({
        translate: "%s: %s:%s\n%s: (%s/%s)\n%s: %s\n%s",
        color: config.colors.commands.tertiary,
        with: [
          { text: "ip", color: config.colors.commands.primary },
          { text: `${host}`, color: config.colors.commands.secondary },
          { text: `${Number(port ?? 25565)}`, color: config.colors.commands.secondary },
          { text: "players", color: config.colors.commands.primary },
          { text: `${server.players.online}`, color: config.colors.integer },
          { text: `${server.players.max}`, color: config.colors.integer },
          { text: "server version", color: config.colors.commands.primary },
          { text: `${server.version.name}`, color: config.colors.commands.secondary },
          server.description
        ]
      });

      bot.tellraw("@a", component);
    } catch (e) {
      bot.chat.message(`${e.toString()}`);
    }
  }
}