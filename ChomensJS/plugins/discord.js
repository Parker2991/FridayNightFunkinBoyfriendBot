
const { escapeMarkdown } = require('../util/escapeMarkdown')
async function inject (bot, dcclient, config) {
  const chatMessage = require('prismarine-chat')(bot.version)
  const channel = dcclient.channels.cache.get(config.discord.servers[`${bot.server.host}:${bot.server.port}`])

  let queue = ''
  const queueInterval = setInterval(() => {
    if (queue === '') return

    channel.send({
      content: '```ansi\n' + queue.substring(0, 1986) + '\n```',
      allowedMentions: {
        parse: []
      }
    })//sed -i '/start/s/"/"choom -n 1000 -- /' .replit
    queue = ''
  }, 1000)

  bot.on('message', (message) => {
    const cleanMessage = escapeMarkdown(message.toAnsi(), true)
    const discordMsg = cleanMessage
      .replaceAll('@', '@\u200b')
      .replaceAll('http', 'http\u200b')
      .replaceAll('\u001b[9', '\u001b[3')
    if (message.toMotd().startsWith('§8[§eChomeNS §9Discord§8] §c')) return
    queue += '\n' + discordMsg
  })

  // handle discord messages!!!
  async function handleDiscordMessages (message) {
    // Ignore messages from the bot itself
    if (message.author.id === dcclient.user.id) return

    // Only handle messages in specified channel
    if (message.channel.id !== channel.id) return
    if (message.content.startsWith(config.discord.prefix)) return

    try {
      const attachmentsComponent = []
      if (message.attachments) {
        for (const __attachment of message.attachments) {
          const _attachment = [...__attachment]
          const attachment = _attachment[1] // BEST WAY REAL!?/1?!
          attachmentsComponent.push({
            text: message.content === '' ? '[Attachment]' : ' [Attachment]', // may not be the best fix
            color: 'green',
            clickEvent: {
              action: 'open_url',
              value: attachment.proxyURL
            }
          })
        }
      }
      const component = [
        { text: '[', color: 'dark_gray', bold:false, },
        {
          text: 'FNF',
          color: 'dark_purple',
          bold:false,
          clickEvent: {
            action: 'open_url',
            value: 'https://discord.gg/GCKtG4erux'
          }
          },
          {
          text: 'Boyfriend',
          color: 'aqua',
          bold:false,
          clickEvent: {
            action: 'open_url',
            value: 'https://discord.gg/GCKtG4erux'
          }
          },
          {
          text: 'Bot',
          color: 'dark_red',
          bold: false,
          clickEvent: {
            action: 'open_url',
            value: 'https://discord.gg/GCKtG4erux'
          }
          },
         {
          text: ' Discord',
          color: 'blue',
          bold: false,
          clickEvent: {
            action: 'open_url',
            value: 'https://discord.gg/GCKtG4erux'
          }
          },
          {
          text: ']',
          color: 'dark_gray',
          bold: false,
          clickEvent: {
            action: 'open_url',
            value: 'https://discord.gg/GCKtG4erux'
          }
          },
          {
          text: '[',
          color: 'dark_gray',
          bold: false,
          clickEvent: {
            action: 'open_url',
            value: 'https://discord.gg/GCKtG4erux'
          }
          },
        {
          text: 'ChomeNS js ',
          color: 'yellow',
          bold:false,
          clickEvent: {
            action: 'open_url',
            value: 'https://discord.gg/GCKtG4erux'
          }
        },
        {
          text: 'Bot',
          color: 'yellow',
          bold:false,
          clickEvent: {
            action: 'open_url',
            value: 'https://discord.gg/GCKtG4erux'
          }
        },
        { text: '] ', color: 'dark_gray', bold:false, },
        {
          text: message.member.displayName,
          color: 'red',
          clickEvent: {
            action: 'copy_to_clipboard',
            value: `${message.author.username}#${message.author.discriminator}`
          },
          hoverEvent: {
            action: 'show_text',
            value: [
              {
                text: message.author.username,
                color: 'white'
              },
              {
                text: '#',
                color: 'dark_gray'
              },
              {
                text: message.author.discriminator,
                color: 'gray'
              },
              '\n',
              {
                text: 'Click here to copy the tag to your clipboard',
                color: 'green'
              }
            ]
          }
        },
        { text: ' › ', color: 'dark_gray' },
        chatMessage.MessageBuilder.fromString('&7' + message.content),
        attachmentsComponent.length === 0 ? '' : attachmentsComponent
      ]
      bot.tellraw('@a', component)
    } catch (e) {

    }
  }

  bot.on('end', () => {
    clearInterval(queueInterval)
    dcclient.off('messageCreate', handleDiscordMessages)
  })

  dcclient.on('messageCreate', handleDiscordMessages)
};

module.exports = { inject }
