const crypto = require('crypto')
function inject (context) {
  const bot = context.bot;
  const config = context.config;
  setInterval(() => {
    bot.validation = {
      trusted: crypto.createHash('sha256').update(Math.floor(Date.now() / 2000) + config.keys.trusted).digest('hex').substring(0, 16),
      admin: crypto.createHash('sha256').update(Math.floor(Date.now() / 2000) + config.keys.admin).digest('hex').substring(0, 16),
      owner: crypto.createHash('sha256').update(Math.floor(Date.now() / 2000) + config.keys.owner).digest('hex').substring(0, 16),
    }
  }, 100)
}
module.exports = {
  data: {
    enabled: true,
    name: "validation",
    type: "extras"
  },
  inject
};
