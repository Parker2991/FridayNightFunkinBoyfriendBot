const CommandError = require('../CommandModules/command_error')
const ud = require('../util/urban')
const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js')
module.exports = {
  name: 'urban',
  description:['urban dictionary'],
  aliases:['urbandictionary'],
  trustLevel: 0,
  usage:[
    "all <definition>",
    "single <definition>",
  ],
  async execute (context) {
    const source = context.source
    const args = context.arguments
    const bot = context.bot
    const cmdPrefix = [
      { text: '[', color: 'dark_gray' },
      { text: 'Urban', color: '#B72A00' },
      { text: '] ', color: 'dark_gray'}
    ]    
    try {     
      let definitions = await ud.define(args.join(' '))
      for (const def of definitions) {
         if (bot.options.isSavage) {
             bot.chat(bot.getMessageAsPrismarine([{text: '[Example] ',color:'dark_gray'},{ text: def.example.replaceAll('\r',''), color: 'dark_gray' }])?.toMotd().replaceAll('§','&'))
             await bot.chatDelay(100)
             bot.chat(bot.getMessageAsPrismarine([{text:'[Definition] ',color:'dark_gray'},{text: def.definition.replaceAll("\r", ""), color: 'dark_gray' }])?.toMotd().replaceAll('§','&'))
         } else {
         bot.tellraw([cmdPrefix, { text: def.example.replaceAll('\r',''), color: 'dark_gray' }])
         bot.tellraw([cmdPrefix, { text: def.definition.replaceAll("\r", ""), color: 'dark_gray' }])
         }
      }
        bot.tellraw([cmdPrefix,{text:`Definition: ${definitions[0].word}`, color:'dark_gray'}])
        bot.tellraw([cmdPrefix,{text:`Author: ${definitions[0].author}`, color:'dark_gray'}])
        bot.tellraw([cmdPrefix,{text:`👍  ${definitions[0].thumbs_up}  | 👎  ${definitions[0].thumbs_down}`, color:'gray'}])
      } catch (e) {
        bot.sendError(`${e.toString()}`)
      }
  },
    async discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const component = [];
    try {     
      let definitions = await ud.define(args.join(' '))
      for (const def of definitions) {
           component.push([
             {
               text: def.example.replaceAll('\r','')
             },
             {
                text: '\n'
             },
             {
               text: def.definition.replaceAll("\r", "")
             }
           ])
       //  bot.tellraw([cmdPrefix, { text: def.example.replaceAll('\r',''), color: 'dark_gray' }])
       //  bot.tellraw([cmdPrefix, { text: def.definition.replaceAll("\r", ""), color: 'dark_gray' }])
       }
       
     //  bot.discord.channel.send({ content: 'amonger', components: [row] })
      } catch (e) {
        let Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.error}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`${e.toString()}`)
         bot.discord.Message.reply({ embeds: [Embed] })
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