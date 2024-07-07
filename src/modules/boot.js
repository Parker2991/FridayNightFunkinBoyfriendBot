async function boot (bot, options, config) {
  bot.on('packet.login', async function (data) {
    if (bot.options.isSavage) {
      bot.console.warn(`isSavage is enabled for ${bot.options.host}:${bot.options.port} the bot will not be able to run with core`);
      await bot.chatDelay(5000);
      bot.chat('&5FNF&bBoyfriend&4Bot &f- &4Parker&02991'); 
    } else if (bot.options.isCreayun) {
      bot.console.warn(`isCreayun is enabled for ${bot.options.host}:${bot.options.port} the bot will not be able to run with core`);
    } else if (bot.options.isKaboom) {
      bot.chat('&5FNF&bBoyfriend&4Bot &f- &4Parker&02991');
    }
    if (bot.options.useChat) {
      bot.console.warn(`useChat is enabled for ${bot.options.host}:${bot.options.port} the bot will run commands in chat and not core`);
    }
  })
}
module.exports = boot;
/*
const timer = setInterval(() => {
    if (!config.bots.endcredits) {
    return
    } else {             
     bot.chat(`Join the FNFBoyfriendBot discord ${bot.discord.invite}`)
    }
  }, 280000)
        if (bot.options.isCreayun) {
        }
        var day = new Date().getDay()
        if (day === 5) {
          bot.chat("Gettin' freaky on a Friday Night!")
        } else { 
          bot.chat(`&5FNF&bBoyfriend&4Bot &f- &4Parker&02991`)
        }
        timer;
       if (bot.options.useChat) {
         bot?.console?.warn(`useChat is active for ${bot.options.host} the bot will not be able to run commands in core`)
       } else if (bot.options.isCreayun) {
bot?.console?.info(`Creayun mode is active for ${bot.options.host} please not that the bot will not read kaboom commands and messages when Creayun mode is active`)
       }
       if (bot.options.debug.enabled) {
bot.console.warn(`Debug mode is enabled for ${bot.options.host}:${bot.options.port} please note this WILL spam console is all options are enabled`)
       }
clearInterval(timer) 
*/
