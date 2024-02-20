
const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'help',
  aliases:['heko'],
  description:['shows the command list'],
 async execute (context) {
   const bot = context.bot
    const commandList = []
  const source = context.source
  const args = context.arguments
   const cmd = {
 translate: '[%s] ',
      bold: false,
      color: 'white',
      with: [
        { color: 'blue', text: 'Help Cmd'},
              ]
    }
      const category = {
 translate: ' (%s%s%s%s%s) ',
      bold: false,
      color: 'white',
      with: [
        { color: 'green', text: 'Public'},
           { color: 'white', text: ' | '},
        { color: 'red', text: 'Trusted'},
           { color: 'white', text: ' | '},   
        { color: 'dark_red', text: 'Owner'},
              ]
    }
   
      if (args[0]) {
        let valid
        for (const fard in bot.commandManager.amogus) { // i broke a key woops
          const command = bot.commandManager.amogus[fard]
          
          if (args[0].toLowerCase() === command.name) {
            valid = true
            source.sendFeedback([cmd, `Description: ${command.description}`])
            break
          } else valid = false
        }//source is defined btw
        //source.sendFeedback([cmd, 'This command is ' + valid + ' to this for loop'])
        if (valid) {
          
        } else {
           const message = context.arguments
          source.sendFeedback([cmd, {translate: 'Unknown command %s. Type "~help" for help', with: [message], color: 'dark_red'}])
        }//i will add the descriptions reading as tests and action add the descriptions for the commands after
         const length = context.bot.commandManager.amogus.length // ok
        //i guess i did delete smh woops

    //context.source.sendFeedback([cmd, 'Commands (', length, ') ', category, ...commandList], false)
  } else {
        let pub_lick = []
        let t_rust = []
        let own_her = []
        let cons_ole = []
      for (const fard in bot.commandManager.amogus) {
          const command = bot.commandManager.amogus[fard]
          if (command.hashOnly) {
            t_rust.push(
              {
                text: command.name + ' ',
                color: 'red'
              }
            )
          } else {
            pub_lick.push(
              {
                text: command.name + ' ',
                 color: 'green'
              } 
            )
          }  
          
       
           // for (const command of context.bot.commandManager.getCommands()) {
         // if (command.consoleOnly && !context.console) continue 
        }
        const length = context.bot.commandManager.amogus.length
        context.source.sendFeedback([cmd, 'Commands (', length, ') ', category, ...pub_lick, t_rust], false)
  }
}
} 


/*
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
*/