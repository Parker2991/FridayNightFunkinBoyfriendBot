const CommandError = require('../util/command_error');
module.exports = {
  name: 'filter',
  trustLevel: 1,
  aliases: [
    "blacklist"
  ],
  description: 'filters players',
  usages: [
    "list",
    "--regex(-r) --ignorecase(-i) add <player>",
    "--ignorecase(-i) add <player>",
    "add <player>",
    "clear",
    "remove(rm) <index>"
  ],
  execute (context) {
    /*
     note:
     bot.filter.add(ignoreCase(true/false), regexed(true/false), name(args))
    */
    const bot = context.bot
    const args = context.arguments;
    const config = context.config;
    let component = [];
    if (bot.options.isCreayun || bot.options.isSavage) throw new CommandError('this command is meant for kaboom.pw and its clones')
    if (!args && !args[0] && !args[1] && !args[2] && !args[3] && !args[4]) return
    switch (args[1]?.toLowerCase()) {
      case 'list':
//        bot.tellraw(`@a`, JSON.stringify(bot.filter.list().length));
        if (bot.filter.list().length === 0) {
          component.push({
            translate: '%s: (%s)',
            color: 'dark_gray',
            with: [
              { text: 'Players', color: 'dark_blue' },
              { text: JSON.stringify(bot.filter.list().length), color: 'gold' },
            ]
          })
        } else {
          let i = 0;
          let listComponent = []
          for (const players of bot.filter.list()) {
            listComponent.push({
              translate: '%s \u203a %s',
              color: 'dark_blue',
              with: [
                { text: `${i}`, color: 'gold' },
                { text: players.name, color: 'blue' },
              ]
            })
            listComponent.push('\n')
            i++
          }

          listComponent.pop()

          component.push({
            translate: '%s: (%s)',
            color: 'dark_gray',
            with: [
              { text: 'Players', color: 'dark_blue' },
              { text: `${bot.filter.list().length}`, color: 'gold' }
            ]
          })
          component.push('\n')
          component.push(listComponent)
//          bot.tellraw("@a", component)
        }
        bot.tellraw("@a", component)
      break;
      case "--regex":
      case "-r":
        switch (args[2]?.toLowerCase()) {
          case "--ignorecase":
          case "-i":
            switch (args[3]?.toLowerCase()) {
              case "add":
              case "a":
                 bot.filter.add(true, true, args[4])
                 bot.chat.message(`Added ${args[4]} to the filter`)
              break;
            }
          break;
          case "add":
             bot.filter.add(false, true, args[3]);
             bot.chat.message(`Added ${args[3]} to the filter`);
          break;
        }
      break;
      case "--ignorecase":
      case "-i":
        switch (args[2]?.toLowerCase()) {
          case "add":
            bot.filter.add(true, false, args[3]);
            bot.chat.message(`Added ${args[3]} to the filter`)
          break;
        }
      break;
      case "add":
      case "a":
        bot.filter.add(false, false, args.slice(2).join(' '));
        bot.chat.message(`Added ${args.slice(2).join(' ')} to the filter`); 
      break;
      case "clear":
      case "c":
        bot.filter.clear();
        bot.chat.message('Cleared filter');
      break
      case "remove":
      case "rm": // rm linux command reference
        if (isNaN(args.slice(2))) throw new CommandError('argument must be a integer!');
        bot.filter.remove(args.slice(2));
        bot.chat.message(`Removed ${args.slice(2)} from the filter`);
      break
      default:
        throw new CommandError('invalid argument')
    }
  },
}
