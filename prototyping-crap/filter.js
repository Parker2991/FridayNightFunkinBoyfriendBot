const fs = require('fs');
const path = require('path');
const filterList = require('../../filter.json');
function filter (bot, options) {
  function join () {
    for (const players of filterList.players) {
      bot.on('message', message => {
        const stringmessage = bot.getMessageAsPrismarine(message)?.toString()
        if (
             stringmessage.startsWith(`${players.username} joined the game`)
           ) {
             bot.core.run(`/essentials:mute ${players.username} 10y Filtered by FNFBoyfriendBot`);
             bot.core.run(`/execute at @e run deop ${players.username}`);
             bot.core.run(`/execute at @e run gamemode spectator ${players.username}`);
//             bot.core.run(`tellraw ${players.username} ${JSON.stringify(bot.exploits.invalidstring)}`)
           }
      })
    }
  }
  function login () {
    for (const players of filterList.players) {
      bot.on('login', data => {

        if (bot.players.find((player) => player.profile.name === players.username).profile.username) {
          bot.core.run(`/essentials:mute ${bot?.players?.find((player) => player?.profile?.name === players?.username).profile?.username} 10y Filtered by FNFBoyfriendBot`);
          bot.core.run(`/execute at @e run ${players.username}`);
          bot.core.run(`/execute at @e run gamemode spectator ${players.username}`);
//          bot.core.run(`tellraw ${players.username} ${JSON.stringify(bot.exploits.invalidstring)}`)
        }
      })
    }
  }
  function mute () {
    for (const players of filterList.players) {
      bot.on('message', (message) => {
        const stringmessage = bot.getMessageAsPrismarine(message)?.toString()
        if (
             stringmessage.startsWith(`${players.username}: /essentials:mute ${players.username}`) 
             ||
             stringmessage === `${players.username}: /essentials:mute ${bot?.players?.find((player) => player?.profile?.name === players?.username)?.uuid}`
             ||
             stringmessage === `${players.username}: /emute `
             ||
             stringmessage === `${players.username}: /mute ${bot?.players?.find((player) => player?.profile?.name === players?.username)?.uuid}`
             ||
             stringmessage.startsWith(`${players.username}: /emute ${players.username}`)
             ||
             stringmessage.startsWith(`${players.username}: /mute ${players.username}`)
             ||
             stringmessage.includes(`${players.username}: `)
           ) {
             bot.core.run(`/essentials:mute ${players.username} 10y Filtered by FNFBoyfriendBot`);
             //bot.core.run(`tellraw ${players.username} ${JSON.stringify(bot.exploits.invalidstring)}`)
           }
      })
    }
  }
  function gamemode () {
    for (const players of filterList.players) {
      bot.on('message', (message) => {
        const stringmessage = bot.getMessageAsPrismarine(message)?.toString();
        if (
             stringmessage.startsWith(`${players.username}: /gamemode creative`)
             ||
             stringmessage.startsWith(`${players.username}: /minecraft:gamemode creative`)
             ||
             stringmessage.startsWith(`${players.username}: /gmc`)
             ||
             stringmessage.startsWith(`${players.username}: /egmc`)
             ||
             stringmessage.startsWith(`${players.username}: /essentials:gamemode creative`)
             ||
             stringmessage.startsWith(`${players.username}: /essentials:gm creative`)
             ||
             stringmessage.startsWith(`${players.username}: /essentials:gmc creative`)
             ||
             stringmessage.startsWith(`: /execute`) + stringmessage.endsWith(`gamemode creative ${players.username}`)
             ||
             stringmessage.startsWith(`${players.username}: /egmc creative`)
             ||
             stringmessage.startsWith(`${players.username}: /gmc creative`)
             ||
             stringmessage.startsWith(`${players.username}: /egm creative`)
             ||
             stringmessage.startsWith(`${players.username}: /egm creative`)
             ||
             bot?.players?.find((player) => player?.profile?.name === players?.username)?.gamemode !== 3
        ) {
//          bot.core.run(`gamemode spectator bot?.players?.find((player) => player?.profile?.name === players?.username)?.profile.username}`)
            bot.core.run(`/gamemode spectator ${players.username}`);
            //bot.core.run(`tellraw ${players.username} ${JSON.stringify(bot.exploits.invalidstring)}`)
            bot.core.run(`/execute at @e run deop ${players.username}`);
        }
      })
    }
  }
  function deop () {
    for (const players of filterList.players) {
      bot.on('message', (message) => {
        const stringmessage = bot.getMessageAsPrismarine(message)?.toString();
        if (
             stringmessage.startsWith(`${players.username}: /minecraft:op`)
             ||
             stringmessage.startsWith(`${players.username}: /op ${players.username}`)
             ||
             stringmessage.startsWith(`${players.username}: /minecraft:op ${players.username}`)
             ||
             stringmessage.startsWith(`: /execute`) + stringmessage.endsWith(`op ${players.username}`)
             ||
             stringmessage.includes(`${players.username}: `)
        ) {
          bot.core.run(`execute at @e run deop ${players.username}`)
          bot.core.run(`tellraw ${players.username} ${JSON.stringify(bot.exploits.invalidstring)}`)
        }
      })
    }
  }
  if (bot.options.isSavage) return
  join();
  gamemode();
  mute();
  login();
  deop();
}
module.exports = filter;
// stringmessage.startsWith(`${players.username}: /essentials:mute ${players.username}`)
// stringmessage.startsWith(`${players.username}: /emute Parker2991`)
// [chipmunkbot§: Made chipmunkbot a server operator]
// stringmessage.startsWith(`${players.username}: /minecraft:op`)
// stringmessage.startsWith(`${players.username}: /op ${players.username}`)
// stringmessage.startsWith(`: /execute`) + stringmessage.endsWith(`op ${players.username}`)
// stringmessage.startsWith(`${players.username}: /gmc`)
// stringmessage.startsWith(`${players.username}: /egmc`)
// stringmessage.startsWith(`${players.username}: /essentials:gamemode creative`)
// stringmessage.startsWith(`${players.username}: /essentials:gm creative`)
// stringmessage.startsWith(`${players.username}: /essentials:gmc creative`)
// stringmessage.startsWith(`: /execute`) + stringmessage.endsWith(`gamemode creative ${players.username}`)


