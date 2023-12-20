function parseMessage (message, data, context) {
        try{
  if (message === null || typeof message !== 'object') return

  if (message.with?.length < 2 || (message.translate !== 'chat.type.emote' && message.translate !== '%s %s')) return

  const senderComponent = message.with[0]
  // wtf spam again - console.log(senderComponent)//wtf...
//console.log(senderComponent)

  const contents = message.with[1]
// spam lol - console.log(contents)
  //console.log(contents)
  let sender

  const hoverEvent = senderComponent.hoverEvent
  if (hoverEvent?.action === 'show_entity') {
    const id = hoverEvent.contents.id
//
    sender = data.players.find(player => player.uuid === id)
  } else {
    const stringUsername = data.getMessageAsPrismarine(senderComponent).toString() // TypeError: data.getMessageAsPrismarine is not a function

    sender = data.players.find(player => player.profile.name) //=== stringusername)
  }

  if (!sender) return undefined

  return { sender, contents, type: 'minecraft:chat', senderComponent }
}catch(e){
                console.log(e.stack)
}
}
module.exports = parseMessage