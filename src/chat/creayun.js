function creayun (messageobj, data) { // this function is not getting called
 const ChatMessage = require('prismarine-chat')('1.20.1')
const stringify = message => new ChatMessage(message).toString()
 const message = stringify(messageobj);
  var pattern = /^(.*?) (\S*?) » (.*?)$/;
           // var pattern = /^(.*?) (\S*?) \u203a (.*?)$/;
  //console.log('[debug] parsing a message');
  const match = message.match(pattern);
  if(pattern.test(message)) {
    // console.log('[debug]', match);
    return { sender: match[2], contents: match[3], type: 'minecraft:chat'}; //
  } else {
    //console.log('[debug] pattern does not match');
  }//i just realized that the bot uses tellraw
  //ima try to fix that
}//it picks players up as undefined in creayun
//and i tried using the kaboom chat parser but edited and that didnt work
// [] username » 
  module.exports = creayun//:troll:
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// function(function(function(function(function(function(function(function(function(function(function(function(function(function(function(function)))))))))))))))
// i guess so because it connects you
// i think?
//🐔💨💩😎🐒🥶😁😂⏰❌🐒🛏
//very real
// theres so much things that get logged :sob:
//gotta love when it refuses to connect
// someones trying to be fake me in kaboom
//the bot is being waaay to sus
// i will crash him when i get on // sus // very
//k
// getting the fake parker out of kaboom
// pcrashed

