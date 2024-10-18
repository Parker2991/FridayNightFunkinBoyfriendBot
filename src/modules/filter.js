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

    }
  }
  bot.on('message', async (data) => {
    for (const filteredPlayer of JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')))) {
      let player_completion = (await bot.tab_complete('deop ')).filter(_ => _.tooltip == undefined);

//      console.log(muted);
//      console.log(player_completion[0].match.toLowerCase());
//      console.log(bot.players.find((players) => players.profile.name.toLowerCase() === filteredPlayers.name.toLowerCase()).gamemode)
      player_completion.forEach(async (player) => {
        if (filteredPlayer.ignoreCase) {
          if (player.match !== bot.players.find((players) => players.profile.name === filteredPlayer.name.toLowerCase()).profile.name) return;
          if (player.match === bot.players.find((players) => players.profile.name === filteredPlayer.name.toLowerCase()).profile.name) {
            if (!bot.players.find((players) => players.profile.name === filteredPlayer.name.toLowerCase()).profile.name) return;
            bot.core.run(`execute run deop @a[name="${bot.players.find((players) => players.profile.name === filteredPlayer.name.toLowerCase()).profile.name}"]`);
          }
        } else {
          if (player.match !== bot.players.find((players) => players.profile.name === filteredPlayer.name).profile.name) return;
          if (player.match === bot.players.find((players) => players.profile.name === filteredPlayer.name).profile.name) {
            if (!bot.players.find((players) => players.profile.name === filteredPlayer.name).profile.name) return;
            bot.core.run(`execute run deop @a[name="${bot.players.find((players) => players.profile.name === filteredPlayer.name).profile.name}"]`);
          }
        }
 //        if (filteredPlayer.ignoreCase) {
///           console.log('e');
//         }
        //if (filteredPlayer.ignoreCase) {
//          if (player.match !== bot.players.find((players) => players.profile.name.toLowerCase() === filteredPlayer.name.toLowerCase())) return;
//          if (player.match === bot.players.find((players) => players.profile.name.toLowerCase() === filteredPlayer.name.toLowerCase())) {
//            bot.core.run(`execute run deop @a[name="${bot.players.find((players) => players.profile.name === filteredPlayer.name).profile.name}"]`);
          //}
          //if (bot.players.find((players) => players.profile.name.toLowerCase() === filteredPlayer.name.toLowerCase()).gamemode !== 2) {
            //console.log('e');
           // bot.core.run(`execute run gamemode adventure @a[name="${bot.players.find((players) => players.profile.name.toLowerCase() === filteredPlayer.name.toLowerCase()).profile.name}"]`);
          //}
  //      }
      })
/*        if (player.match !== bot.players.find((players) => players.profile.name === filteredPlayer.name).profile.name) return;
        if (player.match === bot.players.find((players) => players.profile.name === filteredPlayer.name).profile.name) {
bot.core.run(`execute run deop @a[name="${bot.players.find((players) => players.profile.name === filteredPlayer.name).profile.name}"]`);
        }*/
/*        if (!player) return;
        if (player) {
          if (!bot.players.find((players) => players.profile.name === filteredPlayer.name).profile.name) return;
          bot.core.run(`execute run deop @a[name="${bot.players.find((players) => players.profile.name === filteredPlayer.name).profile.name}"]`);
        }*/
//        console.log(player);
//      })
    }
/*    bot.players.forEach(async (player) => {
      if (player) {
        console.log(player_complete);
      }
    })*/
  })
}
module.exports = filter;
/*
    let player_completion = (await bot.tab_complete('scoreboard players add ')).filter(_ => _.tooltip == undefined) // exclude>
    let op = (await bot.tab_complete('minecraft:op ')).filter(_ => _.tooltip == undefined);
    bot.players.forEach(async player => {
      if(!players.includes(player.uuid)) return

      const a = player_completion.filter(_ => _.match == player.profile.name)
      const b = op.filter(_ => _.match == player.profile.name);
      //console.log(b)
      if(a.length >= 1) {
        player.vanished = true
      } else {
        bot.players = bot.players.filter(_ => _.uuid != player.uuid)
      }
    })
*/
