const CommandSource = require("../CommandModules/command_source");
const CommandError = require("../CommandModules/command_error");
//can i change the var?
function chat_command_handler(bot) {
  let ratelimit = 0
  bot.on("parsed_message", (data) => {
    if (data.type !== "minecraft:chat") return;

    const prefixes = bot.Commands.prefixes;

    prefixes.map((prefix) => {
      const plainMessage = bot
        .getMessageAsPrismarine(data.contents)
        ?.toString();
      if (!plainMessage.startsWith(prefix)) return;
  
      const command = plainMessage.substring(prefix.length); // if the prefixes are the same length just make it 1 or the length
      /*
      lifes sus
        */
      const source = new CommandSource(data.sender,{ discord: false, console: false,matrix:false },); 
      bot.sendFeedback = (message) => {
        const prefix = {
          translate: "%s%s%s ",
          bold: false,
          color: "dark_gray",
          with: [
            {
              color: "dark_purple",
              text: "FNF",
              bold: false,
              hoverEvent: {
                action: "show_text",
                value: `${process.env["buildstring"]}\n${process.env["FoundationBuildString"]}`,
              },
              clickEvent: bot.options.Core.customName
                ? { action: "open_url", value: bot.options.Core.customName }
                : undefined,
            },
            {
              color: "#2FE0E0",
              text: "Boyfriend",
              bold: false,
              clickEvent: bot.options.discord.invite
                ? { action: "open_url", value: bot.options.discord.invite }
                : undefined,
              hoverEvent: {
                action: "show_text",
                value: `Bot Username: ${bot.username}\nBot UUID: ${bot.uuid}\nServer Host: ${bot.options.host}:${bot.options.port}\nBot Minecraft Java Version: ${bot.options.version}`,
              },
            },
            {
              color: "#D90003",
              text: "Bot",
              bold: false,
              clickEvent: bot.options.discord.invite
                ? { action: "open_url", value: "https://code.chipmunk.land" }
                : undefined,
              hoverEvent: {
                action: "show_text",
                value: "§aMan i like frogs - _ChipMC_",
              },
            }, //§aMan i like frogs - _ChipMC_

            { color: "green", text: command.split(" ")[0] },
          ],
  };
      if (bot.options.useChat) {
      bot.tellraw([message]);
      } else {  
      bot.tellraw(["", prefix, message]);
      }

};
bot.sendError = (message) => {
 bot.sendFeedback([{ text: '', color: `red` }, message], false)
}
try{
      
        ratelimit++
        setTimeout(() => {
          ratelimit--
        }, 1000)
    if (ratelimit > 3) { // ,.     
       bot.sendFeedback({text:'You are using commands to fast!',color:'dark_red'})
      // this isn't blocking running the command you know that right?
    } else {
      bot.commandManager.executeString(source, command);
    }//oh real

              //can i change the variable name so its name isnt confusing?
    }catch(e){
        console.log(e.stack)
    
    };
  });
})//
}
module.exports = chat_command_handler;