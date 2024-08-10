const fs = require('fs');
const path = require('path');
const CommandError = require('../util/command_error.js');
const CommandSource = require('../util/command_source');
const { EmbedBuilder } = require('discord.js');
function command_manager (bot, options, config, discordClient) {
  bot.commandManager = {
    commands: {},
    commandlist: [],
    execute (source, commandName, args) {
      const command = this.getCommand(commandName.toLowerCase());
      try {
        if (source?.sources?.discord && !source?.sources?.console) {
          if (!command || !command?.execute) {
            const Embed = new EmbedBuilder()
              .setColor(`${config.colors.discord.error}`)
              .setTitle("Unknown command")
              .setDescription(`Unknown command: ${commandName}`)
            bot?.discord?.message?.reply({ embeds: [Embed] })
          }
        } else if (!source?.sources?.discord && !source?.sources?.console) {
          if (!command || !command.execute)
          throw new CommandError(
            bot.getMessageAsPrismarine([
              {
                translate: `command.unknown.command`
              },
              {
                text: '\n'
              },
              {
                text: `${commandName} `
              },
              {
                translate: "command.context.here"
              }])?.toMotd(bot.registry.language)
          )
        } else if (source?.sources?.console && !source?.sources?.discord) {
          if (!command || !command.execute)
          bot.console.warn(bot.getMessageAsPrismarine([
            {
              translate: 'command.unknown.command',
              color: "dark_red"
            },
            {
              text: "\n",
            },
            {
              text: `${commandName}`,
              color: "dark_red"
            },
            {
              translate: "command.context.here",
              color: "dark_red"
            }
          ])?.toAnsi())
        }
        if (command?.trustLevel > 0) {
          const event = bot?.discord?.message;
          const roles = event?.member?.roles?.cache;
          if (command?.trustLevel === 1 && !source?.sources?.discord) {
            const hash = args[0]
            if (args.length === 0 && bot.validation.trusted && bot.validation.owner && !source.sources.console) throw new CommandError({ text: "Please provide an trusted or owner hash" })
            if (args[0] !== bot.validation.trusted && args[0] !== bot.validation.owner && !source.sources.console) throw new CommandError({ translate: 'Invalid trusted or owner hash', color: 'dark_red' })
          } else if (command?.trustLevel === 1 && source?.sources.discord) {
            const hasRole = roles?.some(role => role.name === `${config.discord.roles.trusted}` || role.name === `${config.discord.roles.owner}`)
            if (!hasRole) throw new CommandError({ translate: 'You are trusted or the owner!' })
          }
          if (command?.trustLevel === 2 && !source.sources.discord && !source.sources.console) {
            if (args.length === 0 && bot.validation.owner) throw new CommandError({ text: "Please provide an owner hash" })
            if (args[0] !== bot.validation.owner) throw new CommandError({ translate: 'Invalid owner hash', color: 'dark_red' })
          } else if (command?.trustLevel === 2 && source.sources.discord && !source.sources.console) {
            const hasRole = roles?.some(role => role.name === `${config.discord.roles.owner}`)
            if (!hasRole) throw new CommandError({ translate: 'You are not the owner!' })
          } else if (command?.trustLevel === 3 && !source.sources.console) {
            throw new CommandError('This command can only be ran via console');
          }
        } if (!command?.discordExecute && command && source.sources.discord) {
          throw new CommandError(`${command.name} command is not supported in discord!`)
        } else if (command?.discordExecute && command && source.sources.discord) {
          return command.discordExecute({ bot, source, arguments: args, config, discordClient })
        } else if (!command?.execute && command && !source.sources.discord) {
          throw new CommandError(`${command.name} command is not supported in game!`)
        } else if (command?.execute && command && !source.sources.discord) {
          return command?.execute({ bot, source, arguments: args, config, discordClient})
        }
      } catch (error) {
        console.error(error)
        if (source?.sources?.discord && !source?.sources?.console) {
    //      if (error instanceof CommandError) {
            const Embed = new EmbedBuilder()
               .setColor(`${config.colors.discord.error}`)
               .setTitle(`${command?.name} command`)
               .setDescription(`\`\`\`${error}\`\`\``)
            bot?.discord?.message?.reply({
              embeds: [
                Embed
              ]
            })
      //    }
//            bot.tellraw("@a", { text: `${error.stack}`, color: "dark_red" })
        } else if (!source?.sources?.discord && !source?.sources?.console) {
          if (error instanceof CommandError)
          bot.tellraw("@a", { text: error.message, color: "dark_red" })
          else bot.tellraw("@a", bot.getMessageAsPrismarine({ translate: 'command.failed', color: "dark_red", hoverEvent: { action: 'show_text', contents: `${error.stack}` } })?.toMotd(bot.registry.language))
        }
      }
    },
    /*        const Embed = new EmbedBuilder()
          .setColor(`${bot.Commands.colors.discord.error}`)
          .setTitle(`${command?.name} Command`)
          .setDescription(`\`\`\`${error}\`\`\``)
        bot.discord.Message.reply({ embeds: [Embed] }) 
    */
    executeString (source, command) {
      const [commandName, ...args] = command.split(' ')
      return this.execute(source, commandName, args)
    },

    discordExecute(source, command) {
      const [commandName, ...args] = command.split(" ");
      if (source?.sources?.discord && !source.sources.console) {
        return this.discordExecute(source, commandName, args)
       }
    },
    register (command) {
      this.commands[command.name] = command
      if (command.aliases) {
        command.aliases.map((a) => (this.commands[a] = command));
      }
    },
    unregister (command) {
      this.commands = {}
    },
    getCommand (name) {
      return this.commands[name]
    },

    getCommands () {
      return Object.values(this.commands)
    }
  }

  commandlist = [];
  for (const filename of fs.readdirSync(path.join(__dirname, '../commands'))) {
    try {
      const command = require(path.join(__dirname, '../commands', filename))
      bot.commandManager.register(command)
      bot.commandManager.commandlist.push(command)
    } catch (error) {
      console.error('Failed to load command', filename, ':', error)
    }
  }
  let ratelimit = 0;
  bot.on("parsed_message", (data) => {
    if (data.type !== "minecraft:chat") return;
    const prefixes = config.prefixes;
    prefixes.map((prefix) => {
      const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString();
      if (!plainMessage.startsWith(prefix)) return
      const command = plainMessage.substring(prefix.length)
      const source = new CommandSource(data.sender, { discord: false, console: false }, true)
      ratelimit++
      setTimeout(() => {
        ratelimit--
      }, 1000)
      if (ratelimit > 2) {
        bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, { text: 'You are using commands too fast!', color: 'dark_red'})
      } else {
        bot.commandManager.executeString(source, command)
      }
    })
  })
  bot.commandManager.reload = function () {
    commandlist = [];
    for (const filename of fs.readdirSync(path.join(__dirname, "../commands"))) {
      try {
        delete require.cache[require.resolve(path.join(__dirname, "../commands", filename))]
        const command = require(path.join(__dirname, "../commands", filename));
//        bot.commandManager.unregister(command);
//        this.commands = {};
        bot.commandManager.register(command);
        bot.commandManager.commandlist.pop(command);
    //    bot.commandManager.register(command);
        bot.commandManager.commandlist.push(command)
      } catch (error) {
        bot.console.error(["Failed to load File ", filename, ":", error.stack])
        bot.tellraw("@a", { text: `Failed to reload file ${filename}\n${error.stack}`, color: "red" })
      }
    }
  }
}
module.exports = command_manager;
