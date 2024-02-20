/* eslint-disable no-case-declarations */

const fs = require('fs/promises')
const { EmbedBuilder } = require('discord.js')
const path = require('path')
const getFilenameFromUrl = require('../util/getFilenameFromUrl')
const fileExists = require('../util/file-exists')
const fileList = require('../util/file-list')
const axios = require('axios')
const os = require('os')

let SONGS_PATH

if (os.hostname() === 'chomens-kubuntu') {
  SONGS_PATH = path.join(__dirname, '..', '..', 'nginx-html', 'midis')
} else {
  SONGS_PATH = path.join(__dirname, '..', 'midis')
}

let song

async function play (bot, values, discord, channeldc, selector, config) {
  try {
    const filepath = values.join(' ')

    const seperator = path.sep // for hosting bot on windows

    let absolutePath
    if (filepath.includes(seperator) && filepath !== '') {
      const pathSplitted = filepath.split(seperator)

      const songs = await fileList(
        path.join(
          SONGS_PATH,
          pathSplitted[0]
        )
      )

      // this part took a bunch of time to figure out, but still chomens moment!1!
      const lowerCaseFile = pathSplitted.pop().toLowerCase()
      const file = songs.filter((song) => song.toLowerCase().includes(lowerCaseFile))[0]

      absolutePath = await resolve(path.join(pathSplitted.join(seperator), file))
    } else {
      const songs = await fileList(SONGS_PATH)
      const file = songs.filter((song) => song.toLowerCase().includes(filepath.toLowerCase()))[0]
      absolutePath = await resolve(file)
    }

    song = await bot.music.load(await fs.readFile(absolutePath), path.basename(absolutePath))

    if (discord) {
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Music')
        .setDescription(`Added ${song.name} to the song queue`)
      channeldc.send({ embeds: [Embed] })
    } else {
      bot.tellraw(selector, [{ text: 'Added ', color: 'white' }, { text: song.name, color: 'gold' }, { text: ' to the song queue', color: 'white' }])
    }

    bot.music.queue.push(song)
    bot.music.play(song)
  } catch (e) {
    bot.console.error(e.stack)
    if (discord) {
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.error)
        .setTitle('Error')
        .setDescription('```SyntaxError: Invalid file```')
      channeldc.send({ embeds: [Embed] })
    } else {
      bot.tellraw(selector, { text: 'SyntaxError: Invalid file', color: 'red' })
    }
  }
}

async function playUrl (bot, values, discord, channeldc, selector, config) {
  let response
  try {
    const url = values.join(' ')
    response = await axios.get('https://http-proxy.nongsonchome.repl.co', {
      params: {
        uri: url
      },
      responseType: 'arraybuffer'
    })

    song = await bot.music.load(response.data, getFilenameFromUrl(url))

    if (discord) {
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Music')
        .setDescription(`Added ${song.name} to the song queue`)
      channeldc.send({ embeds: [Embed] })
    } else {
      bot.tellraw(selector, [{ text: 'Added ', color: 'white' }, { text: song.name, color: 'gold' }, { text: ' to the song queue', color: 'white' }])
    }

    bot.music.queue.push(song)
    bot.music.play(song)
  } catch (_err) {
    const e = _err.toString().includes('Bad MIDI file.  Expected \'MHdr\', got: ') ? response.data.toString() : _err
    if (discord) {
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.error)
        .setTitle('Error')
        .setDescription(`\`\`\`${e}\`\`\``)
      channeldc.send({ embeds: [Embed] })
    } else {
      bot.tellraw(selector, { text: e, color: 'red' })
    }
  }
}

async function resolve (filepath) {
  if (!path.isAbsolute(filepath) && await fileExists(SONGS_PATH)) {
    return path.join(SONGS_PATH, filepath)
  }
  return filepath
}

async function list (bot, discord, channeldc, prefix, selector, args, config) {
  try {
    let absolutePath
    if (args[1]) absolutePath = await resolve(path.join(SONGS_PATH, args.slice(1).join(' ')))
    else absolutePath = await resolve(SONGS_PATH)

    if (!absolutePath.includes('midis')) throw new Error('bro trying to hack my server?!/1?!')

    const listed = await fileList(absolutePath)

    if (discord) {
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.normal)
        .setTitle('Songs')
        .setDescription(listed.join(', '))
      channeldc.send({ embeds: [Embed] })
      return
    }

    let primary = true
    const message = []

    for (const value of listed) {
      const isFile = (await fs.lstat(path.join(absolutePath, value))).isFile()
      message.push({
        text: value + ' ',
        color: (!((primary = !primary)) ? 'gold' : 'yellow'),
        clickEvent: {
          action: 'suggest_command',
          value: `${prefix}music ${isFile ? 'play' : 'list'} ${path.join(args.slice(1).join(' '), value)}`
        },
        hoverEvent: {
          action: 'show_text',
          contents: [
            { text: 'Name: ', color: 'white' },
            { text: value, color: 'gold' },
            '\n',
            { text: 'Click here to suggest the command!', color: 'green' }
          ]
        }
      })
    };

    bot.tellraw(selector, message)
  } catch (e) {
    if (discord) {
      const Embed = new EmbedBuilder()
        .setColor(config.discord.embedsColors.error)
        .setTitle('Error')
        .setDescription(`\`\`\`${e.toString()}\`\`\``)
      channeldc.send({ embeds: [Embed] })
    } else {
      bot.tellraw(selector, { text: e.toString(), color: 'red' })
    }
  }
};

module.exports = {
  name: 'music',
  description: 'Plays music',
  alias: [],
  trusted: 0,
  usage: [
    'play <song|url>',
    'stop',
    'loop <all|current|off>',
    'list [directory]',
    'skip',
    'nowplaying',
    'queue'
  ],
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    switch (args[0]) {
      case 'play':
      case 'playurl': // deprecated
        if (args.slice(1).join(' ').startsWith('http')) {
          playUrl(bot, args.slice(1), false, null, selector, config)
        } else {
          play(bot, args.slice(1), false, null, selector, config)
        }
        break
      case 'stop':
        bot.tellraw(selector, { text: 'Cleared the song queue' })
        bot.music.stop()
        break
      case 'skip':
        try {
          bot.tellraw(selector, [{ text: 'Skipping ' }, { text: bot.music.song.name, color: 'gold' }])
          bot.music.skip()
        } catch (e) {
          throw new Error('No music is currently playing!')
        }
        break
      case 'loop':
        switch (args[1]) {
          case 'off':
            bot.music.loop = 0
            bot.tellraw(selector, [
              {
                text: 'Looping is now '
              },
              {
                text: 'disabled',
                color: 'red'
              }
            ])
            break
          case 'current':
            bot.music.loop = 1
            bot.tellraw(selector, [
              {
                text: 'Now Looping '
              },
              {
                text: song.name,
                color: 'gold'
              }
            ])
            break
          case 'all':
            bot.music.loop = 2
            bot.tellraw(selector, {
              text: 'Now looping every song'
            })
            break
          default:
            throw new SyntaxError('Invalid argument')
        }
        break
      case 'list':
        list(bot, false, null, prefix, selector, args, config)
        break
      case 'nowplaying':
        bot.tellraw(selector, [
          {
            text: 'Now playing '
          },
          {
            text: bot.music.song.name,
            color: 'gold'
          }
        ])
        break
      case 'queue':
        const queueWithName = []
        for (const song of bot.music.queue) queueWithName.push(song.name)
        bot.tellraw(selector, [
          {
            text: 'Queue: ',
            color: 'green'
          },
          {
            text: queueWithName.join(', '),
            color: 'aqua'
          }
        ])
        break
      default:
        throw new SyntaxError('Invalid argument')
    }
  },
  discordExecute (bot, username, sender, prefix, args, channeldc, message, config) {
    let Embed
    switch (args[0]) {
      case 'play':
        play(bot, args.slice(1), true, channeldc, config)
        break
      case 'playurl':
        playUrl(bot, args.slice(1), true, channeldc, config)
        break
      case 'stop':
        try {
          const Embed = new EmbedBuilder()
            .setColor(config.discord.embedsColors.normal)
            .setTitle('Stop')
            .setDescription('Cleared the song queue')
          channeldc.send({ embeds: [Embed] })
        } catch (e) {
          return
        }
        bot.music.stop()
        break
      case 'skip':
        try {
          const Embed = new EmbedBuilder()
            .setColor(config.discord.embedsColors.normal)
            .setTitle('Skip')
            .setDescription(`Skipping ${bot.music.song.name}`)
          channeldc.send({ embeds: [Embed] })
          bot.music.skip()
        } catch (e) {
          throw new Error('No music is currently playing!')
        }
        break
      case 'loop':
        switch (args[1]) {
          case 'off':
            bot.music.loop = 0
            Embed = new EmbedBuilder()
              .setColor(config.discord.embedsColors.normal)
              .setTitle('Loop')
              .setDescription('Looping is now disabled')
            channeldc.send({ embeds: [Embed] })
            break
          case 'current':
            bot.music.loop = 1
            Embed = new EmbedBuilder()
              .setColor(config.discord.embedsColors.normal)
              .setTitle('Loop')
              .setDescription(`Now looping ${song.name}`)
            channeldc.send({ embeds: [Embed] })
            break
          case 'all':
            bot.music.loop = 2
            Embed = new EmbedBuilder()
              .setColor(config.discord.embedsColors.normal)
              .setTitle('Loop')
              .setDescription('Now looping every song')
            channeldc.send({ embeds: [Embed] })
            break
        }
        break
      case 'list':
        list(bot, true, channeldc, prefix, '@a', args, config)
        break
      case 'nowplaying':
        Embed = new EmbedBuilder()
          .setColor(config.discord.embedsColors.normal)
          .setTitle('Now playing')
          .setDescription(`Now playing ${bot.music.song.name}`)
        channeldc.send({ embeds: [Embed] })
        break
      case 'queue':
        const queueWithName = []
        for (const song of bot.music.queue) queueWithName.push(song.name)
        Embed = new EmbedBuilder()
          .setColor(config.discord.embedsColors.normal)
          .setTitle('Queue')
          .setDescription(queueWithName.join(', '))
        channeldc.send({ embeds: [Embed] })
        break
      default:
        throw new SyntaxError('Invalid argument')
    }
  }
}
