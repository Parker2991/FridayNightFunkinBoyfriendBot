const os = require('os');
function inject (context) {
  const bot = context.bot;
  const config = context.config;
  let timer;
  bot.memUsage = {
    enabled: false
  }

  timer = setInterval(() => {
    component = {
      translate: "%s%s%s %s | %s: %s%s / %s%s | %s: %s%s / %s%s |",
      color: config.colors.commands.tertiary,
      with: [
        { text: "FNF", color: "dark_blue" },
        { text: "Boyfriend", color: "dark_aqua" },
        { text: "Bot", color: "blue" },
        { text: "Memory Usage" },
        { text: "Free Server Memory", color: config.colors.commands.primary },
        { text: `${Math.floor(os.freemem() / 1048576)}`, color: config.colors.integer },
        { text: "MiB", color: config.colors.commands.secondary },
        { text: `${Math.floor(os.totalmem() / 1048576)}`, color: config.colors.integer },
        { text: "MiB", color: config.colors.commands.secondary },
        { text: "Bot Memory Usage", color: config.colors.commands.primary },
        { text: `${Math.floor(process.memoryUsage().heapUsed / 1048576)}`, color: config.colors.integer },
        { text: "MiB", color: config.colors.commands.secondary },
        { text: `${Math.floor(process.memoryUsage().heapTotal / 1048576 )}`, color: config.colors.integer },
        { text: "MiB", color: config.colors.commands.secondary }
      ]
    }
    if (!bot.memUsage.enabled) return;
    bot.core.run(`minecraft:title @a[tag=!memusage] actionbar ${JSON.stringify(component)}`)
  }, 100)
  bot.on('end', () => {
    bot.memUsage.enabled = false;
  })
}


module.exports = {
  data: {
    enabled: true,
    name: "memory usage",
    type: "extras"
  },
  inject
};
