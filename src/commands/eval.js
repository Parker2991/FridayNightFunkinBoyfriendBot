const CommandError = require('../CommandModules/command_error')
const ivm = require('isolated-vm');
const { stylize } = require('../util/eval_colors');
const options = {
  timeout: 1000,
}
const util = require('util');
module.exports = {
  name: 'eval',
  description:['run code via isolated vm, exclaimer: amcforum members had a shitfit over this command'],
  aliases:['ivm'],
  trustLevel: 0,
  usage:[
    "<code>",
  ],
async execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const script = await args.join(' '); // Ensure script is a string
    //let isolate = new ivm.Isolate({ memoryLimit: 50, options, global, cachedData: true })
    //const evalcontext = await isolate.createContextSync({options});
    let isolate = new ivm.Isolate({ memoryLimit: 50, options, global, cachedData: true })
    const evalcontext = await isolate.createContextSync({options});
    (async () => {
      try {
        let result = await (await evalcontext).evalSync(script, options, {
          timeout: 1000
         })
	if (bot.options.useChat) {
          bot.chat(bot.getMessageAsPrismarine([{ text: util.inspect(result, { stylize }).substring(0, 256) }])?.toMotd().replaceAll('§','&'))
        } else {
          bot.sendFeedback([{ text: util.inspect(result, { stylize }) }]);
        }
        } catch (reason) {
         bot.sendError(`${reason.toString()}`)
       }   
    })()

},
  discordExecute(context) {
    const bot = context.bot;
   const args = context.arguments;
  }
}
