const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'calculator',
   description:['calculate maths'],
  execute (context) { // also theres a bomb under my house rn and i can hear it beepingidfk
    const bot = context.bot
    const args = context.arguments
    const cmd = {//test.js
 translate: '[%s] ',
      bold: false,
      color: 'white',
      with: [
        { color: 'blue', text: 'Calculator Cmd'},
              ]
    }
const operation = args[0]
    const operator1 = parseFloat(args[1])
    const operator2 = parseFloat(args[2])

    //
    switch (operation) {
      case 'add':
        context.source.sendFeedback({
          translate: '[%s] %s is %s',
          with: [
            {color: 'blue', text:'Calculator Cmd'},
            `${operator1} + ${operator2}`,
            operator1 + operator2
          ]
        });
        
        break
      case 'subtract':
        context.source.sendFeedback({
          translate: `[%s] %s is %s`,
          with: [
            { color: 'blue', text: 'Calculator Cmd'},
            `${operator1} - ${operator2}`,
            operator1 - operator2
          ]
        });
        
        break
      case 'multiply':
        context.source.sendFeedback({
          translate: '[%s] %s is %s',
          with: [
             { color: 'blue', text: 'Calculator Cmd'},
            `${operator1} x ${operator2}`,
            operator1 * operator2
          ]
        });

        break
      case 'divide':
        context.source.sendFeedback({
          translate: '[%s] %s is %s',
          with: [
             { color: 'blue', text: 'Calculator Cmd'},
            `${operator1} / ${operator2}`,
            operator1 / operator2
          ]
        
        });

        break
      default:
        context.source.sendError([cmd, { text: 'Invalid action', color: 'dark_red' }])
    }
  }
}

