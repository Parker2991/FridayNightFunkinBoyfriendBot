const http = require('http');
const https = require('https');
const util = require('util');
const fixansi = require('../../util/ansi');
const CommandError = require('../../util/command_error')
module.exports = {
  data: {
    name: 'website',
    trustLevel: 1,
    aliases: [
    ],
    description: 'look up website data',
    usages: [
      "<url>"
    ],
  },
  execute (context) {
    const bot = context.bot
    const args = context.arguments;
    if (args.slice(1).join(' ').toLowerCase().startsWith("http://")) {
      http.get(args.slice(1).join(' '), (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          try {
            bot.tellraw("@a", { text: util.inspect(rawData.toString().substring(0, 32750)), color: "dark_green" })
          } catch (e) {
            bot.tellraw("@a", e.toString());
          }
       });
      }).on('error', (e) => {
        bot.chat.message(`&4${e.toString()}`);
      });
    } else {
      https.get(args.slice(1).join(' '), (res) => {
        res.on('data', (d) => {
          bot.tellraw("@a", { text: util.inspect(d.toString().substring(0, 32750)), color: "dark_green", })
//          console.log(Object.keys(d.toString().length));
        });
      }).on('error', (e) => {
        bot.chat.message(`&4${e.toString()}`);
      });
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const config = context.config;
    let Embed;
    let fix;
    let ansi;
    //bot.discord.message.reply('e');
    if (args.join(' ').toLowerCase().startsWith("http://")) {
      http.get(args.join(' '), (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
//          try {
//            bot.tellraw("@a", { text: util.inspect(rawData), color: "dark_green" })
            ansi = bot.getMessageAsPrismarine({ text: util.inspect(rawData.toString()), color: 'dark_green'})?.toAnsi()
            fix = fixansi(ansi.replaceAll('`', '`\u200b'))
            Embed = new EmbedBuilder()
              .setColor(`${config.colors.discord.embed}`)
              .setTitle(`${this.name} Command`)
              .setDescription(`\`\`\`ansi\n${fix}\n\`\`\``)
            bot.discord.message.reply({ embeds: [Embed] })
//          } catch (e) {
//            bot.tellraw("@a", e.toString());
            //throw new CommandError(e.toString())
//          }
       });
      }).on('error', (e) => {
        //bot.chat.message(`&4${e.toString()}`);
      });
    } else {
      https.get(args.join(' '), (res) => {
        res.on('data', (d) => {
//          bot.tellraw("@a", { text: util.inspect(d.toString()), color: "dark_green", })
//          console.log(Object.keys(d.toString().length));
          ansi = bot.getMessageAsPrismarine({ text: util.inspect(d.toString()), color: 'dark_green'})?.toAnsi()
          fix = fixansi(ansi.replaceAll('`', '`\u200b'))
          Embed = new EmbedBuilder()
            .setColor(`${config.colors.discord.embed}`)
            .setTitle(`${this.name} Command`)
            .setDescription(`\`\`\`ansi\n${fix}\n\`\`\``)
          bot.discord.message.reply({ embeds: [Embed] })
//          bot.discord.message.reply('e');
        });
      }).on('error', (e) => {
        //bot.chat.message(`&4${e.toString()}`);
        //throw new CommandError(e.toString())
      });
/*
Embed = new EmbedBuilder()
            .setColor(`${config.colors.discord.embed}`)
            .setTitle(`${this.name} Command`)
            .setDescription(`\`\`\`ansi\n${fix1}\n\`\`\``)
    bot.discord.message.reply({ embeds: [Embed] })
*/
    }
  }
}
