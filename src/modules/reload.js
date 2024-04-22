const path = require('path');
const fs = require('fs');
const CommandError = require('../CommandModules/command_error')
const { EmbedBuilder } = require('discord.js')
function reload (bot,options,context) {
bot.reload = function () {
for (const filename of fs.readdirSync(path.join(__dirname, "../commands"))) {
    try {
      
// const command = require(path.join(__dirname, "../commands", filename));
delete require.cache[require.resolve(path.join(__dirname,"../commands",filename))]
const command = require(path.join(__dirname, "../commands", filename));
 bot.commandManager.register(command);
      bot.commandManager.commandlist.pop(command) 
bot.commandManager.commandlist.push(command)
    } catch (error) {

bot.console.error(["Failed to load File ", filename, ":", error.stack])
      bot.tellraw({text:`${error.stack}`,color:'dark_red'});
    
}
}

}



}
module.exports = reload
