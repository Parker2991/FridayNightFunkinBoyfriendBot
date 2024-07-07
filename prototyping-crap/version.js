const version = require('./version.json');
const ChatMessage = require('prismarine-chat')('1.20.2');
console.log(version);
console.log(version.BotBuildstring.build);
console.log(version.BotBuildstring.codename);
console.log(version.BotBuildstring.version);
console.log(ChatMessage.fromNotch(`${version.BotBuildstring.version}-${version.BotBuildstring.codename}-${version.BotBuildstring.build}`)?.toAnsi())
console.log(ChatMessage.fromNotch(version.BotBuildstring.codename)?.toAnsi())
console.log(ChatMessage.fromNotch(version.BotBuildstring.name)?.toAnsi())
console.log(`${ChatMessage.fromNotch(version.BotBuildstring.name)?.toAnsi()}-${version.BotBuildstring.version}-${ChatMessage.fromNotch(version.BotBuildstring.codename)?.toAnsi()}`)
