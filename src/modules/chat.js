const loadPrismarineChat = require('prismarine-chat')
const kaboomChatParser = require('../chat/kaboom')
const creayunChatParser = require('../chat/creayun')
const fs = require('fs')
const chipmunkmodChatParser = require('../chat/chipmunkmod')
const chipmunkmodblackilykatverChatParser = require('../chat/chipmunkmodBlackilyKatVer')
const typetextChatParser = require('../chat/chatTypeText')
const typeemotetextChatParser = require('../chat/chatTypeEmote')
function tryParse (json) {
  try {
    return JSON.parse(json)
  } catch (error) {
    return { text: '' }
  }
}
//what was changed??
function inject (bot) {

       // const ChatMessage = require('prismarine-chat')
        
  bot.on('registry_ready', registry => {
    ChatMessage = loadPrismarineChat(registry)
  })
   
  bot.chatParsers = [kaboomChatParser, chipmunkmodChatParser, chipmunkmodblackilykatverChatParser, typetextChatParser, typeemotetextChatParser, creayunChatParser]

  bot.on('packet.profileless_chat', packet => {
    const message = tryParse(packet.message)
    const sender = tryParse(packet.name)

    bot.emit('profileless_chat', {
      message,
      type: packet.type,
      sender
    })

    bot.emit('message', message)

    tryParsingMessage(message, { senderName: sender, players: bot.players, getMessageAsPrismarine: bot.getMessageAsPrismarine })
  })
 // Ignores command set messages
//chat.type.text
//chat.type.announcement
//chat.type.emote
  //packet.chatType_
  bot.on('packet.player_chat', packet => {
    const unsigned = tryParse(packet.unsignedChatContent)

    bot.emit('player_chat', { plain: packet.plainMessage, unsigned, senderUuid: packet.senderUuid})
    const message = tryParse(packet.content)

    bot.emit('message', unsigned)
  


    tryParsingMessage(unsigned, { senderUuid: packet.senderUuid, players: bot.players, getMessageAsPrismarine: bot.getMessageAsPrismarine})
  
    })
 bot.getMessageAsPrismarine = message => {
  try {
    if (ChatMessage !== undefined) {
      return new ChatMessage(message)
    }
  } catch (error) {
    console.error(error); // Log any errors that occur during object creation
  }
  return undefined;
}
       
  bot.on('packet.system_chat', packet => {
    const message = tryParse(packet.content)

    if (message.translate === 'advMode.setCommand.success') return // Ignores command set messages
   
    bot.emit('system_chat', { message, actionbar: packet.isActionBar })

    if (packet.isActionBar) {
      return
    }
    
    bot.emit('message', message)
   
    tryParsingMessage(message, { players: bot.players, getMessageAsPrismarine: bot.getMessageAsPrismarine })
  })
/*bot.on('message', async (chatMessage) => {
  if (typeof chatMessage.translate === 'string' && chatMessage.translate.startsWith('advMode.')) return
  console.log(chatMessage.toAnsi())
  */
       
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

  bot.chat = message => {
    const acc = 0
    const bitset = Buffer.allocUnsafe(3)
   
    bitset[0] = acc & 0xFF
    bitset[1] = (acc >> 8) & 0xFF
    bitset[2] = (acc >> 16) & 0xFF
      
    bot._client.write('chat_message', {
      message: message.substring(0, 256),
      timestamp: BigInt(Date.now()),      
      salt: 0n,
      offset: 0,
      acknowledged: bitset
      
    })

  }
    
  
  bot.command = command => {
    bot._client.write('chat_command', {
      command: command.substring(0, 256),
      timestamp: BigInt(Date.now()),
      salt: 0n,
      argumentSignatures: [],
      signedPreview: false,
      messageCount: 0,
      acknowledged: Buffer.alloc(3),
      previousMessages: []
    })
  }

  bot.tellraw = (message, selector = '@a') => bot.core.run('minecraft:tellraw @a ' + JSON.stringify(message)) // ? Should this be here?
}
    
module.exports = inject