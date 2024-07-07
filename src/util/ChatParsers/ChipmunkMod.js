function chipmunkmod (message, data, context, bot) {
  try {
        if (message === null || typeof message !== 'object') return

  if (message.with?.length < 3 || (message.translate !== '[%s] %s › %s' && message.translate !== '%s %s › %s')) return

  const senderComponent = message.with[1]
  // wtf spam again - 
        //console.log(senderComponent)//wtf...


  const contents = message.with[2]
// spam lol - console.log(contents)
  let sender
  
  const hoverEvent = senderComponent.hoverEvent
        //console.log(JSON.stringify(hoverEvent))
  if (hoverEvent?.action === 'show_entity') {
    const id = hoverEvent.contents.id
//
    sender = data.players.find(player => player.uuid === id)
  } else {
    const stringUsername = data.getMessageAsPrismarine(senderComponent).toString() // TypeError: data.getMessageAsPrismarine is not a function

    sender = data.players.find(player => player.profile.name) //=== stringusername)
  }

  if (!sender) return null

  return { sender, contents, type: 'minecraft:chat', senderComponent }
  } catch(e) {
   console.error(e)          
  }
}
module.exports = chipmunkmod
