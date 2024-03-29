const { colors } = require('./formatting.json')
const { normalize } = require('./normalize')

const colormap = Object.fromEntries(colors.map(color => [color.name, color.rgb]))
const colorcodemap = Object.fromEntries(colors.map(color => [color.code, color.rgb]))

const reservedCharacters = {
  '"': '&quot;',
  "'": '&apos;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
}

function htmlStringify (text, { lang = {} } = {}) {
  text = normalize(text)

  let string = ''

  if (text.text != null) string += preprocessText(text.text)
  else if (text.translate != null) {
    let format
    if (Object.hasOwn(lang, text.translate)) format = lang[text.translate]
    else if (text.fallback != null) format = text.fallback
    else format = text.translate

    const _with = text.with || []
    let i = 0

    string += preprocessText(format).replace(/%(?:(\d+)\$)?(s|%)/g, (g0, g1) => {
      if (g0 === '%%') return '%'

      const idx = g1 ? parseInt(g1) : i++
      if (_with[idx]) {
        return htmlStringify(_with[idx], { lang })
      }

      return ''
    })
  }
  else if (text.selector != null) string += preprocessText(text.selector)
  else if (text.keybind) {
    // TODO
  }

  if (text.extra) {
    for (const extra of text.extra) {
      string += htmlStringify(extra, { lang })
    }
  }

  if (text.color) {
    const rgb = text.color[0] === '#' ? parseInt(text.color.substring(1), 16) : colormap[text.color]
    if (rgb) string = `<font color="#${rgb.toString(16).padStart(6, '0')}">${string}</font>`
  }

  // formatting
  if (text.bold) string = `<b>${string}</b>`
  if (text.italic) string = `<i>${string}</i>`
  if (text.underlined) string = `<u>${string}</u>`
  if (text.strikethrough) string = `<strike>${string}</strike>`
  if (text.obfuscated) string = `<blink>${string}</blink>`

  return string
}

function preprocessText (input) {
  let string = ''
  let closing = ''
  for (let i = 0; i < input.length; i++) {
    const c = input[i]

    // Emulate Minecraft's section sign escape sequences
    if (c === '§') {
      if ((i + 1) >= input.length) break // For trailing section signs, append nothing

      const code = input.substring(i, i + 2)
      i++

      const hex = colorcodemap[code]
      if (hex) {
        string += closing
        string += `<font color="${hex.toString(16).padStart(6, '0')}">`
        closing = '</font>'
        continue
      }

      if (code === '§r') {
        string += closing
        closing = ''
        continue
      }

      if (code === '§l') { string += '<b>'; closing += '</b>' }
      else if (code === '§o') { string += '<i>'; closing += '</i>' }
      else if (code === '§n') { string += '<u>'; closing += '</u>' }
      else if (code === '§m') { string += '<strike>'; closing += '</strike>' }
      else if (code === '§k') { string += '<blink>'; closing += '</blink>' }

      continue // Do not append the escape sequence itself to the string
    }
    else if (reservedCharacters[c]) string += reservedCharacters[c]
    else if (c === '\n') string += '<br>'
    else string += c
  }
  string += closing

  return string
}

module.exports = htmlStringify
