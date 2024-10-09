const fs = require('fs');
const path = require('path');
function filter (bot, options, config, discordClient) {
  if (options.isSavage || options.isCreayun) return;
  // filter v5 (not to be confused with the bot version)
  bot.filter = {
    list () {
      try {
        return JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')));
      } catch (e) {
        console.log(e.stack)
      }
    },

    add (ignoreCase, regexed, player) {
      var data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')));
      var arrayadd = { ignoreCase: ignoreCase, regexed: regexed, name: player }
      data.push(arrayadd);
      fs.writeFileSync(path.join(__dirname, '../data/filter.json'), JSON.stringify(data))
      this.doAll();
    },

    remove (index) {
      var data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')));
      data.splice(index, 1);
      fs.writeFileSync(path.join(__dirname, '../data/filter.json'), JSON.stringify(data));
    },

    clear () {
      var data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')));
      data = [];
      fs.writeFileSync(path.join(__dirname, '../data/filter.json'), JSON.stringify(data))
    },

    doAll () {
      for (const filteredPlayers of JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')))) {
        if (filteredPlayers.ignoreCase) {
          check = bot.players.find((players) => players.profile.name.toLowerCase() === filteredPlayers.name.toLowerCase())
        } else if (filteredPlayers.regexed) {
          let regex = new RegExp(filteredPlayers.name);
          check = bot.players.find((players) => regex.test(players.profile.name))
        } else if (filteredPlayers.ignoreCase && filteredPlayers.regexed) {
          let regex = new RegExp(filteredPlayers.name.toLowerCase());
          check = bot.players.find((players) => regex.test(players.profile.name.toLowerCase()))
        } else {
          check = bot.players.find((players) => players.profile.name === filteredPlayers.name)
        }
      }
      if (!check) return;
      bot.core.run(`execute run gamemode adventure @a[name="${check?.profile?.name}"]`)
      bot.core.run(`execute run deop @a[name="${check?.profile?.name}"]`);
      bot.core.run(`essentials:mute ${check?.uuid} 10y`);
    }
  }
  bot.on('message', (message) => {
    try {
    const stringMessage = bot.getMessageAsPrismarine(message)?.toString()
    for (const filteredPlayers of JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')))) {
      if (filteredPlayers.ignoreCase) {
        if (!bot.players.find((players) => players.profile.name.toLowerCase() === filteredPlayers.name.toLowerCase())) return;
        else if (bot.players.find((players) => players.profile.name.toLowerCase() === filteredPlayers.name.toLowerCase()).gamemode !== 2) {
          bot.core.run(`execute run gamemode adventure @a[name="${bot.players.find((players) => players.profile.name.toLowerCase() === filteredPlayers.name.toLowerCase()).profile.name}"]`);
        } else if (stringMessage.includes('op')) {
          setTimeout(() => {
            bot.core.run(`execute run deop @a[name="${bot.players.find((players) => players.profile.name.toLowerCase() === filteredPlayers.name.toLowerCase()).profile.name}"]`)
          }, 10);
        }
      } else if (filteredPlayers.regexed) {
        let regex = new RegExp(filteredPlayers.name);
        if (!bot.players.find((players) => regex.test(players.profile.name))) return;
        else if (bot.players.find((players) => regex.test(players.profile.name)).gamemode !== 2) {
          bot.core.run(`execute run gamemode adventure @a[name="${bot.players.find((players) => regex.test(players.profile.name)).profile.name}"]`);
        } else if (stringMessage.includes('op')) {
          setTimeout(() => {
            bot.core.run(`execute run deop @a[name="${bot.players.find((players) => regex.test(players.profile.name)).profile.name}"]`);
          }, 10)
        }
      } else if (filteredPlayers.ignoreCase && filteredPlayers.regexed) {
        let regex = new RegExp(filteredPlayers.name.toLowerCase());
        if (!bot.players.find((players) => regex.test(players.profile.name.toLowerCase()))) return;
        else if (bot.players.find((players) => regex.test(players.profile.name.toLowerCase())).gamemode !== 2) {
          bot.core.run(`execute run gamemode adventure @a[name="${bot.players.find((players) => regex.test(players.profile.name.toLowerCase())).profile.name}"]`);
        } else if (stringMessage.includes('op')) {
          setTimeout(() => {
            bot.core.run(`execute run deop @a[name="${bot.players.find((players) => regex.test(players.profile.name.toLowerCase())).profile.name}"]`);
          }, 10)
        }
      } else {
        if (!bot.players.find((players) => players.profile.name === filteredPlayers.name)) return;
        else if (bot.players.find((players) => players.profile.name === filteredPlayers.name).gamemode !== 2) {
          bot.core.run(`execute run gamemode adventure @a[name="${bot.players.find((players) => players.profile.name === filteredPlayers.name).profile.name}"]`);
        } else if (stringMessage.includes('op')) {
          setTimeout(() => {
            bot.core.run(`execute run deop @a[name="${bot.players.find((players) => players.profile.name === filteredPlayers.name).profile.name}"]`);
          }, 10)
        }
      }
    }
    } catch (e) {
      bot.console.warn(e.stack);
    }
  })

  bot.on('parsed_message', (message) => {
    const stringMessage = bot.getMessageAsPrismarine(message)?.toString();
    for (const filteredPlayers of JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')))) {
      if (filteredPlayers.ignoreCase) {
        check = bot.players.find((players) => players.profile.name.toLowerCase() === filteredPlayers.name.toLowerCase())
      } else if (filteredPlayers.regexed) {
        let regex = new RegExp(filteredPlayers.name);
        check = bot.players.find((players) => regex.test(players.profile.name))
      } else if (filteredPlayers.ignoreCase && filteredPlayers.regexed) {
        let regex = new RegExp(filteredPlayers.name.toLowerCase());
        check = bot.players.find((players) => regex.test(players.profile.name.toLowerCase()))
      } else {
        check = bot.players.find((players) => players.profile.name === filteredPlayers.name)
      }
    }
    if (bot.filter.list().length === 0) return;
    if (!check) return;
    if (!bot.players) return;
    if (message.sender.profile.name === check?.profile?.name) {
      bot.core.run(`essentials:mute ${check?.uuid} 10y`);
    }
  })
}
module.exports = filter;
