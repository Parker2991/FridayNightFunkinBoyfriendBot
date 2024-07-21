module.exports = {
  name: 'console',
  trustLevel: 3,
  aliases: [

  ],
  execute (context) {
    const bot = context.bot
    const args = context.arguments;
    const source = context.source;
    if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return;
    switch (args[0]) {
      case "server":
      case "svr":
        const servers = bot.bots.map(eachBot => eachBot.options.serverName);
        for (const eachBot of bot.bots) {
           if (args.slice(1).join(' ').toLowerCase() === 'all') {
             eachBot.console.consoleServer = 'all'
             bot.console.logs("Set the console server to all");
             continue
           }
           const server = servers.find(server => server.toLowerCase().includes(args[1]))
           if (!server) {
             bot.console.logs("Invalid server");
             return
           }
           bot.console.logs(`Set the console server to ` + server);
           eachBot.console.consoleServer = server;
        }
      break
    }
  }
}
