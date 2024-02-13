const convert = require('color-convert')

// eslint-disable-next-line require-jsdoc
function inject (bot) {
  /**
   * draw which is totallynotskidded from ybot
   * @param {buffer} data data buffer
   * @param {*} info idk bout this
   * @param {object} prefix prefix in the output compoenent
   */
  function draw (data, info, prefix = {}) {
    const pixels = []

    // Data Buffer -> RGB Array
    for (let i = 0; i < data.length; i += info.channels) {
      pixels.push([
        data[i + 0],
        data[i + 1],
        data[i + 2]
      ])
    }

    const rows = []

    // RGB Array -> Rows Array
    for (let i = 0; i < pixels.length; i += info.width) {
      const row = pixels.slice(i, i + info.width)

      rows.push(row)
    }

    const messages = []

    for (const row of rows) {
      const message = [{ ...prefix, text: '' }]

      for (const rgb of row) {
        message.push({
          text: '⎮',
          color: `#${convert.rgb.hex(rgb)}`
        })
      }

      messages.push(message)
    }

    for (const message of messages) bot.tellraw('@a', message)
  }

  bot.draw = draw
}

module.exports = { inject }
