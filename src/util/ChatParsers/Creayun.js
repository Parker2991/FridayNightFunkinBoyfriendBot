const ChatMessage = require('prismarine-chat')('1.20.2');
const util = require('util');
function creayun (messageobj, data) {
  let match;
  let sender;
  const stringify = message => new ChatMessage(message).toString()
  const message = stringify(messageobj);
  const playerWithPrefix = /^(.*?) (\S*?) » (.*?)$/;
  const playerWithoutPrefix = /^(\S*?) » (.*?)$/
  if (playerWithPrefix.test(message)) {
    match = message.match(playerWithPrefix)
    sender = data.players.find(player => player.profile.name === match[2])
    if (!sender) return;
    return { sender, contents: match[3], type: 'minecraft:chat'};
  }
}
module.exports = creayun;
