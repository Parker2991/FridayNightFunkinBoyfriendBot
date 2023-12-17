function messagelimit (bot, options) {
     let spamCount = 0
        setInterval(() => spamCount = 0, 1000 * 2)

  bot.on('message', message => {
    if (message == (`${bot.options.commands.prefix} `) && spamCount > 300) {
    bot.tellraw('WTF spam detected rate limiting')
            return
    }
           spamCount++
})
}
module.exports = messagelimit