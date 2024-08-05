const CommandError = require('../util/command_error');
const sleep = require('../util/sleep.js');
const fixansi = require('../util/ansi');
const { EmbedBuilder } = require('discord.js');
module.exports = {
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
  async execute (context) {
    const commandList = [];
    const bot = context.bot;
    const source = context.source;
    const args = context.arguments;
    const category = {
      translate: '(%s%s%s%s%s) \u203a ',
      bold: false,
      color: 'gray',
      with: [
        { color: "blue", text: 'Public'},
           { color: "gray", text: ' | '},
        { color: "dark_aqua", text: 'Trusted'},
           { color: 'gray', text: ' | '},
        { color: "dark_blue", text: 'Owner'},
      ]
    }
    let public = [];
    let trusted = [];
    let owner = [];
    for (const command of bot.commandManager.commandlist) {
      if (args[0] === command.name) {
        //for (const usageArray of command.usages) {
        bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, [
                      {
                        text: `CommandName \u203a ${command.name}\n`,
                        color: 'gray',
                      },
                      {
                        text: `Aliases \u203a ${command.aliases}\n`,
                        color: 'gray',
                      },
                      {
                        text: `Description \u203a ${command.description}\n`,
                        color: 'gray',
                      },
                      {
                        text: `trustLevel \u203a ${command.trustLevel}\n`,
                        color: 'gray'
                      },
                      {
                        text: "Usages \u203a\n",
                        color: "dark_gray"
                      },
        ]);
//        }
        for (const usageArray of command.usages) {
           bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, `${config.prefixes[0]}${command.name} ${usageArray}`)
        }
        return
      }
      if (command.trustLevel === 0) {
        public.push([
                      {
                        text: command.name + ' ',
                        color: "blue",
                        translate: "",
                        hoverEvent:{
                          action:"show_text",
                            value:[
                                    {
                                      text: `Command:${command.name}\n`,
                                      color: 'gray'
                                    },
                                    {
                                      text: `Trust Level: `,
                                      color: 'gray'
                                    },
                                    {
                                      text: `${command.trustLevel}\n`,
                                      color: 'red'
                                    },
                                    {
                                      text: `${command.description}\n`,
                                     color: 'gray'
                                    },
                                    {
                                      text: `Command Aliases: ${command.aliases}\n`,
                                      color: 'gray'
                                    },
                                    {
                                      text: 'click on me to use me :)',
                                      color: 'gray',
                                    },
                                ],
                        }
                      }
        ])
      } else if (command.trustLevel === 1) {
        trusted.push([
                      {
                        text: command.name + ' ',
                        color: "dark_aqua",
                        translate: "",
                        hoverEvent:{
                          action:"show_text",
                            value:[
                                    {
                                      text: `Command:${command.name}\n`,
                                      color: 'gray'
                                    },
                                    {
                                      text: `Trust Level: `,
                                      color: 'gray'
                                    },
                                    {
                                      text: `${command.trustLevel}\n`,
                                      color: 'red'
                                    },
                                    {
                                      text: `${command.description}\n`,
                                      color: 'gray'
                                    },
                                    {
                                      text: `Command Aliases: ${command.aliases}\n`,
                                      color: 'gray'
                                    },
                                    {
                                      text: 'click on me to use me :)',
                                      color: 'gray',
                                    },
                                ],
                        }
                      }
        ])
      } else if (command.trustLevel === 2) {
        owner.push([
                      {
                        text: command.name + ' ',
                        color: "dark_blue",
                        translate: "",
                        hoverEvent:{
                          action:"show_text",
                            value:[
                                    {
                                      text: `Command:${command.name}\n`,
                                      color: 'gray'
                                    },
                                    {
                                      text: `Trust Level: `,
                                      color: 'gray'
                                    },
                                    {
                                      text: `${command.trustLevel}\n`,
                                      color: 'red'
                                    },
                                    {
                                      text: `${command.description}\n`,
                                      color: 'gray'
                                    },
                                    {
                                      text: `Command Aliases: ${command.aliases}\n`,
                                      color: 'gray'
                                    },
                                    {
                                      text: 'click on me to use me :)',
                                      color: 'gray',
                                    },
                                ],
                        }
                      }
        ])
      }
    }
    const length = bot.commandManager.commandlist.filter(c => c.trustLevel != 3).length
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
      await sleep(100)
      bot.chat.message(bot.getMessageAsPrismarine(public)?.toMotd().replaceAll("§","&"))
      await sleep(100)
      bot.chat.message(bot.getMessageAsPrismarine(trusted)?.toMotd().replaceAll("§","&"));
      await sleep(100)
      bot.chat.message(bot.getMessageAsPrismarine(owner).toMotd().replaceAll("§","&"));
    } else {
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
    }
//    bot.tellraw([ public, trusted, owner ])
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const category = {
      translate: '(%s%s%s%s%s) \u203a ',
      bold: false,
      color: 'gray',
      with: [
        { color: "blue", text: 'Public'},
           { color: "gray", text: ' | '},
        { color: "dark_aqua", text: 'Trusted'},
           { color: 'gray', text: ' | '},
        { color: "dark_blue", text: 'Owner'},
      ]
    }
    let public = [];
    let trusted = [];
    let owner = [];
    for (const command of bot.commandManager.commandlist) {
      if (args[0] === command.name) {
        const ansi = bot.getMessageAsPrismarine([ { text: `CommandName \u203a ${command.name}\n`, color: 'gray', }, { text: `Aliases \u203a ${command.aliases}\n`, color: 'gray', }, { text: `Description \u203a ${command.description}\n`, color: 'gray', }, { text: `trustLevel \u203a ${command.trustLevel}\n`, color: 'gray' }, { text: `Usages \u203a ${command?.usages}`, color: "dark_gray" }, ])?.toAnsi().replaceAll('```\u001b[9```' + '```\u001b[3```')
        const fix = fixansi(ansi.replaceAll('`', '`\u200b'))
        const Embed = new EmbedBuilder()
              .setColor(`${config.colors.discord.embed}`)
              .setTitle(`${this.name} Command`)
              .setDescription(`\`\`\`ansi\n${fix}\n\`\`\``)
        bot.discord.message.reply({ embeds: [Embed] })
        return
      }
      if (command?.trustLevel === 0) {
        public.push([
                      {
                        text: command.name + ' ',
                        color: "blue",
                      }
        ])
      } else if (command?.trustLevel === 1) {
        trusted.push([
                       {
                         text: command.name + ' ',
                         color: "dark_aqua"
                       }

        ])
      } else if (command?.trustLevel === 2) {
        owner.push([
                      {
                        text: command.name + ' ',
                        color: "dark_blue",
                      }
        ])
      }
    }
    const length = bot.commandManager.commandlist.filter(c => c.trustLevel != 3).length
    const ansi1 = bot.getMessageAsPrismarine([ { text: 'Commands (', color: 'gray' }, { text: JSON.stringify(length), color: 'gold' }, { text: ') ', color: 'gray' }, category, '\n', public, trusted, owner ])?.toAnsi();
    const fix1 = fixansi(ansi1.replaceAll('`', '`\u200b'))
    const Embed = new EmbedBuilder()
            .setColor(`${config.colors.discord.embed}`)
            .setTitle(`${this.name} Command`)
            .setDescription(`\`\`\`ansi\n${fix1}\n\`\`\``)
    bot.discord.message.reply({ embeds: [Embed] })
  }
}
