module.exports = {
  name: 'consoleserver',

  consoleOnly: true,

  execute (context) {
    const bot = context.bot
    const args = context.arguments
    const source = context.source

    const servers = bot.bots.map(eachBot => eachBot.options.host)

    for (const eachBot of bot.bots) {
      if (args.join(' ').toLowerCase() === 'all') {
        eachBot.console.consoleServer = 'all'

        source.sendFeedback('Set the console server to all servers')
        
        continue
      }

      const server = servers.find(server => server.toLowerCase().includes(args.join(' ')))

      if (!server) {
        source.sendFeedback({ text: 'Invalid server', color: 'red' })

        return
      }
      
      eachBot.console.consoleServer = server

      source.sendFeedback('Set the console server to ' + server)
    }
  }
}
