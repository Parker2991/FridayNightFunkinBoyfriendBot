const CommandError = require('../../util/command_error');

module.exports = {
  data: {
    name: "cloop",
    aliases: [
      "commandloop",
      "loop"
    ],
    description: "loops commands",
    trustLevel: 1,
    usages: [
      "add <interval> <command>",
      "remove <index>",
      "list",
      "clear"
    ]
  },
  execute (context) {
    const bot = context.bot;
    const config = context.config;
    const args = context.arguments;

    if (!args && !args[0] && !args[1] && !args[2] && !args[3] && !args[4] && !args[5]) return;

    switch (args[1]?.toLowerCase()) {
      case "add":
        if (isNaN(args[2]) === true) throw new CommandError("invalid interval");

        const interval = parseInt(args[2]);
        const command = args.slice(3).join(' ');
        bot.cloop.add(command, interval);

        bot.chat.message(`added ${command} to the cloops with the interval ${interval}`);
      break;
      case "clear":
        bot.cloop.clear();
        bot.chat.message('cleared the cloops');
      break;
      case "remove":
        if (isNaN(args[2]) === true) throw new CommandError('argument must be an integer!');

        const index = parseInt(args[2]);
        bot.cloop.remove(index);

        bot.chat.message(`removed ${index} from cloops`);
      break;
      case "list":
        const component = []

        const listComponent = []
        let i = 0
        for (const cloop of bot.cloop.list) {
          listComponent.push({
            translate: '%s \u203a %s (%s)',
            color: config.colors.commands.primary,
            with: [
              { text: `${i}`, color: config.colors.integer },
              cloop.command,
              { text: `${cloop.interval}`, color: config.colors.integer },
            ]
          })
          listComponent.push('\n')
          i++
        }

        listComponent.pop()

        component.push({
          translate: 'Cloops (%s):',
          color: config.colors.commands.primary,
          with: [
            { text: `${bot.cloop.list.length}`, color: config.colors.integer }
          ]
        })
        component.push('\n')
        
        if (bot.cloop.list.length > 0) {
          component.push(listComponent)
        }
        bot.tellraw("@a", component);
        /*
        if (bot.cloop.list.length === 0) {
          bot.tellraw(`@a[name="${source?.player.profile?.name}"]`, {
            translate: 'Cloops (%s):',
            color: config.colors.commands.primary,
            with: [
              { text: `${bot.cloop.list.length}`, color: config.colors. }
            ]
          })
        } else {
          bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, component)
        }*/
      break;
      default:
        throw new CommandError('invalid argument')
    }
  }
}
