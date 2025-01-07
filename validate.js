mconst CommandError = require('../CommandModules/command_error')
function hash() {
  const crypto = require("crypto");
  var hash = crypto.createHash("md5");
  var randomBytes = crypto.randomBytes(6);
  hash.update(randomBytes);
  var hashi = hash.digest(Math.round(Math.random()) ? "hex" : "Base64");

  return hashi.substring(0, 6);
}
module.exports = {
  name: 'validate',
execute (context) {
    const hashList = []
  for (const hash of context.bothash.hash()) {
      if (commandList.length !== 0) hash.push(' ')
  
    }

    const length = context.bot.botha.gethash().length


   context.source.sendFeedback(['hash (', length, ') '], false)
  }
}
//channel id 1120122720001208390