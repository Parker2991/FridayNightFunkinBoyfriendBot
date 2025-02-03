module.exports = {
  data: {
    name: "help",
    description: "see the list of commands",
    aliases: [
      "heko",
      "?",
      "cmds",
      "commands",
      "hell",
    ],
    usages: [
      "<command>"
    ],
    trustLevel: 0,
  },
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const config = context.config;
    let component = [];
    let infoComponent = [];
    let usagesComponent = [];
    let public = [];
    let trusted = [];
    let admin = [];
    let owner = [];
    let Console = [];
    const { MessageBuilder } = require('prismarine-chat')(bot._client.version);
    component.push({
      translate: "%s: (%s) \u203a\n",
      color: config.colors.commands.tertiary,
      with: [
        { text: "Commands", color: config.colors.commands.secondary },
        { text: `${bot.commandManager.commandlist.length}`, color: config.colors.integer },
      ]
    });
    for (const commands of bot.commandManager.commandlist) {
      switch (commands.data.trustLevel) {
        case 0:
          public.push({
            text: commands.data.name + ' ',
            color: config.colors.help.public
          });
        break;
        case 1:
          trusted.push({
            text: commands.data.name + ' ',
            color: config.colors.help.trusted
          });
        break;
        case 2:
          admin.push({
            text: commands.data.name + ' ',
            color: config.colors.help.admin
          });
        break;
        case 3:
          owner.push({
            text: commands.data.name + ' ',
            color: config.colors.help.owner
          });
        break;
        case 4:
          Console.push({
            text: commands.data.name + ' ',
            color: config.colors.help.console
          });
        break;
        default:
          bot.chat.message(`fuck you ${commands.data.name} has a invalid trust level`);
      };

      if (args[0] === commands.data.name) {
        for (const usages of commands.data.usages) {
          usagesComponent.push({
            translate: "%s%s %s",
            with: [
              { text: `${config.prefixes[0]}`, color: config.colors.commands.primary },
              { text: `${commands.data.name}`, color: config.colors.commands.secondary },
              { text: `${usages}`, color: config.colors.commands.secondary },
            ]
          })
          usagesComponent.push('\n');
        }
        infoComponent.push({
          translate: "%s: %s\n%s: %s\n%s: %s\n%s: %s\n%s:\n",
          color: config.colors.commands.tertiary,
          with: [
            { text: "Name", color: config.colors.commands.primary },
            { text: `${commands.data.name}`, color: config.colors.commands.secondary },
            { text: "Aliases", color: config.colors.commands.primary },
            { text: `${commands.data.aliases.toString().replaceAll(',',' ')}`, color: config.colors.commands.secondary },
            { text: "Description", color: config.colors.commands.primary },
            { text: `${commands.data.description}`, color: config.colors.commands.secondary },
            { text: "Trust Level", color: config.colors.commands.primary },
            { text: `${commands.data.trustLevel}`, color: config.colors.integer },
            { text: "Usages", color: config.colors.commands.primary },
          ]
        });
        infoComponent.push(usagesComponent);
        bot.tellraw(`@a`, infoComponent);
        return;

      }
    }

    component.push(public);
    component.push(trusted);
    component.push(admin);
    component.push(owner);
    component.push(Console);
    bot.tellraw("@a", component);
  },
  discordExecute (context) {
    const bot = context.bot;
    const config = context.config;
    const EmbedBuilder = context.EmbedBuilder
    const fixansi = context.fixansi;
    const args = context.arguments;
    let infoComponent = [];
    let usagesComponent = [];
    let public = [];
    let trusted = [];
    let admin = [];
    let owner = [];
    let Console = [];

    for (const commands of bot.commandManager.commandlist) {
      switch (commands.data.trustLevel) {
        case 0:
          public.push(commands.data.name);
        break;
        case 1:
          trusted.push(commands.data.name);
        break;
        case 2:
          admin.push(commands.data.name);
        break;
        case 3:
          owner.push(commands.data.name);
        break;
        case 4:
          Console.push(commands.data.name);
        break;
      }
      if (args[0] === commands.data.name) {
        for (const usages of commands.data.usages) {
          usagesComponent.push({
            translate: "%s%s %s",
            with: [
              { text: `${config.prefixes[0]}`, color: config.colors.commands.primary },
              { text: `${commands.data.name}`, color: config.colors.commands.secondary },
              { text: `${usages}`, color: config.colors.commands.secondary },
            ]
          })
          usagesComponent.push('\n');
        }

        infoComponent.push({
          translate: "%s: %s\n%s: %s\n%s: %s\n%s: %s\n%s:\n",
          color: config.colors.commands.tertiary,
          with: [
            { text: "Name", color: config.colors.commands.primary },
            { text: `${commands.data.name}`, color: config.colors.commands.secondary },
            { text: "Aliases", color: config.colors.commands.primary },
            { text: `${commands.data.aliases.toString().replaceAll(',',' ')}`, color: config.colors.commands.secondary },
            { text: "Description", color: config.colors.commands.primary },
            { text: `${commands.data.description}`, color: config.colors.commands.secondary },
            { text: "Trust Level", color: config.colors.commands.primary },
            { text: `${commands.data.trustLevel}`, color: config.colors.integer },
            { text: "Usages", color: config.colors.commands.primary },
          ]
        });
        infoComponent.push(usagesComponent);
        bot?.discord?.message?.reply(`\`\`\`ansi\n${fixansi(bot.getMessageAsPrismarine(infoComponent)?.toAnsi()?.replaceAll('`', '`\u200b'))}\`\`\``);
        return;
      }
    }

    let commandsEmbed = new EmbedBuilder()
      .setColor(config.colors.discord.embed)
      .setTitle(`${this.data.name} Command`)
      .setDescription(`Commands (${bot.commandManager.commandlist.length})`)
      .addFields(
         { name: "Public", value: public.toString().replaceAll(',',' '), inline: false },
         { name: "Trusted", value: trusted.toString().replaceAll(',',' '), inline: false },
         { name: "Admin", value: admin.toString().replaceAll(',',' '), inline: false },
         { name: "Owner", value: owner.toString().replaceAll(',',' '), inline: false },
         { name: "Console", value: Console.toString().replaceAll(',',' '), inline: false },
      );

    bot.discord.message.reply({ embeds: [ commandsEmbed ] });

  }
}
