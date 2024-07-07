const util = require('util')

function savage (message, data) {
  if (message === null || typeof message !== 'object') return

  if (message.text !== '' || !Array.isArray(message.extra) || message.extra.length < 3) return

  const children = message.extra

  const prefix = children[0]
  let displayName = data.senderName ?? { text: '' }
  let contents = { text: ' ' }

  if (isSeparatorAt(children, 1)) { // Missing/blank display name
    if (children.length > 3) contents = children[3]
  } else if (isSeparatorAt(children, 2)) {
    displayName = children[1]
    if (children.length > 4) contents = children[4]
  } else {
    return undefined
  }
/*
  if (isSeparatorAt(children, 1)) { // Missing/blank display name
    if (children.length > 3) contents = children[3]
  } else if (isSeparatorAt(children, 2)) {
    displayName = children[1]
    if (children.length > 4) contents = children[4]
  } else {
    return undefined
  }
*/
//  let sus = { text: ' ' }
  const playerListDisplayName = { extra: [prefix, displayName, content]}
  let sender
  if (data.uuid) {
    sender = data.players.find(player => player.uuid === data.senderUuid)
  } else {
    const playerListDisplayName = { extra: [prefix, displayName, content] }
    sender = data.players.find(player => util.isDeepStrictEqual(player.displayName, playerListDisplayName))
  }

  if (!sender) return undefined

  return { sender, contents, type: 'minecraft:chat' }
}

function isSeparatorAt (children, start) {
  return (children[start]?.text === '»' || children[start]?.text === '\xa79»\xa7r') && children[start + 1]?.text === '' 
}
// [prefix]&r [name] [suffix] &9»&r
// {DISPLAYNAME} &9»&r {MESSAGE}
/*
 {"extra":[{"text":"e e"},{"text":" "},{"color":"dark_red","text":"Parker"},{"color":"black","text":"2991"},{"text":" "},
{"color":"blue","text":"»"},{"text":" "},{"color":"white","text":"duping fucking rank"}],"text":""}
*/
/*
{"extra":[{"bold":true,"color":"dark_red","text":"["},{"bold":true,"color":"red","text":"OP"},{"bold":true,"color":"dark_red","text":"]"},
{"text":" "},{"color":"red","text":"Parker2991"},{"text":" "},{"color":"blue","text":"»"},{"text":" e"}],"text":""}
*/
module.exports = savage;

