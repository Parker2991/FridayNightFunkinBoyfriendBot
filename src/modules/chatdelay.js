function chatDelay (bot,options, ms){
bot.chatDelay = function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

}
module.exports = chatDelay;
