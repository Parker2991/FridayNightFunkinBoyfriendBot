const convert = require('color-convert')
module.exports = {
  inject: function (bot) {
    bot.bruhifyText = ''
    let startHue = 0
    const timer = setInterval(() => {
      if (bot.bruhifyText === '') return

      let hue = startHue
      const displayName = bot.bruhifyText
      const increment = (360 / Math.max(displayName.length, 20))
      const component = []
      for (const character of displayName) {
        const color = convert.hsv.hex(hue, 100, 100)
        component.push({ text: character, color: `#${color}` })
        hue = (hue + increment) % 360
      }
      bot.core.run(`minecraft:title @a actionbar ${JSON.stringify(component)}`)
      startHue = (startHue + increment) % 360
    }, 100)

    bot.on('end', () => {
      clearInterval(timer)
    })
  }
}
