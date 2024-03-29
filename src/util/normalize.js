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

module.exports = { normalize }
