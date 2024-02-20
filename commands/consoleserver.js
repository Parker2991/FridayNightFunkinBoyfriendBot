module.exports = {
  name: 'consoleserver',

  consoleOnly: true,
   description:['consoleserver'],
  execute (context) {
    const bot = context.bot
    const args = context.arguments
    const source = context.source

    const servers = bot.bots.map(eachBot => eachBot.options.host)

    for (const eachBot of bot.bots) {
      if (args.join(' ').toLowerCase() === 'all') {
        eachBot.console.consoleServer = 'all'
                                                const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
        source.sendFeedback(`[${now} \x1b[0m\x1b[92mINFO]\x1b[0mSet the console server to all servers`)
        //Set the console server to all servers
        continue
      }

      const server = servers.find(server => server.toLowerCase().includes(args.join(' ')))

      if (!server) {
        source.sendFeedback({ text: 'Invalid server', color: 'red' })

        return
      }
      
      eachBot.console.consoleServer = server
      const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
      source.sendFeedback(`[${now} \x1b[0m\x1b[92mINFO\x1b[0m] Set the console server to ` + server)
    }
  }//[${now} \x1b[0m\x1b[33mLOGS\x1b[0m\x1b[90m] [${options.host}:${options.port}] ${ansi}
}//\x1b[0m\x1b[92m[INFO]\x1b[0m\x1b[90m Set the console server to
