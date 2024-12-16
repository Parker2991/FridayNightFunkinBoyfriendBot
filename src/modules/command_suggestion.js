function commandsuggestions(context) {
    const bot = context.bot
    if (!bot.options.isKaboom) return
    bot.on('systemChat',(data)=>{
        try {
        const message = data;
        if (message.text === "fnfboyfriendbot_request_command_suggestion") {
            const extra = message.extra;
            const uuidString = extra[0]?.text;
            const uuidMatch = uuidString.match(/UUID:\[I;(-?\d+),(-?\d+),(-?\d+),(-?\d+)\]/);
            if (!uuidMatch) return;
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
                    bot.tellraw(`@a[nbt={UUID:[I;${uuidMatch.slice(1).map(Number)}]}]`, jsonString)        
            }
        }
      } catch (e) {
        if (e.toString() === "TypeError: Cannot read properties of undefined (reading '0')") return
        else console.log(e.toString())
      }
    })
}
module.exports = commandsuggestions
