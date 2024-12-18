const os = require('os');
module.exports = (context) => {
  const bot = context.bot;
  const config = context.config;
  const { MessageBuilder } = require('prismarine-chat')(bot.options.version);
  let timer;
  bot.memUsage = {
    enabled: false
  }

  timer = setInterval(() => {
    component = new MessageBuilder()
      .setTranslate("%s%s%s %s | %s: %s%s / %s%s | %s: %s%s / %s%s |")
      .setColor(config.colors.commands.tertiary)
      .addWith(new MessageBuilder()
         .setColor("dark_blue")
         .setText("FNF")
      )
      .addWith(new MessageBuilder()
         .setColor("dark_aqua")
         .setText("Boyfriend")
      )
      .addWith(new MessageBuilder()
         .setColor("blue")
         .setText("Bot")
      )
      .addWith(new MessageBuilder()
         .setText("Memory Usage")
      )
      .addWith(new MessageBuilder()
         .setColor(config.colors.commands.primary)
         .setText("Free Server Memory")
      )
      .addWith(new MessageBuilder()
         .setColor(config.colors.integer)
         .setText(`${Math.floor(os.freemem() / 1048576)}`)
      )
      .addWith(new MessageBuilder()
         .setColor(config.colors.commands.secondary)
         .setText("MiB")
      )
      .addWith(new MessageBuilder()
         .setColor(config.colors.integer)
         .setText(`${Math.floor(os.totalmem() / 1048576)}`)
      )
      .addWith(new MessageBuilder()
         .setColor(config.colors.commands.secondary)
         .setText("MiB")
      )
      .addWith(new MessageBuilder()
         .setColor(config.colors.commands.primary)
         .setText("Bot Memory Usage")
      )
      .addWith(new MessageBuilder()
         .setColor(config.colors.integer)
         .setText(`${Math.floor(process.memoryUsage().heapUsed / 1048576)}`)
      )
      .addWith(new MessageBuilder()
         .setColor(config.colors.commands.secondary)
         .setText("MiB")
      )
      .addWith(new MessageBuilder()
         .setColor(config.colors.integer)
         .setText(`${Math.floor(process.memoryUsage().heapTotal / 1048576 )}`)
      )
      .addWith(new MessageBuilder()
         .setColor(config.colors.commands.secondary)
         .setText("MiB")
      )
    if (!bot.memUsage.enabled) return;
    bot.core.run(`minecraft:title @a[tag=!memusage] actionbar ${JSON.stringify(component)}`)
  }, 100)
  bot.on('end', () => {
    bot.memUsage.enabled = false;
  })
}
