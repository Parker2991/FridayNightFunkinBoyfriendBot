const CommandError = require('../CommandModules/command_error');
const { EmbedBuilder } = require('discord.js');
const util = require('util');
const { stylize } = require('../util/eval_colors');
module.exports = {
  name: 'playerinfo',
  description:['check player info'],
  aliases:[],
  trustLevel: 0,
  usage:[
    "<player>",
  ],
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const source = context.source;
    const player = bot.players.find(player => player.profile.name === `${args.join(' ')}`);
    try {
      if (player === undefined) {
        bot.tellraw('Unknown Player')
      } else {
        bot.sendFeedback([{text:`Player Name: `,color:'gray'},{text:`${player.profile.name}`}])
        bot.sendFeedback([{text:`Player UUID: `,color:'gray'},{text:`${player.uuid}`,color:'gold'}])
        bot.sendFeedback([{text:`Player Gamemode: `,color:'gray'},{text:`${player.gamemode}`,color:'gold'}])
        bot.sendFeedback([{text:`Player Latency: `,color:'gray'},{text:`${player.latency}`,color:'gold'}])
        bot.sendFeedback([{text:`Player DisplayName: `,color:'gray'},{text:`${bot.getMessageAsPrismarine(player.displayName ?? player.profile.name)?.toMotd().replaceAll('§','§')}`}])
      }
    } catch(e) { 
      bot.tellraw(`${e}`)
    }
  },
  discordExecute(context) {
   const bot = context.bot;
   const args = context.arguments;
   const source = context.source;
   const player = bot.players.find(player => player.profile.name === `${args.join(' ')}`);
   /*
     bot.sendFeedback([{text:`Player Name: `,color:'dark_gray'},{text:`${player.profile.name}`}])
        bot.sendFeedback([{text:`Player UUID: `,color:'dark_gray'},{text:`${player.uuid}`,color:'gold'}])
        bot.sendFeedback([{text:`Player Gamemode: `,color:'dark_gray'},{text:`${player.gamemode}`,color:'gold'}])
        bot.sendFeedback([{text:`Player Latency: `,color:'dark_gray'},{text:`${player.latency}`,color:'gold'}])
        bot.sendFeedback([{text:`Player DisplayName: `,color:'dark_gray'},{text:`${bot.getMessageAsPrismarine(player.displayName ?? player.profile.name)?.toMotd().replaceAll('§','§')}`}])
   */
    try {
      if (player === undefined) {
         throw new CommandError('Player not found')
      } else {
        let Embed = new EmbedBuilder()
                  .setColor(`${bot.Commands.colors.discord.embed}`)
                  .setTitle(`${this.name} Command`)
                  .setDescription('```ansi\n' + bot.getMessageAsPrismarine([{text:`Player Name: `,color:'gray'},{text:`${player.profile.name}`},{text:`\nPlayer UUID: `,color:'gray'},{text:`${player.uuid}`,color:'gold'},{text:`\nPlayer Gamemode: `,color:'gray'},{text:`${player.gamemode}`,color:'gold'},{text:`\nPlayer Latency: `,color:'gray'},{text:`${player.latency}`,color:'gold'},{text:`\nPlayer DisplayName: `,color:'gray'},{text:`${bot.getMessageAsPrismarine(player.displayName ?? player.profile.name)?.toMotd().replaceAll('§','§')}`}])?.toAnsi().replaceAll('`', '`\u200b') + '```')
      bot.discord.Message.reply({ embeds: [Embed] })
    }
    } catch (e) {
      bot.discord.Message.reply(e.toString())
    }
  }
}