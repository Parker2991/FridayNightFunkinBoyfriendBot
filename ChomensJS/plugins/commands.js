
const path = require('path')
const { EmbedBuilder } = require('discord.js')
function inject (bot, dcclient, config) {
  const loadFiles = require('../util/load_files')
  const channeldc = dcclient.channels.cache.get(config.discord.servers[`${bot.server.host}:${bot.server.port}`])
  bot.command_handler = {}
  bot.command_handler.commands = {}
  bot.command_handler.reload = async function () {
    bot.command_handler.commands = await loadFiles(path.join(__dirname, config.commandsDir))
  }
  bot.command_handler.reload()
  bot.command_handler.main = function (prefix, username, message, sender, channeldc, hash, ownerhash, selector) {
    bot.command_handler.reload()
    let raw
    let command
    const discord = !!message.content

    discord
      ? raw = message.content.substring(prefix.length)
      : raw = message.substring(prefix.length)

    const [commandName, ...args] = raw.split(' ')
    command = bot.command_handler.commands.find((command) => command.name === commandName.toLowerCase())

    try {
      const alias = bot.command_handler.commands.find((command) => command.alias.includes(commandName.toLowerCase()))
      if (alias) command = alias

      if (prefix === '3*' && message.endsWith('3*') && message !== '3*') return
      if (!command) throw new Error(`Unknown command: "${commandName}"`)

      if (command.trusted > 0) {
        const discordRoles = message.member?.roles?.cache // do i need the "?"s ? 

        // TODO: Don't hardcode the roles

        // trusted and host
        // discord
        if (
          discord &&
          command.trusted === 1 &&
          !discordRoles.some((role) => role.name === 'Trusted' || role.name === 'chomens' || role.name === 'FNFBoyfriendBot Owner')
        ) throw new Error('You\'re not in the trusted role!')
        // in game
        if (
          !discord &&
          command.trusted === 1 &&
          args[0] !== hash &&
          args[0] !== ownerhash

        ) throw new Error('Invalid hash')

        // FNFBoyfriendBot Owner
        // || role.name === 'Host'
        if (
          discord &&
          command.trusted === 2 &&
          !discordRoles.some((role) => role.name === 'chomens' || role.name === 'FNFBoyfriendBot Owner')

        ) throw new Error('You\'re not in the host role!')
        // in game
        if (
          !discord &&
          command.trusted === 2 &&
          args[0] !== ownerhash
        ) throw new Error('Invalid OwnerHash')
      }

      if (prefix === config.discord.prefix) {
        if (!command.discordExecute) throw new Error('This command is not yet supported on Discord!')
        command.discordExecute(bot, username, sender, prefix, args, channeldc, message, config)
      } else {
        command.execute(bot, username, sender, prefix, args, config, hash, ownerhash, selector)
      }
    } catch (e) {
      if (prefix === config.discord.prefix) {
        const Embed = new EmbedBuilder()
          .setColor(config.discord.embedsColors.error)
          .setTitle('Error')
          .setDescription(`\`\`\`${e}\`\`\``)
        channeldc.send({ embeds: [Embed] })
      } else {
        bot.tellraw(selector, { text: String(e), color: 'red' })
      }
    }
  }
  bot.command_handler.run = function (username, message, sender, channeldc, hash, ownerhash, selector = '@a') {
    for (const prefix of config.prefixes) {
      if (!message.startsWith(prefix)) continue
      bot.command_handler.main(prefix, username, message, sender, channeldc, hash, ownerhash, selector)
    }
  }
  bot.on('chat', async (_username, _message) => {
    const username = _username?.replace(/§.?/g, '')
    const sender = bot.players.list.find((val) => val.name === username)?.UUID
    const message = _message?.replace(/* /§r/g */ /§.?/g, '')/* .replace(/§/g, '') */
    bot.command_handler.run(username, message, sender, channeldc, bot.hash, bot.ownerHash)
  })
  bot.on('cspy', async function (_username, _message) {
    const username = _username.replace(/§.?/g, '')
    const message = _message.replace(/§.?/g, '')
    const sender = bot.players.list.find((val) => val.name === username)?.UUID
    bot.command_handler.run(username, message, sender, channeldc, bot.hash, bot.ownerHash, username)
  })
  function handleDiscordMessages (message) {
    try {
      // ignores the message that comes from the bot itself
      if (message.author.id === dcclient.user.id) return
      // only receive messages in SPECIFIC channel
      if (message.channel.id !== channeldc.id) return
      if (!message.content.startsWith(config.discord.prefix)) return
      bot.command_handler.main(config.discord.prefix, message.member.displayName, message, 'no sender for discord', channeldc)
    } catch (e) {
      bot.console.error(e.stack)
    };
  }
  bot.on('end', () => {
    dcclient.off('messageCreate', handleDiscordMessages)
  })
  dcclient.on('messageCreate', handleDiscordMessages)
};
module.exports = { inject }
