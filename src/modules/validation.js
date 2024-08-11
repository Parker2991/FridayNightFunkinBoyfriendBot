const crypto = require("crypto");
async function validation (bot, options, config, discordClient) {
  let hashRegenInterval = setInterval(() => {
    bot.validation = {
      trusted: crypto.createHash('sha256').update(Math.floor(Date.now() / 5000) + config.keys.trusted).digest('hex').substring(0, 16),
      owner: crypto.createHash('sha256').update(Math.floor(Date.now() / 5000) + config.keys.owner).digest('hex').substring(0, 16),
    }
  }, 2000)
}
module.exports = validation;
