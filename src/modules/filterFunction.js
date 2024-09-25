const fs = require('fs');
const path = require('path');
const jsonData = fs.readFileSync(path.join(__dirname, '../data/filter.json'));
function filterFunction (bot, options, config) {
  bot.filter = {
    list () {
      try {
        return JSON.parse(jsonData);
      } catch (e) {
        bot.chat.message(`&4${e.toString()}`);
      }
    },
    add (player) {
      try {
        const filterList = JSON.parse(jsonData);
        const addData = {
          ignoreCase: false,
          name: player
        }
        filterList.push(addData);
        const data = JSON.stringify(filterList);
        fs.writeFile(jsonData, data, (err) => {
           if (err) throw err;
        })
        console.log(data);
      } catch (e) {
        bot.chat.message(`${e.toString()}`);
      }
    },
    ignoreCase (player) {
      try {
        const filterList = JSON.parse(jsonData);
        const addData = {
          ignoreCase: true,
          name: player
        }
        filterList.push(addData);
        const data = JSON.stringify(filterList);
        fs.writeFile(jsonData, data, (err) => {
           if (err) throw err;
        })
        console.log(data);
      } catch (e) {
        bot.chat.message(`${e.toString()}`);
      }
    },
    clear () {
      try {
//      fs.rmSync(path.join(__dirname, '../data/filter.json'));
      fs.writeFileSync(jsonData, JSON.stringify([]));
      } catch (e) {
        bot.chat.message(`${e.toString()}`)
      }
    }
  }
}
module.exports = filterFunction;
