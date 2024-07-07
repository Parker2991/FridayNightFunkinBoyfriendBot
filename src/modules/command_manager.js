const fs = require('fs');
const path = require('path');
const CommandError = require('../util/command_error.js');
const CommandSource = require('../util/command_source');
function command_manager (bot, options, config, discordClient) {
  bot.commandManager = {
    commands: {},
    commandlist: [],
    execute (source, commandName, args) {
      const command = this.getCommand(commandName.toLowerCase())

      try {
        if (!command || !command.execute) throw new CommandError({ translate: 'Unknown command: %s', with: [commandName] })
        if (command.trustLevel === 1 && bot.trusted) {
          const hash = args[0]
          if (args.length === 0 && bot.trusted && bot.owner && !source.sources.console) throw new CommandError({ text: "Please provide an trusted or owner hash" })
          if (args[0] !== bot.trusted && args[0] !== bot.owner && !source.sources.console) throw new CommandError({ translate: 'Invalid trusted or owner hash', color: 'dark_red' })
        }
        if (command.trustLevel === 2 && bot.owner) {
          if (args.length === 0 && bot.owner) throw new CommandError({ text: "Please provide an owner hash" })
          if (args[0] !== bot.owner) throw new CommandError({ translate: 'Invalid owner hash', color: 'dark_red' })
        } else if (command.trustLevel === 3 && !source.sources.console) {
          throw new CommandError('This command can only be ran via console');
        }
        if (!command.discordExecute && command && source.sources.discord) {
          throw new CommandError(`${command.name} command is not supported in discord!`)
        } else if (command.discordExecute && command && source.sources.discord) {
          return command.discordExecute({ bot, source, arguments: args, config, discordClient })
        } else if (command.execute && command && !source.sources.discord) {
          return command.execute({ bot, source, arguments: args, config, discordClient})
        }
      } catch (error) {
        console.error(error)
        if (error instanceof CommandError) bot.tellraw("@a", { text: error.message, color: "dark_red" }) //bot.tellraw({ text: `${}`, color: "dark_red" })
        else bot.tellraw("@a", { translate: 'command.failed', color: "dark_red", hoverEvent: { action: 'show_text', contents: `${error.stack}` } })
      }
    },
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
}
module.exports = command_manager;
