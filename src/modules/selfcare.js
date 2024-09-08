function selfcare (bot, options, config) {
  let entityId;
  let permissionLevel = 2;
  let unmuted = false;
  let gameMode;
  let commandSpy = false;
  let vanished = false;
  let prefix = false;
  let god = false;
  let teleportToggle = false;
  let username = false;
  let nickname = false;
  // You now have the tag: &8[&bPrefix&8: &3~&8]
  // You no longer have a tag
  bot.on('message', (message) => {
    const stringMessage = bot.getMessageAsPrismarine(message)?.toString();
//    if (stringMessage?.startsWith("Successfully enabled CommandSpy")) commandSpy = true;
//    else if (stringMessage?.startsWith("Successfully disabled CommandSpy")) commandSpy = false;
    if (stringMessage === "Successfully enabled CommandSpy") commandSpy = true;
    else if (stringMessage === "Successfully enabled CommandSpy.") commandSpy = true;
    else if (stringMessage === "Successfully disabled CommandSpy") commandSpy = false;
    else if (stringMessage === "Successfully disabled CommandSpy.") commandSpy = false;
    else if (stringMessage === `Vanish for ${bot.options.username}: enabled`) vanished = true;
    else if (stringMessage === `Vanish for ${bot.options.username}: disabled`) vanished = false;
    else if (stringMessage === `You now have the tag: &8[&bPrefix&8: &3${config.prefixes[0]}&8]` || stringMessage === "Something went wrong while saving the prefix. Please check console.") prefix = true;
    else if (stringMessage?.startsWith("You now have the tag: ") || stringMessage === "You no longer have a tag") prefix = false
    else if (stringMessage?.startsWith("You have been muted")) unmuted = true;
    else if (stringMessage?.startsWith("You have been unmuted")) unmuted = false;
    else if (stringMessage?.startsWith("Your voice has been silenced")) unmuted = true;
    else if (stringMessage === "God mode disabled.") god = false;
    else if (stringMessage === "God mode enabled.") god = true;
    else if (stringMessage === "Teleportation disabled.") teleportToggle = true;
    else if (stringMessage === "Teleportation enabled.") teleportToggle = false;
    else if (stringMessage === `Successfully set your username to "${bot.username}"`) {
      username = false
      return
    }
    else if (stringMessage?.startsWith("Successfully set your username to ")) username = true
    else if (stringMessage === `You already have the username "${bot.username}"`) username = false
    else if (stringMessage === `You no longer have a nickname.`) nickname = false;
    else if (stringMessage.startsWith('Your nickname is now ')) nickname = true;
  })
  bot.on('packet.entity_status', packet => {
    if (packet.entityId !== entityId || packet.entityStatus < 24 || packet.entityStatus > 28) return
    permissionLevel = packet.entityStatus - 24
  })
  bot.on('packet.game_state_change', packet => {
    if (packet.reason !== 3) return // Reason 3 = Change Game Mode
    gameMode = packet.gameMode;
  });
  bot.on("packet.game_state.change", packet => {
    if (packet.reason !== 4) return // checks if the bot is seeing the endcredits or died
    clientLock = packet.gameMode;
  })
  let timer;
  bot.on('packet.login', (packet) => {
    entityId = packet.entityId;
    gameMode = packet.gameMode;
    clientLock = packet.gameMode;
    timer = setInterval(() => {
      if (bot.options.isSavage && !bot.options.isKaboom) {
        if (clientLock !== 4) bot._client.write("client_command", { actionId: 0 });
      } else if (bot.options.isKaboom && !bot.options.isSavage) {
        if (permissionLevel < 2) bot.chat.command('op @s[type=player]');
        else if (gameMode !== 1) bot.chat.command('minecraft:gamemode creative');
        else if (!commandSpy) bot.chat.command('commandspy on');
        else if (username) bot.chat.command(`username ${bot.options.username}`)
        else if (nickname) bot.chat.command(`nick off`)
        else if (!prefix) bot.chat.command(`prefix &8[&bPrefix&8: &3${config.prefixes[0]}&8]`);
        else if (!vanished) bot.core.run(`vanish ${bot.options.username} on`);
        else if (unmuted) bot.core.run(`essentials:mute ${bot.uuid}`);
        else if (!god) bot.core.run(`god ${bot.options.username} enable`);
        else if (!teleportToggle) bot.core.run(`tptoggle ${bot.options.username} disable`);
        else if (clientLock !== 4) bot._client.write("client_command", { actionId: 0 });
      }
    }, 1000);
  });
  bot.on('end', () => {
    if (timer) clearInterval(timer)
    prefix = false;
    commandSpy = false;
    vanished = false;
    prefix = false;
    god = false;
    unmuted = false;
    username = false;
  });
}
module.exports = selfcare;
