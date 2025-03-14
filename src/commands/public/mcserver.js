const mc = require('minecraft-protocol');
const util = require('util');

function componentPush (config, server, host, port, component) {
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
}

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

      componentPush(config, server, host, port, component);

      bot.tellraw("@a", component);
    } catch (e) {
      bot.chat.message(`${e.toString()}`);
    }
  },
  async discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const fixansi = context.fixansi;
    const config = context.config;
    const [host, port] = args[0].split(':');
    const server = await mc.ping({ host, port: Number(port ?? 25565) });
    let component = [];

    try {

      componentPush(config, server, host, port, component);

      bot?.discord?.message?.reply(`\`\`\`ansi\n${fixansi(bot.getMessageAsPrismarine(component)?.toAnsi()?.replaceAll('`', '`\u200b'))}\`\`\``);
    } catch (e) {
      bot?.discord?.message?.reply(`${e.toString()}`);
    }
  }
}
