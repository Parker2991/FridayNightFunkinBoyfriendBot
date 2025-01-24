const sleep = require('../util/sleep');

function inject (context) {
  const bot = context.bot;
  const options = context.options;
  const config = context.config;

  if (options.isKaboom === false || config.team.enabled === false) return;
  bot.on("packet.login", async () => {
    if (options.isKaboom) {
      await sleep(100);
      bot.chat.command(`minecraft:team add ${config.team.name}`);
      await sleep(100);
      bot.core.run(`minecraft:team join ${config.team.name} @a[name="${bot.options.username}"]`);
    }
  })

  bot.on("packet.teams", async (data) => {
//    if (options.isSavage || options.isCreayun) return;
    try {
      if (data.team === config.team.name) {
        data?.players?.map(async (player) => {
          if (player !== bot.options.username) {
            await sleep(100);
            bot.core.run(`minecraft:team empty ${config.team.name}`);
            await sleep(100);
            bot.core.run(`minecraft:team join ${config.team.name} @a[name="${bot.options.username}"]`);
            // this removes players who are not the bot
          }
        });

        if (data.mode == 1) {
          // this is checking if the team has been deleted
          bot.core.run(`minecraft:team add ${config.team.name}`);
          await sleep(100);
          bot.core.run(`minecraft:team join ${config.team.name} @a[name="${bot.options.username}"]`);
        } if (data.name !== JSON.stringify(config.team.displayName)) {
          // this checks if the team displayName matches the one set in the config
          bot.core.run(`minecraft:team modify ${config.team.name} displayName ${JSON.stringify(config.team.displayName)}`);
        } if (data.prefix !== JSON.stringify(config.team.prefix)) {
          // this checks if the team prefix matches the one set in the config
          bot.core.run(`minecraft:team modify ${config.team.name} prefix ${JSON.stringify(config.team.prefix)}`);
        } if (data.suffix !== JSON.stringify(config.team.suffix)) {
          // this checks if the team suffix matches the one set in the config
          bot.core.run(`minecraft:team modify ${config.team.name} suffix ${JSON.stringify(config.team.suffix)}`)
        }
      }
    } catch (e) {
      console.log(e.stack)
    }
  })
}

module.exports = {
  data: {
    enabled: true,
    name: "teams",
    type: "extras"
  },
  inject
}
