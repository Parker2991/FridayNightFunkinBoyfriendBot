const { EmbedBuilder } = require('discord.js');
const CommandError = require('../util/command_error');
module.exports = {
  name: 'cloop',
  trustLevel: 1,
  aliases: [
    "commandloop"
  ],
  description: 'run cloops',
  usages: [
    "add <interval> <command>",
    "remove <index>",
    "clear",
    "list",
  ],
  execute (context) {
    const args = context.arguments
    const bot = context.bot
    const source = context.source
    if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
    switch (args[1]) {
      case 'add':
        if (parseInt(args[2]) === NaN) bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, { text: 'Invalid interval', color: 'red' })
        const interval = parseInt(args[2])
        const command = args.slice(3).join(' ');
        bot.cloop.add(command, interval)

        bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, {
          translate: 'Added \'%s\' with interval %s to the cloops',
          with: [ command, interval ]
        })
        break
      case 'remove':
        if (parseInt(args[2]) === NaN) bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, { text: 'Invalid index', color: 'red' })

        const index = parseInt(args[2])

        bot.cloop.remove(index)

        bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, {
          translate: 'Removed cloop %s',
          with: [ index ]
        })
        break
      case 'clear':
        bot.cloop.clear()

        bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, { text: 'Cleared all cloops' })
        break
      case 'list':
        const component = []

        const listComponent = []
        let i = 0
        for (const cloop of bot.cloop.list) {
          listComponent.push({
            translate: '%s \u203a %s (%s)',
            with: [
              i,
              cloop.command,
              cloop.interval
            ]
          })
          listComponent.push('\n')

          i++
        }

        listComponent.pop()

        component.push({
          translate: 'Cloops (%s):',
          with: [ bot.cloop.list.length ]
        })
        component.push('\n')
        component.push(listComponent)
        if (bot.cloop.list.length === 0) {
          bot.tellraw(`@a[name="${source?.player.profile?.name}"]`, {
            translate: 'Cloops (%s):',
            with: [ bot.cloop.list.length ]
          })
        } else {
          bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, component)
        }
      break
      default:
        bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, { text: 'Invalid action', color: 'red' })
      break
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    let Embed;
    switch (args[0]) {
      case "add":
        const interval = parseInt(args[1])
        const command = args.slice(2).join(' ')
        bot.cloop.add(command, interval)
        Embed = new EmbedBuilder()
          .setColor(`${config.colors.discord.embed}`)
          .setTitle(`${this.name} Command`)
          .setDescription(`Added ${command} with the interval ${interval} to the cloops`)
        bot?.discord?.message?.reply({ embeds: [Embed] })
      break;
      case "remove":
        var index = (args[1])
        if (parseInt(args[1]) === NaN) throw new CommandError("invalid index");
        bot.cloop.remove(index)
        Embed = new EmbedBuilder()
          .setColor(`${config.colors.discord.embed}`)
          .setTitle(`${this.name} Command`)
          .setDescription(`removed cloop ${index}`)
        bot?.discord?.message?.reply({ embeds: [Embed] })
      break
      case 'clear':
        bot.cloop.clear()
        Embed = new EmbedBuilder()
          .setColor(`${config.colors.discord.embed}`)
          .setTitle(`${this.name} Command`)
          .setDescription(`cleared cloops`)
        bot?.discord?.message?.reply({ embeds: [Embed] })
      break
     case 'list':
       const component = []
       const listComponent = []
       let i = 0
       for (const cloop of bot.cloop.list) {
         listComponent.push({
           translate: '%s \u203a %s (%s)',
           with: [
             `id ${i}`,
             cloop.command,
             cloop.interval
           ]
         })
         listComponent.push('\n')
         i++
       }
       listComponent.pop()
       component.push({
         translate: 'Cloops (%s):',
         with: [ bot.cloop.list.length ]
       })
       component.push('\n')
       component.push(listComponent)
       Embed = new EmbedBuilder()
         .setColor(`${config.colors.discord.embed}`)
         .setTitle(`${this.name} Command`)
         .setDescription(bot.getMessageAsPrismarine(component)?.toString())
       bot?.discord?.message?.reply({ embeds: [Embed] })
     break
    }
  }
}
