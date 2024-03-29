const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'botsrun',
   description:[''],
        aliases:[],
     trustLevel: 2,
  execute (context) {
  const bot = context.bot
   // const client = context.client
          const args = context.arguments
          const source = context.source
    const message = context.arguments.join(' ')
          //const source = context.source
            // if (args.length === 0){
//source.sendFeedback({translate:"Too few Arguments!", color:"red"})
          const amogus = args.slice(1).join(' ');
          if (!args && !args[0] && !args[1] && !args[2]) return
try{
          switch (args[1]) {
          case 'source':
                      
   for (const eachBot of bot.bots) {
           eachBot.commandManager.executeString(source, `${args.slice(2).join(' ')} `)
   }   
                  break
          case 'consolesource':
                                       
   for (const eachBot of bot.bots) {
           eachBot.commandManager.executeString(bot.console.source, `${args.slice(2).join(' ')} `)
   }  
                  break
                  default:
        context.source.sendError([ { text: 'Invalid action', color: 'dark_red', bold:false }])
                  source.sendFeedback({text:'Args are source and consolesource', color:'green'})
}

}catch(error){
source.sendFeedback(error.stack)
}       
   // context.source.sendFeedback({ text: util.inspect(eval(script), { stylize }).substring(0, 32700) })
         
       
  }//
}
