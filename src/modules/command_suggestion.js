function inject (context) {
  const bot = context.bot
  if (bot.options.mode !== "kaboom") return
  bot.on('system_chat', (data) => {
    try {
      const message = data.message;
//      console.log(message);
      if (message.translate === "fnfboyfriendbot_request_command_suggestion") {
        const extra = message.extra;
        const uuidString = extra[0].text;
        const uuidMatch = bot.players.find((e) => e.uuid === uuidString);
        if (Array.isArray(extra) && extra.length > 0) {
          const commandSuggestions = {
            extra: [
              { text: "fnfboyfriendbot_request_command_suggestion" },
              ...bot.commandManager.commandlist.map((c) => {
                const aliases = c.data.aliases.length > 0 ? c.data.aliases : [];
                  return {
                    extra: [
                      c.data.trustLevel === 0 ? "PUBLIC" :
                      c.data.trustLevel === 1 ? "TRUSTED" :
                      c.data.trustLevel === 2 ? "ADMIN" :
                      c.data.trustLevel === 3 ? "OWNER" :
                        "OWNER",
                        "true",
                      ...aliases
                    ],
                    text: c.data.name
                  };
                })
            ],
            text: ""
          };
          const jsonString = (commandSuggestions);
          bot.tellraw(`@a[name="${uuidMatch.profile.name}"]`, jsonString);
        }
      }
    } catch (e) {
      if (e.toString() === "TypeError: Cannot read properties of undefined (reading '0')") return
      else console.log(e.stack)
    }
  })
}
module.exports = {
  data: {
    enabled: true,
    name: "command suggestion",
    type: "commands"
  },
  inject
};

