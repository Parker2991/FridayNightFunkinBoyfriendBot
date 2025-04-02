function commandListComponent (commands, config, public, trusted, admin, owner, Console) {
  switch (commands.data.trustLevel) {
    case 0:
      public.push({
        text: commands.data.name + ' ',
        color: config.colors.help.public,
        translate: "",
        hoverEvent: {
          action: "show_text",
          value: [
            {
              translate: "%s: %s\n%s: %s\n%s: %s\n%s: %s\n%s: %s",
              color: config.colors.commands.tertiary,
              with: [
                { text: "Command Name", color: config.colors.commands.primary },
                { text: `${commands.data.name}`, color: config.colors.commands.secondary },
                { text: "Trust Level", color: config.colors.commands.primary },
                { text: `${commands.data.trustLevel}`, color: config.colors.integer },
                { text: "Description", color: config.colors.commands.primary },
                { text: `${commands.data.description}`, color: config.colors.commands.secondary },
                { text: "Aliases", color: config.colors.commands.primary },
                { text: `${commands.data.aliases}`, color: config.colors.commands.secondary },
                { text: "Usages", color: config.colors.commands.primary },
                { text: `${commands.data.usages}`, color: config.colors.commands.secondary }
              ]
            }
          ]
        },
        clickEvent: {
          action: "suggest_command",
          value: `${config.prefixes[0]}${commands.data.name}`
        }
      });
    break;
    case 1:
      trusted.push({
        text: commands.data.name + ' ',
        color: config.colors.help.trusted,
        translate: "",
        hoverEvent: {
          action: "show_text",
          value: [
            {
              translate: "%s: %s\n%s: %s\n%s: %s\n%s: %s\n%s: %s",
              color: config.colors.commands.tertiary,
              with: [
                { text: "Command Name", color: config.colors.commands.primary },
                { text: `${commands.data.name}`, color: config.colors.commands.secondary },
                { text: "Trust Level", color: config.colors.commands.primary },
                { text: `${commands.data.trustLevel}`, color: config.colors.integer },
                { text: "Description", color: config.colors.commands.primary },
                { text: `${commands.data.description}`, color: config.colors.commands.secondary },
                { text: "Aliases", color: config.colors.commands.primary },
                { text: `${commands.data.aliases}`, color: config.colors.commands.secondary },
                { text: "Usages", color: config.colors.commands.primary },
                { text: `${commands.data.usages}`, color: config.colors.commands.secondary }
              ]
            }
          ]
        },
        clickEvent: {
          action: "suggest_command",
          value: `${config.prefixes[0]}${commands.data.name}`
        }
      });
    break;
    case 2:
      admin.push({
        text: commands.data.name + ' ',
        color: config.colors.help.admin,
        translate: "",
        hoverEvent: {
          action: "show_text",
          value: [
            {
              translate: "%s: %s\n%s: %s\n%s: %s\n%s: %s\n%s: %s",
              color: config.colors.commands.tertiary,
              with: [
                { text: "Command Name", color: config.colors.commands.primary },
                { text: `${commands.data.name}`, color: config.colors.commands.secondary },
                { text: "Trust Level", color: config.colors.commands.primary },
                { text: `${commands.data.trustLevel}`, color: config.colors.integer },
                { text: "Description", color: config.colors.commands.primary },
                { text: `${commands.data.description}`, color: config.colors.commands.secondary },
                { text: "Aliases", color: config.colors.commands.primary },
                { text: `${commands.data.aliases}`, color: config.colors.commands.secondary },
                { text: "Usages", color: config.colors.commands.primary },
                { text: `${commands.data.usages}`, color: config.colors.commands.secondary }
              ]
            }
          ]
        },
        clickEvent: {
          action: "suggest_command",
          value: `${config.prefixes[0]}${commands.data.name}`
        }
      });
    break;
    case 3:
      owner.push({
        text: commands.data.name + ' ',
        color: config.colors.help.owner,
        translate: "",
        hoverEvent: {
          action: "show_text",
          value: [
            {
              translate: "%s: %s\n%s: %s\n%s: %s\n%s: %s\n%s: %s",
              color: config.colors.commands.tertiary,
              with: [
                { text: "Command Name", color: config.colors.commands.primary },
                { text: `${commands.data.name}`, color: config.colors.commands.secondary },
                { text: "Trust Level", color: config.colors.commands.primary },
                { text: `${commands.data.trustLevel}`, color: config.colors.integer },
                { text: "Description", color: config.colors.commands.primary },
                { text: `${commands.data.description}`, color: config.colors.commands.secondary },
                { text: "Aliases", color: config.colors.commands.primary },
                { text: `${commands.data.aliases}`, color: config.colors.commands.secondary },
                { text: "Usages", color: config.colors.commands.primary },
                { text: `${commands.data.usages}`, color: config.colors.commands.secondary }
              ]
            }
          ]
        },
        clickEvent: {
          action: "suggest_command",
          value: `${config.prefixes[0]}${commands.data.name}`
        }
      });
    break;
    case 4:
      Console.push({
        text: commands.data.name + ' ',
        color: config.colors.help.console,
        translate: "",
        hoverEvent: {
          action: "show_text",
          value: [
            {
              translate: "%s: %s\n%s: %s\n%s: %s\n%s: %s\n%s: %s",
              color: config.colors.commands.tertiary,
              with: [
                { text: "Command Name", color: config.colors.commands.primary },
                { text: `${commands.data.name}`, color: config.colors.commands.secondary },
                { text: "Trust Level", color: config.colors.commands.primary },
                { text: `${commands.data.trustLevel}`, color: config.colors.integer },
                { text: "Description", color: config.colors.commands.primary },
                { text: `${commands.data.description}`, color: config.colors.commands.secondary },
                { text: "Aliases", color: config.colors.commands.primary },
                { text: `${commands.data.aliases}`, color: config.colors.commands.secondary },
                { text: "Usages", color: config.colors.commands.primary },
                { text: `${commands.data.usages}`, color: config.colors.commands.secondary }
              ]
            }
          ]
        },
        clickEvent: {
          action: "suggest_command",
          value: `${config.prefixes[0]}${commands.data.name}`
        }
      });
    break;
    default:
      bot.chat.message(`fuck you ${commands.data.name} has a invalid trust level`);
  };
}

function infoComponents (commands, config, infoComponent, usagesComponent) {
  for (const usages of commands.data.usages) {

    usagesComponent.push({
      translate: "%s%s %s",
      with: [
        { text: `${config.prefixes[0]}`, color: config.colors.commands.primary },
        { text: `${commands.data.name}`, color: config.colors.commands.secondary },
        { text: `${usages}`, color: config.colors.commands.secondary },
      ]
    });

    usagesComponent.push('\n');

  };

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
}

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
    const source = context.source;

    let component = [];
    let infoComponent = [];
    let usagesComponent = [];
    let public = [];
    let trusted = [];
    let admin = [];
    let owner = [];
    let Console = [];

    component.push({
      translate: "%s: (%s) \u203a\n",
      color: config.colors.commands.tertiary,
      with: [
        { text: "Commands", color: config.colors.commands.secondary },
        { text: `${bot.commandManager.commandlist.length}`, color: config.colors.integer },
      ]
    });
    for (const commands of bot.commandManager.commandlist) {
      commandListComponent(commands, config, public, trusted, admin, owner, Console);

      if (args[0] === commands.data.name) {
        infoComponents(commands, config, infoComponent, usagesComponent);
        bot.tellraw(`@a`, infoComponent);
        return;
      }
    }

    if (public.length > 0) {
      component.push(public);
    }

    if (trusted.length > 0) {
      component.push(trusted);
    }

    if (admin.length > 0) {
      component.push(admin);
    }

    if (owner.length > 0) {
      component.push(owner);
    }


    if (source.sources.console) {
      component.push(Console);
    }
    bot.tellraw("@a", component);
  },
  discordExecute (context) {
    const bot = context.bot;
    const config = context.config;
    const fixansi = context.fixansi;
    const args = context.arguments;
    let infoComponent = [];
    let usagesComponent = [];
    let public = [];
    let trusted = [];
    let admin = [];
    let owner = [];
    let Console = [];
    let component = [];

    component.push({
      translate: "%s: (%s) \u203a\n",
      color: config.colors.commands.tertiary,
      with: [
        { text: "Commands", color: config.colors.commands.secondary },
        { text: `${bot.commandManager.commandlist.length}`, color: config.colors.integer },
      ]
    });

    for (const commands of bot.commandManager.commandlist) {
      commandListComponent(commands, config, public, trusted, admin, owner, Console);

      if (args[0] === commands.data.name) {
        infoComponents(commands, config, infoComponent, usagesComponent);
        bot?.discord?.message?.reply(`\`\`\`ansi\n${fixansi(bot.getMessageAsPrismarine(infoComponent)?.toAnsi()?.replaceAll('`', '`\u200b'))}\`\`\``);
        return;
      }
    }

    component.push(public);
    component.push(trusted);
    component.push(admin);
    component.push(owner);

    bot?.discord?.message?.reply(`\`\`\`ansi\n${fixansi(bot.getMessageAsPrismarine(component)?.toAnsi()?.replaceAll('`', '`\u200b'))}\`\`\``);
  }
}
