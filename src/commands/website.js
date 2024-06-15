const CommandError = require('../CommandModules/command_error');
const https = require('https');
const http = require('http');
const util = require('util');
const { EmbedBuilder } = require('discord.js');
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
     if (args.join(' ').startsWith('http://') && !args.join(' ').startsWith('https://')) {
    const options = {
            hostname: `${args.join(' ')}`
    }
http.request(`${args.join(' ')}`, (res) => {
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    //console.log(`BODY: ${chunk}`);
    bot.tellraw(chunk)
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});
     } else if (args.join(' ').startsWith('https://') && !args.join(' ').startsWith('http://')) {
     https.get(`${args.join(' ')}`, (res) => {
       res.setEncoding('utf8');
       res.on('data', (data) => {
         bot.tellraw({ text: data, color: 'dark_gray' })
       });
     }).on('error', (e) => {
        bot.sendError(`${e.toString()}`);
     }); 
    }
    } catch (e) {
      bot.sendError(`${e.toString()}`)
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    try { 
      https.get(`${args.join(' ')}`, (res) => {
       res.setEncoding('utf8');
       res.on('data', (data) => {
          let Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription('```' + bot.getMessageAsPrismarine(data)?.toString() + '```')
              bot.discord.Message.reply({embeds: [Embed]})
       })
     }).on('error', (e) => {
        let Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.error}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription('```' + bot.getMessageAsPrismarine(e.toString())?.toString() + '```')
        bot.discord.Message.reply({embeds: [Embed]})
     }); 
    } catch (e) {
      let Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.error}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription('```' + bot.getMessageAsPrismarine(e.toString())?.toString() + '```')
      bot.discord.Message.reply({embeds: [Embed]})
    }
  }
}
/*
const Embed = new EmbedBuilder()
                  .setColor('#00FFFF')
                  .setTitle(`${this.name} Command`)
                  .setDescription(`${bot.getMessageAsPrismarine(`Players: (` + bot.players.length + ')')?.toString()}` + `${bot.getMessageAsPrismarine('\n')?.toString()}` + `${bot.getMessageAsPrismarine(component)?.toString()}`)
              bot.discord.Message.reply({embeds: [Embed]})

*/