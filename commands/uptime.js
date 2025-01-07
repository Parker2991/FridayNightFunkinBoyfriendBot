module.exports = {
    name: 'uptime',
  
    execute (context) {
      const bot = context.bot
      const message = context.arguments.join(' ')
      function format(seconds){
        function pad(s){
          return (s < 10 ? '0' : '') + s;
        }
        var hours = Math.floor(seconds / (60*60));
        var minutes = Math.floor(seconds % (60*60) / 60);
        var seconds = Math.floor(seconds % 60);
      
        return pad(`hours: ${hours}`) + ' ' + pad(`Mins: ${minutes}`) + ' ' + pad(`Seconds: ${seconds}`);
      }
      
      var uptime = process.uptime();
      
      context.source.sendFeedback(format(uptime))
         }
  }
  