function creayun (messageobj, data) { // this function is not getting called
const ChatMessage = require('prismarine-chat')('1.20.1')
const util = require('util')
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
    const sender = data.players.find((player) => player.uuid === player.uuid)
    if (!sender) return undefined
    return { sender, contents: match[3], type: 'minecraft:chat'}; 
  }//i just realized that the bot uses tellraw
  //ima try to fix that
}
module.exports = creayun;
// bot.players.find((player) => player.profile.name === players.username)
//  let displayName = data.senderName ?? { text: '' }
/*
  const playerListDisplayName = { extra: [prefix, displayName], text: '' }
  let sender
  if (data.uuid) {
    sender = data.players.find(player => player.uuid === data.senderUuid)
  } else {
    const playerListDisplayName = { extra: [prefix, displayName], text: '' }
    sender = data.players.find(player => util.isDeepStrictEqual(player.displayName, playerListDisplayName))
  }

  if (!sender) return undefined

  return { sender, contents, type: 'minecraft:chat', displayName }
}

function isSeparatorAt (children, start) {
  return (children[start]?.text === ':' || children[start]?.text === '\xa7r:') && children[start + 1]?.text  === ' ' 
}

*/
