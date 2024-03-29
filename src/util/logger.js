const fs = require('fs');
const path = require('path');

const currentDate = new Date();
const timestamp = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
const logFolder = path.join(__dirname, '../logs');
const logFileName = `${timestamp}.txt`;
const logFilePath = path.join(logFolder, logFileName);
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

function log (message, bot, toFile = true, toConsole = true ) {
  const now = new Date().toLocaleString();
if (bot.options.filelogging = true) { 
  const toWrite = `${message}`
} 
 if (toFile) logStream.write(toWrite + '\n');
  //if (toConsole) console.log(toWrite);
};

if (!fs.existsSync(logFolder)) {
  fs.mkdirSync(logFolder);
}
//ohio
module.exports = log