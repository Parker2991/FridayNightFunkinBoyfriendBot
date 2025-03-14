const sleep = require('./sleep');
module.exports = (bot) => {
  bot.chat = {
    message (message) {
      const acc = 0;
      const bitset = Buffer.allocUnsafe(3);
      bitset[0] = acc & 0xFF;
      bitset[1] = (acc >> 8) & 0xFF;
      bitset[2] = (acc >> 16) & 0xFF;
      bot._client.write('chat_message', {
        message: message?.substring(0, 256)?.replaceAll('§','&'),
        timestamp: BigInt(Date.now()),
        salt: 0n,
        offset: 0,
        acknowledged: bitset
      })
    },

    command (command) {
      bot._client.write('chat_command', {
        command: command?.substring(0, 256)?.replaceAll('§','&'),
        timestamp: BigInt(Date.now()),
        salt: 0n,
        argumentSignatures: [],
        signedPreview: false,
        messageCount: 0,
        acknowledged: Buffer.alloc(3),
        previousMessages: []
      })
    },

    send (message) {
      if (message.startsWith('/')) {
        bot._client.write('chat_command', {
          command: message?.substring(1).substring(0, 256)?.replaceAll('§','&'),
          timestamp: BigInt(Date.now()),
          salt: 0n,
          argumentSignatures: [],
          signedPreview: false,
          messageCount: 0,
          acknowledged: Buffer.alloc(3),
          previousMessages: []
        })
        return;
      }
      const acc = 0;
      const bitset = Buffer.allocUnsafe(3);
      bitset[0] = acc & 0xFF;
      bitset[1] = (acc >> 8) & 0xFF;
      bitset[2] = (acc >> 16) & 0xFF;
      bot._client.write('chat_message', {
        message: message?.substring(0, 256)?.replaceAll('§','&'),
        timestamp: BigInt(Date.now()),
        salt: 0n,
        offset: 0,
        acknowledged: bitset
      })
    }
  }

  bot.tellraw = (selector, message) => {
    if (bot.options.mode === "savageFriends") {
      bot.core.run(`minecraft:tellraw ${selector} ` + JSON.stringify(bot.getMessageAsPrismarine(message)?.toMotd()))
    } else {
      bot.core.run(`minecraft:tellraw ${selector} ` + JSON.stringify(message))
    }
  }
}
