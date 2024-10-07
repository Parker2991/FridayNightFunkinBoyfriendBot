//const json = require('../data/filter.json');
const fs = require('fs');
const path = require('path');
//const json = fs.readFileSync(path.join(__dirname, '../data/filter.json'));
function filter (bot, options, config, discordClient) {
  if (options.isSavage || options.isCreayun) return;
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
    gamemodeCheck () {

    },
    joinMsg () {

    },
    check () {

    }
  }
}
module.exports = filter;
// let e = new RegExp('Parker.*'); bot.players.find((a) => e.test(a.profile.name))

