const CommandError = require('../../util/command_error');
const { request } = require('undici');
module.exports = {
  data: {
    name: 'weather',
    trustLevel: 0,
    aliases: [
    ],
    description: 'check the weather of cities',
    usages: [
      "<city/zipcode>"
    ],
  },
  async execute (context) {
    const bot = context.bot
    const args = context.arguments;
    const config = context.config;
    const source = context.source;
    const { MessageBuilder } = require('prismarine-chat')(bot.options.version);
    try {
      let component;
      const weather = await request(`https://api.weatherapi.com/v1/current.json?key=${config.weatherApiKey}&q=${args.join(' ').replaceAll(' ','&')}`);
      const info = await weather.body.json();
      component = new MessageBuilder()
        .setTranslate("%s\n%s\n%s: %s (%s)\n%s\n%s\n%s: %s\n%s: %s")
        .setColor(config.colors.commands.tertiary)
        .addWith(new MessageBuilder()
           .setTranslate("%s: %s, %s %s")
           .setColor(config.colors.commands.tertiary)
           .addWith(new MessageBuilder()
              .setColor(config.colors.commands.primary)
              .setText("Location")
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.commands.secondary)
              .setText(info.location.name)
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.commands.secondary)
              .setText(info.location.region)
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.commands.secondary)
              .setText(info.location.country)
           )
        )
        .addWith(new MessageBuilder()
           .setTranslate("%s: %s, %s")
           .setColor(config.colors.commands.tertiary)
           .addWith(new MessageBuilder()
              .setColor(config.colors.commands.primary)
              .setText("Coords")
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.integer)
              .setText(`${info.location.lat}`)
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.integer)
              .setText(`${info.location.lon}`)
           )
        )
        .addWith(new MessageBuilder()
           .setColor(config.colors.commands.primary)
           .setText("Time")
        )
        .addWith(new MessageBuilder()
           .setColor(config.colors.commands.secondary)
           .setText(`${new Date().toLocaleTimeString("en-US", { timeZone: info.location.tz_id, })}`)
        )
        .addWith(new MessageBuilder()
           .setColor(config.colors.commands.secondary)
           .setText(`${info.location.tz_id}`)
        )
        .addWith(new MessageBuilder()
           .setTranslate("%s: %s (%s), %s (%s)")
           .setColor(config.colors.commands.tertiary)
           .addWith(new MessageBuilder()
              .setColor(config.colors.commands.primary)
              .setText("Temp")
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.integer)
              .setText(`${Math.floor(info.current.temp_c)}`)
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.commands.secondary)
              .setText("\u00b0C")
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.integer)
              .setText(`${Math.floor(info.current.temp_f)}`)
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.commands.secondary)
              .setText("\u00b0F")
           )
        )
        .addWith(new MessageBuilder()
           .setTranslate("%s: %s (%s, %s), %s (%s, %s)")
           .setColor(config.colors.commands.tertiary)
           .addWith(new MessageBuilder()
              .setColor(config.colors.commands.primary)
              .setText("Wind Speed")
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.integer)
              .setText(`${Math.floor(info.current.wind_kph)}`)
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.commands.secondary)
              .setText("kph")
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.commands.secondary)
              .setText(info.current.wind_dir)
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.integer)
              .setText(`${Math.floor(info.current.wind_mph)}`)
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.commands.secondary)
              .setText("mph")
           )
           .addWith(new MessageBuilder()
              .setColor(config.colors.commands.secondary)
              .setText(info.current.wind_dir)
           )
        )
        .addWith(new MessageBuilder()
           .setColor(config.colors.commands.primary)
           .setText("Condition")
        )
        .addWith(new MessageBuilder()
           .setColor(config.colors.commands.secondary)
           .setText(info.current.condition.text)
        )
        .addWith(new MessageBuilder()
           .setColor(config.colors.commands.primary)
           .setText("Humidity")
        )
        .addWith(new MessageBuilder()
           .setColor(config.colors.integer)
           .setText(`${Math.floor(info.current.humidity)}`)
        )
      if (bot.options.isSavage) {
        bot.chat.message(`Location: ${info.location.name}, ${info.location.region}, ${info.location.country}`);
        bot.chat.message(`Latitude: ${info.location.lat}`);
        bot.chat.message(`Longitude: ${info.location.lon}`);
        bot.chat.message(`Time: ${new Date().toLocaleTimeString("en-US", { timeZone: info.location.tz_id, })}(${info.location.tz_id})`);
        bot.chat.message(`Temp: ${info.current.temp_c}(\u00b0C), ${info.current.temp_f}(\u00b0F)`);
        bot.chat.message(`Wind speed: ${info.current.wind_kph}(KPH), ${info.current.wind_mph}(MPH)`);
        bot.chat.message(`Condition: ${info.current.condition.text}`);
        bot.chat.message(`Humidity: ${info.current.humidity}`);
      } else {
        bot.tellraw("@a", component);
      }
    } catch (e) {
      if (e.toString() === "TypeError: Cannot read properties of undefined (reading 'name')" && args.length !== 0) {
        bot.chat.message('The location is invalid please try a valid location');
      } else if (args.length === 0) {
        bot.chat.message('there were no arguments detected')
      } else {
        bot.chat.message(`${e.toString()}`);
        console.warn(e.stack);
      }
    }
  }
}
