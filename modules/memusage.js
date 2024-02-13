function memusage (bot, options){
const clamp = require('../util/clamp')
        const title = 'Memusage'

        const os = require('os')
       let enabled = false
        let tag = 'FNFBoyfriendBotMemusage'
        bot.memusage = {
    on () {
      enabled = true
    },
    off () {
      enabled = false
      bot.core.run(`minecraft:title @a actionbar ${title}`)
    }
  }
 const tickRates = []
  let nextIndex = 0
  let timeLastTimeUpdate = -1
  let timeGameJoined

  const interval = setInterval(() => {
    if (!enabled) return

    const component = {
      
        text: `Mem used ${Math.floor(process.memoryUsage().heapUsed / 1000 / 1000)} MiB / ${Math.floor(process.memoryUsage().heapTotal / 1000 / 1000)} MiB. CPU Usage ${JSON.stringify(process.cpuUsage())} `,
      color: 'dark_gray'
      
    }//process.cpuUsage
     bot.core.run(`minecraft:title @a[tag=${tag}] actionbar ${JSON.stringify(component)}`)    
}, 50)//process.memoryUsage().heapUsed /1024 / 1024
        
                               }
module.exports = memusage
