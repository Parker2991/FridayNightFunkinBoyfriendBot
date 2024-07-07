function selfcare (bot, options, config) {
  let entityId;
  let permissionLevel = 2;
  let gameMode;
  let commandSpy = false;
  let vanished = false;
  let prefix = false;
  // You now have the tag: &8[&bPrefix&8: &3~&8]
  // You no longer have a tag
  bot.on('message', (message) => {
    const stringMessage = bot.getMessageAsPrismarine(message).toString();
    if (stringMessage.startsWith("Successfully enabled CommandSpy")) commandSpy = true;
    else if (stringMessage?.startsWith("Successfully disabled CommandSpy")) commandSpy = false;
    else if (stringMessage === `Vanish for ${bot.options.username}: enabled`) vanished = true;
    else if (stringMessage === `Vanish for ${bot.options.username}: disabled`) vanished = false;
    else if (stringMessage === `You now have the tag: &8[&bPrefix&8: &3${config.prefixes[0]}&8]` || stringMessage === "Something went wrong while saving the prefix. Please check console.") prefix = true;
    else if (stringMessage?.startsWith("You now have the tag: ") || stringMessage === "You no longer have a tag") prefix = false
  })
  //  else if (stringmessage?.startsWith("You now have the tag: ") || JSON?.stringify(message) === '{"text":"You no longer have a tag"}') prefix = false
  bot.on('packet.entity_status', packet => {
    if (packet.entityId !== entityId || packet.entityStatus < 24 || packet.entityStatus > 28) return
    permissionLevel = packet.entityStatus - 24
  })
  bot.on('packet.game_state_change', packet => {
    if (packet.reason !== 3) return // Reason 3 = Change Game Mode
 //   if (packet.reason !== 4) return // Reason 4 = end credits
    gameMode = packet.gameMode;
  });
  bot.on("packet.game_state.change", packet => {

  })
  let timer;
  bot.on('packet.login', (packet) => {
    entityId = packet.entityId;
    gameMode = packet.gameMode;
    timer = setInterval(() => {
       if (permissionLevel < 2) bot.chat.command('op @s[type=player]');
       else if (gameMode !== 1) bot.chat.command('gamemode creative @s[type=player]');
       else if (!commandSpy) bot.chat.command('commandspy on');
       else if (!vanished) bot.core.run(`vanish ${bot.options.username} on`);
       else if (!prefix) bot.chat.command(`prefix &8[&bPrefix&8: &3${config.prefixes[0]}&8]`);
       else if (gameMode !== 4) bot._client.write("client_command", { actionId: 0 });
    }, 1000);
  });
  bot.on('end', () => {
    if (timer) clearInterval(timer)
    prefix = false;
    commandSpy = false;
    vanished = false;
    prefix = false;
  });
}
module.exports = selfcare;
