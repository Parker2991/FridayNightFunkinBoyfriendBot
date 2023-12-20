const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'servereval',
   description:['no'],
  trustLevel: 2,
        aliases:['svreval'],
  execute (context, arguments, selector) {
    const bot = context.bot
   // const args = context.arguments.join(' ')
const source = context.source 
   // throw new CommandError('temp disabled')
    const { stylize } = require('../util/eval_colors')
    const util = require('util')
    const args = context.arguments
    const script = args.slice(1).join(' ');
    if (!args && !args[0] && !args[1] && !args[2] && !args[3] && !args[4] ) return 
try {
  context.source.sendFeedback({ text: util.inspect(eval(script), { stylize }).substring(0, 32700) })
} catch (err) {
     context.source.sendFeedback({ text: err.message, color: 'red' })
}
}
  }



/*  try {
        bot.tellraw({ text: util.inspect(eval(context.arguments.slice().join(' ')), { stylize }).substring(0, 32700) })
      } catch (err) {
        bot.tellraw({ text: util.inspect(err).replaceAll('runner', 'runner'), color: 'red' })
      }
      */