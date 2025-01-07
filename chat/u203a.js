function parseMessage (message, data) {
  if (message === null || typeof message !== 'object') return

  if (message.with?.length < 3 || (message.translate !== '[%s] %s › %s' && message.translate !== '%s %s › %s')) return

  const senderComponent = message.with[1]
  const contents = message.with[2]

  let sender
  
  const hoverEvent = senderComponent.hoverEvent
  if (hoverEvent?.action === 'show_entity') {
    const id = hoverEvent.contents.id

    sender = data.players.find(player => player.uuid === id)
  } else {
    const stringUsername = data.getMessageAsPrismarine(senderComponent).toString()

    sender = data.players.find(player => player.profile.name) //=== stringusername)
  }

  if (!sender) return undefined

  return { sender, contents, type: 'minecraft:chat', senderComponent }
}

module.exports = parseMessage
