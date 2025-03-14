const CommandError = require('../../util/command_error');

module.exports = {
  data: {
    name: 'filter',
    trustLevel: 2,
    aliases: [
      "blacklist",
    ],
    description: 'filter players',
    usages: [
      "add <player>",
      "list",
      "-ignorecase add <player> / -regex add <player>",
      "-regex add <player>",
      "clear",
      "remove <index>",
    ],
  },
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const config = context.config;
    let component = [];

    if (!args && !args[0] && !args[1] && !args[2] && !args[3] && !args[4] && !args[5] && !args[6]) return;

    switch (args[1]) {
      case "add":
        if (bot.filter.list().find((e) => e.name === args[2])) throw new CommandError('this player is already in the filter!');
        bot.filter.add(`${args[2]}`, false, false);
        bot.chat.message(`added ${args[2]} to the filter`);
      break;
      case "list":
        if (bot.filter.list().length === 0) {
          component.push({
            translate: "%s: (%s)",
            color: config.colors.commands.tertiary,
            with: [
              { text: "Filtered", color: config.colors.commands.primary },
              { text: `${bot.filter.list().length}`, color: config.colors.integer }
            ]
          });
        } else {
          let index = 0;
          let filterList = [];

          for (const players of bot.filter.list()) {

            if (players.regex) {
              if (players.ignorecase) {
                filterList.push({
                  translate: "%s: %s (%s %s)",
                  color: config.colors.commands.tertiary,
                  with: [
                    { text: `${index}`, color: config.colors.integer },
                    { text: `${players.name}`, color: config.colors.commands.primary },
                    { text: "regexed", color: config.colors.commands.primary },
                    { text: "ignorecased", color: config.colors.commands.primary },
                  ]
                });
              } else {
                filterList.push({
                  translate: "%s: %s (%s)",
                  color: config.colors.commands.tertiary,
                  with: [
                    { text: `${index}`, color: config.colors.integer },
                    { text: `${players.name}`, color: config.colors.commands.primary },
                    { text: "regexed", color: config.colors.commands.primary },
                  ]
                });
              }
            } else if (players.ignorecase) {
              filterList.push({
                translate: "%s: %s (%s)",
                color: config.colors.commands.tertiary,
                with: [
                  { text: `${index}`, color: config.colors.integer },
                  { text: `${players.name}`, color: config.colors.commands.primary },
                  { text: "ignorecase", color: config.colors.commands.primary },
                ]
              });
            } else {
              filterList.push({
                translate: "%s: %s",
                color: config.colors.commands.tertiary,
                with: [
                  { text: `${index}`, color: config.colors.integer },
                  { text: `${players.name}`, color: config.colors.commands.primary }
                ]
              });
            }
            filterList.push('\n');
            index++;
          }

          filterList.pop();

          component.push({
            translate: "%s: (%s)",
            color: config.colors.commands.tertiary,
            with: [
              { text: "Players", color: config.colors.commands.primary },
              { text: `${bot.filter.list().length}`, color: config.colors.integer }
            ]
          });

          component.push('\n');
          component.push(filterList);

        }

        bot.tellraw("@a", component);
      break;
      case "remove":
        bot.filter.remove(args[2]);
        bot.chat.message(`removed the index ${args[2]} from the filter`);
      break;
      case "-ignorecase":
        switch (args[2]) {
          case "-regex":
            switch (args[3]) {
              case "add":
                if (bot.filter.list().find((e) => e.name === args[4])) throw new CommandError('this player is already in the filter!');
                bot.filter.add(`${args[4]}`, true, true);
                bot.chat.message(`added ${args[4]} to the filter`);
              break;
            }
          break;
          case "add":
            if (bot.filter.list().find((e) => e.name === args[3])) throw new CommandError('this player is already in the filter!');

            bot.filter.add(`${args[3]}`, true, false);
            bot.chat.message(`added ${args[3]} to the filter`);
          break;
        }
      break;
      case "-regex":
        switch (args[2]) {
          case "add":
            if (bot.filter.list().find((e) => e.name === args[3])) throw new CommandError('this player is already in the filter!');
            bot.filter.add(`${args[3]}`, false, true);
            bot.chat.message(`added ${args[3]} to the filter`);
          break;
        }
      break;
      case "clear":
        bot.filter.clear();
        bot.chat.message('cleared the filter');
      break;
      default:
        throw new CommandError('invalid argument');
    }
  },
}
