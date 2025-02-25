const CommandSource = require('../util/command_source');

function inject (context) {
  const matrixClient = context.mxClient;
  const config = context.config;
  const bot = context.bot;
  const options = context.options;
  if (!config.matrix.enabled) return;

  require('matrix-js-sdk/lib/logger').logger.disableAll();

  bot.matrix = {
    client: matrixClient,
    invite: JSON.stringify(config.matrix.invite),
  };

  let matrixQueue = [];

  setInterval(async () => {
    try {
      if (matrixQueue.length === 0) return;
      const content = { body: matrixQueue.join('\n'), msgtype: "m.text" };
      await bot.matrix.client.sendEvent(bot.options.roomId, 'm.room.message', content, '');
    } catch (e) {
      bot?.console?.warn(e.stack);
    }
    matrixQueue = [];
  }, 5000);

  function sendChatMessage (message) {
    matrixQueue.push(message);
  }

  bot.on('message', (data) => {
    const message = bot.getMessageAsPrismarine(data)?.toString();
    sendChatMessage(message)
  });

  let start = Date.now();

  bot.matrix.client.on('Room.timeline', (event, room, toStartOfTimeline) => {
    if (event.getRoomId() !== bot.options.roomId || event.getType() !== 'm.room.message' || event.getTs() < start || event.sender.userId === bot.matrix.client.getUserId()) return;

    if (event.getContent().body.startsWith('/')) {
      bot.core.run(event.getContent().body.substring('/'.length));
      return;
    }

    const tag = [{
      translate: "[%s] %s \u203a ",
      color: "dark_gray",
      with: [
        {
          translate: "%s%s%s %s",
          with: [
            { text: "FNF", color: "blue" },
            { text: "Boyfriend", color: "dark_aqua" },
            { text: "Bot", color: "dark_blue" },
            { text: "Matrix", color: "green" },
          ],
          clickEvent: config.matrix.invite ? {
            action: "open_url",
            value: bot.matrix.invite
          } : undefined,
          hoverEvent: {
            action: "show_text",
            contents: "Click to join the matrix!"
          }
        },
        { text: event.sender.rawDisplayName },
      ]
    }]

    bot.tellraw("@a", [ tag, event.getContent().body ]);
  });
}

module.exports = {
  data: {
    enabled: true,
    name: "matrix",
    type: "logging"
  },
  inject
};

