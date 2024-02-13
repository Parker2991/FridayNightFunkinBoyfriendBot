
const { Midi } = require('@tonejs/midi')
const { convertNote, convertPercussionNote } = require('./convert_note.js')

function convertMidi (midi) {
  if (!(midi instanceof Midi)) throw new TypeError('midi must be an instance of require(\'@tonejs/midi\').Midi')

  let noteList = []
  for (const track of midi.tracks) {
    for (const note of track.notes) {
      const mcNote = (track.instrument.percussion ? convertPercussionNote : convertNote)(track, note)
      if (mcNote != null) {
        noteList.push(mcNote)
      }
    }
  }

  noteList = noteList.sort((a, b) => a.time - b.time)

  // It might be better to move some of this code to the converting loop (for performance reasons)
  let maxVolume = 0.001
  for (const note of noteList) {
    if (note.volume > maxVolume) maxVolume = note.volume
  }
  for (const note of noteList) {
    note.volume /= maxVolume
  }

  let songLength = 0
  for (const note of noteList) {
    if (note.time > songLength) songLength = note.time
  }

  return { name: midi.header.name, notes: noteList, loop: false, loopPosition: 0, length: songLength }
}

module.exports = { convertMidi, convertNote, convertPercussionNote }
