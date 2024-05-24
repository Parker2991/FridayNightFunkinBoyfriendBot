const path = require('path')

function getFilenameFromUrl (urlStr) {
  const url = new URL(urlStr)
  return path.basename(url.pathname)
}

module.exports = getFilenameFromUrl