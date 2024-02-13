const minecraftVersionToNumber = require('../../util/minecraftVersionToNumber')

function inject (bot, client, target, config, clientPacketBlacklist) {
  const { MessageBuilder } = require('prismarine-chat')(bot.version)
  clientPacketBlacklist.push('chat')
  clientPacketBlacklist.push('chat_message')
  client.on(minecraftVersionToNumber(target.version) >= 1.19 ? 'chat_message' : 'chat', (data) => {
    // not the best place to put command handler thing here but ok
    if (data.message?.startsWith('.')) {
      return bot.command_handler.run(
        client.username,
        config.prefixes[0] + data.message.substring(1),
        client.uuid,
        null,
        'h', // real hash hardcode
        'o',
        client.username,
        true,
        client,
        target
      )
    }

    if (!data.message?.startsWith('/')) {
      const codeParsedMessage = data.message.replace(/%[^%]+%/g, (code) => {
        try {
        // eslint-disable-next-line no-eval
          return eval(code.substring(1).slice(0, -1))
        } catch (e) {
          return code
        }
      })
      bot.tellraw('@a', {
        color: 'dark_gray',
        translate: '[%s] [%s] %s \u203a %s',
        with: [
          {
            text: 'Chat',
            color: 'gray'
          },
          {
            text: 'Proxy',
            color: 'gray'
          },
          {
            selector: client.username,
            color: 'green'
          },
          MessageBuilder.fromString('&7' + codeParsedMessage)
        ]
      })
    } else {
      target.sendMessage(data)
    }
  })
};

module.exports = { inject }
