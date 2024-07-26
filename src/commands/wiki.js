const wiki = require('wikipedia')
const CommandError = require('../util/command_error')
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'wiki',
  description:['wikipedia'],
  trustLevel: 0,
  aliases:['wikipedia'],
  usage:["<definition>"],
  async execute (context) {
    const source = context.source
    const args = context.arguments
    const bot = context.bot
    try {
      const page = await wiki.page(args.join(' '))
      const summary = await page.intro();
      bot.tellraw(`@a`, { text: `${summary}`, color: 'gray' });
    } catch (error) {
       if (error.toString() === "pageError: TypeError: Cannot read properties of undefined (reading 'pages')") {
         bot.tellraw(`@a`, { text: 'Definition not found!', color: 'dark_red' })
       } else {
         bot.tellraw(`@a`, `${error.toString()}`)
       }
    }
  }
}
