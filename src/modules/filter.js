const fs = require('fs');
const path = require('path');
function filter (bot, options, config, discordClient) {
  if (options.isSavage || options.isCreayun) return;
  // filter v6 (not to be confused with the bot version)
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

    }
  }
  bot.on('message', async (data) => {
    for (const filteredPlayer of JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')))) {
//      for (const eachBot of bot.bots) {
        let player_completion = (await bot.tab_complete('deop ')).filter(_ => _.tooltip == undefined);
        player_completion.forEach(async (player) => {
          if (filteredPlayer.ignoreCase) {

          } else {
//            if (player.match !== eachBot.players.find((players) => players.profile.name === filteredPlayer.name).profile.name) return;
            if (bot.players.find((players) => players.profile.name === player.match).profile.name === filteredPlayer.name === true) {
            
                bot.core.run(`execute run deop @a[name="${bot.players.find((players) => players.profile.name === filteredPlayer.name).profile.name}"]`);
            }
          }
        })
        if (filteredPlayer.ignoreCase) {

        } else {
//          if (!eachBot.players.find((player) => players.profile.name === filteredPlayer.name)) return
          if (bot.players.find((players) => players.profile.name === JSON.parse(filteredPlayer.name)).gamemode !== 2) {
//            if (eachBot.players.find((player) => players.profile.name !== filteredPlayer.name)) return
            bot.core.run(`execute run gamemode adventure @a[name="${bot.players.find((player) => player.profile.name === filteredPlayer.name).profile.name}"]`);
          }
        }
      }
  //  }
  })
  bot.on('parsed_message', (data) => {
    try {
    for (const filteredPlayer of JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')))) {
      if (filteredPlayer.ignoreCase) {


      } else {
        if (bot?.players?.find((player) => player?.profile?.name === filteredPlayer.name)?.profile?.name === data?.sender?.profile?.name) {
            bot.core.run(`essentials:mute ${bot?.players?.find((player) => player?.profile?.name === filteredPlayer.name)?.uuid} 10y`);
        }
      }
    }
    } catch (e) {
      console.log(e.stack);
    }
  })
}
module.exports = filter;
