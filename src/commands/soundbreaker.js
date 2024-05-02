const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'soundbreaker',
description:["make peoples ears bleed"],
 aliases:["earpierce","earhell"],
usage:[""],
trustLevel:1,
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
    if (bot.options.isCreayun || bot.options.useChat) {
      throw new CommandError('Cannot execute command because isCreayun or useChat is enabled!')
    } else {
    bot.core.run('sudo * execute at @a run playsound entity.ender_dragon.death master @a ~ ~ ~ 10000 0.1 1')
    bot.core.run('sudo * execute at @a run playsound entity.wither.death master @a ~ ~ ~ 10000 0.1 1')
    bot.core.run('sudo * execute at @a run playsound entity.ender_dragon.death master @a ~ ~ ~ 10000 0.1 1')
    bot.core.run('sudo * execute at @a run playsound entity.wither.death master @a ~ ~ ~ 10000 0.1 1')
    bot.core.run('sudo * execute at @a run playsound entity.ender_dragon.death master @a ~ ~ ~ 10000 0.1 1')
    bot.core.run('sudo * execute at @a run playsound entity.wither.death master @a ~ ~ ~ 10000 0.1 1')
    bot.core.run('sudo * execute at @a run playsound entity.ender_dragon.death master @a ~ ~ ~ 10000 0.1 1')
    bot.core.run('sudo * execute at @a run playsound entity.wither.death master @a ~ ~ ~ 10000 0.1 1')
    }
  }
}
