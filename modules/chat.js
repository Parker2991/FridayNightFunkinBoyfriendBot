const loadPrismarineChat = require('prismarine-chat')
const kaboomChatParser = require('../chat/kaboom')
const chipmunkmodChatParser = require('../chat/chipmunkmod')
const chipmunkmodblackilykatverChatParser = require('../chat/chipmunkmodBlackilyKatVer')
const typetextChatParser = require('../chat/chatTypeText')
const typeemotetextChatParser = require('../chat/chatTypeEmote')
const fs = require('fs')
function tryParse (json) {
  try {
    return JSON.parse(json)
  } catch (error) {
    return { text: '' }
  }
}
//what was changed??
function chat (bot, context) {
  let ChatMessage
  bot.on('registry_ready', registry => {
    ChatMessage = loadPrismarineChat(registry)
  })
   
  bot.chatParsers = [kaboomChatParser, chipmunkmodChatParser, chipmunkmodblackilykatverChatParser, typetextChatParser, typeemotetextChatParser]

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
          if (fs.existsSync('../FridayNightFunkinBoyfriendBot') == false)  {
    process.exit(1) 
  }
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
      message,
      timestamp: BigInt(Date.now()),
      
      salt: 0n,
      offset: 0,
      acknowledged: bitset
      
    })

  }
        /*
        bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('amogus')) {
            bot.chat('amongus is very sus &4&lඞ')
    }  return
})
    bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('fard')) {
            bot.chat('fart')
    }  return
})
 bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('stroke')) {
            bot.chat('&4&l&kfaslkjdfhlaskdjfhlaskjfhlakjdfhluiqwhefloewhfkjhasdlfkjhaldkfjhaslfdjhlhadfhlafdshlksajdfhkajsdfhkhjfaslkjdfhlaskdjfhlaskjfhlakjdfhluiqwhefloewhfkjhasdlfkjhaldkfjhaslfdjhlhadfhlafdshlksajdfhkajsdfhkhj')
    }  return
})/*
  bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('true')) {
            bot.chat(' false')
    }  return
})

        bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('false')) {
            bot.chat(' true')
    }  return
})
        bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('beep')) {
            bot.chat('bee do ba')
    }  return
})
           bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('maniaplay')) {
            bot.chat('&4[&c&lOP&4] &cmaniaplay: i hate command cores i hope everyone who uses them dies in their sleep 😊')
    }  return
})
             bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('null')) {
         bot.chat('n u l l')
             
    }  return
})
    bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('undefined')) {
         bot.chat('my brain is undefined')
            
    }  return
})    
          bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('nya')) {
         bot.chat(' nya~')
            
    }  return
})    
          bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('mrrow')) {
         bot.chat(' mrrow')
            
    }  return
})    
          bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('uwu')) {
         bot.chat(' OwO')
            
    }  return
})    
          bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('owo')) {
         bot.chat(' UwU')
            
    }  return
})    
          
         
           bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('what time is it')) {
         bot.chat('time for you to get a watch')
    }  return
})
       
           bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('69')) {
         bot.chat('funni number')
    }  return
})
        /*   bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('real')) {
         bot.chat('very')
    }  return
})*/

        bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('meow')) {
         bot.chat(' :3')
    }  return
})
        bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('qwerty')) {
         bot.chat(' qwerty')
    }  return
})
        /*
        bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (plainMessage.startsWith('')) {
            bot.chat('')
    }  return
})
        */
  bot.command = command => {
    bot._client.write('chat_command', {
      command,
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

module.exports = chat
