const CommandError = require('../../util/command_error');
module.exports = {
  data: {
    name: "list",
    aliases: [
      "pl",
      "playerlist"
    ],
    description: "check whos online on the server",
    trustLevel: 0,
    usages: [

    ]
  },
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const confix = context.config;

    let component = [];
    let infoComponent = [];
    let playerCount = [];

    playerCount.push({
      translate: "%s: (%s)\n",
      color: config.colors.commands.tertiary,
      with: [
        { text: "Players", color: config.colors.commands.primary },
        { text: `${bot.players.length}`, color: config.colors.integer },
      ]
    });

    component.push(playerCount);

    for (const player of bot.players) {
      component.push({
        translate: "%s \u203a %s [%s: %s]",
        color: config.colors.commands.tertiary,
        with: [
          player.displayName ?? player.profile.name,
          { text: `${player.uuid}`, color: config.colors.commands.primary },
          { text: "Latency", color: config.colors.commands.primary },
          { text: `${player.latency}`, color: config.colors.integer }
        ]
      });
      component.push("\n");
    }
    component.pop();
    bot.tellraw("@a", component);
  }
}
