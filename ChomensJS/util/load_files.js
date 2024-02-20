const fs = require('fs/promises')
const path = require('path')

/**
 * loads js files
 * @param {string} directory the directory that contains the js files
 * @return {Array} an array of require()ed js files
 */
async function loadPlugins (directory) {
  const plugins = []

  for (const filename of await fs.readdir(directory)) {
    if (!filename.endsWith('.js')) continue

    const filepath = path.join(directory, filename)

    const plugin = require(filepath)

    plugins.push(plugin)
  }

  return plugins
}

module.exports = loadPlugins
