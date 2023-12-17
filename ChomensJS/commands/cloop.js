
const { EmbedBuilder } = require('discord.js')

function list (bot, discord, channeldc, selector, config) {
  const message = []

  if (discord) {
    for (const [index, { command, interval, list }] of Object.entries(bot.cloop.list)) {
      if (!list) continue
      message.push(index)
      message.push(' > ')
      message.push(`\`${command}\``)
      message.push(' - ')
      message.push(interval)
      message.push('\n')
    }

    message.pop()

    const Embed = new EmbedBuilder()
      .setColor(config.discord.embedsColors.normal)
      .setTitle('Cloops')
      .setDescription(message.join(''))
    channeldc.send({ embeds: [Embed] })
  } else {
    message.push({ text: 'Cloops:', color: 'green' })
    message.push('\n')

    for (const [index, { command, interval, list }] of Object.entries(bot.cloop.list)) {
      if (!list) continue
      message.push({ text: index, color: 'aqua' })
      message.push({ text: ' > ', color: 'gold' })
      message.push({ text: command, color: 'green' })
      message.push({ text: ' - ', color: 'gold' })
      message.push({ text: interval, color: 'green' })
      message.push('\n')
    }

    message.pop()

    bot.tellraw(selector, message)
  }
}

module.exports = {
  name: 'cloop',
  alias: [],
  description: 'Loop commands',
  usage: [
    '<hash> add <interval> <command>',
    '<hash> remove <index>',
    '<hash> removeall|clear',
    '<hash> list'
  ],
  trusted: 1,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    if (args[1] === 'add' && args[3]) {
      if (!Number(args[2]) && Number(args[2]) !== 0) throw new SyntaxError('Invalid interval')
      bot.cloop.add(args.slice(3).join(' '), args[2])
      bot.tellraw(selector, [{ text: 'Added command ', color: 'white' }, { text: args.slice(3).join(' '), color: 'aqua' }, { text: ' with interval ', color: 'white' }, { text: args[2], color: 'green' }, { text: ' to the cloops', color: 'white' }])
    } else if (args[1] === 'list') {
      list(bot, false, null, selector)
    } else if (args[1] === 'remove') {
      bot.cloop.remove(args[2])
      bot.tellraw(selector, [{ text: 'Removed cloop ' }, { text: args[2], color: 'aqua' }])
    } else if (args[1] === 'removeall' || args[1] === 'clear') {
      bot.cloop.clear()
      bot.tellraw(selector, [{ text: 'Removed all looped commands', color: 'white' }])
    } else {
      throw new SyntaxError('Invalid argument')
    }
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    if (args[0] === 'add' && args[2]) {
      if (!Number(args[1]) && Number(args[1]) !== 0) throw new SyntaxError('Invalid interval')
      bot.cloop.add(args.slice(2).join(' '), args[1])
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Cloop')
        .setDescription(`Added cloop \`${args.slice(2).join(' ')}\` with interval ${args[1]} to the cloops`)
      channeldc.send({ embeds: [Embed] })
    } else if (args[0] === 'list') {
      list(bot, true, channeldc, '@a', config)
    } else if (args[0] === 'remove') {
      bot.cloop.remove(args[1])
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Cloop')
        .setDescription(`Removed cloop \`${args[1]}\``)
      channeldc.send({ embeds: [Embed] })
    } else if (args[0] === 'removeall' || args[0] === 'clear') {
      bot.cloop.clear()
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Cloop')
        .setDescription('Removed all looped commands')
      channeldc.send({ embeds: [Embed] })
    } else {
      throw new Error('Invalid argument')
    }
  }
}
