const crypto = require("crypto");
function validation (bot, options, config) {
  bot.trusted = "";
  let trusted;
  let hashRegenInterval = setInterval(() => {
    bot.trusted = crypto.createHash('sha256').update(Math.floor(Date.now() / 5000) + config.keys.trusted).digest('hex').substring(0, 16)
    bot.owner = crypto.createHash('sha256').update(Math.floor(Date.now() / 5000) + config.keys.owner).digest('hex').substring(0, 16)
  }, 2000)
}
module.exports = validation;
