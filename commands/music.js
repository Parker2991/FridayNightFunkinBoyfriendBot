const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'music',
//<< this one line of code broke it lmao
   description:[''],
        aliases:[],
       trustLevel: 0,
  execute (context) {

    const message = context.arguments.join(' ')
const bot = context.bot

    throw new CommandError('working on it some other time')


  }
}
//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 

// Parker, why is hashing just random characters???
//wdym