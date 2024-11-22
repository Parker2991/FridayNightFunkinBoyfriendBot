const fs = require('fs');
const path = require('path');
const CommandError = require('../util/command_error.js');
const CommandSource = require('../util/command_source');
const { EmbedBuilder } = require('discord.js');

async function command_manager (context) {
  const bot = context.bot;
  const config = context.config;
  const discordClient = context.discordClient;
  const options = context.options;
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
          bot.tellraw("@a", {
            translate: "%s%s%s %s",
            color: "dark_gray",
            with: [
              { translate: "command.unknown.command", color: "red" },
              { text: "\n" },
              { text: `${commandName}` },
              { translate: "command.context.here", color: "red" }
            ]
          })
        } else if (source?.sources?.console && !source?.sources?.discord) {
          if (!command || !command.execute)
          bot.console.warn(bot.getMessageAsPrismarine({
            translate: "%s%s%s %s",
            color: "dark_gray",
            with: [
              { translate: "command.unknown.command", color: "red" },
              { text: "\n" },
              { text: `${commandName}` },
              { translate: "command.context.here", color: "red" }
            ]
          })?.toAnsi())
        }

        const event = bot.discord.message;
        const roles = event?.member?.roles?.cache;
        switch (command?.data?.trustLevel) {
          case 0:
            // do nothing since trust level 0 is public
          break;
          case 1:
            if (source?.sources?.discord) {
            const hasRole = roles?.some(role => role.name === `${config.discord.roles.trusted}` || role.name === `${config.discord.roles.admin}` || role.name === `${config.discord.roles.owner}`)
            if (!hasRole) throw new CommandError({ translate: 'You are not trusted or the owner!', color: "dark_red" })
            } else if (!source?.sources.console) {
              if (args.length === 0) throw new CommandError({ text: "Please provide a trusted, admin or owner hash", color: "dark_red" });
              if (args[0] !== bot.validation.trusted && args[0] !== bot.validation.admin && args[0] !== bot.validation.owner) throw new CommandError({ translate: 'Invalid trusted, admin or owner hash', color: 'dark_red' });
            }
          break;
          case 2:
            if (source?.sources?.discord) {
              const hasRole = roles?.some(role => role.name === `${config.discord.roles.admin}` || role.name === `${config.discord.roles.owner}`)
              if (!hasRole) throw new CommandError({ translate: 'You are not trusted or the owner!', color: "dark_red" })
            } else if (!source?.sources?.console) {
              if (args.length === 0) throw new CommandError({ text: "Please provide an admin or owner hash", color: 'dark_red' })
              if (args[0] !== bot.validation.admin && args[0] !== bot.validation.owner) throw new CommandError({ translate: 'Invalid admin or owner hash', color: 'dark_red' });
            }
          break;
          case 3:
            if (source?.sources?.discord) {
              const hasRole = roles?.some(role => role.name === `${config.discord.roles.owner}`)
              if (!hasRole) throw new CommandError({ translate: 'You are not the owner!', color: "dark_red" })
            } else if (!source?.sources?.console) {
              if (args.length === 0 && bot.validation.owner) throw new CommandError({ text: "Please provide an owner hash", color: "dark_red" })
              if (args[0] !== bot.validation.owner) throw new CommandError({ translate: 'Invalid owner hash', color: 'dark_red' })
            }
          break;
          case 4:
            if (!source?.sources?.console) {
              throw new CommandError({ text: 'This command can only be ran via console', color: "dark_red" })
            }
          break;
        }
        if (!command?.discordExecute && command && source?.sources?.discord) {
          throw new CommandError(`${command.name} command is not supported in discord!`)
        } else if (command?.discordExecute && command && source?.sources?.discord) {
          return command.discordExecute({ bot, source, arguments: args, config, discordClient })
        } else if (!command?.execute && command && !source?.sources?.discord) {
          throw new CommandError(`${command.name} command is not supported in game!`)
        } else if (command?.execute && command && !source?.sources?.discord) {
          return command?.execute({ bot, source, arguments: args, config, discordClient });
        }
      } catch (error) {
        console.error(error)
        if (source?.sources?.discord && !source?.sources?.console) {
            const Embed = new EmbedBuilder()
               .setColor(`${config.colors.discord.error}`)
               .setTitle(`${command?.data?.name} command`)
               .setDescription(`\`\`\`${error}\`\`\``)
            bot?.discord?.message?.reply({
              embeds: [
                Embed
              ]
            })
        } else if (!source?.sources?.discord && !source?.sources?.console) {
          if (error instanceof CommandError) {
            if (bot.options.isSavage || bot.options.isCreayun) {
              bot.chat.message(`&4${error.message}`)
            } else {
              if (error.toString().length > 256) {
                bot.tellraw("@a", error._message);
              } else if (error.toString().length < 256) {
                bot.chat.message(`${bot.getMessageAsPrismarine(error._message)?.toMotd().replaceAll('§','&')}`)
              } else {
                bot.tellraw("@a", error._message);
              }
            }
          } else {
            if (bot.options.isSavage || bot.options.isCreayun) {
              bot.chat.message(`${bot.getMessageAsPrismarine({ translate: "command.failed", color: "dark_red" })?.toMotd().replaceAll('§','&')}`)
            } else {
              bot.tellraw("@a", [{ translate: 'command.failed', color: "dark_red", hoverEvent: { action: 'show_text', contents: `${error.stack}` } }])
            }
          }
        }
      }
    },

    executeString (source, command) {
      const [commandName, ...args] = command.split(' ')
      return this.execute(source, commandName, args)
    },

    discordExecute(source, command) {
      const [commandName, ...args] = command.split(" ");
      if (source?.sources?.discord && !source?.sources?.console) {
        return this.discordExecute(source, commandName, args)
      }
    },

    register (command) {
      this.commands[command.data.name] = command
      if (command.data.aliases) {
        command.data.aliases.map((a) => (this.commands[a] = command));
      }
    },

    getCommand (name) {
      return this.commands[name]
    },

    getCommands () {
      return Object.values(this.commands)
    },
  }

  /*
   file loader ported from my discord bot SkiBot
   and edited to support mjs files and to support FNFBoyfriendBot's command format
  */
  commandlist = [];
  const foldersPath = path.join(__dirname, '../commands');
  const commandFolders = fs.readdirSync(foldersPath);
  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath)
    for (const filename of commandFiles) {
      try {
        const filePath = path.join(commandsPath, filename);
        if (filename.endsWith('.mjs')) {
          let command = await import(filePath);
          bot.commandManager.register(command.default);
          bot.commandManager.commandlist.push(command.default);
        }
        if (filename.endsWith('.js')) {
          let command = require(filePath);
          bot.commandManager.register(command);
          bot.commandManager.commandlist.push(command);
        }
      } catch (error) {
        console.error('Failed to load command ', filename, ':', error);
      }
    }
  }
}
module.exports = command_manager;
