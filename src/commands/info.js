const os = require("os");
const fs = require("fs");
function format(seconds) {
  function pad(s) {
    return (s < 10 ? "0" : "") + s;
  }
  var hours = Math.floor(seconds / (60 * 60));
  var minutes = Math.floor((seconds % (60 * 60)) / 60);
  var seconds = Math.floor(seconds % 60);
  return (pad(`${hours} Hours`) + " " +
    pad(`${minutes} Minutes`) + " " +
    pad(`${seconds} Seconds`))
}
module.exports = {
  name: 'info',
  trustLevel: 0,
  aliases: [
    "information",
  ],
  description: 'check the bots info',
  usages: [
    "version",
    "login",
    "discord",
    "server",
  ],
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const config = context.config;
    const discordClient = context.discordClient;
    const source = context.source;
    switch (args[0]) {
      case 'version':
        bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, `§9Friday §9Night §9Funkin §3Boyfriend §1Bot§8§r-v6.0.0-alpha-700-§bSk§4y §bRedux\n11/22/22 - ${new Date().toLocaleDateString("en-US", { timeZone: "America/CHICAGO" })}`);
      break // &9 &3 &1
      case 'login':
        bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, [
                      {
                        text: `Minecraft username \u203a ${bot.options.username}\n`,
                        color: 'gray',
                      },
                      {
                        text: `Discord username \u203a ${discordClient.user.tag}`,
                        color: 'gray',
                      }
        ]);
      break;
      case 'discord':
//        bot.tellraw('@a', config.discord.invite)
        bot.tellraw("@a", [
          {
            text: `the discord server invite is ${config.discord.invite}`,
            color: "gray",
            translate: "",
            hoverEvent: {
              action: "show_text",
              value: [
                {
                  text: "click here to join the discord server!",
                  color: "gray",
                }
              ]
            },
            clickEvent: {
              action: "open_url",
              value: `${config.discord.invite}`
            }
          },
        ])
      break
      case "server":
        bot.tellraw(`@a[name="${source?.player?.profile?.name}"]`, [
          {
            text: `Hostname \u203a ${os.hostname()}\n`,
            color: "gray"
          },
          {
            text: `Working Directory \u203a ${process.mainModule.path}\n`,
            color: "gray"
          },
          {
            text: `Arch \u203a ${os.arch()}\n`,
            color: "gray"
          },
          {
            text: `OS \u203a ${os.platform()}\n`,
            color: "gray"
          },
          {
            text: `OS Version/distro \u203a ${os.version()}\n`,
            color: "gray",
          },
          {
            text: `Kernel Version \u203a ${os.release()}\n`,
            color: "gray"
          },
          {
            text: `Cores \u203a ${os.cpus().length}\n`,
            color: "gray",
          },
          {
            text: `CPU \u203a ${os.cpus()[0].model}\n`,
            color: "gray"
          },
          {
            text: `Server Free memory `,
            color: 'gray'
          },
          {
            text: `${Math.floor( os.freemem() / 1048576, )} `,
            color: 'gray'
          },
          {
            text: `MiB / ${Math.floor(os.totalmem() / 1048576)} MiB\n`,
            color: 'gray'
          },
          {
            text: `Device uptime \u203a ${format(os.uptime())}\n`,
            color: 'gray'
          },
          {
            text: `Node version \u203a ${process.version}`,
            color: 'gray'
          }
        ])
      break
    }
  }
}
