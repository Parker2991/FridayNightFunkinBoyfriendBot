const CommandError = require("../CommandModules/command_error")

module.exports = {
  name: 'discordmsg',
   description:['make me say something in discord'],
  trustLevel: 0,
        aliases:['discordmessage', 'ddmsg'],
  execute (context) {
    //const args = context.args
    const bot = context.bot
    const args = context.arguments
    
   // if (args.translate !== '\u202e') 

     // throw new CommandError('u202e detected')
   if (!args[0]) {
      context.source.sendFeedback({text:'Message is empty', color:'red'}, false)
    } else {
      bot.discord.channel.send(args.join(' '))
      console.log(args[0])
      context.source.sendFeedback({ text: `Recieved: ${args.join(' ')}`, color:'green'})
      
    //}
    
//}
}
}
}
//bot.discord.channel.send(args.join(' '))
/*
if(!args[0]) 
  context.source.sendFeedback('message is empty') 

 else if (args[0]) 
    bot.discord.channel.send(args[0]) 
console.log(args[0])
context.source.sendFeedback(`Recieved: ${args[0]}`)
      return;
      */
