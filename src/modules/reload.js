const path = require('path');
const fs = require('fs');

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
bot.console.error(["Failed to load File", filename, ":", error])
      bot.tellraw([{text:`Failed to load File ${filename} : ${error}`}]);
    }
}
for (const filename of fs.readdirSync(path.join(__dirname, "../modules"))) {
    try {

 const module = require(path.join(__dirname, "../modules", filename));
delete require.cache[require.resolve(path.join(__dirname, "../modules", filename))]
 //   bot.loadModule(module) 
    } catch (error) {
bot.console.error("Failed to load File", filename, ":", error.toString())
    bot.tellraw([{text:`Failed to load File ${filename} : ${error}`}]);
    }
}

}



}
module.exports = reload
