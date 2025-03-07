const { colors, formatting } = require('./formatting.json')

const formatNames = Object.fromEntries(formatting.map(format => [format.name, true]))
const baseColors = colors.map(color => intToRgb(color.rgb))

function parseJsonText (json) {
  try {
    return JSON.parse(json)
  } catch {
    return { text: '' }
  }
}

function parseNbtText (data) {
  try {
    if (data.type === 'byte') return !!data.value
    if (typeof data.value !== 'object') return data.value
    if (Array.isArray(data.value)) return [...data.value]
    if (data.type === 'list') return data.value.value.map(value => parseNbtText({ type: data.value.type, value }))
    return Object.fromEntries(Object.entries(data.value).map(([key, value]) => ([key === '' ? 'text' : key, parseNbtText(value)])))
  } catch {
    return { text: '' }
  }
}

function parseText (text) {
  const f = text?.type ? parseNbtText : parseJsonText
  return f(text)
}

function normalize (text) {
  if (typeof text === 'string') return { text }
  if (Array.isArray(text)) {
    const text2 = [...text]
    const text3 = { ...normalize(text2.shift()) }
    text3.extra = text2
    return text3
  }
  return text
}

function rgbToInt (r, g, b) {
  return (r & 0xff) << 16 | (g & 0xff) << 8 | (b & 0xff)
}

function intToRgb (int) {
  const r = (int >> 16) & 0xff
  const g = (int >> 8) & 0xff
  const b = int & 0xff

  return [r, g, b]
}


// skidded from https://github.com/edqx/amongus-experiments/blob/master/index5.js#L34C1-L56C2
function getNearestColor (rgb) {
  if (typeof rgb === 'number') rgb = intToRgb(rgb)
  const [red, green, blue] = rgb

  let nearestDist = Infinity
  let nearestColorIdx
  for (let i = 0; i < baseColors.length; i++) {
    const baseColor = baseColors[i]
    const [baseR, baseG, baseB] = baseColor

    const diffR = (red - baseR) * (red - baseR)
    const diffG = (green - baseG) * (green - baseG)
    const diffB = (blue - baseB) * (blue - baseB)

    const dist = Math.sqrt(diffR + diffG + diffB)

    if (dist < nearestDist) {
      nearestDist = dist
      nearestColorIdx = i
    }
  }

  return nearestColorIdx
}

function getChangedFormatting (text, previousText, parent = {}) {
  // Merge both texts with their parents
  text = { ...parent, ...text }
  if (previousText) previousText = { ...parent, ...previousText }

  const getAllFormatting = () => Object.fromEntries(Object.entries(text).filter(([key, value]) => formatNames[key] || key === 'color'))

  if (!previousText || text.color !== previousText.color) return getAllFormatting()

  const format = {}
  for (const key in formatNames) {
    if (text[key] && previousText[key]) continue
    if (previousText[key] && !text[key]) return getAllFormatting() // Color codes do not have any way to unset specific formattings
    if (text[key] == null) continue

    format[key] = format[key]
  }
  format.color = text.color

  return format
}

module.exports = { parseJsonText, parseNbtText, parseText, normalize, rgbToInt, intToRgb, getNearestColor, getChangedFormatting }
