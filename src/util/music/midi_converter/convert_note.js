const instrumentMap = require('./instrument_map.js')
const percussionMap = require('./percussion_map.js')

function convertNote (track, note) {
  let instrument = null

  const instrumentList = instrumentMap[track.instrument.number]
  if (instrumentList != null) {
    for (const candidateInstrument of instrumentList) {
      if (note.midi >= candidateInstrument.offset && note.midi <= candidateInstrument.offset + 24) {
        instrument = candidateInstrument
        break
      }
    }
  }

  if (instrument == null) return null

  const pitch = note.midi - instrument.offset
  const time = Math.floor(note.time * 1000)

  return { time, instrument: instrument.name, pitch, volume: note.velocity }
}

function convertPercussionNote (track, note) {
  if (note.midi < percussionMap.length) {
    const mapEntry = percussionMap[note.midi]
    if (mapEntry == null) return

    const { pitch, instrument } = mapEntry
    const time = Math.floor(note.time * 1000)

    return { time, instrument: instrument.name, pitch, volume: note.velocity }
  }

  return null
}

module.exports = { convertNote, convertPercussionNote }
