const convert = require('color-convert')

 function inject (bot) {
    bot.bruhifyTextTellraw = ''
    let startHue = 0
    const timer = setInterval(() => {
      if (bot.bruhifyTextTellraw === '') return

      let hue = startHue
      const displayName = bot.bruhifyTextTellraw
      const increment = (360 / Math.max(displayName.length, 20))
      const component = []
      for (const character of displayName) {
        const color = convert.hsv.hex(hue, 100, 100)
        component.push({ 
                text: character, 
                color: `#${color}`,
        
        })

              // hoverEvent: { action:"show_text", value: '§aMan i like frogs - _ChipMC_'},
        hue = (hue + increment) % 360
      }
     bot.core.run(`tellraw @a ${JSON.stringify(component)}`) // instead of doing just "tellraw" do "minecraft:tellraw"

      startHue = (startHue + increment) % 360
    }, 50)

    bot.on('end', () => {
      clearInterval(timer)
    })
  }
module.exports = inject
