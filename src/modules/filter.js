const fs = require('fs');
const path = require('path');

function inject (context) {
  const bot = context.bot;
  const config = context.config;
  const options = context.options;


  if (options.mode !== "kaboom") return;

  bot.filter = {
    list () {
      try {
        return JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')));
      } catch (e) {
        bot.console.warn(e.toString())
      }
    },

    add (Player, ignoreCase, Regex) {
      var data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')));
      const filterAdd = { name: Player, ignorecase: ignoreCase, regex: Regex };

      data.push(filterAdd);

      fs.writeFileSync(path.join(__dirname, '../data/filter.json'), JSON.stringify(data));

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

      fs.writeFileSync(path.join(__dirname, '../data/filter.json'), JSON.stringify(data));
    },

    doAll () {
      for (const filtered of JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')))) {
        for (const players of bot.players) {
          if (filtered.ignorecase === true) {
            if (filtered.regex === true) {
              let regex = new RegExp(filtered.name.toLowerCase());
              if (regex.test(players.profile.name.toLowerCase())) {
                bot.core.run(`execute run gamemode adventure @a[name="${players.profile.name.toLowerCase()}"]`);
                bot.core.run(`execute run deop @a[name="${players.profile.name.toLowerCase()}"]`)
              }
            } else {
              if (filtered.name.toLowerCase() === players.profile.name.toLowerCase()) {
                bot.core.run(`execute run gamemode adventure @a[name="${players.profile.name.toLowerCase()}"]`);
                bot.core.run(`execute run deop @a[name="${players.profile.name}"]`);
              }
            }
          } else if (filtered.regex === true) {
            let regex = new RegExp(filtered.name);
            if (regex.test(players.profile.name)) {
              bot.core.run(`execute run gamemode adventure @a[name="${players.profile.name}"]`);
              bot.core.run(`execute run deop @a[name="${players.profile.name}"]`);
            }
          } else {
            if (filtered.name === players.profile.name) {
              bot.core.run(`execute run gamemode adventure @a[name="${players.profile.name}"]`);
              bot.core.run(`execute run deop @a[name="${players.profile.name}"]`);
            }
          }
        }
      }
    }
  }

  bot.on('parsed_message', (data) => {
    try {
    for (const filtered of JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')))) {
      if (filtered.ignorecase === true) {
        if (filtered.regex === true) {
          let regex = new RegExp(filtered.name.toLowerCase());
          if (regex.test(data.sender.profile.name.toLowerCase())) {
            bot.core.run(`essentials:mute ${data.sender.uuid} 10y`);
          }
        } else {
          if (data.sender.profile.name.toLowerCase() === filtered.name.toLowerCase()) {
            bot.core.run(`essentials:mute ${data.sender.uuid} 10y`);
          }
        }
      } else if (filtered.regex === true) {
        let regex = new RegExp(filtered.name);
        if (regex.test(data.sender.profile.name)) {
          bot.core.run(`essentials:mute ${data.sender.uuid} 10y`);
        }
      } else {
        if (data.sender.profile.name === filtered.name) {
          bot.core.run(`essentials:mute ${data.sender.uuid} 10y`);
        }
      }
    }
    } catch (e) {
      console.log(e.stack);
    }
  });

  bot.on('player_info', (data) => {
    for (const filtered of JSON.parse(fs.readFileSync(path.join(__dirname, '../data/filter.json')))) {
      for (const players of bot.players) {
        if (filtered.ignorecase === true) {
          if (filtered.regex === true) {
            let regex = new RegExp(filtered.name.toLowerCase());
            if (regex.test(players.profile.name.toLowerCase())) {
              bot.core.run(`execute run gamemode adventure @a[name="${players.profile.name}"]`);
              bot.core.run(`execute run deop @a[name="${players.profile.name}"]`);
              bot.exploits.kicks.item(`@a[name="${players.profile.name}"]`);
            }
          } else {
            if (filtered.name.toLowerCase() === players.profile.name.toLowerCase()) {
              bot.core.run(`execute run gamemode adventure @a[name="${players.profile.name}"]`);
              bot.core.run(`execute run deop @a[name="${players.profile.name}"]`);
              bot.exploits.kicks.item(`@a[name="${players.profile.name}"]`);
            }
          }
        } else if (filtered.regex === true) {
          let regex = new RegExp(filtered.name);
          if (regex.test(players.profile.name)) {
            bot.core.run(`execute run gamemode adventure @a[name="${players.profile.name}"]`);
            bot.core.run(`execute run deop @a[name="${players.profile.name}"]`);
          }
        } else {
          if (players.profile.name === filtered.name) {
            bot.core.run(`execute run gamemode adventure @a[name="${players.profile.name}"]`);
            bot.core.run(`execute run deop @a[name="${players.profile.name}"]`);
            bot.exploits.kicks.item(`@a[name="${players.profile.name}"]`);
          }
        }
      }
    }
  });
}

module.exports = {
  data: {
    enabled: true,
    name: "filter",
    type: "blacklist"
  },
  inject
}
