function tellraw (bot, options, config) {
  bot.tellraw = (selector, message) => {
    bot.core.run(`minecraft:tellraw ${selector} ` + JSON.stringify(message))
  }
}
module.exports = tellraw;
