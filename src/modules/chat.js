const loadPrismarineChat = require('prismarine-chat')
const kaboomChatParser = require('../chat/kaboom')
const creayunChatParser = require('../chat/creayun')
const fs = require('fs')
const chipmunkmodChatParser = require('../chat/chipmunkmod')
const chipmunkmodblackilykatverChatParser = require('../chat/chipmunkmodBlackilyKatVer')
const typetextChatParser = require('../chat/chatTypeText')
const typeemotetextChatParser = require('../chat/chatTypeEmote')
const sayChatParser = require('../chat/say');
const savageChatParser = require('../chat/savage')
const { parseMessage } = require('../util/NbtChatParser');
const nbt = require('prismarine-nbt');
function tryParse (json) {
  try {
    return JSON.parse(json)
  } catch (error) {
    return { text: '' }
  }
}
function inject (bot) {
        
  bot.on('registry_ready', registry => {
    ChatMessage = loadPrismarineChat(registry)
  })
  if (bot.options.isCreayun && !bot.options.isKaboom) {
    bot.chatParsers = [creayunChatParser];
  } else if (bot.options.isSavage) {
    bot.chatParsers = [savageChatParser, sayChatParser, creayunChatParser, chipmunkmodChatParser]; 
  } else if (bot.options.isKaboom && !bot.options.isCreayun) {   
    bot.chatParsers = [kaboomChatParser, chipmunkmodChatParser, chipmunkmodblackilykatverChatParser, typetextChatParser, typeemotetextChatParser]
  }

  bot.on('packet.profileless_chat', packet => {//loadPrismarineChat.processNbtMessage(nbt.comp(json))
    if (bot.options.version === '1.20.4' || bot.options.version === '1.20.3') {
//      message = tryParse(loadPrismarineChat.processNbtMessage(packet.message))
      message = tryParse(nbt.simplify(packet.message));
      sender = tryParse(nbt.simplify(packet.name));
//      sender = tryParse(loadPrismarineChat.processNbtMessage(packet.name))
//      console.log(sender)
  //    console.log(message)
    } else if (bot.options.version === '1.20.2' || bot.options.version === '1.20.1' || bot.options.version === '1.20' || bot.options.version === '1.19.4' || bot.options.version === '1.19.3') {//  unsigned = JSON.parse(loadPrismarineChat.processNbtMessage(nbt.comp(nbt.string(packet.unsignedChatContent))))
      message = tryParse(packet.message)
      sender = tryParse(packet.name)
    }
    if (bot.options.debug.enabled) {
      if (bot.options.debug.enabled) {
         if (bot.options.debug.chat.profileless.name.json && bot.options.debug.enabled) bot.console.debug(bot.getMessageAsPrismarine([{text:'[',color:'dark_gray'},{text:'profilelessChat',color:'dark_purple'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Sender Packet',color:'green'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'JSON',color:'yellow'},{text:'] ',color:'dark_gray'}])?.toAnsi() + JSON.stringify(sender))
	 if (bot.options.debug.chat.profileless.name.ansi && bot.options.debug.enabled) bot.console.debug(bot.getMessageAsPrismarine([{text:'[',color:'dark_gray'},{text:'profilelessChat',color:'dark_purple'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Sender Packet',color:'green'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Ansi/Normal',color:'gold'},{text:'] ',color:'dark_gray'}])?.toAnsi() + bot.getMessageAsPrismarine(sender)?.toAnsi())
         if (bot.options.debug.chat.profileless.name.motd && bot.options.debug.enabled) bot.console.debug(bot.getMessageAsPrismarine([{text:'[',color:'dark_gray'},{text:'profilelessChat',color:'dark_purple'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Sender Packet',color:'green'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Motd',color:'dark_red'},{text:'] ',color:'dark_gray'}])?.toAnsi() + bot.getMessageAsPrismarine(sender)?.toMotd())
      }
      if (bot.options.debug.enabled) {
        if (bot.options.debug.chat.profileless.message.json && bot.options.debug.enabled) bot.console.debug(bot.getMessageAsPrismarine([{text:'[',color:'dark_gray'},{text:'profilelessChat',color:'dark_purple'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Message Packet',color:'red'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'JSON',color:'yellow'},{text:'] ',color:'dark_gray'}])?.toAnsi() + JSON.stringify(message))
        if (bot.options.debug.chat.profileless.message.ansi && bot.options.debug.enabled) bot.console.debug(bot.getMessageAsPrismarine([{text:'[',color:'dark_gray'},{text:'profilelessChat',color:'dark_purple'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Message Packet',color:'red'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Ansi/normal',color:'gold'},{text:'] ',color:'dark_gray'}])?.toAnsi() + bot.getMessageAsPrismarine(message)?.toAnsi())
        if (bot.options.debug.chat.profileless.message.motd && bot.options.debug.enabled) bot.console.debug(bot.getMessageAsPrismarine([{text:'[',color:'dark_gray'},{text:'profilelessChat',color:'dark_purple'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Message Packet',color:'red'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Motd',color:'dark_red'},{text:'] ',color:'dark_gray'}])?.toAnsi() + bot.getMessageAsPrismarine(message)?.toMotd())
      }
    }
    if (bot.options.debug.enabled) {
       if (bot.options.debug.chat.profileless.type && bot.options.debug.enabled) bot.console.debug(bot.getMessageAsPrismarine([{text:'[',color:'dark_gray'},{text:'profilelessChat',color:'dark_purple'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'type Packet',color:'light_purple'},{text:'] ',color:'dark_gray'},{text:`${packet.type}`}])?.toAnsi())

    }
    bot.emit('profileless_chat', {
      message,
      type: packet.type,
      sender
    })
    const translateMessage = bot.getMessageAsPrismarine(message)?.toMotd()
    const translateUsername = bot.getMessageAsPrismarine(sender)?.toMotd()
    if (packet.type === 1) bot.emit('message', bot.getMessageAsPrismarine({translate:"chat.type.emote", with:[`${translateUsername}`,`${translateMessage}`]})?.toMotd())
//    if (packet.type === 1) bot.emit('message', `[${translateUsername}§r] translateMessage`)
    if (packet.type === 2) bot.emit('message', bot.getMessageAsPrismarine({"translate":"commands.message.display.incoming","with":[`${translateUsername}`,`${translateMessage}`],"color":"gray","italic":true})?.toMotd())
    if (packet.type === 3) bot.emit('message', bot.getMessageAsPrismarine({"translate":"commands.message.display.outgoing","with":[`${translateUsername}`,`${translateMessage}`],"color":"gray","italic":true})?.toMotd())
    if (packet.type === 4) bot.emit('message', message);
    if (packet.type === 5) bot.emit('message', bot.getMessageAsPrismarine({translate:"chat.type.announcement",color:'white', with:[`${translateUsername}`,`${translateMessage}`]})?.toMotd())
    tryParsingMessage(message, { senderName: sender, players: bot.players, getMessageAsPrismarine: bot.getMessageAsPrismarine })
  })
 // Ignores command set messages
  bot.on('packet.player_chat', packet => {
    if (bot.options.version === '1.20.2' || bot.options.version === '1.20.1' || bot.options.version === '1.20' || bot.options.version === '1.19.4' || bot.options.version === '1.19.3') {
      unsigned = tryParse(packet.unsignedChatContent)
    
    } else if (bot.options.version === '1.20.4' || bot.options.version === '1.20.3') {
 //     unsigned = tryParse(tryParse(loadPrismarineChat.processNbtMessage(packet.unsignedChatContent)))
//      unsigned = parseMessage(tryParse(loadPrismarineChat.processNbtMessage(packet.unsignedChatContent)))
//        unsigned = loadPrismarineChat.processNbtMessage(nbt.comp(packet.unsignedChatContent).value)
        unsigned = nbt.simplify(packet.unsignedChatContent)
//      console.log(packet.signature)
     // tryParse(nbt.comp(packet.message));
//        console.log(bot.getMessageAsPrismarine(nbt.comp(unsigned))?.toAnsi())
// console.log(fromNotch(nbt.comp(msg).value).toAnsi())
//        console.log(bot.getMessageAsPrismarine(unsigned)?.toAnsi())
    }
    
    if (bot.options.debug.enabled) {
       if (bot.options.debug.chat.player.json && bot.options.debug.enabled) bot.console.debug(bot.getMessageAsPrismarine([{text:'[',color:'dark_gray'},{text:'playerChat',color:'dark_green'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'JSON',color:'yellow'},{text:'] ',color:'dark_gray'}])?.toAnsi() + JSON.stringify(packet.unsignedChatContent))
   
       if (bot.options.debug.chat.player.ansi && bot.options.debug.enabled) bot.console.debug(bot.getMessageAsPrismarine([{text:'[',color:'dark_gray'},{text:'playerChat',color:'dark_green'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Ansi/normal',color:'gold'},{text:'] ',color:'dark_gray'}])?.toAnsi() + bot.getMessageAsPrismarine(tryParse(packet.unsigned))?.toAnsi())
    
       if (bot.options.debug.chat.player.motd && bot.options.debug.enabled) bot.console.debug(bot.getMessageAsPrismarine([{text:'[',color:'dark_gray'},{text:'playerChat',color:'dark_green'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Motd',color:'dark_red'},{text:'] ',color:'dark_gray'}])?.toAnsi() + bot.getMessageAsPrismarine(unsigned)?.toMotd())
    }
    
    const message = parseMessage(tryParse(packet.content))
    const translateMessage = bot.getMessageAsPrismarine(unsigned)?.toMotd()
    const translateUsername = bot.getMessageAsPrismarine(packet.sender)?.toMotd()
    if (packet.type === 5) bot.emit('message', bot.getMessageAsPrismarine({translate:"chat.type.announcement",color:'white', with:[`${translateUsername}`,`${translateMessage}`]})?.toMotd())
    bot.emit('player_chat', { plain: nbt.simplify(packet.plainMessage), unsigned, senderUuid: packet.senderUuid })
    bot.emit('message', unsigned)
    tryParsingMessage(unsigned, { senderUuid: packet.senderUuid, players: bot.players, getMessageAsPrismarine: bot.getMessageAsPrismarine})
    })
 bot.getMessageAsPrismarine = message => {
  try {
    if (ChatMessage !== undefined) { 
      return new ChatMessage(nbt.simplify(message))
    }
  } catch (error) {
    console.error(error); // Log any errors that occur during object creation
  }
  return undefined;
}
       
  bot.on('packet.system_chat', packet => {
    if (bot.options.version === '1.20.4') {
       message = tryParse(loadPrismarineChat.processNbtMessage(packet.content))
    } else if (bot.options.version === '1.20.2' || bot.options.version === '1.20.1' || bot.options.version === '1.20' || bot.options.version === '1.19.4' || bot.options.version === '1.19.3') {
       message = tryParse(packet.content)
    }
    if (message.translate === 'advMode.setCommand.success') return // Ignores command set messages
    
    bot.emit('system_chat', { message, actionbar: packet.isActionBar })

    if (packet.isActionBar) {
      return
    }
    
    bot.emit('message', message)
//    console.log(message)
    if (bot.options.debug.enabled) {
       if (bot.options.debug.chat.system.json && bot.options.debug.enabled) bot.console.debug(bot.getMessageAsPrismarine([{text:'[',color:'dark_gray'},{text:'systemChat',color:'dark_blue'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'JSON',color:'yellow'},{text:'] ',color:'dark_gray'}])?.toAnsi() + JSON.stringify(message))

       if (bot.options.debug.chat.system.ansi && bot.options.debug.enabled) bot.console.debug(bot.getMessageAsPrismarine([{text:'[',color:'dark_gray'},{text:'systemChat',color:'dark_blue'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Ansi/Normal',color:'gold'},{text:'] ',color:'dark_gray'}])?.toAnsi() + bot.getMessageAsPrismarine(message)?.toAnsi())

       if (bot.options.debug.chat.system.motd && bot.options.debug.enabled) bot.console.debug(bot.getMessageAsPrismarine([{text:'[',color:'dark_gray'},{text:'systemChat',color:'dark_blue'},{text:'] ',color:'dark_gray'},{text:'[',color:'dark_gray'},{text:'Motd',color:'dark_red'},{text:'] ',color:'dark_gray'}])?.toAnsi() + bot.getMessageAsPrismarine(message)?.toMotd())
    }
    tryParsingMessage(message, { players: bot.players, getMessageAsPrismarine: bot.getMessageAsPrismarine })
  })
  function tryParsingMessage (message, data) {
    let parsed
    for (const parser of bot.chatParsers) {
      parsed = parser(message, data)
//      console.log(parsed)
      if (parsed) break
    }

    if (!parsed) return
//    console.log(data)
    bot.emit('parsed_message', parsed)
  }

  bot.getMessageAsPrismarine = message => {
    try {
      if (ChatMessage !== undefined) {
        return new ChatMessage(message)
      }
    } catch (e) {
//      console.log(e)
    }
    
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

  bot.tellraw = (message, selector = '@a') => bot.core.run('/minecraft:tellraw @a ' + JSON.stringify(message)) // ? Should this be here?
  bot.chatDelay = function delay(ms) {
     return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
module.exports = inject
