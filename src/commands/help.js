const CommandError = require('../util/command_error')
/*
pub_lickColor: "#2b7589"
      t_rustedColor: "#219696"
      own_herColor: "#2081c3"
*/
module.exports = {
  name: 'help',
  trustLevel: 0,
  aliases: [
    "heko",
    "?",
    "cmds",
  ],
  description: 'a list of the bots commands',
  execute (context) {
    const commandList = [];
    const bot = context.bot;
    const source = context.source;
    const args = context.arguments;
    const selector = '@a';
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
                        text: `Description \u203a ${command.description}`,
                        color: 'gray',
                      }
        ]);
        return
      }
      if (command.trustLevel === 0) {
        public.push([
                      {
                        text: command.name + ' ',
                        color: "blue",
                      }
        ])
      } else if (command.trustLevel === 1) {
        trusted.push([
                       {
                         text: command.name + ' ',
                         color: "dark_aqua"
                       }
        ])
      } else if (command.trustLevel === 2) {
        owner.push([
                     {
                       text: command.name + ' ',
                       color: "dark_blue"
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
                public,
                trusted,
                owner
    ])
//    bot.tellraw([ public, trusted, owner ])
  }
}

