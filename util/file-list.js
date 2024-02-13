const fs = require('fs/promises')


async function list (filepath = '.') {
  const files = await fs.readdir(filepath)

  const component = []
  for (const filename of files) {
    component.push(filename)
  }
  return component
}

module.exports = list
