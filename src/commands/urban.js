const CommandError = require('../util/command_error')
const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');
module.exports = {
  name: 'urban',
  description:['urban dictionary'],
  aliases:['urbandictionary'],
  trustLevel: 0,
  usage:[
    "all <definition>",
    "single <definition>",
  ],
  usages: [
    "<definition",
  ],
  async execute (context) {
    const source = context.source
    const args = context.arguments
    const bot = context.bot
    const prefix = [
      { text: '[', color: 'dark_gray' },
      { text: 'Urban', color: '#B72A00' },
      { text: '] ', color: 'dark_gray'}
    ]
   let component = [];
   let term = `${args.join(' ')}`
   const query = new URLSearchParams({ term });
   const dictResult = await request(`https://api.urbandictionary.com/v0/define?${query}`);
   const { list } = await dictResult.body.json();
   if (!list.length) {
     bot.tellraw('@a', { text: 'No results found', color: 'dark_red' });
   }
   for (const definitions of list) {
     component.push(prefix, [
                    {
                      text: `${definitions.definition.replaceAll('\r','').replaceAll('[', '\xa71\xa7n\xa7o').replaceAll(']','\xa7r\xa77')}\n`,
                      color: 'gray',
                      underlined: false,
                      italic: false,
                      translate:"",
                      hoverEvent: {
                        action:"show_text",
                        value: [
                          {
                           text: `Example \u203a \n ${definitions.example.replaceAll('\r', '').replaceAll('[', '\xa71\xa7n\xa7o').replaceAll(']','\xa7r\xa77')}`,
                           color: 'dark_blue'
                          },
                          {
                           text: `Word \u203a ${definitions.word.replaceAll('\r', '').replaceAll('[', '\xa71\xa7n\xa7o').replaceAll(']','\xa7r\xa77')}\n`,
                           color: 'dark_blue',
                          },
                          {
                           text: `Author \u203a ${definitions.author.replaceAll('\r', '').replaceAll('[', '\xa71\xa7n\xa7o').replaceAll(']','\xa7r\xa77')}\n`,
                           color: 'dark_blue'
                          },
                          {
                           text: `written on \u203a ${definitions.written_on.replaceAll('\r', '').replaceAll('[', '\xa71\xa7n\xa7o').replaceAll(']','\xa7r\xa77')}\n`,
                           color: 'dark_blue'
                          },
                          {
                           text: `Rating \u203a Thumbs-Up ${definitions.thumbs_up} / Thumbs-Down ${definitions.thumbs_down}`,
                           color: 'gray'
                          }
                        ]
                      },
                      clickEvent: {
                        action: 'open_url',
                        value: `${definitions.permalink}`
                      }
                    },
       ])
    }
    bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, component)
  },
  async discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const component = [];
  }
}

