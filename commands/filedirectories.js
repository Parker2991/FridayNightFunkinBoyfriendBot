const CommandError = require('../CommandModules/command_error')
const os = require('os')
const path = require('path')
const fs = require('fs')
const packageJSON = require("../package.json")
async function getCpuModelName () {
  const cpuInfo = await fs.readFile('/proc/cpuinfo')
  const lines = cpuInfo.toString().split('\n')
  // among us way of doing it
  const modelName = lines.find((line) => line.startsWith('model name')).split('\t: ')
  return modelName[1]
}
/*
const testFolder = './tests/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
*/
module.exports = {
  name: 'filesdirectories',
hashOnly:true,
  async execute (context) {    
    //path.join(__dirname, 'config.js'
 const main = '../FNFBoyfriendBotX-V40';
 const util = '../FNFBoyfriendBotX-V40/util';
 const modules = '../FNFBoyfriendBotX-V40/modules';
const commands = '../FNFBoyfriendBotX-V40/commands';
const CommandModules = '../FNFBoyfriendBotX-V40/CommandModules';
const chat = '../FNFBoyfriendBotX-V40/chat';

  fs.readdir(main, (err, files) => {
  files.forEach(file => {
     context.source.sendFeedback('/home/runner/FNFBoyfriendBotX-V40/' + file);
  });
});
     fs.readdir(util, (err, files) => {
   files.forEach(file => {
     context.source.sendFeedback('/home/runner/FNFBoyfriendBotX-V40/util/' + file);
  });
});
     fs.readdir(modules, (err, files) => {
   files.forEach(file => {
     context.source.sendFeedback('/home/runner/FNFBoyfriendBotX-V40/modules/' + file);
  });
});
    fs.readdir(commands, (err, files) => {
   files.forEach(file => {
     context.source.sendFeedback('/home/runner/FNFBoyfriendBotX-V40/commands/' + file);
  });
});
     fs.readdir(CommandModules, (err, files) => {
   files.forEach(file => {
     context.source.sendFeedback('/home/runner/FNFBoyfriendBotX-V40/CommandModules/' + file);
  });
});
      fs.readdir(chat, (err, files) => {
   files.forEach(file => {
     context.source.sendFeedback('/home/runner/FNFBoyfriendBotX-V40/chat/' + file);
  });
});
  }
}

/*const fs = require('fs');
const path = require('path');
const directory = './';

// use readdir method to read the files of the direcoty 
fs.readdir(directory, (err, files) => {
  files.forEach(file => {
    // get the details of the file 
    let fileDetails = fs.lstatSync(path.resolve(directory, file));
    // check if the file is directory 
    if (fileDetails.isDirectory()) {
      console.log('Directory: ' + file);
    } else {
      console.log('File: ' + file);
    }
  });
});
    */