const mc = require('minecraft-protocol')
const crypto = require('crypto')
const colorConvert = require('color-convert')
const CommandError = require('../CommandModules/command_error')
const uuid = require('uuid-by-string')
const moment = require('moment-timezone')
const cowsay = require('cowsay2')
const cows = require('cowsay2/cows')
const { VM } = require('vm2')
const randomstring = require('randomstring')
const mineflayer = require('mineflayer')
const Vec3 = require('vec3')
function inject (bot) {
  const chatMessage = require('prismarine-chat')
  const mcData = require('minecraft-data')(bot.version)
  bot.vmOptions = {
    timeout: 2000,
    sandbox: {
      run (cmd) {
        bot.core.run(cmd)
      },
      mc,
      mineflayer,
      CommandError,
      chat: bot.chat,
      moment,
      randomstring,
      uuid,
      chatMessage,
      crypto,
      colorConvert,
      bruhifyText (message) {
        if (
          typeof message !== 'string'
        ) throw new SyntaxError('message must be a string')
        bot.bruhifyText = message.substring(0, 1000)
      },
      cowsay,
      cows,
      mcData,
      Vec3
    }
  }
  bot.vm = new VM(bot.vmOptions)
};

module.exports = inject 
