function inject (bot, context) {

  const buildstring = process.env['buildstring']
  const util = require('node:util')
// bot.discord.channel.send('')
 bot.console.info(
        `Disconnected from ${bot.server.host} (${event} event): ${util.inspect(reason)}`
    )
    

    let timeout = options.reconnectTimeout

    try {
      if (reason.text) {
        if (reason.text ===
          'Wait 5 seconds before connecting, thanks! :)' ||
          reason.text ===
          'You are logging in too fast, try again later.'
        ) timeout = 1000 * 7
      }
    } catch (e) {
      bot.console.error(e)
    }
}

module.exports = inject
