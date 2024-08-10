const http = require('http');
const https = require('https');
const util = require('util');
module.exports = {
  name: 'website',
  trustLevel: 0,
  aliases: [
  ],
  description: 'look up website data',
  usages: [
    "<url>"
  ],
  execute (context) {
    const bot = context.bot
    const args = context.arguments;
    if (args.join(' ').toLowerCase().startsWith("http://")) {
      http.get(args.join(' '), (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          try {
            bot.tellraw("@a", { text: util.inspect(rawData), color: "dark_green" })
          } catch (e) {
            bot.tellraw("@a", e.toString());
          }
       });
      }).on('error', (e) => {
        bot.chat.message(`&4${e.toString()}`);
      });
    } else if (args.join(' ').toLowerCase().startsWith('https://')) {
      https.get(args.join(' '), (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
        res.on('data', (d) => {
          bot.tellraw("@a", { text: util.inspect(d), color: "dark_green", })
        });
      }).on('error', (e) => {
        bot.chat.message(`&4${e.toString()}`);
      });
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
  }
}
