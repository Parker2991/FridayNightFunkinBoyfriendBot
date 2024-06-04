const CommandError = require('../CommandModules/command_error')
const CommandSource = require('../CommandModules/command_source')
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'cmdtest',
  description:['usages are test and msg error'],
  trustLevel: 0,
  aliases:['cmdtst', 'commandtest', 'commandtst'],
  usage:[
   "msg",
   "error",
 ],
 execute (context) {
    const bot = context.bot 
    const player = context?.source?.player?.profile?.name
    const uuid = context?.source?.player?.uuid
    const message = context.arguments.join(' ') // WHY SECTION SIGNS!!
    const args = context.arguments
    const source = context.source
    switch (args[0]) {
      case "message":
      case 'msg':
                 if (bot.options.isCreayun || bot.options.useChat || bot.options.isSavage) {
                         bot.chat(`Hello, World!, Player: ${bot.getMessageAsPrismarine(context.source.player.displayName ?? context.source.player.profile.name).toMotd().replaceAll('§', '&')}, uuid: ${context.source.player.uuid}, Argument: ${args.slice(1).join(' ')}`)                      
                 } else {
                   bot.tellraw([
                               {
                                text: `Hello, World!, Player: ${bot.getMessageAsPrismarine(context.source.player.displayName ?? context.source.player.profile.name)?.toMotd()}§r`,
                                color: 'gray',
                                bold: false
                               },
                               {
                                text: ` Args: ${args.slice(1).join(' ')}`,
                                color: 'gray',
                                bold: false,
                               }
                   ])
                 }
                 break
                 case 'error': 
                 case 'err':
                     throw new Error(args.slice(1).join(' '))
                 break
                  default:
                 if (bot.options.isCreayun) { 
                    bot.chat('&4Invalid action')     
                        // bot.chat('the usages are msg and error')
                 } else {
        bot.sendError([{ text: 'Invalid action', color: 'dark_red', bold:false }])
 //       bot.sendError([{ text: 'the usages are msg and error', color: 'gray', bold:false }])
      }
    }   
  },
  discordExecute (context) {
    const args = context.arguments;
    const bot = context.bot;
    switch (args[0]) {
    case "message":
    case "msg":
    const Embed = new EmbedBuilder()
                  .setColor('#00FFFF')
                  .setTitle(`${this.name} Command`)
                  .setDescription(`Hello world!, User: ${context?.source?.player?.displayName ?? context?.source?.player?.profile?.name}, Arguments: ${args.slice(1).join(' ')}`)
              bot.discord.Message.reply({embeds: [Embed]})
    break
    case "error":
    case "err":
      throw new CommandError(`${args.slice(1).join(' ')}`)
    }
  }
}

  /*
  
*/
//context.source.player.displayName ?? context.source.player.profile.name,