const bots = require('../data/bots.json');
const CommandError = require('../util/command_error')
module.exports = {
  name: "bots",
  description: ["shows a list of known bots"],
  aliases: ["knownbots"],
  trustLevel: 0,
  usage:[""],
 async execute(context) {
    const query = context.arguments.join(" ").toLowerCase();
    const bot = context.bot;
    if (query.length === 0) {
      const list = [];
      for (const info of bots) {
        if (list.length !== 0) {
           list.push({ text: ", ", color: "gray" });
        }
        list.push(info.name);

      }
      bot.tellraw("@a",
        ["Known bots (", { text: JSON.stringify(bots.length), color: 'gold' }, { text: ") - ", color: 'gray' }, ...list],
        false,
      );
      return;
    }
    for (const info of bots) {
      const plainName = String(
        context.bot.getMessageAsPrismarine(info.name),
      ).toLowerCase();
      if (plainName.includes(query)) this.sendBotInfo(info, context.bot);
    }
  },

  sendBotInfo(info, bot) {
    const component = [""];
    component.push("Name: ", info.name);
    if (info.exclaimer) component.push("\n", "Exclaimer: ", info.exclaimer);
    if (info.authors && info.authors.length !== 0) {
      component.push("\n", "Authors: ");
      for (const author of info.authors) {
        component.push(author, { text: ", ", color: "gray" });
      }
      component.pop();
    }
    if (info.foundation) component.push("\n", "Foundation: ", info.foundation);
    if (info.prefixes && info.prefixes.length !== 0) {
      component.push("\n", "Prefixes: ");
      for (const prefix of info.prefixes) {
        component.push(prefix, { text: ", ", color: "gray" });
      }
      component.pop();
    }
    bot.tellraw("@a", [component]);
  },
};
//it doing it just for the ones i added lol
// prob a replit moment, it probably thinks there are regexes in the strings
