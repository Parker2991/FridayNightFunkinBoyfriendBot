const CommandSource = require('../CommandModules/command_source')
const CommandError = require('../CommandModules/command_error')

function inject (bot) {
  bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (!plainMessage.startsWith(bot.commandManager.MainPrefix) && (!plainMessage.startsWith(bot.commandManager.SecondaryPrefix) && (!plainMessage.startsWith(bot.commandManager.TertiaryPrefix)))) return
        //  else if (!plainMessage.startsWith(bot.commandManager.prefix2)) return
            //  MainPrefix: "~",
            //  SecondaryPrefix:'%',
              //TertiaryPrefix:'@'
                   
    const command = plainMessage.substring(bot.commandManager.MainPrefix.length || plainMessage.substring(bot.commandManager.SecondaryPrefix.length || plainMessage.substring(bot.commandManager.TertiaryPrefix.length))) // if the prefixes are the same length just make it 1 or the length
    /*
  lifes sus
    */
    const source = new CommandSource(data.sender, { discord: false, console: false }, true)
    source.sendFeedback = message => {
      const prefix = {
      translate: '[%s%s%s] \u203a ',
      bold: false,
      color: 'dark_gray',
      with: [
       { 
               color: 'dark_purple',
               text: 'FNF', 
               bold:true,
                hoverEvent: { action:"show_text", value: `${process.env["buildstring"]}\n${process.env["FoundationBuildString"]}`},
               clickEvent: bot.options.Core.customName ? { action: 'open_url', value:  bot.options.Core.customName } : undefined,
       },
          { 
                  color: 'aqua', 
                  text: 'Boyfriend', bold:true,
          clickEvent: bot.options.discord.invite ? { action: 'open_url', value:  bot.options.discord.invite } : undefined,         hoverEvent: { action:"show_text", value: `Bot Username: ${bot.username}\nBot UUID: ${bot.uuid}\nServer Host: ${bot.options.host}:${bot.options.port}\nBot Minecraft Java Version: ${bot.options.version}`},
          },
          { color: 'dark_red', 
           text: 'Bot', 
           bold:true,
           clickEvent: bot.options.discord.invite ? { action: 'open_url', value:  'https://code.chipmunk.land' } : undefined,
             hoverEvent: { action:"show_text", value: '§aMan i like frogs - _ChipMC_'},
          },//§aMan i like frogs - _ChipMC_

          { color: 'green', text: command.split(' ')[0] }
        ]
      }
      
      bot.tellraw(['', prefix, message])
    }

    bot.commandManager.executeString(source, command)

  })
}

module.exports = inject