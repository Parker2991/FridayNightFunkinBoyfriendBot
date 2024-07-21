const CommandError = require('../util/command_error')
module.exports = {
  name: 'help',
  trustLevel: 0,
  aliases: [
    "heko",
    "?",
    "cmds",
  ],
  description: 'a list of the bots commands',
  usages: [
    "",
    "<command>",
  ],
  execute (context) {
    const commandList = [];
    const bot = context.bot;
    const source = context.source;
    const args = context.arguments;
    console.log(source)
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
      console.log(command.name)
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
//    bot.tellraw([ public, trusted, owner ])
  }
}
