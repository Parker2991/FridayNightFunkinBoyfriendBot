function parse (buffer) {
  let i = 0

  let songLength = 0
  let format = 0
  let vanillaInstrumentCount = 0
  songLength = readShort()
  if (songLength === 0) {
    format = readByte()
  }

  if (format >= 1) {
    vanillaInstrumentCount = readByte()
  }
  if (format >= 3) {
    songLength = readShort()
  }

  const layerCount = readShort()
  const songName = readString()
  const songAuthor = readString()
  const songOriginalAuthor = readString()
  const songDescription = readString()
  const tempo = readShort()
  const autoSaving = readByte()
  const autoSavingDuration = readByte()
  const timeSignature = readByte()
  const minutesSpent = readInt()
  const leftClicks = readInt()
  const rightClicks = readInt()
  const blocksAdded = readInt()
  const blocksRemoved = readInt()
  const origFileName = readString()

  let loop = 0
  let maxLoopCount = 0
  let loopStartTick = 0
  if (format >= 4) {
    loop = readByte()
    maxLoopCount = readByte()
    loopStartTick = readShort()
  }

  const nbsNotes = []
  let tick = -1
  while (true) {
    const tickJumps = readShort()
    if (tickJumps === 0) break
    tick += tickJumps

    let layer = -1
    while (true) {
      const layerJumps = readShort()
      if (layerJumps === 0) break
      layer += layerJumps
      const note = nbsNote()
      note.tick = tick
      note.layer = layer
      note.instrument = readByte()
      note.key = readByte()
      if (format >= 4) {
        note.velocity = readByte()
        note.panning = readByte()
        note.pitch = readShort()
      }
      nbsNotes.push(note)
    }
  }

  const nbsLayers = []
  if (i <= buffer.length) {
    for (let j = 0; j < layerCount; j++) {
      const layer = nbsLayer()
      layer.name = readString()
      if (format >= 4) {
        layer.lock = readByte()
      }
      layer.volume = readByte()
      if (format >= 2) {
        layer.stereo = readByte()
      }
      nbsLayers.push(layer)
    }
  }

  return {
    songLength,
    format,
    vanillaInstrumentCount,
    layerCount,
    songName,
    songAuthor,
    songOriginalAuthor,
    songDescription,
    tempo,
    autoSaving,
    autoSavingDuration,
    timeSignature,
    minutesSpent,
    leftClicks,
    rightClicks,
    blocksAdded,
    blocksRemoved,
    origFileName,
    loop,
    maxLoopCount,
    loopStartTick,
    nbsNotes,
    nbsLayers
  }

  function readByte () {
    return buffer.readInt8(i++)
  }

  function readShort () {
    const short = buffer.readInt16LE(i)
    i += 2
    return short
  }

  function readInt () {
    const int = buffer.readInt32LE(i)
    i += 4
    return int
  }

  function readString () {
    let length = readInt()
    let string = ''
    for (; length > 0; length--) string += String.fromCharCode(readByte())
    return string
  }
}

function nbsNote () {
  return {
    tick: null,
    layer: null,
    instrument: null,
    key: null,
    velocity: 100,
    panning: 100,
    pitch: 0
  }
}

function nbsLayer () {
  return {
    name: null,
    lock: 0,
    volume: null,
    stereo: 100
  }
}

module.exports = { parse, nbsNote, nbsLayer }
