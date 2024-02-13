const fs = require('fs/promises')


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
