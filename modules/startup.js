function inject (bot, context) {

  const buildstring = process.env['buildstring']
  const util = require('node:util')
 const { EventEmitter } = require('events')
console.log(`Starting ${buildstring} .......`)
console.log(`Username: ${bot.options.username}`)
console.log(`Host: ${bot.options.host}:${bot.options.port}`)
  console.log(`Minecraft java version: ${bot.options.version}`)
  

}

module.exports = inject
