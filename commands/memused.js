module.exports = {
  name: 'memused',
   description:['check mem used'],
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
const os = require('os')
context.source.sendFeedback(`§aMem §aused §a${Math.floor(os.freemem() / 1048576)} §aMiB §a/ §a${Math.floor(os.totalmem() / 1048576)} MiB`, false)
 
}
}
/*
var os = require('os');

console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem())
*/