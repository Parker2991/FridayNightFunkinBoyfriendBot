const fs = require("fs");
const path = require("path");
const { createGzip } = require("zlib");
const readline = require('readline');
const { Console } = require("console");
function fileLogger(context) {
  const bot = context.bot;
  const config = context.config;
  const options = context.options;
  const currentDate = new Date();
  const timestamp = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
  const logFolder = path.join(__dirname, "../../logs");
  const logFileName = "latest.log";
  const logFilePath = path.join(logFolder, logFileName);
  const logStream = fs.createWriteStream(logFilePath, { flags: "a" });
  if (!fs.existsSync(path.join(__dirname, "../../logs"))) {
     fs.mkdirSync(path.join(__dirname, "../../logs"))
  }
  try {
    if (!fs.existsSync(logFolder)) {
      fs.mkdirSync(logFolder);
    }
  } catch (e) {
    console.error(`Unable to create log folder: ${e}`);
  }

  function compressFile(input, output) {
//    if (!bot.Console.filelogging) return
    const plainOutput = output.slice(0, -3);

    fs.renameSync(input, plainOutput);
    const gzip = createGzip();
    fs.createReadStream(plainOutput)
      .pipe(gzip)
      .pipe(fs.createWriteStream(output + ".tmp"))
      .once("finish", () => {
        fs.unlinkSync(plainOutput);
        fs.renameSync(output + ".tmp", output);
      });
  }

  if (fs.existsSync(logFilePath)) {
    const plainName = fs
      .statSync(logFilePath)
      .ctime.toISOString()
      .split("T")[0];
    let name = plainName;
    let counter = 1;
    let newFileName = path.join(logFolder, `${name}.log.gz`);
    while (fs.existsSync(newFileName)) {
      name = `${plainName}-${counter}`;
      newFileName = path.join(logFolder, `${name}.log.gz`);
      counter++;
    }
    compressFile(logFilePath, newFileName);
  }
  bot.console.fileLogger = function logging (message) {
    logStream.write(message + "\n");
  };
}
module.exports = fileLogger;
