const CommandError = require('../CommandModules/command_error')
const {EmbedBuilder} = require('discord.js')
module.exports = {
  name: 'cloop',
      trustLevel: 1,
   description:['command loop commands'],
        aliases:['commandloop'],
usage:[
"add <interval> <command/message>",
"clear",
"remove <id>",
"list",
],
 execute (context, selector) {
  const args = context.arguments
    const bot = context.bot
    const source = context.source
if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
 switch (args[1]) {
      case 'add':
        if (parseInt(args[1]) === NaN) source.sendFeedback({ text: 'Invalid interval', color: 'red' })
        
        const interval = parseInt(args[2])
        const command = args.slice(3).join(' ')
        
        bot.cloop.add(command, interval)

      bot.sendFeedback({
          translate: 'Added \'%s\' with interval %s to the cloops',
          with: [ command, interval ]
        })
        
        break
      case 'remove':
//const aaa = args[2]
var id  
//      if (bot.cloop.list[args[2]].id === undefined) new CommandError({text:'Invalid index'})
try{

       const index = (args[2])

        bot.cloop.remove(index)

        bot.sendFeedback({
          translate: 'Removed cloop %s',
          with: [ index ]
        })
} catch(e) {
if (e.toString() === "TypeError: Cannot read properties of undefined (reading 'id')"){
bot.sendError({text:'Invalid Index'})
}
}        

        break
      case 'clear':
        bot.cloop.clear()

       bot.sendFeedback({ text: 'Cleared all cloops' })
        
        break
      case 'list':
        const component = []

        const listComponent = []
        let i = 0
        for (const cloop of bot.cloop.list) {
          listComponent.push({
            translate: '%s \u203a %s (%s)',
            with: [
              `id ${i}`,
              cloop.command,
              cloop.interval
            ]
          })
          listComponent.push('\n')

          i++
        }

        listComponent.pop()

        component.push({
          translate: "Cloops (%s):",
          with: [ JSON.stringify(bot.cloop.list.length) ]
        })
        component.push('\n')
        component.push(listComponent)
if(bot.cloop.list.length === 0){
bot.sendFeedback({ translate: "Cloops (%s):", with: [ JSON.stringify(bot.cloop.list.length) ] })
}else{
        bot.sendFeedback(component)
    }
        break
      default:
        bot.sendFeedback({ text: 'Invalid action', color: 'red' })
break
   }    
},
discordExecute(context) {
const args = context.arguments
const bot = context.bot
switch(args[0]) {
case 'add':
	const interval = parseInt(args[1])
        const command = args.slice(2).join(' ')
       
        bot.cloop.add(command, interval)
var Embed = new EmbedBuilder()
          .setColor('#00FFFF')
          .setTitle(`${this.name} Command`)
  .setDescription(`Added ${command} with the interval ${interval} to the cloops`)
    bot?.discord?.Message?.reply({ embeds: [Embed] })
break
case 'remove':


   
       try {

    var index = (args[1])
bot.cloop.remove(index)
var Embed = new EmbedBuilder()
          .setColor('#00FFFF')
          .setTitle(`${this.name} Command`)
  .setDescription(`removed cloop ${index}`)
    bot?.discord?.Message?.reply({ embeds: [Embed] })


} catch(e) {
if (e.toString() === "TypeError: Cannot read properties of undefined (reading 'id')"){
throw new CommandError({text:'Invalid Index'})
}
}        
break
case 'clear':
bot.cloop.clear()
var Embed = new EmbedBuilder()
          .setColor('#00FFFF')
          .setTitle(`${this.name} Command`)
  .setDescription(`cleared cloops`)
    bot?.discord?.Message?.reply({ embeds: [Embed] })
break
case 'list':

     const component = []

        const listComponent = []
        let i = 0
        for (const cloop of bot.cloop.list) {
          listComponent.push({
            translate: '%s \u203a %s (%s)',
            with: [
              `id ${i}`,
              cloop.command,
              cloop.interval
            ]
          })
          listComponent.push('\n')

          i++
        }

        listComponent.pop()

        component.push({
          translate: 'Cloops (%s):',
          with: [ bot.cloop.list.length ]
        })
        component.push('\n')
        component.push(listComponent)

     var Embed = new EmbedBuilder()
          .setColor(`#00FFFF`)
          .setTitle(`${this.name} Command`)
  .setDescription(bot.getMessageAsPrismarine(component)?.toString())
    bot?.discord?.Message?.reply({ embeds: [Embed] })

        

break
default:	
throw new CommandError('Invalid argument')
break
   }
  }
 }
