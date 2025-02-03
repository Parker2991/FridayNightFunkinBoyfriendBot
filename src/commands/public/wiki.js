const wiki = require('wikipedia');
const CommandError = require('../../util/command_error');

async function components (config, summary, component) {
  component.push({ text: summary, color: config.colors.commands.primary })
}

module.exports = {
  data: {
    name: 'wiki',
    description: 'wikipedia',
    trustLevel: 0,
    aliases: [
      'wikipedia'
    ],
    usages:[
      "<article>"
    ],
  },
  async execute (context) {
    const source = context.source;
    const args = context.arguments;
    const bot = context.bot;
    const config = context.config;
    let component = [];

    try {
      const page = await wiki.page(args.join(' '));
      const summary = await page.intro();

      components(config, summary, component);

      bot.tellraw("@a", component);

    } catch (e) {
      if (e.toString() === "pageError: TypeError: Cannot read properties of undefined (reading 'pages')") {
        bot.chat.message('&cArticle not found!');
      } else {
        bot.tellraw(`@a`, `${e.toString()}`)
      }
    }

/*    try {
      const page = await wiki.page(args.join(' '))
      const summary = await page.intro();
      bot.tellraw(`@a`, { text: `${summary}`, color: 'gray' });
    } catch (error) {
      if (error.toString() === "pageError: TypeError: Cannot read properties of undefined (reading 'pages')") {
        bot.chat.message('&cArticle not found!');
      } else {
        bot.tellraw(`@a`, `${error.toString()}`)
      }
    }*/
  }
}
