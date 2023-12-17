const fs = require('fs/promises')

/**
 * check if file exists
 * @param {String} filepath the file path
 * @return {boolean} if file exists true else false
 */
async function fileExists (filepath) {
  try {
    await fs.access(filepath)
    return true
  } catch (error) {
    if (error.code !== 'ENOENT') throw error

    return false
  }
}

module.exports = fileExists
