const CommandSource = require("../CommandModules/command_source");
const CommandError = require("../CommandModules/command_error");
//can i change the var?
function chat_command_handler(bot) {
  let ratelimit = 0
  bot.on("parsed_message", (data) => {
    if (data.type !== "minecraft:chat") return;

    const prefixes = bot.options.commands.prefixes;

    prefixes.map((prefix) => {
      const plainMessage = bot
        .getMessageAsPrismarine(data.contents)
        ?.toString();
      if (!plainMessage.startsWith(prefix)) return;
      //  else if (!plainMessage.startsWith(bot.commandManager.prefix2)) return
      //  MainPrefix: "~",
      //  SecondaryPrefix:'%',
      //TertiaryPrefix:'@'

      const command = plainMessage.substring(prefix.length); // if the prefixes are the same length just make it 1 or the length
      /*
      lifes sus
        */
      const source = new CommandSource(
        data.sender,
        { discord: false, console: false }, //
       
      ); 
      source.sendFeedback = (message) => {
        const prefix = {
          translate: "[%s%s%s] \u203a ",
          bold: false,
          color: "dark_gray",
          with: [
            {
              color: "dark_purple",
              text: "FNF",
              bold: true,
              hoverEvent: {
                action: "show_text",
                value: `${process.env["buildstring"]}\n${process.env["FoundationBuildString"]}`,
              },
              clickEvent: bot.options.Core.customName
                ? { action: "open_url", value: bot.options.Core.customName }
                : undefined,
            },
            {
              color: "#00FFFF",
              text: "Boyfriend",
              bold: true,
              clickEvent: bot.options.discord.invite
                ? { action: "open_url", value: bot.options.discord.invite }
                : undefined,
              hoverEvent: {
                action: "show_text",
                value: `Bot Username: ${bot.username}\nBot UUID: ${bot.uuid}\nServer Host: ${bot.options.host}:${bot.options.port}\nBot Minecraft Java Version: ${bot.options.version}`,
              },
            },
            {
              color: "dark_red",
              text: "Bot",
              bold: true,
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

        bot.tellraw(["", prefix, message]);
      };
try{
      
        ratelimit++
        setTimeout(() => {
          ratelimit--
        }, 1000)
    if (ratelimit > 3) { // ,.     
if(!bot.options.Core.CorelessMode){
        bot.chat('&4You are using commands to fast!')
}else {
       source.sendFeedback({text:'You are using commands to fast!',color:'dark_red'})
      // this isn't blocking running the command you know that right?
}
    } else {
      bot.commandManager.executeString(source, command);
    }//oh real

              //can i change the variable name so its name isnt confusing?
}catch(e){
        console.log(e.stack)


        
            //then where to move this?
   
    
    };
  });
})//
}
module.exports = chat_command_handler;
