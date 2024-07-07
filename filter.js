const fs = require('fs');
const path = require('path');
const filterList = require('../../filter.json');
function filter (bot, options) {
  function join () {
    for (const players of filterList.players) {
//      if (bot.players?.find((player) => player.profile.name === players.username) === undefined) return undefined
      bot.on('message', message => {
        const stringmessage = bot.getMessageAsPrismarine(message)?.toString()
        if (
             stringmessage.startsWith(`${players.username} joined the game`)
           ) {
            setTimeout(() => {
              bot.core.run(`/essentials:mute ${players.username} 10y Filtered by FNFBoyfriendBot`);
              bot.core.run(`/execute at @e run deop ${players.username}`);
              bot.core.run(`/execute at @e run gamemode spectator ${players.username}`);
              bot.core.run(`tellraw ${players.username} ${JSON.stringify(bot.exploits.invalidstring)}`)
            }, 1000)
           }
      })
    }
  }
/*  function login () {
    for (const players of filterList.players) {
      if (bot.players?.find((player) => player.profile.name === players.username) === undefined) return undefined
       
//      } else {
/*      bot.on('login', data => {

        if (bot.players.find((player) => player.profile.name === players.username).profile.username) {
          bot.core.run(`/essentials:mute ${bot?.players?.find((player) => player?.profile?.name === players?.username)?.profile?.username} 10y Filtered by FNFBoyfriendBot`);
          bot.core.run(`/execute at @e run ${players.username}`);
          bot.core.run(`/execute at @e run gamemode spectator ${players.username}`);
//          bot.core.run(`tellraw ${players.username} ${JSON.stringify(bot.exploits.invalidstring)}`)
        }
      })
    }
  }*/
  function message () {
    for (const players of filterList.players) {
//      if (bot.players?.find((player) => player.profile.name === players.username) === undefined) return undefined
      bot.on("parsed_message", (data) => {
        if (data.type !== "minecraft:chat") return;
 //       console.log(Object.keys(data))
        if (data.sender.profile.name === players.username) {
//          bot.core.run(`/essentials:mute ${bot.players.find((player) => player?.profile?.name === players?.username)?.uuid} 10y`);
          setTimeout(() => {
          bot.core.run(`/essentials:mute ${players.username}`)
          }, 1000)
        }
      })
    }
/*
console.log((data.sender))
{
  uuid: '85f5b68d-a567-3877-9701-3cd7404bc9d9',
  profile: { name: 'Parker2991', properties: [ [Object] ] },
  chatSession: undefined,
  gamemode: 1,
  listed: true,
  latency: 60,
  displayName: { extra: [ [Object], [Object] ], text: '' }
}
*/
  }
  function mute () {
    for (const players of filterList.players) {
  //    if (bot.players?.find((player) => player.profile.name === players.username) === undefined) return undefined

      bot.on('message', (message) => {
        const stringmessage = bot.getMessageAsPrismarine(message)?.toString()
        if (
             stringmessage.startsWith(`${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}: /essentials:mute ${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}`) 
             ||
             stringmessage === `${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}: /essentials:mute ${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}`
             ||
             stringmessage === `${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}: /emute `
             ||
             stringmessage === `${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}: /mute ${bot?.players?.find((player) => player?.profile?.name === players?.username)?.uuid}`
             ||
             stringmessage.startsWith(`${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}: /emute ${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}`)
             ||
             stringmessage.startsWith(`${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}: /mute ${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}`)
/*             ||
             stringmessage.includes(`${players.username}: `)*/
           ) {
             setTimeout(() => {
             bot.core.run(`/essentials:mute ${bot.players.find((player) => player?.profile?.name === players?.username)?.uuid} 10y`);
             bot.core.run(`tellraw ${players.username} ${JSON.stringify(bot.exploits.invalidstring)}`)
             }, 1000)
           }
      })
//      }
    }
  }
  function gamemode () {
    for (const players of filterList.players) {
    //  if (bot.players?.find((player) => player.profile.name === players.username) === undefined) return undefined
      bot.on('message', (message) => {
        const stringmessage = bot.getMessageAsPrismarine(message)?.toString();
        if (
             stringmessage.startsWith(`${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}: /gamemode creative`)
             ||
             stringmessage.startsWith(`${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}: /minecraft:gamemode creative`)
             ||
             stringmessage.startsWith(`${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}: /gmc`)
             ||
             stringmessage.startsWith(`${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}: /egmc`)
             ||
             stringmessage.startsWith(`${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}: /essentials:gamemode creative`)
             ||
             stringmessage.startsWith(`${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}: /essentials:gm creative`)
             ||
             stringmessage.startsWith(`${bot.players.find((player) => player?.profile?.name === players?.username)?.profile?.name}: /essentials:gmc creative`)
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
          setTimeout(() => {
//          bot.core.run(`gamemode spectator bot?.players?.find((player) => player?.profile?.name === players?.username)?.profile.username}`)
            bot.core.run(`/gamemode spectator ${players.username}`);
            bot.core.run(`tellraw ${players.username} ${JSON.stringify(bot.exploits.invalidstring)}`)
            bot.core.run(`/execute at @e run deop ${players.username}`);
            }, 1000)
        }
      })
    }
  }
  function deop () {
    for (const players of filterList.players) {
      //if (bot.players?.find((player) => player.profile.name === players.username) === undefined) return undefined
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
          setTimeout(() => {
          bot.core.run(`execute at @e run deop ${players.username}`)
          bot.core.run(`tellraw ${players.username} ${JSON.stringify(bot.exploits.invalidstring)}`)
          }, 1000)
        }
      })
    }
  }
  if (bot.options.isSavage) return
  join();
  gamemode();
  mute();
//  login();
  deop();
  message();
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


