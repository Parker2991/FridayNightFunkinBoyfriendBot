const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'consoleserver',

  consoleOnly: true,
        hashOnly:false,
        ownerOnly:false,
   description:['consoleserver'],
        aliases:['csvr'],
  execute (context) {
    const bot = context.bot
    const args = context.arguments
    const source = context.source
             if (args.length === 0){
source.sendFeedback({translate:"Too few Arguments!", color:"red"})
   } else if (args.length === 2){
                     source.sendFeedback({translate:"Too many Arguments!", color:"red"})
   }
const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
       
    const servers = bot.bots.map(eachBot => eachBot.options.host)
const ports = bot.bots.map(eachBot => eachBot.options.port)
    for (const eachBot of bot.bots) {
      
              
            if (args.join(' ').toLowerCase() === 'all') {
               
              eachBot.console.consoleServer = 'all'
                   bot.console.info(` Set the console server to all servers`)
                        
        //Set the console server to all servers
        continue
                    
                   
      }//.repeat(Math.floor((32767 - 22) / 16))
//"a".repeat(10)

      const server = servers.find(server => server.toLowerCase().includes(args.join(' ')))
 //const port = ports.find(port => port.toLowerCase().includes(args.join(' ')))
      if (!server /*&& !port*/) {
       source.sendFeedback({ text: 'Invalid server', color: 'red' })

        return
      }
          
       bot.console.info(`Set the console server to ` + server)
    eachBot.console.consoleServer = server
      //       eachBot.console.consoleServer = port
     
    }
  }//[${now} \x1b[0m\x1b[33mLOGS\x1b[0m\x1b[90m] [${options.host}:${options.port}] ${ansi}
}//\x1b[0m\x1b[92m[INFO]\x1b[0m\x1b[90m Set the console server to
