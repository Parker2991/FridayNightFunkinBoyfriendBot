const { instrumentsArray } = require('minecraft-data') // chip hardcoding moment

function parseTXTSong (data) {
  let length = 0
  const notes = String(data).split(/\r\n|\r|\n/).map(line => {
    const [tick, pitch, instrument] = line.split(':').map(Number)
    if (tick === undefined || pitch === undefined || instrument === undefined) return undefined
    const time = tick * 50
    length = Math.max(length, time)
    return { time, pitch, instrument: instrumentsArray[instrument].name, volume: 1 }
  }).filter(note => note !== undefined)
  return { name: '', notes, loop: false, loopPosition: 0, length }
}

module.exports = parseTXTSong
