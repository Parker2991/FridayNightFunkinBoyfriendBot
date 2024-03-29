const nbs = require('./nbs-file.js')
const instrumentNames = [
  'harp',
  'bass',
  'basedrum',
  'snare',
  'hat',
  'guitar',
  'flute',
  'bell',
  'chime',
  'xylophone',
  'iron_xylophone',
  'cow_bell',
  'didgeridoo',
  'bit',
  'banjo',
  'pling'
]

function convertNBS (buf) {
  const parsed = nbs.parse(buf)
  const song = {
    name: parsed.songName,
    notes: [],
    loop: false,
    loopPosition: 0,
    length: 0
  }
  if (parsed.loop > 0) {
    song.loop = true
    song.loopPosition = parsed.loopStartTick
  }
  for (const note of parsed.nbsNotes) {
    let instrument = note.instrument
    if (note.instrument < instrumentNames.length) {
      instrument = instrumentNames[note.instrument]
    } else continue

    if (note.key < 33 || note.key > 55) continue

    const layerVolume = 100
    // will add layer volume later

    const time = tickToMs(note.tick, parsed.tempo)
    song.length = Math.max(song.length, time)

    song.notes.push({
      instrument,
      pitch: note.key - 33,
      volume: note.velocity * layerVolume / 10000,
      time
    })
  }
  return song
}

function tickToMs (tick = 1, tempo) {
  return Math.floor(1000 * tick * 100 / tempo)
}

module.exports = convertNBS
