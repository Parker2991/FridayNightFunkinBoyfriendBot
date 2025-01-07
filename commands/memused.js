module.exports = {
  name: 'memused',

  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
const os = require('os')
 var os2 = require('os-utils');

os2.cpuUsage(function(w){
     context.source.sendFeedback('CPU Usage (%): ' + w + ' /100%');
});
  
  }
}
/*
var os = require('os');

console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem())
*/