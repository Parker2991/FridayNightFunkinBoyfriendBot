const CommandError = require('../CommandModules/command_error');
const https = require('https');
const util = require('util');
module.exports = {
  name: 'website',
  trustLevel:0,
  aliases:['web','websitedata','webdata'],
  description:['check website data'],
  usage:["<url>"],
async execute (context) {
   const bot = context.bot;
   const source = context.source
   const args = context.arguments
   try {
     https.get(`${args.join(' ')}`, (res) => {
       res.setEncoding('utf8');
       res.on('data', (data) => {
         bot.tellraw({ text: data, color: 'dark_gray' })
       });
     }).on('error', (e) => {
        bot.sendError(`${e}`);
     }); 
    } catch (e) {
      bot.sendError(`${e.toString()}`)
    } 
  }
}
