const wiki = require('wikipedia');
const CommandError = require('../../util/command_error');
const { EmbedBuilder } = require('discord.js');
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
    const { MessageBuilder } = require('prismarine-chat')(bot.options.version);
    try {
      const page = await wiki.page(args.join(' '))
      const summary = await page.intro();
      bot.tellraw("@a", new MessageBuilder()
        .setText(summary)
        .setColor("gray")
      )
    } catch (error) {
      if (error.toString() === "pageError: TypeError: Cannot read properties of undefined (reading 'pages')") {
        bot.tellraw("@a", new MessageBuilder()
          .setText("Article not found!")
          .setColor("red")
        )
      } else {
        bot.tellraw(`@a`, `${error.toString()}`)
      }
    }
  }
}
