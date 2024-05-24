const wiki = require('wikipedia') 
const CommandError = require('../CommandModules/command_error')
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
	bot.sendFeedback({text:`${summary}`,color:'dark_gray'});
	} catch (error) {
	  if (error.toString() === "pageError: TypeError: Cannot read properties of undefined (reading 'pages')") {
	    bot.sendFeedback({text:'Definition not found!',color:'dark_red'})
	  } else {
	    bot.sendFeedback(`${error.toString()}`)
          }
       }
    },
   async discordExecute (context) {
      const bot = context.bot;
      const args = context.arguments;
      const source = context.source;
      try { 
        const page = await wiki.page(args.join(' '))
	const summary = await page.intro();
        let Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription('```' + summary + '```')
        bot.discord.Message.reply({ embeds: [Embed] })

      } catch (error) {
          if (error.toString() === "pageError: TypeError: Cannot read properties of undefined (reading 'pages')") {
//	    throw new CommandError({ text: 'Definition not found!', color: 'dark_red' })
            let Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.error}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`Definition not found!`)
            bot.discord.Message.reply({ embeds: [Embed] })
	  } else {
	     let Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.error}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription(`${e.toString()}`)
            bot.discord.Message.reply({ embeds: [Embed] })
            bot.console.warn(e.toString())
          }
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