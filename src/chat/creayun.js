function creayun (messageobj, data) { // this function is not getting called
 const ChatMessage = require('prismarine-chat')('1.20.1')
const stringify = message => new ChatMessage(message).toString()
 const message = stringify(messageobj);
  const playerWithPrefix = /^(.*?) (\S*?) » (.*?)$/;
  const playerWithoutPrefix = /^(\S*?) » (.*?)$/
          // var pattern = /^(.*?) (\S*?) \u203a (.*?)$/;
  //console.log('[debug] parsing a message');
 // const match = message.match(pattern);
  if (playerWithPrefix.test(message)) {
    // console.log('[debug]', match);
    let match = message.match(playerWithPrefix)
    return { sender: match[2], contents: match[3], type: 'minecraft:chat'}; //
//  } else if (playerWithoutPrefix.test(message)) {
    //let match = message.match(playerWitoutPrefix)
    //return { sender: match[1], contents: match[2], type: 'minecraft:chat'};
  }//i just realized that the bot uses tellraw
  //ima try to fix that
}
module.exports = creayun//:troll:

