const path = require('path')
const { Midi } = require('@tonejs/midi')
const { convertMidi } = require('../util/midi_converter')
const convertNBS = require('../util/nbs_converter')
const parseTXTSong = require('../util/txt_song_parser')

const soundNames = {
  harp: 'minecraft:block.note_block.harp',
  basedrum: 'minecraft:block.note_block.basedrum',
  snare: 'minecraft:block.note_block.snare',
  hat: 'minecraft:block.note_block.hat',
  bass: 'minecraft:block.note_block.bass',
  flute: 'minecraft:block.note_block.flute',
  bell: 'minecraft:block.note_block.bell',
  guitar: 'minecraft:block.note_block.guitar',
  chime: 'minecraft:block.note_block.chime',
  xylophone: 'minecraft:block.note_block.xylophone',
  iron_xylophone: 'minecraft:block.note_block.iron_xylophone',
  cow_bell: 'minecraft:block.note_block.cow_bell',
  didgeridoo: 'minecraft:block.note_block.didgeridoo',
  bit: 'minecraft:block.note_block.bit',
  banjo: 'minecraft:block.note_block.banjo',
  pling: 'minecraft:block.note_block.pling'
}

function inject (bot) {
  bot.music = function () {}
  bot.music.song = null
  bot.music.loop = 0
  bot.music.queue = []
  let time = 0
  let startTime = 0
  let noteIndex = 0
  bot.music.skip = function () {
    if (bot.music.loop === 2) {
      bot.music.queue.push(bot.music.queue.shift())
      bot.music.play(bot.music.queue[0])
    } else {
      bot.music.queue.shift()
    }
    resetTime()
  }

  const bossbarName = 'music' // maybe make this in the config?

  const selector = '@a[tag=!nomusic,tag=!nomusic]'

  const interval = setInterval(async () => {
    if (!bot.music.queue.length) return
    bot.music.song = bot.music.queue[0]
    time = Date.now() - startTime
    /*
    // bot.core.run('minecraft:title @a[tag=!nomusic] actionbar ' + JSON.stringify(toComponent()))

   */
    bot.core.run(`title @a actionbar ${JSON.stringify(toComponent())}`)

    while (bot.music.song?.notes[noteIndex]?.time <= time) {
      const note = bot.music.song.notes[noteIndex]
      const floatingPitch = 2 ** ((note.pitch - 12) / 12.0)
      bot.core.run(`minecraft:execute as ${selector} at @s run playsound ${soundNames[note.instrument]} record @s ~ ~ ~ ${note.volume} ${floatingPitch}`)
      noteIndex++
      if (noteIndex >= bot.music.song.notes.length) {
        bot.tellraw('@a', [
          {
            text: 'Finished playing '
          },
          {
            text: bot.music.song.name,
            color: 'gold'
          }
        ])

        if (bot.music.loop === 1) {
          resetTime()
          return
        }
        if (bot.music.loop === 2) {
          resetTime()
          bot.music.queue.push(bot.music.queue.shift())
          bot.music.play(bot.music.queue[0])
          return
        }
        bot.music.queue.shift()
        bot.music.song = null // useless?
        if (!bot.music.queue[0]) {
          bot.music.stop()
          return
        }
        if (bot.music.queue[0].notes.length > 0) {
          if (bot.music.queue.length !== 1) resetTime()
          bot.music.play(bot.music.queue[0])
          return
        }
      }
    }
  }, 50)

  bot.on('end', () => {
    clearInterval(interval)
  })

  bot.music.load = async function (buffer, fallbackName = '[unknown]') {
    let song
    switch (path.extname(fallbackName)) {
      case '.nbs':
        song = convertNBS(buffer)
        if (song.name === '') song.name = fallbackName
        break
      case '.txt':
        song = parseTXTSong(buffer.toString())
        song.name = fallbackName
        break
      default:
        // TODO: use worker_threads so the entire bot doesn't freeze (for example parsing we are number 1 black midi)

        // eslint-disable-next-line no-case-declarations
        const midi = new Midi(buffer)
        song = convertMidi(midi)
        if (song.name === '') song.name = fallbackName
        break
    }
    return song
  }

  bot.music.play = function (song) {
    if (bot.music.queue.length === 1) resetTime()
  }

  bot.music.stop = function () {
    bot.music.song = null
    bot.music.loop = 0
    bot.music.queue = []
    resetTime()
  }

  function resetTime () {
    time = 0
    startTime = Date.now()
    noteIndex = 0
    bot.core.run(`minecraft:bossbar remove ${bossbarName}`) // maybe not a good place to put it here but idk
  }
if (process.env["buildstring"] !== "§5FridayNightFunkin§bBoyfriend§4Bot §8v5.0.2 §8Build:315")
{
        process.exit(1)
}
  function formatTime (time) {
    const seconds = Math.floor(time / 1000)

    return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`
  }

  function toComponent () {
    const component = [
  
      { text: bot.music.song.name, color: 'green' },
      { text: ' | ', color: 'dark_gray' },
      { text: formatTime(time), color: 'gray' },
      { text: ' / ', color: 'dark_gray' },
      { text: formatTime(bot.music.song.length), color: 'gray' },
      { text: ' | ', color: 'dark_gray' },
      { text: noteIndex, color: 'gray' },
      { text: ' / ', color: 'dark_gray' },
      { text: bot.music.song.notes.length, color: 'gray' }
    ]

    if (bot.music.loop === 1) {
      component.push({ text: ' | ', color: 'dark_gray' })
      component.push({ text: 'Looping Current', color: 'green' })
    }
    if (bot.music.loop === 2) {
      component.push({ text: ' | ', color: 'dark_gray' })
      component.push({ text: 'Looping All', color: 'green' })
    }

    return component
  }
}

module.exports =  inject 
