const CommandError = require('../../util/command_error');
const sleep = require('../../util/sleep.js');
const fixansi = require('../../util/ansi');
const { EmbedBuilder } = require('discord.js');
module.exports = {
  data: {
    name: 'help',
    trustLevel: 0,
    aliases: [
      "heko",
      "?",
      "cmds",
      "hell",
      "hello",
      "helo",
      "commands",
      "commandshelp",
    ],
    description: 'a list of the bots commands',
    usages: [
      "",
      "<command>",
    ],
  },
  execute (context) {
    const commandList = [];
    const bot = context.bot;
    const source = context.source;
    const args = context.arguments;
    const category = {
      translate: '(%s%s%s%s%s%s%s) \u203a ',
      bold: false,
      color: 'gray',
      with: [
        { color: "aqua", text: 'Public'},
           { color: "gray", text: ' | '},
        { color: "dark_aqua", text: 'Trusted'},
           { color: 'gray', text: ' | '},
        { color: "blue", text: "Admin" },
          { color: "gray", text: " | " },
        { color: "dark_blue", text: 'Owner'},
      ]
    }
    let public = [];
    let trusted = [];
    let admin = [];
    let owner = [];
    for (const command of bot.commandManager.commandlist) {
      let usagesComponent = [];
      let commandComponent = [];
      for (const usages of command.data.usages) {
        if (command?.data?.trustLevel === 1) {
          usagesComponent.push({
            translate: "%s%s %s",
            with: [
              { text: `${config.prefixes[0]}`, color: "dark_blue" },
              { text: `${command.data.name} <trusted/admin/owner hashes>`, color: "blue" },
              { text: `${usages}`, color: "aqua" },
            ]
          })
        } else if (command?.data.trustLevel === 2) {
          usagesComponent.push({
            translate: "%s%s %s",
            with: [
              { text: `${config.prefixes[0]}`, color: "dark_blue" },
              { text: `${command.data.name} <admin/owner hashes>`, color: "blue" },
              { text: `${usages}`, color: "aqua" },
            ]
          })
        } else if (command?.data.trustLevel === 3) {
          usagesComponent.push({
            translate: "%s%s %s",
            with: [
              { text: `${config.prefixes[0]}`, color: "dark_blue" },
              { text: `${command.data.name} <owner hash>`, color: "blue" },
              { text: `${usages}`, color: "aqua" },
            ]
          })
        } else if (command?.data.trustLevel === 0 || command.data.trustLevel === 4) {
          usagesComponent.push({
            translate: "%s%s %s",
            with: [
              { text: `${config.prefixes[0]}`, color: "dark_blue" },
              { text: `${command.data.name}`, color: "blue" },
              { text: `${usages}`, color: "aqua" },
            ]
          })
        }
        usagesComponent.push('\n');
      }
      usagesComponent.pop();
      commandComponent.push({
        translate: "%s %s %s\n%s %s %s\n%s %s %s\n%s %s %s\n%s %s",
        color: "dark_gray",
        with: [
          { text: "Command Name", color: "dark_blue" },
          { text: "\u203a" },
          { text: `${command.data.name}`, color: "blue" },
          { text: "Aliases", color: "dark_blue" },
          { text: "\u203a" },
          { text: `${command.data.aliases.toString().replaceAll(',',' ')}`, color: "blue" },
          { text: "Description", color: "dark_blue" },
          { text: "\u203a" },
          { text: `${command.data.description}`, color: "blue" },
          { text: "Trust Level", color: "dark_blue" },
          { text: "\u203a" },
          { text: `${command.data.trustLevel}`, color: "gold" },
          { text: "Usages", color: "dark_blue" },
          { text: "\u203a" }
        ]
      })
      commandComponent.push("\n");
      commandComponent.push(usagesComponent);
//      for (const aliases of command.aliases) {
        if (args[0]?.toLowerCase() === command.data.name) {
          if (bot.options.isSavage) {
            bot.chat.message(`${bot.getMessageAsPrismarine(commandComponent)?.toMotd().replaceAll('§','&')}`);
          } else {
            bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, commandComponent)
          }
          return;
        }
  /*      } if (args[0]?.toLowerCase() === aliases) {
          if (bot.options.isSavage) {
            bot.chat.message(`${bot.getMessageAsPrismarine(commandComponent)?.toMotd().replaceAll('§','&')}`)
          } else {
            bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, commandComponent)
          }
          return
        }
        console.log(aliases)*/
//      }
// tellraw @p {"text":"this","clickEvent":{"action":"suggest_command","value":"this"}}
      if (command.data.trustLevel === 0) {
        public.push([
          {
            text: command.data.name + ' ',
            color: "aqua",
            translate: "",
            hoverEvent: {
              action: "show_text",
              value: [
                {
                  text: `Command: ${command.data.name}\n`,
                  color: 'blue'
                },
                {
                  text: `Trust Level: `,
                  color: 'blue'
                },
                {
                  text: `${command.data.trustLevel}\n`,
                  color: 'gold'
                },
                {
                  text: `${command.data.description}\n`,
                  color: 'blue'
                },
                {
                  text: `Command Aliases: ${command.data.aliases}\n`,
                  color: 'blue'
                },
                {
                  text: 'click on me to use me :)',
                  color: 'dark_blue',
                },
              ],
            },
            clickEvent: {
              action: 'suggest_command',
              value: `${config.prefixes[0]}${command?.data.name}`
            }
          }
        ])
      } else if (command.data.trustLevel === 1) {
        trusted.push([
          {
            text: command.data.name + ' ',
            color: "dark_aqua",
            translate: "",
            hoverEvent: {
              action: "show_text",
              value: [
                {
                  text: `Command: ${command.data.name}\n`,
                  color: 'blue'
                },
                {
                  text: `Trust Level: `,
                  color: 'blue'
                },
                {
                  text: `${command.data.trustLevel}\n`,
                  color: 'gold'
                },
                {
                  text: `${command.data.description}\n`,
                  color: 'blue'
                },
                {
                  text: `Command Aliases: ${command.data.aliases}\n`,
                  color: 'blue'
                },
                {
                  text: 'click on me to use me :)',
                  color: 'dark_blue',
                },
              ],
            },
            clickEvent: {
              action: 'suggest_command',
              value: `${config.prefixes[0]}${command?.data.name}`
            }
          }
        ])
      } else if (command.data.trustLevel === 2) {
        admin.push([
          {
            text: command.data.name + ' ',
            color: "blue",
            translate: "",
            hoverEvent: {
              action:"show_text",
              value: [
                {
                  text: `Command: ${command.data.name}\n`,
                  color: 'blue'
                },
                {
                  text: `Trust Level: `,
                  color: 'blue'
                },
                {
                  text: `${command.data.trustLevel}\n`,
                  color: 'gold'
                },
                {
                  text: `${command.data.description}\n`,
                  color: 'blue'
                },
                {
                  text: `Command Aliases: ${command.data.aliases}\n`,
                  color: 'blue'
                },
                {
                  text: 'click on me to use me :)',
                  color: 'dark_blue',
                },
              ],
            },
            clickEvent: {
              action: 'suggest_command',
              value: `${config.prefixes[0]}${command?.data.name}`
            }
          }
        ])
      } else if (command.data.trustLevel === 3) {
        owner.push([
          {
            text: command.data.name + ' ',
            color: "dark_blue",
            translate: "",
            hoverEvent: {
              action: "show_text",
              value: [
                {
                  text: `Command: ${command.data.name}\n`,
                  color: 'blue'
                },
                {
                  text: `Trust Level: `,
                  color: 'blue'
                },
                {
                  text: `${command.data.trustLevel}\n`,
                  color: 'gold'
                },
                {
                  text: `${command.data.description}\n`,
                  color: 'blue'
                },
                {
                  text: `Command Aliases: ${command.data.aliases}\n`,
                  color: 'blue'
                },
                {
                  text: 'click on me to use me :)',
                  color: 'dark_blue',
                },
              ],
            },
            clickEvent: {
              action: 'suggest_command',
              value: `${config.prefixes[0]}${command?.data.name}`
            }
          }
        ])
      }
    }
    const length = bot.commandManager.commandlist.filter(c => c.data.trustLevel != 4).length
    if (bot.options.useChat) {
      bot.chat.message(bot.getMessageAsPrismarine([
          {
            text: 'Commands (',
            color: 'gray'
          },
          {
            text: length,
            color: 'gold'
          },
          {
            text: ') ',
            color: 'gray'
          },
          category,
        ])?.toMotd().replaceAll('§','&'))
      setTimeout(() => {
      bot.chat.message(bot.getMessageAsPrismarine(public)?.toMotd().replaceAll("§","&"))
      }, 300)
      setTimeout(() => {
      bot.chat.message(bot.getMessageAsPrismarine(trusted)?.toMotd().replaceAll("§","&"));
      }, 300)
      setTimeout(() => {
      bot.chat.message(bot.getMessageAsPrismarine(admin)?.toMotd()?.replaceAll('§','&'))
      }, 300)
      setTimeout(() => {
      bot.chat.message(bot.getMessageAsPrismarine(owner).toMotd().replaceAll("§","&"));
      }, 300)
    } else if (bot.options.isSavage) {
      bot.chat.message(bot.getMessageAsPrismarine([
        {
          text: 'Commands (',
          color: 'gray'
        },
        {
          text: length,
          color: 'gold'
        },
        {
          text: ') ',
          color: 'gray'
        },
        category,
      ])?.toMotd().replaceAll('§','&'))
      setTimeout(() => {
      bot.chat.message(bot.getMessageAsPrismarine(public)?.toMotd().replaceAll("§","&"))
      }, 400)
      setTimeout(() => {
      bot.chat.message(bot.getMessageAsPrismarine(trusted)?.toMotd().replaceAll("§","&"));
      }, 400)
      setTimeout(() => {
      bot.chat.message(bot.getMessageAsPrismarine(admin)?.toMotd()?.replaceAll('§','&'))
      }, 400)
      setTimeout(() => {
      bot.chat.message(bot.getMessageAsPrismarine(owner).toMotd().replaceAll("§","&"));
      }, 400)
    } else if (admin.length === 0) {
      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, [
                  { text: 'Commands (', color: 'gray' },
                  { text: JSON.stringify(length), color: 'gold' },
                  { text: ') ', color: 'gray' },
                  category,
                  '\n',
                  public,
                  trusted,
                  owner
      ])
    } else {
      bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, [
                  { text: 'Commands (', color: 'gray' },
                  { text: JSON.stringify(length), color: 'gold' },
                  { text: ') ', color: 'gray' },
                  category,
                  '\n',
                  public,
                  trusted,
                  admin,
                  owner
      ])
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const category = {
      translate: '(%s%s%s%s%s%s%s) \u203a ',
      bold: false,
      color: 'gray',
      with: [
        { color: "aqua", text: 'Public'},
           { color: "gray", text: ' | '},
        { color: "dark_aqua", text: 'Trusted'},
           { color: 'gray', text: ' | '},
        { color: 'blue', text: 'Admin' },
          { color: 'gray', text: ' | ' },
        { color: "dark_blue", text: 'Owner'},
      ]
    }
    let public = [];
    let trusted = [];
    let admin = [];
    let owner = [];
    for (const command of bot.commandManager.commandlist) {
      if (args[0] === command.data.name) {
        const ansi = bot.getMessageAsPrismarine([ { text: `CommandName \u203a ${command.data.name}\n`, color: 'gray', }, { text: `Aliases \u203a ${command.data.aliases}\n`, color: 'gray', }, { text: `Description \u203a ${command.data.description}\n`, color: 'gray', }, { text: `trustLevel \u203a ${command.data.trustLevel}\n`, color: 'gray' }, { text: `Usages \u203a ${command?.data.usages}`, color: "dark_gray" }, ])?.toAnsi().replaceAll('```\u001b[9```' + '```\u001b[3```')
        const fix = fixansi(ansi.replaceAll('`', '`\u200b'))
        const Embed = new EmbedBuilder()
              .setColor(`${config.colors.discord.embed}`)
              .setTitle(`${this.data.name} Command`)
              .setDescription(`\`\`\`ansi\n${fix}\n\`\`\``)
        bot.discord.message.reply({ embeds: [Embed] })
        return
      }
      if (command?.data.trustLevel === 0 && command.discordExecute) {
        public.push([
          {
            text: command.data.name + ' ',
            color: "aqua",
          }
        ])
      } else if (command?.data.trustLevel === 1 && command.discordExecute) {
        trusted.push([
          {
            text: command.data.name + ' ',
            color: "dark_aqua"
          }
        ])
      } else if (command?.data.trustLevel === 2 && command.discordExecute) {
        admin.push([
          {
            text: command.data.name + ' ',
            color: 'blue'
          }
        ])
      } else if (command?.data.trustLevel === 3 && command.discordExecute) {
        owner.push([
          {
            text: command.data.name + ' ',
            color: "dark_blue",
          }
        ])
      }
    }
    const length = bot.commandManager.commandlist.filter(c => c.data.trustLevel !== 4 && c.discordExecute).length
    const ansi1 = bot.getMessageAsPrismarine([ { text: 'Commands (', color: 'gray' }, { text: JSON.stringify(length), color: 'gold' }, { text: ') ', color: 'gray' }, category, '\n', public, trusted, owner ])?.toAnsi();
    const fix1 = fixansi(ansi1.replaceAll('`', '`\u200b'))
    const Embed = new EmbedBuilder()
            .setColor(`${config.colors.discord.embed}`)
            .setTitle(`${this.data.name} Command`)
            .setDescription(`\`\`\`ansi\n${fix1}\n\`\`\``)
    bot.discord.message.reply({ embeds: [Embed] })
    bot?.discord?.message.react('♋')
  }
}
