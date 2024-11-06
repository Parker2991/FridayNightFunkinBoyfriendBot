const cowsay = require('cowsay2');
const cows = require('cowsay2/cows');
const { EmbedBuilder } = require('discord.js');
const fixansi = require('../../util/ansi');
module.exports = {
  data: {
    name: 'cowsay',
    trustLevel: 0,
    aliases: [
    ],
    description: 'cows',
    usages: [
      "<message>",
      "list"
    ],
  },
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const source = context.source;
    if (args[0]?.toLowerCase() === "list") {
      const list = Object.keys(cows);
      let content = [];
      let color = true;
      for (const value of list) {
        content.push([
          {
            text: value + ' ',
            color: (!((color = !color)) ? 'blue' : 'dark_blue'),
          }
        ])
      }
      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, content)
    } else if (cows[args[0]]) {
      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, {
        text: cowsay.say(args.slice(1).join(' '),
        { cow: cows[args[0]] })
      })
    } else {
      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, { text: cowsay.say(args.slice(0).join(' ')) })
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    let Embed
    if (args[0] === "list") {
      const list = Object.keys(cows);
      let content = [];
      let color = true;
      for (const value of list) {
        content.push([
          {
            text: value + ' ',
          }
        ])
      }
      const ansiList = bot.getMessageAsPrismarine(content)?.toString();
      const fixAnsiList = fixansi(ansiList.replaceAll('`', '`\u200b'))
      Embed = new EmbedBuilder()
              .setColor(`${config.colors.discord.embed}`)
              .setTitle(`${this.name} Command`)
              .setDescription(`\`\`\`ansi\n${fixAnsiList}\n\`\`\``)
      bot.discord.message.reply({ embeds: [Embed] })
    } else if (cows[args[0]]) {
      const ansiCow1 = bot.getMessageAsPrismarine({ text: cowsay.say(args.slice(1).join(' '), { cow: cows[args[0]] }) })?.toAnsi()
      const fixAnsiCow1 = fixansi(ansiCow1.replaceAll('`', '`\u200b'))
      Embed = new EmbedBuilder()
        .setColor(`${config.colors.discord.embed}`)
        .setTitle(`${this.name} Command`)
        .setDescription(`\`\`\`ansi\n${fixAnsiCow1}\n\`\`\``)
      bot.discord.message.reply({ embeds: [Embed] })
    } else {
      Embed = new EmbedBuilder()
        .setColor(`${config.colors.discord.embed}`)
        .setTitle(`${this.name} Command`)
        .setDescription(`\`\`\`ansi\n${cowsay.say(args.slice(0).join(' '))}\n\`\`\``)
      bot.discord.message.reply({ embeds: [Embed] });
    }
  }
}
