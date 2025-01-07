const fs = require('fs')
const path = require('path')
const CommandError = require('../CommandModules/command_error.js')

async function inject (bot, options) {
 
  for (const filename of fs.readdirSync(path.join(__dirname, '../commands'))) {
    try {
      const command = require(path.join(__dirname, '../commands', filename))
      bot.files.register(command)
 
    } else {
  for (const filename of fs.readdirSync(path.join(__dirname, '../'))) {
    try {
      const util = require(path.join(__dirname, './util', filename))
      bot.files.register(util)
 
    }
  }
}

module.exports = inject
  /*const fs = require('fs/promises')
const path = require('path')


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
*/
