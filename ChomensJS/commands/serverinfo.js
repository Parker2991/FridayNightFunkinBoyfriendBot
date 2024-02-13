const os = require('os')
const path = require('path')
const fs = require('fs/promises')
const { EmbedBuilder } = require('discord.js')

// should i move this to util?
async function getCpuModelName () {
  const cpuInfo = await fs.readFile('/proc/cpuinfo')
  const lines = cpuInfo.toString().split('\n')
  // among us way of doing it
  const modelName = lines.find((line) => line.startsWith('model name')).split('\t: ')
  return modelName[1]
}

module.exports = {
  name: 'serverinfo',
  alias: [],
  description: 'Shows the info about the server that is hosting the bot',
  trusted: 0,
  usage: '',
  execute: async function (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    const component = []
    component.push({ text: 'Hostname: ', color: 'gold' })
    component.push({ text: os.hostname(), color: 'aqua' })
    component.push('\n')
    component.push({ text: 'Working directory: ', color: 'gold' })
    component.push({ text: path.join(__dirname, '..') /* if without .. it will includes the commands directory */, color: 'aqua' })
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
    bot.tellraw(selector, component)
  },
  discordExecute: async function (bot, username, sender, prefix, args, channeldc, message, config) {
    const Embed = new EmbedBuilder()
      .setColor(config.discord.embedsColors.normal)
      .setTitle('Server Info')
      .setDescription(`Hostname: \`${os.hostname()}\`
                        Working directory: \`${path.join(__dirname, '..')}\`
                        OS architecture: \`${os.arch()}\`
                        OS platform: \`${os.platform()}\`
                        OS name: \`${os.version()}\`
                        CPU cores: \`${os.cpus().length}\`
                        CPU model: \`${await getCpuModelName()}\`
                        Total memory usage: \`${Math.floor(os.totalmem() / 1024 / 1024)} MB\`
                        Available memory usage: \`${Math.floor(os.freemem() / 1024 / 1024)} MB\``)
    channeldc.send({ embeds: [Embed] })
  }
}
