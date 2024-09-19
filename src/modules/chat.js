const loadPrismarineChat = require('prismarine-chat');
const KaboomChatParser = require('../util/ChatParsers/Kaboom');
const ChipmunkModChatParser = require('../util/ChatParsers/ChipmunkMod');
const CreayunChatParser = require('../util/ChatParsers/Creayun');
const sayConsoleChatParser = require('../util/ChatParsers/sayConsole');
const VanillaChatParser = require("../util/ChatParsers/VanillaChat");
const yfdCustomChatParser = require('../util/ChatParsers/yfdCustomChat');
function tryParse (json) {
  try {
    return JSON.parse(json)
  } catch (error) {
    return { text: '' }
  }
}
//what was changed??
function chat (bot, options, config) {
  let ChatMessage
  bot.on('registry_ready', registry => {
    ChatMessage = loadPrismarineChat(registry)
  })
  if (options.isSavage || options.isCreayun) {
    bot.chatParsers = [CreayunChatParser, sayConsoleChatParser]
  } else {
    bot.chatParsers = [KaboomChatParser, ChipmunkModChatParser, VanillaChatParser, sayConsoleChatParser, yfdCustomChatParser]
  }
  bot.on('packet.profileless_chat', packet => {
    const message = tryParse(packet.message)
    const sender = tryParse(packet.name)
    bot.emit('profileless_chat', {
      message,
      type: packet.type,
      sender
    })
    switch (packet.type) {
      case 1:
        bot.emit('message', { translate: "chat.type.emote", with: [ sender, message ]})
      break
      case 2:
        bot.emit('message', { translate: "commands.message.display.incoming", with: [ sender, message], color: "gray", italic: true })
      break
      case 3:
        bot.emit('message', { translate: "commands.message.display.outgoing", with: [ sender, message ], color: "gray", italic: true })
      break
      case 4:
        bot.emit('message', message);
      break
      case 5:
        bot.emit('message', { translate: 'chat.type.announcement', with: [ sender, message ]})
      break
    }
    tryParsingMessage(message, { senderName: sender, players: bot.players, getMessageAsPrismarine: bot.getMessageAsPrismarine })
  })

  bot.on('packet.player_chat', (packet, data) => {
    const unsigned = tryParse(packet.unsignedChatContent)
    bot.emit('player_chat', { plain: packet.plainMessage, unsigned, senderUuid: packet.senderUuid })
    switch (packet.type) {
      case 5:
        bot.emit('message', { translate: "chat.type.announcement", with: [ bot.players.find(player => player.uuid === packet.senderUuid).profile.name, packet.plainMessage ]})
      break
      default:
        bot.emit('message', unsigned)
    }
    tryParsingMessage(unsigned, { senderUuid: packet.senderUuid, players: bot.players, getMessageAsPrismarine: bot.getMessageAsPrismarine })
  })

  bot.on('packet.system_chat', packet => {
    const message = tryParse(packet.content)
    if (config.commandSetMessage) {
      if (message.translate === 'advMode.setCommand.success') return // Ignores command set message
    }
    if (message.translate === 'multiplayer.message_not_delivered') return
    bot.emit('system_chat', { message, actionbar: packet.isActionBar })

    if (packet.isActionBar) {
      return
    }

    bot.emit('message', message)

    tryParsingMessage(message, { players: bot.players, getMessageAsPrismarine: bot.getMessageAsPrismarine })
  })

  function tryParsingMessage (message, data) {
    let parsed
    for (const parser of bot.chatParsers) {
      parsed = parser(message, data)
      if (parsed) break
    }

    if (!parsed) return
    bot.emit('parsed_message', parsed)
  }

  bot.getMessageAsPrismarine = message => {
    try {
      if (ChatMessage !== undefined) {
        return new ChatMessage(message)
      }
    } catch {}

    return undefined
  }
  bot.chat = {
    message: message => {
      const acc = 0;
      const bitset = Buffer.allocUnsafe(3);
      bitset[0] = acc & 0xFF;
      bitset[1] = (acc >> 8) & 0xFF;
      bitset[2] = (acc >> 16) & 0xFF;
      bot._client.write('chat_message', {
        message: message?.substring(0, 256),
        timestamp: BigInt(Date.now()),
        salt: 0n,
        offset: 0,
        acknowledged: bitset
      })
    },
    command: command => {
      bot._client.write('chat_command', {
        command: command?.substring(0, 256),
        timestamp: BigInt(Date.now()),
        salt: 0n,
        argumentSignatures: [],
        signedPreview: false,
        messageCount: 0,
        acknowledged: Buffer.alloc(3),
        previousMessages: []
      })
    }
  }
  bot.tellraw = (selector, message) => {
    bot.core.run(`minecraft:tellraw ${selector} ` + JSON.stringify(message))
  }
}
module.exports = chat;
