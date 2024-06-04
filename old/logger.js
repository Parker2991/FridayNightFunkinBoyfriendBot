function logger (bot,options) {
const { createGzip } = require('node:zlib');
const gzip = createGzip();
const fs = require('fs')
const path = require('path')
const currentDate = new Date();
const timestamp = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
const logFolder = path.join(__dirname, '../../logs'); // idfk
const logFileName = `${timestamp}.txt`;//why is it not trying to find the folder tf
// i am having a stroke from this
 if (!bot.Console.filelogging) return
        try {
    if (!fs.existsSync(logFolder)) { // existsSync might be for files and that's why it's breaking? | make the folder if it doesn't exist before writing to it
      fs.mkdirSync(logFolder);//idfk
    }//oh wait 
  } catch (e) {} // prevent it from throwing a ohio exception mabe mabe
  
const logFilePath = path.join(logFolder, logFileName);
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
// const toWrite = `${message}`//wtf 
if (!bot.Console.filelogging) return // instead of using bot why not just use options cause you already defined it
 
       // if (toFile) logStream.write(toWrite + '\n');
  
  bot.console.filelogger = function (message) {//.
        logStream.write(message + '\n'); // toFile is not defined
      };
        //if (toConsole) console.log(toWrite);


};
module.exports = logger
