/**
 * for the chat packet listener (in util cuz proxy + bot)
 * @param {object} packet chat packet
 * @param {object} bot bot
 * @param {boolean} mc119 minecraft 1.19 or newer
 */
function chatPacketListener (packet, bot, mc119) {
  // try catch prevents json parse error (happens with a custom server that sends an invalid json component for example)
  try {
    const ChatMessage = require('prismarine-chat')(bot.version)

    const parsedMessage = JSON.parse(mc119 ? packet.formattedMessage : packet.message)
    // down here it prevents command set message

    // for ayunboom cuz its 1.17.1
    // VVVVVVVVVVVVVVVVVVVVVVVVVVVV
    if (parsedMessage.extra) {
      if (parsedMessage.extra[0].text === 'Command set: ') return
    }
    // for 1.18 or newer(?)
    // VVVVVVVVVVVVVVVVVVVVV
    if (parsedMessage.translate === 'advMode.setCommand.success') return

    const message = ChatMessage.fromNotch(mc119 ? packet.formattedMessage : packet.message)

    bot.emit('message', message, parsedMessage)
  } catch (e) {
    bot.console.error(e)
  }
}

/**
 * new parse player messages, more accurate message real!11!!
 * @param {object} _message prismarine-chat ChatMessage - unused in code but used in legacy parsing
 * @param {object} parsedMessage parsed message in a js object
 * @param {object} bot bot
 */
function parsePlayerMessages (_message, parsedMessage, bot) {
  const ChatMessage = require('prismarine-chat')(bot.version)
  const vanillaKeys = [
    'chat.type.text',
    'chat.type.announcement',
    'chat.type.emote'
  ]

  // parse Extras™ chat messages
  if (
    parsedMessage.translate === '%s' &&
    parsedMessage.with?.length === 1 &&
    parsedMessage.with[0]?.text === '' &&
    parsedMessage.with[0]?.extra?.length === 5
  ) {
    const trueMessageComponent = parsedMessage.with[0].extra
    const username = ChatMessage.fromNotch(trueMessageComponent[1]).toMotd()
    const message = ChatMessage.fromNotch(trueMessageComponent[4]).toMotd()
    bot.emit('chat', username, message)

    return
  }

  // parse CommandSpy™ messages
  if (
    (
      parsedMessage.color === 'yellow' ||
      parsedMessage.color === 'aqua'
    ) &&
    parsedMessage.extra?.length === 2
  ) {
    const username = parsedMessage.text
    const command = parsedMessage.extra[1].text
    bot.emit('cspy', username, command)

    return
  }

  // parse Minecraft Vanilla™ messages
  if (
    vanillaKeys.includes(parsedMessage.translate) &&
    parsedMessage.with.length >= 2
  ) {
    const username = ChatMessage.fromNotch(parsedMessage.with[0]).toMotd()
    const message = ChatMessage.fromNotch(parsedMessage.with[1]).toMotd()
    bot.emit('chat', username, message)

    return
  }

  parsePlayerMessagesLegacy(_message, parsedMessage, bot)
}

/**
 * LEGACY - parse player messages (for prismarine-chat)
 * @param {object} message prismarine-chat ChatMessage
 * @param {object} _parsedMessage parsed message in a js object
 * @param {object} bot bot
 */
function parsePlayerMessagesLegacy (message, _parsedMessage, bot) {
  try {
    // here is all the player message parsing thing
    const raw = message.toMotd() // lags the bot as you already know
    // if (raw.match(/.* .*: .*/g)) {
    //   const username = raw.replace(/.*?\[.*?\] /g, '').replace(/:.*/g, '').replace(/§#....../gm, '')
    //   const message = raw.split(': ').slice(1).join(' ').replace(/§#....../gm, '')
    //   bot.emit('chat', username, message)
    // } else
    if (raw.match(/.* .*\u203a .*/g)) {
      const username = raw.replace(/.*?\[.*?\] /g, '').replace(/\u203a.*/g, '').replace(/§#....../gm, '').split(' ')[0]
      const message = raw.split('\u203a ').slice(1).join(' ').substring(2)
      bot.emit('chat', username, message)
    } else if (raw.match(/.* .*\u00BB .*/g)) {
      const username = raw.replace(/.*?\[.*?\] /g, '').replace(/\u00BB.*/g, '').replace(/§#....../gm, '').split(' ')[0]
      const message = raw.split('\u00BB ').slice(1).join(' ')
      bot.emit('chat', username, message)
    }
    // } else if (raw.match(/.* .*> .*/g)) {
    //   const username = raw.replace(/.*?\[.*?\] /g, '').replace(/>.*/g, '').replace(/§#....../gm, '').split(' ')[0]
    //   const message = raw.split('> ').slice(1).join(' ').substring(2)
    //   bot.emit('chat', username, message)
    // } else if (raw.match(/<.*> .*/g)) {
    //   const username = raw.substring(1).split('>')[0]
    //   const message = raw.split('> ').slice(1).join(' ')
    //
    //   bot.emit('chat', username, message)
    // } else if (raw.match(/§.*§b: §b\/.*/g)) {
    //   const username = raw.split('§b: §b')[0]
    //   const command = raw.split('§b: §b')[1]

    //   bot.emit('cspy', username, command)
    // } else if (raw.match(/§.*§e: §e\/.*/g)) {
    //   const username = raw.split('§e: §e')[0]
    //   const command = raw.split('§e: §e')[1]
    //   bot.emit('cspy', username, command)
    // } else if (raw.match(/§.*§b: \/.*/g)) {
    //   const username = raw.split('§b: ')[0]
    //   const command = raw.split('§b: ')[1]

    //   bot.emit('cspy', username, command)
    // } else if (raw.match(/§.*§e: \/.*/g)) {
    //   const username = raw.split('§e: ')[0]
    //   const command = raw.split('§e: ')[1]
    //   bot.emit('cspy', username, command)
    // }
  } catch (e) {}
};

module.exports = { chatPacketListener, parsePlayerMessages }
