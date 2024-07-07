const CommandSource = require("../CommandModules/command_source");
const CommandError = require("../CommandModules/command_error");
//can i change the var?
const { execSync } = require('child_process');
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
      const source = new CommandSource(data.sender,{ discord: false, console: false }); 
      bot.sendFeedback = (message) => {
      
      if (bot.options.useChat) {
      bot.tellraw([message]);
      } else {  
      bot.tellraw(["", message]);
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
    if (ratelimit > bot.Commands.ratelimit) { // ,.     
       bot.sendFeedback({text:'You are using commands too fast!',color:'dark_red'})
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