module.exports = {
  name: 'info',
  trustLevel: 0,
  aliases: [
    "information",
  ],
  description: 'check the bots info',
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
        bot.tellraw('@a', config.discord.invite)
      break
    }
  }
}
