function escapeMarkdown (text, zwsp) {
  let unescaped
  let escaped
  try {
    unescaped = text.replace(/\\(\*|@|_|`|~|\\)/g, '$1')
    escaped = unescaped.replace(/(\*|@|_|`|~|\\)/g, zwsp
      ? '\u200b\u200b$1'
      : '\\$1'
    )
  } catch (e) {
    return unescaped
  }
  return escaped
}
//fr
module.exports = { escapeMarkdown } // ohio