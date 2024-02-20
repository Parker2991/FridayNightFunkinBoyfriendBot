const CommandError = require('../CommandModules/command_error')
const os = require('os')
const path = require('path')
const fs = require('fs/promises')
const packageJSON = require("../package.json")
async function getCpuModelName () {
  const cpuInfo = await fs.readFile('/proc/cpuinfo')
  const lines = cpuInfo.toString().split('\n')
  // among us way of doing it
  const modelName = lines.find((line) => line.startsWith('model name')).split('\t: ')
  return modelName[1]
}

module.exports = {
  name: 'serverinfo',
   description:['check server info'],
  async execute (context) {    
    const discordJSVersion = packageJSON.dependencies["discord.js"];
      const MinecraftProtocolVersion = packageJSON.dependencies["minecraft-protocol"];
  
    context.source.sendFeedback(`Hostname: ${os.hostname()}`, false)
    context.source.sendFeedback(`Working Directory: ${path.join(__dirname, '..')}`, false)
  context.source.sendFeedback(`OS architecture: ${os.arch()}`, false)
context.source.sendFeedback(`OS platform: ${os.platform()}`, false)
    context.source.sendFeedback(`OS name: ${os.version()}`, false)
    context.source.sendFeedback(`CPU cores: ${os.cpus().length}`, false)
    context.source.sendFeedback(`CPU model: ${await getCpuModelName()}`, false)
context.source.sendFeedback(`Node js Version @${process.version}`, false)
    context.source.sendFeedback(`Minecraft-Protocol Version @${MinecraftProtocolVersion}`, false) 
    context.source.sendFeedback(`Discord.js @${discordJSVersion}`, false)

  }
}
