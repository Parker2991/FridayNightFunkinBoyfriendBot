const path = require('path')
/**
 * get filename from url
 * @param {string} urlStr the url
 * @return {string} filename
 * @example
 * getFilenameFromUrl('https://sus.red/amogus.mid?verysus=true') // returns 'amogus.mid'
 */
function getFilenameFromUrl (urlStr) {
  const url = new URL(urlStr)
  return path.basename(url.pathname)
}

module.exports = getFilenameFromUrl
