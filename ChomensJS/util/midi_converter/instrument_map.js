const instruments = require('./instruments.json')

module.exports = [
  // Piano (harp bass bell)
  [instruments.harp, instruments.bass, instruments.bell], // Acoustic Grand Piano
  [instruments.harp, instruments.bass, instruments.bell], // Bright Acoustic Piano
  [instruments.bit, instruments.didgeridoo, instruments.bell], // Electric Grand Piano
  [instruments.harp, instruments.bass, instruments.bell], // Honky-tonk Piano
  [instruments.bit, instruments.didgeridoo, instruments.bell], // Electric Piano 1
  [instruments.bit, instruments.didgeridoo, instruments.bell], // Electric Piano 2
  [instruments.harp, instruments.bass, instruments.bell], // Harpsichord
  [instruments.harp, instruments.bass, instruments.bell], // Clavinet

  // Chromatic Percussion (iron_xylophone xylophone bass)
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone], // Celesta
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone], // Glockenspiel
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone], // Music Box
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone], // Vibraphone
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone], // Marimba
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone], // Xylophone
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone], // Tubular Bells
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone], // Dulcimer

  // Organ (bit didgeridoo bell)
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Drawbar Organ
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Percussive Organ
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Rock Organ
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Church Organ
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Reed Organ
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Accordian
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Harmonica
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Tango Accordian

  // Guitar (bit didgeridoo bell)
  [instruments.guitar, instruments.harp, instruments.bass, instruments.bell], // Acoustic Guitar (nylon)
  [instruments.guitar, instruments.harp, instruments.bass, instruments.bell], // Acoustic Guitar (steel)
  [instruments.guitar, instruments.harp, instruments.bass, instruments.bell], // Electric Guitar (jazz)
  [instruments.guitar, instruments.harp, instruments.bass, instruments.bell], // Electric Guitar (clean)
  [instruments.guitar, instruments.harp, instruments.bass, instruments.bell], // Electric Guitar (muted)
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Overdriven Guitar
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Distortion Guitar
  [instruments.guitar, instruments.harp, instruments.bass, instruments.bell], // Guitar Harmonics

  // Bass
  [instruments.bass, instruments.harp, instruments.bell], // Acoustic Bass
  [instruments.bass, instruments.harp, instruments.bell], // Electric Bass (finger)
  [instruments.bass, instruments.harp, instruments.bell], // Electric Bass (pick)
  [instruments.bass, instruments.harp, instruments.bell], // Fretless Bass
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Slap Bass 1
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Slap Bass 2
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Synth Bass 1
  [instruments.didgeridoo, instruments.bit, instruments.xylophone], // Synth Bass 2

  // Strings
  [instruments.flute, instruments.guitar, instruments.bass, instruments.bell], // Violin
  [instruments.flute, instruments.guitar, instruments.bass, instruments.bell], // Viola
  [instruments.flute, instruments.guitar, instruments.bass, instruments.bell], // Cello
  [instruments.flute, instruments.guitar, instruments.bass, instruments.bell], // Contrabass
  [instruments.bit, instruments.didgeridoo, instruments.bell], // Tremolo Strings
  [instruments.harp, instruments.bass, instruments.bell], // Pizzicato Strings
  [instruments.harp, instruments.bass, instruments.chime], // Orchestral Harp
  [instruments.harp, instruments.bass, instruments.bell], // Timpani

  // Ensenble
  [instruments.harp, instruments.bass, instruments.bell], // String Ensemble 1
  [instruments.harp, instruments.bass, instruments.bell], // String Ensemble 2
  [instruments.harp, instruments.bass, instruments.bell], // Synth Strings 1
  [instruments.harp, instruments.bass, instruments.bell], // Synth Strings 2
  [instruments.harp, instruments.bass, instruments.bell], // Choir Aahs
  [instruments.harp, instruments.bass, instruments.bell], // Voice Oohs
  [instruments.harp, instruments.bass, instruments.bell], // Synth Choir
  [instruments.harp, instruments.bass, instruments.bell], // Orchestra Hit

  // Brass
  [instruments.bit, instruments.didgeridoo, instruments.bell],
  [instruments.bit, instruments.didgeridoo, instruments.bell],
  [instruments.bit, instruments.didgeridoo, instruments.bell],
  [instruments.bit, instruments.didgeridoo, instruments.bell],
  [instruments.bit, instruments.didgeridoo, instruments.bell],
  [instruments.bit, instruments.didgeridoo, instruments.bell],
  [instruments.bit, instruments.didgeridoo, instruments.bell],
  [instruments.bit, instruments.didgeridoo, instruments.bell],

  // Reed
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],

  // Pipe
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],
  [instruments.flute, instruments.didgeridoo, instruments.iron_xylophone, instruments.bell],

  // Synth Lead
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],

  // Synth Pad
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],

  // Synth Effects
  null,
  null,
  [instruments.bit, instruments.didgeridoo, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],
  [instruments.harp, instruments.bass, instruments.bell],

  // Ethnic
  [instruments.banjo, instruments.bass, instruments.bell],
  [instruments.banjo, instruments.bass, instruments.bell],
  [instruments.banjo, instruments.bass, instruments.bell],
  [instruments.banjo, instruments.bass, instruments.bell],
  [instruments.banjo, instruments.bass, instruments.bell],
  [instruments.harp, instruments.didgeridoo, instruments.bell],
  [instruments.harp, instruments.didgeridoo, instruments.bell],
  [instruments.harp, instruments.didgeridoo, instruments.bell],

  // Percussive
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone],
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone],
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone],
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone],
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone],
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone],
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone],
  [instruments.iron_xylophone, instruments.bass, instruments.xylophone]
]
