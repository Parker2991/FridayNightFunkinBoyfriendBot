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
      "<message>"
    ],
  },
  async execute (context) {
    const bot = context.bot
    const args = context.arguments;
    const config = context.config;
    const source = context.source;
    try {
      let component = [];
      const weather = await request(`https://api.weatherapi.com/v1/current.json?key=${config.weatherApiKey}&q=${args.join(' ')}`);
      const info = await weather.body.json();
      component.push({
        translate: "%s: %s\n%s: %s\n%s: %s\n%s: %s\n%s: %s\n%s: %s%s (%s%s)\n%s: %s %s %s (%s %s %s)\n%s: %s\n%s: %s",
        color: config.colors.commands.tertiary,
        with: [
          { text: "Location", color: config.colors.commands.primary },
          { text: `${info.location.name}, ${info.location.region}, ${info.location.country}`, color: config.colors.commands.secondary },
          { text: "Latitude", color: config.colors.commands.primary },
          { text: `${info.location.lat}`, color: config.colors.integer },
          { text: "Longitude", color: config.colors.commands.primary },
          { text: `${info.location.lon}`, color: config.colors.integer },
          { text: "Time zone", color: config.colors.commands.primary },
          { text: `${info.location.tz_id}`, color: config.colors.commands.secondary },
          { text: "Time", color: config.colors.commands.primary },
          { text: `${new Date().toLocaleTimeString("en-US", { timeZone: info.location.tz_id, })}`, color: config.colors.integer },
          { text: "Temp", color: config.colors.commands.primary },
          { text: `${info.current.temp_c}`, color: config.colors.integer },
          { text: "\u00b0C", color: config.colors.commands.secondary },
          { text: `${info.current.temp_f}`, color: config.colors.integer },
          { text: "\u00b0F", color: config.colors.commands.secondary },
          { text: "Wind speed" , color: config.colors.commands.primary },
          { text: `${info.current.wind_kph}`, color: config.colors.integer },
          { text: `kph`, color: config.colors.commands.secondary },
          { text: `${info.current.wind_dir}`, color: config.colors.commands.secondary },
          { text: `${info.current.wind_mph}`, color: config.colors.integer },
          { text: `mph`, color: config.colors.commands.secondary },
          { text: `${info.current.wind_dir}`, color: config.colors.commands.secondary },
          { text: "Condition", color: config.colors.commands.primary },
          { text: `${info.current.condition.text}`, color: config.colors.commands.secondary },
          { text: "Humidity", color: config.colors.commands.primary },
          { text: `${info.current.humidity}`, color: config.colors.integer },
        ]
      })
      bot.tellraw("@a", component)
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
