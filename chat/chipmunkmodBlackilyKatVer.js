function parseMessage (message, data) {
  if (message === null || typeof message !== 'object') return

  if (message.with?.length < 4 || (message.translate !== '[%s%s] %s › %s', message.color !== '#55FFFF' && message.translate !== '%s%s %s › %s', message.color !== '#55FFFF')) return

  const senderComponent = message.with[1]
  const contents = message.with[3]

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
}

module.exports = parseMessage
