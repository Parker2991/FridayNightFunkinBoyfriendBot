const CommandError = require('../util/command_error')
const cowsay = require('cowsay2')
const cows = require('cowsay2/cows')
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'cowsay',
  description: ['mooooo'],
  aliases: ['cws', 'cow'],
  trustLevel: 0,
  usage: ["list"],
  execute (context) {
    const bot = context.bot
    const args = context.arguments
    const component = ['']
    const source = context.source
      if (args[0] === 'list') {
        const listed = Object.keys(cows)

        let primary = true
        const message = []

        for (const value of listed) {
          message.push({
            text: value + ' ',
            color: 'gray',
            clickEvent: {
              action: 'suggest_command',
              value: `${bot.Commands.prefixes[0]}cowsay ${value} `
            }
          })
        }
      bot.sendFeedback(message)
      } else if (cows[args[0]]) {
        bot.tellraw({ text: cowsay.say(args.slice(1).join(' '), { cow: cows[args[0]] }) })
      } else {
       bot.tellraw({ text: cowsay.say(args.slice(0).join(' ')) })
      }
    },
    discordExecute (context) {
      const bot = context.bot;
      const source = context.source;
      const args = context.arguments;
      const component = ['']
      if (args[0] === 'list') {
        const listed = Object.keys(cows)

        let primary = true
        const message = []

        for (const value of listed) {
          message.push({
            text: value + ' ',
          })
        }
        let Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(bot.getMessageAsPrismarine(message)?.toString())
        bot.discord.Message.reply({ embeds: [Embed] })
       } else if (cows[args[0]]) {
         let Embed = new EmbedBuilder()
                  .setColor('#00FFFF')
                  .setTitle(`${this.name} Command`)
                  .setDescription('```' + bot.getMessageAsPrismarine({ text: cowsay.say(args.slice(1).join(' '), { cow: cows[args[0]] }) })?.toString() + '```')
         bot.discord.Message.reply({ embeds: [Embed] })

         //bot.tellraw({ text: cowsay.say(args.slice(1).join(' '), { cow: cows[args[0]] }) })
       } else {
           let Embed = new EmbedBuilder()
                  .setColor('#00FFFF')
                  .setTitle(`${this.name} Command`)
                  .setDescription('```' + bot.getMessageAsPrismarine({ text: cowsay.say(args.slice(0).join(' ')) })?.toString() + '```')
         bot.discord.Message.reply({embeds: [Embed]})
  //       bot.tellraw({ text: cowsay.say(args.slice(0).join(' ')) })
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
