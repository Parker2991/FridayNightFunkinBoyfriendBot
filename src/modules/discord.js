// TODO: Maybe move client creation elsewhere
const { Client, GatewayIntentBits, interaction } = require('discord.js')
const { MessageContent, GuildMessages, Guilds } = GatewayIntentBits

const CommandSource = require('../util/command_source')

const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] })
const util = require('util')

function discord(bot, options) {
  if (!bot.discord.enabled) return
  client.login(bot.discord.token)
  if (!options.discord?.channelId) {
    bot.discord = {
      invite: bot.discord?.invite
    }
    return
  }
  const ChatMessage = require('prismarine-chat')(bot.options.version)
  bot.discord = {
    client,
    channel: undefined,
    invite: bot.discord.invite || undefined,
    commandPrefix: bot.discord.commandPrefix,
    presence: bot.discord.presence,
    token: bot.discord.token,
  }

  if (bot.discord.enabled) return
  client.on('ready', (context) => {
    bot.discord.channel = client.channels.cache.get(options.discord.channelId)
    client.user.setPresence({
      activities: [{
        name: `${bot.discord.presence.name}`,
        type: bot.discord.presence.type
      }],
      status: `${bot.discord.presence.status}`
    });
  })

  let discordQueue = []
  setInterval(() => {
    if (discordQueue.length === 0) return
    try {
      bot?.discord?.channel?.send(`\`\`\`ansi\n${discordQueue.join('\n').substring(0, 1984)}\n\`\`\``)
    } catch (error) {
      bot.console.error(error.stack)

    }
    discordQueue = []
  }, 2000)

  function sendDiscordMessage(message) {
    discordQueue.push(message)
  }

  function sendComponent(message) {
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi().replaceAll('```\u001b[9```' + '```\u001b[3```').replaceAll('https://discord','https:\\//discord')?.replaceAll('CynicalDev','Emirex the Cotten Picker')?.replaceAll('denisapain','kill yourself denis >:3').replaceAll('discord.gg', 'discord.\rgg');
    try {
      sendDiscordMessage(fixansi(ansi.replaceAll('`', '`\u200b')))
    } catch (e) {
      bot.console.error(`Error sending a message to Discord:\n${e.message}`)
      sendDiscordMessage(e.message)
    }
  }
  bot.on('message', message => {
    sendComponent(message)
  })

  function messageCreate(message, source) {
    bot.discord.Message = message
    if (message.author.id === bot.discord.client.user.id) return

    if (message.channel.id !== bot.discord.channel.id) return

    if (message.content.startsWith(bot.discord.commandPrefix)) { // TODO: Don't hardcode this
      const source = new CommandSource({
        profile: {
          name: message?.member?.displayName
        }
      }, {
        discord: true,
        console: false
      }, false, message)

      bot.sendFeedback = message => {
        sendComponent(message)
      }

      bot.commandManager.executeString(source, message.content.substring(bot.discord.commandPrefix.length))
      return
    }
    if (bot.options.useChat) {
      bot.chat(`&8[&5FNF&bBoyfriend&4Bot &9Discord&8] ${message.member.displayName.replaceAll('\xa7', '&')}&f › ${message.content.replaceAll('\xa7', '&')}`)
    } else {

      const tag = {
        translate: '[%s] %s \u203a %s',
        with: [{
            translate: '%s%s%s %s',
            bold: false,
            with: [{
                text: 'FNF',
                bold: false,
                color: 'dark_purple'
              },
              {
                text: 'Boyfriend',
                bold: false,
                color: 'aqua'
              },
              {
                text: 'Bot',
                bold: false,
                color: 'dark_red'
              },

              {
                text: 'Discord',
                bold: false,
                color: 'blue'
              }
            ],
            clickEvent: bot.discord.invite ? {
              action: 'open_url',
              value: bot.discord.invite
            } : undefined,
            hoverEvent: {
              action: 'show_text',
              contents: 'Click to join the discord'
            }
          },
          {
            text: message?.member?.displayName
          },
          message.content

        ]
      }

      if (message.attachments.size > 0) {
        message.attachments.forEach(Attachment => {
          bot.tellraw([tag, {
            text: ' ' ? ' [Attachment] ' : ' [Attachment] ',
            hoverEvent: {
              action: 'show_text',
              contents: 'Click here to view attachment'
            },
            clickEvent: {
              action: 'open_url',
              value: `${Attachment.url}`
            }
          }])
        })
      } else {
        bot.tellraw(tag);
      }
    }
  }
  client.on('messageCreate', messageCreate)

  process.on("uncaughtException", (e) => {
    //  sendDiscordMessage("uncaught " + e.stack);
  });


  function fixansi(message) {
    const ansilist = {
      "\x1B\[93m": "\x1B[33m", // Yellow
      "\x1B\[96m": "\x1B[36m", // Blue
      "\x1B\[94m": "\x1B[34m", // Discord Blue
      "\x1B\[90m": "\x1B[30m", // Gray
      "\x1B\[91m": "\x1B[31m", // Light Red
      "\x1B\[95m": "\x1B\[35m", // Pink
      "\x1B\[92m": "\x1B\[32m", // Green
      "\x1B\[0m": "\x1B\[0m\x1B\[37m", // White
      "\x1B\[97m": "\x1B\[0m\x1B\[37m", // White
    };
    let i = message;

    for (const ansi in ansilist) {
      if (ansilist.hasOwnProperty(ansi)) {
        i = i.replace(new RegExp(escapeRegExpChars(ansi), 'g'), ansilist[ansi]);

        function escapeRegExpChars(text) {
          return text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        }
      }
    }

    return i;
  }
}
module.exports = discord;
