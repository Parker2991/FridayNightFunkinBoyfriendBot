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

function inject (context) {
  const bot = context.bot;
  const config = context.config;
  const options = context.options;
  let ChatMessage
  bot.on('registry_ready', registry => {
    ChatMessage = loadPrismarineChat(registry)
  })
  if (options.mode === "savageFriends" || options.mode === "creayun") {
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
        if (config?.debug?.chat?.profileless?.packetType === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PR Chat", color: "blue" },
              { text: "type", color: "light_purple" },
              { text: "1", color: "gold" },
              { translate: "chat.type.emote", with: [ sender, message ]}
            ]
          });
        } if (config?.debug?.chat?.profileless?.json === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PR Chat", color: "blue" },
              { text: "type", color: "light_purple" },
              { text: "1", color: "gold" },
              JSON.stringify({
                translate: "chat.type.emote", with: [ sender, message ]
              })
            ]
          })
        } else {
          bot.emit('message', { translate: "chat.type.emote", with: [ sender, message ]})
        }
      break
      case 2:
        if (config?.debug?.chat?.profileless?.packetType === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PR Chat", color: "blue" },
              { text: "type", color: "light_purple" },
              { text: "2", color: "gold" },
              { translate: "commands.message.display.incoming", with: [ sender, message ], color: "gray", italic: true }
            ]
          })
        } if (config?.debug?.chat?.profileless?.json === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PR Chat", color: "blue" },
              { text: "type", color: "light_purple" },
              { text: "2", color: "gold" },
              JSON.stringify({
                translate: "commands.message.display.incoming", with: [ sender, message ], color: "gray", italic: true
              })
            ]
          })
        } else {
          bot.emit('message', { translate: "commands.message.display.incoming", with: [ sender, message ], color: "gray", italic: true })
        }
      break
      case 3:
        if (config?.debug?.chat?.profileless?.packetType === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PR Chat", color: "blue" },
              { text: "type", color: "light_purple" },
              { text: "3", color: "gold" },
              { translate: "commands.message.display.outgoing", with: [ sender, message ], color: "gray", italic: true }
            ]
          })
        } if (config?.debug?.chat?.profileless?.json === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PR Chat", color: "blue" },
              { text: "type", color: "light_purple" },
              { text: "3", color: "gold" },
              JSON.stringify({
                translate: "commands.message.display.outgoing", with: [ sender, message ], color: "gray", italic: true
              })
            ]
          })
        } else {
          bot.emit('message', [{ translate: "commands.message.display.outgoing", with: [ sender, message ], color: "gray", italic: true }])
        }
      break
      case 4:
        if (config?.debug?.chat?.profileless?.packetType === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PR Chat", color: "blue" },
              { text: "type", color: "light_purple" },
              { text: "4", color: "gold" },
              message
            ]
          })
        } if (config?.debug?.chat?.profileless?.json === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PR Chat", color: "blue" },
              { text: "type", color: "light_purple" },
              { text: "4", color: "gold" },
              JSON.stringify(message)
            ]
          })
        } else {
          bot.emit('message', [message]);
        }
      break
      case 5:
        if (config?.debug?.chat?.profileless?.packetType === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PR Chat", color: "blue" },
              { text: "type", color: "light_purple" },
              { text: "5", color: "gold" },
              { translate: 'chat.type.announcement', with: [ sender, message ]}
            ]
          })
        } if (config?.debug.chat?.profileless?.json === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PR Chat", color: "blue" },
              { text: "type", color: "light_purple" },
              { text: "5", color: "gold" },
              JSON.stringify({ translate: 'chat.type.announcement', with: [ sender, message ]})
            ]
          })
        } else {
          bot.emit('message', [{ translate: 'chat.type.announcement', with: [ sender, message ]}])
        }
      break
    }
    tryParsingMessage(message, { senderName: sender, players: bot.players, getMessageAsPrismarine: bot.getMessageAsPrismarine })
  })

  bot.on('packet.player_chat', (packet, data) => {
    const unsigned = tryParse(packet.unsignedChatContent)
    bot.emit('player_chat', { plain: packet.plainMessage, unsigned, senderUuid: packet.senderUuid })
    switch (packet.type) {
      case 5:
        if (config?.debug?.chat?.player?.packetType === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PL Chat", color: "green" },
              { text: "type", color: "dark_green"},
              { text: "5", color: "gold" },
              { translate: "chat.type.announcement", with: [ bot.players.find(player => player.uuid === packet.senderUuid).profile.name, packet.plainMessage ]}
            ]
          })
        } if (config?.debug?.chat?.player?.json === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PL Chat", color: "green" },
              { text: "type", color: "dark_green"},
              { text: "5", color: "gold" },
              JSON.stringify({ translate: "chat.type.announcement", with: [ bot.players.find(player => player.uuid === packet.senderUuid).profile.name, packet.plainMessage ]})
            ]
          })
        } else {
          bot.emit('message', { translate: "chat.type.announcement", with: [ bot.players.find(player => player.uuid === packet.senderUuid).profile.name, packet.plainMessage ]})
        }
      break
      case 4:
        if (config?.debug?.chat?.player?.packetType === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PL Chat", color: "green" },
              { text: "type", color: "dark_green"},
              { text: "4", color: "gold" },
              unsigned
            ]
          })
        } if (config?.debug?.chat?.player?.json === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PL Chat", color: "green" },
              { text: "type", color: "dark_green"},
              { text: "4", color: "gold" },
              JSON.stringify(unsigned)
            ]
          })
        } else {
          bot.emit('message', unsigned);
        }
      break
      case 3:
        if (config?.debug?.chat?.player?.packetType === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PL Chat", color: "green" },
              { text: "type", color: "dark_green"},
              { text: "3", color: "gold" },
              { translate: "commands.message.display.outgoing", with: [ bot.players.find(player => player.uuid === packet.senderUuid).profile.name, packet.plainMessage ], color: "gray", italic: true }
            ]
          })
        } if (config?.debug?.chat?.player?.json === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PL Chat", color: "green" },
              { text: "type", color: "dark_green"},
              { text: "3", color: "gold" },
              JSON.stringify({ translate: "commands.message.display.outgoing", with: [ bot.players.find(player => player.uuid === packet.senderUuid).profile.name, packet.plainMessage ], color: "gray", italic: true })
            ]
          })
        } else {
          bot.emit('message', { translate: "commands.message.display.outgoing", with: [ bot.players.find(player => player.uuid === packet.senderUuid).profile.name, packet.plainMessage ], color: "gray", italic: true })
        }
      break
      case 2:
        if (config?.debug?.chat?.player?.packetType === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PL Chat", color: "green" },
              { text: "type", color: "dark_green"},
              { text: "2", color: "gold" },
              { translate: "commands.message.display.incoming", with: [ bot.players.find(player => player.uuid === packet.senderUuid).profile.name, packet.plainMessage ], color: "gray", italic: true }
            ]
          })
        } if (config?.debug?.chat?.player?.json === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PL Chat", color: "green" },
              { text: "type", color: "dark_green"},
              { text: "2", color: "gold" },
              JSON.stringify({ translate: "commands.message.display.incoming", with: [ bot.players.find(player => player.uuid === packet.senderUuid).profile.name, packet.plainMessage ], color: "gray", italic: true })
            ]
          })
        } else {
          bot.emit('message', { translate: "commands.message.display.incoming", with: [ bot.players.find(player => player.uuid === packet.senderUuid).profile.name, packet.plainMessage ], color: "gray", italic: true })
        }
      break
      case 1:
        if (config?.debug?.chat?.player?.packetType === true) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PL Chat", color: "green" },
              { text: "type", color: "dark_green"},
              { text: "1", color: "gold" },
              { translate: "chat.type.emote", with: [ bot.players.find(player => player.uuid === packet.senderUuid).profile.name, packet.plainMessage ]}
            ]
          })
        } if (config?.debug?.chat?.player?.json) {
          bot.emit('message', {
            translate: "[%s | %s: %s] %s",
            with: [
              { text: "PL Chat", color: "green" },
              { text: "type", color: "dark_green"},
              { text: "1", color: "gold" },
              JSON.stringify({ translate: "chat.type.emote", with: [ bot.players.find(player => player.uuid === packet.senderUuid).profile.name, packet.plainMessage ]})
            ]
          })
        } else {
          bot.emit('message', { translate: "chat.type.emote", with: [ bot.players.find(player => player.uuid === packet.senderUuid).profile.name, packet.plainMessage ]})
        }
      break
    }
    tryParsingMessage(unsigned, { senderUuid: packet.senderUuid, players: bot.players, getMessageAsPrismarine: bot.getMessageAsPrismarine })
  })

  bot.on('packet.system_chat', packet => {
    const message = tryParse(packet.content)
    if (message.translate === "advMode.setCommand.success" && config?.debug?.commandSetMessage === false) return;
    if (message.translate === 'multiplayer.message_not_delivered') return
    bot.emit('system_chat', { message, actionbar: packet.isActionBar })

    if (packet.isActionBar) {
      return
    }

    if (message.translate === "advMode.notAllowed") return;

    if (config?.debug?.chat?.system?.packetType === true) {
      bot.emit('message', {
        translate: "[%s] %s",
        with: [
          { text: "System Chat", color: "dark_blue"},
          message
        ]
      })
    } if (config?.debug?.chat?.system?.json === true) {
      bot.emit('message', {
        translate: "[%s] %s",
        with: [
          { text: "System Chat", color: "dark_blue"},
          JSON.stringify(message)
        ]
      })
    } else {
      bot.emit('message', message);
    }
    tryParsingMessage(message, { players: bot.players, getMessageAsPrismarine: bot.getMessageAsPrismarine });
  })

  bot.on('packet.action_bar', (message) => {
    let parsedMessage = tryParse(message.text)
    bot.emit('actionBar', {
      translate: '[%s] %s',
      color: 'dark_gray',
      with: [
        { text: "Action Bar", color: "light_purple" },
        parsedMessage
      ]
    });
  })

  bot.on('packet.boss_bar', (data) => {
    bot.emit('bossBar', {
      translate: '[%s | %s: %s] %s',
      color: 'dark_gray',
      with: [
        { text: "Boss Bar", color: "dark_aqua" },
        { text: "Action ID", color: "blue" },
        { text: `${data.action}`, color: 'gold' },
        tryParse(data.title)
      ]
    })
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
  require('../util/chat_util')(bot);
}
module.exports = {
  data: {
    enabled: true,
    name: "chat",
    type: "logging"
  },
  inject
};

