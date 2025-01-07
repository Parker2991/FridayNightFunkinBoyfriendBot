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
       context.source.sendFeedback(`Total memory usage: ${Math.floor(os.totalmem() / 512 / 512)} MB`, false)
       context.source.sendFeedback(`Available memory usage: ${Math.floor(os.freemem() / 512 / 512)} MB`, false)
context.source.sendFeedback(`Node js Version @${process.version}`, false)
    context.source.sendFeedback(`Minecraft-Protocol Version @${MinecraftProtocolVersion}`, false) 
    context.source.sendFeedback(`Discord.js @${discordJSVersion}`, false)

  }
}
/*component.push({ text: 'Hostname: ', color: 'gold' })
    component.push({ text: os.hostname(), color: 'aqua' })
    component.push('\n')
    component.push({ text: 'Working directory: ', color: 'gold' })
    component.push({ text: path.join(__dirname, '..') /* if without .. it will includes the commands directory , color: 'aqua' })
    component.push('\n')
    component.push({ text: 'OS architecture: ', color: 'gold' })
    component.push({ text: os.arch(), color: 'aqua' })
    component.push('\n')
    component.push({ text: 'OS platform: ', color: 'gold' })
    component.push({ text: os.platform(), color: 'aqua' })
    component.push('\n')
    component.push({ text: 'OS name: ', color: 'gold' })
    component.push({ text: os.version(), color: 'aqua' })
    component.push('\n')
    component.push({ text: 'CPU cores: ', color: 'gold' })
    component.push({ text: os.cpus().length, color: 'aqua' })
    component.push('\n')
    component.push({ text: 'CPU model: ', color: 'gold' })
    component.push({ text: await getCpuModelName(), color: 'aqua' })
    component.push('\n')
    component.push({ text: 'Total memory usage: ', color: 'gold' })
    component.push({ text: `${Math.floor(os.totalmem() / 1024 / 1024)} MB`, color: 'aqua' })
    component.push('\n')
    component.push({ text: 'Available memory usage: ', color: 'gold' })
    component.push({ text: `${Math.floor(os.freemem() / 1024 / 1024)} MB`, color: 'aqua' })
    */