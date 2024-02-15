/* eslint-disable no-case-declarations */
const CommandError = require('../CommandModules/command_error')
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

    
      bot.tellraw([{ text: 'Added ', color: 'white' }, { text: song.name, color: 'gold' }, { text: ' to the song queue', color: 'white' }])
   

    bot.music.queue.push(song)
    bot.music.play(song)
  } catch (e) {
    bot.console.error(e.stack)
    
      bot.tellraw({ text: 'SyntaxError: Invalid file', color: 'red' })
    }
  }


async function playUrl (bot, values, discord, channeldc, selector, config) {
  let response
  try {
    const url = values.join(' ')
    response = await axios.get('https://localhost:8080', {
      params: {
        uri: url
      },
      responseType: 'arraybuffer'
    })

    song = await bot.music.load(response.data, getFilenameFromUrl(url))
      bot.tellraw([{ text: 'Added ', color: 'white' }, { text: song.name, color: 'gold' }, { text: ' to the song queue', color: 'white' }])
    

    bot.music.queue.push(song)
    bot.music.play(song)
  } catch (_err) {
    const e = _err.toString().includes('Bad MIDI file.  Expected \'MHdr\', got: ') ? response.data.toString() : _err
    
      bot.tellraw({ text: e, color: 'red' })
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

    bot.tellraw(message)
  } catch (e) {
    
      bot.tellraw({ text: e.toString(), color: 'red' })
    }
  
};

module.exports = {
  name: 'music',
  description: 'Plays music usages:play <song|url>, stop, loop <all|current|off> list [directory], skip nowplaying queue',
  aliases: [],
  trustLevel: 0,
/*  usage: [
    'play <song|url>',
    'stop',
    'loop <all|current|off>',
    'list [directory]',
    'skip',
    'nowplaying',
    'queue'
  ],*/
  execute (context, selector, config) {
const args = context.arguments
const bot = context.bot
const prefix = bot.options.commands.prefixes[0]
if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
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
        bot.tellraw({ text: 'Cleared the song queue' })
        bot.music.stop()
        break
      case 'skip':
        try {
          bot.tellraw([{ text: 'Skipping ' }, { text: bot.music.song.name, color: 'gold' }])
          bot.music.skip()
        } catch (e) {
          throw new CommandError('No music is currently playing!')
        }
        break
      case 'loop':
        switch (args[1]) {
          case 'off':
            bot.music.loop = 0
            bot.tellraw([
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
            bot.tellraw([
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
            bot.tellraw({
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
        bot.tellraw([
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
        bot.tellraw([
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
        throw new CommandError('Invalid argument')
    }
  }
}  
