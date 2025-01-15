function inject (context) {
    const bot = context.bot;
    const config = context.config;
    const options = context.options;
    bot.customChat = {
      enabled: true,
      chat (message) {
        const prefix = {
          translate: "chat.type.text",
          with: [
            { selector: `${bot.username}` },
            { text: "", extra: [ message ] }
          ]
        };
  
        bot.tellraw("@a", prefix)
      }
    }
  }
  
  module.exports = {
    data: {
      enabled: true,
      name: "custom chat",
      type: "extras"
    },
    inject
  }