const { resize } = require('../util/image')
const axios = require('axios')
const sharp = require('sharp')

module.exports = {
  name: 'draw',
  description: 'Draws an image',
  alias: [],
  trusted: 0,
  usage: '<image url (JPEG, PNG, WebP, AVIF, GIF, SVG, TIFF)>',
  execute: async function (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    let image
    try {
      const url = args.join(' ')

      image = await axios.get('https://http-proxy.nongsonchome.repl.co', {
        params: {
          uri: url
        },
        responseType: 'arraybuffer'
      })

      const loaded = sharp(image.data)

      const metadata = await loaded
        .metadata()

      const { width, height } = resize(metadata.width, metadata.height)

      const { data, info } = await loaded
        .resize({ fit: 'fill', kernel: 'nearest', width, height })
        .raw()
        .toBuffer({ resolveWithObject: true })

      bot.draw(data, info)
    } catch (_err) {
      const e = _err.toString() === 'Error: Input buffer contains unsupported image format' ? image.data.toString() : _err
      bot.tellraw(selector, { text: e, color: 'red' })
    }
  }
}
