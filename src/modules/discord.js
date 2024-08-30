// TODO: Maybe move client creation elsepwhere
const { Client, GatewayIntentBits, interaction } = require('discord.js')
const { MessageContent, GuildMessages, Guilds } = GatewayIntentBits
const fixansi = require('../util/ansi');
const CommandSource = require('../util/command_source')

const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] })
const util = require('util')

function discord(bot, options, config, discordClient) {
//  client.login(config.discord.token)
  if (!options?.channelId) {
    bot.discord = {
      invite: config.discord?.invite
    }
    return
  }
  bot.discord = {
    client: discordClient,
    channel: undefined,
    invite: config.discord.invite || undefined,
    prefix: config.discord.prefix,
//    presence: bot.discord.presence,
    token: config.discord.token,
  }
  discordClient.once('ready', (context) => {
    bot.discord.channel = discordClient.channels.cache.get(options.channelId)
    discordClient.user.setPresence({
      activities: [{
        name: `amogus ඞ`,
        type: 0
      }],
      status: `dnd`
    });
  })

  let discordQueue = []
  setInterval(() => {
    if (discordQueue.length === 0) return
    try {
      bot?.discord?.channel?.send(`\`\`\`ansi\n${discordQueue.join('\n').substring(0, 1984)}\n\`\`\``)
    } catch (error) {
      bot.console.error(error.toString())

    }
    discordQueue = []
  }, 2000)

  function sendDiscordMessage(message) {
    discordQueue.push(message)
  }

  function sendComponent(message) {
    const ansi = bot.getMessageAsPrismarine(message)?.toAnsi(bot.registry.language).replaceAll('```\u001b[9```' + '```\u001b[3```').replaceAll('https://discord','https:\rdiscord')?.replaceAll('discord.gg', 'discord.\rgg').replaceAll('BlackStone Mafia On Top!', "Fuck off you god damn cunt");
    try {
      sendDiscordMessage(fixansi(ansi?.replaceAll('`', '`\u200b')))
    } catch (e) {
      bot.console.error(`Error sending a message to Discord:\n${e.message}`)
      sendDiscordMessage(e.message)
    }
  }
  bot.on('message', message => {
    sendComponent(message)
  })

  function messageCreate(message, source) {
    bot.discord.message = message;
    if (message.author.id === bot.discord.client.user.id) return

    if (message.channel.id !== bot.discord.channel.id) return

    if (message.content.startsWith(config.discord.prefix)) { // TODO: Don't hardcode this
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

      bot.commandManager.executeString(source, message.content.substring(config.discord.prefix.length))
      return
    }
    const tag = {
      translate: '[%s] %s \u203a %s',
      with: [{
          translate: '%s%s%s %s',
          bold: false,
          with: [{
              text: 'FNF',
              bold: false,
              color: 'blue'
            },
            {
              text: 'Boyfriend',
              bold: false,
              color: 'dark_aqua'
            },
            {
              text: 'Bot',
              bold: false,
              color: 'dark_blue'
            },
            {
              text: 'Discord',
              bold: false,
              color: 'dark_blue'
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
        bot.tellraw('@a', [tag, {
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
      if (options.useChat || options.isSavage || options.isCreayun) {
        bot.chat.message(bot.getMessageAsPrismarine(`&7[&9FNF&3Boyfriend&1Bot Discord&7] ${message?.member?.displayName} \u203a ${message?.content}`)?.toMotd().replaceAll('§','&'))
      } else {
        bot.tellraw('@a', tag);
      }
    }
  }
  discordClient.on('messageCreate', messageCreate)

  process.on("uncaughtException", (e) => {
    //  sendDiscordMessage("uncaught " + e.stack);
  });

}
module.exports = discord;
