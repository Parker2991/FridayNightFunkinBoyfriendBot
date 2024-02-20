//samething here
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'help',
  alias: ['heko', 'cmds', 'commands'],
  description: 'Shows the help',
  usage: '[command]',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    if (args[0]) {
      for (const command of bot.command_handler.commands) {
        function run () {
          let alias = command.name

          if (command.alias.toString() !== '') {
            alias = command.alias.join(', ')
          }

          const usage = []
          if (typeof command.usage === 'string') {
            usage.push({ text: `${prefix}${command.name} `, color: 'gold' })
            usage.push({ text: command.usage, color: 'aqua' })
          } else {
            for (const value of command.usage) {
              usage.push({ text: `${prefix}${command.name} `, color: 'gold' })
              usage.push({ text: value, color: 'aqua' })
              usage.push('\n')
            }
            usage.pop()
          }

          const component = []
          component.push({ text: prefix + command.name, color: 'gold' })
          component.push({ text: ` (${alias})`, color: 'white' })
          component.push({ text: ' - ', color: 'gray' })
          component.push({ text: command.description, color: 'gray' })

          component.push('\n')

          component.push({ text: 'Trust level: ', color: 'green' })
          component.push({ text: command.trusted, color: 'yellow' })

          component.push('\n')

          component.push({ text: 'Supported on Discord: ', color: 'green' })
          component.push({ text: command.discordExecute ? 'true' : 'false', color: 'gold' })

          component.push('\n')

          component.push(usage)

          bot.tellraw(selector, component)
        }

        if (command.name === args[0]) run()
        for (const alias of command.alias) {
          if (alias === args[0]) run()
        }
      };
    } else {
      const generalCommands = []
      const trustedCommands = []
      const ownerCommands = []
      function component (command, color) {
        return {
          text: command.name + ' ',
          color,
          hoverEvent: {
            action: 'show_text',
            contents: [{
              text: 'Click here to see the information for this command',
              color: 'green'
            }]
          },
          clickEvent: {
            action: 'run_command',
            value: `${prefix}help ${command.name}`
          }
        }
      };
      for (const command of bot.command_handler.commands) {
        if (command.trusted !== 0 || command.proxy) continue
        generalCommands.push(component(command, 'green'))
      }
      for (const command of bot.command_handler.commands) {
        if (command.trusted !== 1 || command.proxy) continue
        trustedCommands.push(component(command, 'red'))
      }
      for (const command of bot.command_handler.commands) {
        if (command.trusted !== 2 || command.proxy) continue
        ownerCommands.push(component(command, 'dark_red'))
      }

      const pre = [{ text: 'Commands ', color: 'gray' }, { text: '(', color: 'dark_gray' }, { text: 'Length: ', color: 'gray' }, { text: bot.command_handler.commands.length, color: 'green' }, { text: ') ', color: 'dark_gray' }, { text: '(', color: 'dark_gray' }, { text: 'Public ', color: 'green' }, { text: 'Trusted ', color: 'red' }, { text: 'Owner', color: 'dark_red' }, { text: ') - ', color: 'dark_gray' }]
      bot.tellraw(selector, [pre, generalCommands, trustedCommands, ownerCommands])
    }
  },
  discordExecute: async function (bot, username, sender, prefix, args, channeldc, message, config) {
    if (args[0]) {
      for (const command of bot.command_handler.commands) {
        function run () {
          let alias = command.name

          if (command.alias.toString() !== '') {
            alias = command.alias.join(', ')
          }

          const usage = []
          if (typeof command.usage === 'string') {
            usage.push(`${prefix}${command.name} ${command.usage}`)
          } else {
            for (const value of command.usage) {
              usage.push(`${prefix}${command.name} ${value}`)
              usage.push('\n')
            }
            usage.pop()
          }

          const Embed = new EmbedBuilder()
            .setColor(config.discord.embedsColors.normal)
            .setTitle(`${prefix + command.name} (${alias}) - ${command.description}`)
            .setDescription(`Trust level: ${command.trusted}
                               Supported: ${command.discordExecute ? 'true' : 'false'}
                               ${usage}`
            )
          channeldc.send({ embeds: [Embed] })
        }

        if (command.name === args[0]) run()
        for (const alias of command.alias) {
          if (alias === args[0]) run()
        }
      };
    } else {
      let supportedCommands = ''
      let unsupportedCommands = ''
      for (const command of bot.command_handler.commands) {
        if (!command.discordExecute) continue
        supportedCommands += command.name + ' '
      }
      for (const command of bot.command_handler.commands) {
        if (command.discordExecute || command.proxy) continue
        unsupportedCommands += command.name + ' '
      }
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle(`Commands (Length: ${bot.command_handler.commands.length})`)
        .setDescription('**Supported Commands**\n' + supportedCommands + '\n**Unsupported Commands**\n' + unsupportedCommands)
      channeldc.send({ embeds: [Embed] })
    }
  }
}
