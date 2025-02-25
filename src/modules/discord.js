const fixansi = require('../util/ansi');
const CommandSource = require('../util/command_source');

const util = require('util')
function inject (context) {
  const bot = context.bot;
  const config = context.config;
  const discordClient = context.discordClient;
  const options = context.options;
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
  }
  discordClient.once('ready', (context) => {
    bot.discord.channel = discordClient.channels.cache.get(options.channelId)
    discordClient.user.setPresence({
      activities: [{
        name: `${config.discord.presence.name}`,
        type: 0
      }],
      status: `${config.discord.presence.status}`
    });
  })

  let discordQueue = []
  setInterval(() => {
    if (discordQueue.length === 0) return
    try {
      bot?.discord?.channel?.send(`\`\`\`ansi\n${discordQueue.join('\n').substring(0, 1984)}\n\`\`\``)
    } catch (error) {
      console.error(error.toString())
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

  bot.on('message', (message) => {
    sendComponent(message);
  });

  function messageCreate(message, source) {
    bot.discord.message = message;
    if (message.author.id === bot.discord.client.user.id) return

    if (message.channel.id !== bot.discord.channel.id) return

    if (message.content.startsWith(config.discord.prefix)) { // TODO: Don't hardcode this
      const source = new CommandSource({
        profile: {
          name: `${message?.member.nickname || message?.author.displayName}`
        }
      }, {
        discord: true,
        console: false
      }, false, message);

      sendComponent(message);

      bot.commandManager.executeString(source, message.content.substring(config.discord.prefix.length))
      return
    }
    const tag = {
      translate: '[%s] %s \u203a ',
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
          text: `${message.member.nickname || message.author.displayName}`,
        },
      ]
    }

    try {
    if (message.attachments.size > 0) {
      message.attachments.forEach(Attachment => {
        let attachment = {
          text: `[Attachment: ${Attachment.name}] ${message?.content}`,
          color: "blue",
          hoverEvent: {
            action: "show_text",
            contents: "click here to view attachment"
          },
          clickEvent: {
            action: "open_url",
            value: `${Attachment?.url}`
          }
        }

        bot.tellraw("@a", [tag, attachment]);
      })
    } else if (message?.reference?.type === 0) {
      // this is for messages that are replied to
      const repliedMessage = message.channel.messages.cache.get(message.reference.messageId);
      let reply = [
        tag,
        { text: `[Replying to: ${repliedMessage.author.username}] `, color: "blue" },
        message.content
      ];

      bot.tellraw("@a", [ reply ]);
    } else if (message?.reference?.type === 1) {
      // this is for messages that are forwarded
    } else {
      if (options.mode === "savageFriends" || options.mode === "creayun") {
        bot.chat.message(bot.getMessageAsPrismarine(`&7[&9FNF&3Boyfriend&1Bot Discord&7] ${message?.member?.displayName} \u203a ${message?.content}`)?.toMotd().replaceAll('§','&'))
      } else {
        bot.tellraw('@a', [tag, message.content]);
      }
    }
    } catch (e) {
      console.log(e.stack);
    }
  }
  discordClient.on('messageCreate', messageCreate)

}
module.exports = {
  data: {
    enabled: true,
    name: "discord",
    type: "logging"
  },
  inject
};
