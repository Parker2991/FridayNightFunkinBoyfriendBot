const sdk = require("matrix-js-sdk");
const { logger } = require('matrix-js-sdk/lib/logger');
async function matrix (bot, options, config, discordClient) {
  if (!options.roomId) return
  if (!config.matrix.enabled) return
  const client = sdk.createClient({
    baseUrl: `${config.matrix.hostUrl}`,
    accessToken: `${config.matrix.token}`,
    userId: `${config.matrix.userId}`,
  })
  bot.matrix = {
    client,
    roomId: options.roomId,
    prefix: config.matrix.prefix || undefined,
    inviteUrl: config.matrix.invite || undefined
  }
  bot.matrix.client.on('Room.timeline', (event, room, toStartOfTimeline) => {
    if (event.getRoomId() !== bot.matrix.roomId
      || event.getType() !== 'm.room.message'
      || event.getTs() < startTime
      || event.sender.userId === bot.matrix.client.getUserId()) return
    const content = event.getContent()
    const permissionLevel = event.sender.powerLevelNorm
    bot.tellraw("@a", [
      {
        translate: "[%s] %s \u203a %s",
        color: "gray",
        with: [
          {
            translate: "%s%s%s %s",
            with: [
              {
                text: "FNF",
                color: "blue",
              },
              {
                text: "Boyfriend",
                color: "dark_aqua",
              },
              {
                text: "Bot",
                color: "dark_blue",
              },
              {
                text: "Matrix",
                color: "#0dbd8b"
              }
            ],
//            clickEvent: config.matrix.invite ? { action: 'open_url', value: config.matrix.invite } : undefined,
//            hoverEvent: { action: 'show_text', contents: 'Click to join the matrix' }
          },
          {
//            text: event.sender.rawDisplayName || event.sender.name || event.sender.userId
          },
//          content.body
          event.getContent().body,
        ]
      }
    ])
  console.log(
        // the room name will update with m.room.name events automatically
        "(%s) %s :: %s",
        room.name,
        event.getSender(),
        event.getContent().body,
  )
  })
  bot.on('message', (message) => {
    const stringMessage = bot.getMessageAsPrismarine(message)?.toString()
    const content = {
       body: '```ansi' + stringMessage + '```',
       msgtype: "m.text",
    }
    let queue = [];
    setInterval(() => {
//      if (queue.length === 0) return
      try {
        bot.matrix.client.sendEvent(bot.options.roomId, 'm.room.message', content);
      } catch (e) {
        bot.console.logs(error.toString());
      }
      queue = [];
    }, 5000)
  })
  await client.startClient()
}
module.exports = matrix;
