const fs = require('fs/promises')

/**
 * just list the files
 * @param {String} filepath file path
 * @return {Array} component.
 */
async function list (filepath = '.') {
  const files = await fs.readdir(filepath)

  const component = []
  for (const filename of files) {
    component.push(filename)
  }
  return component
}

module.exports = list
