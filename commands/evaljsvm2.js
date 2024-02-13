const { VM } = require('vm2')
const util = require('util')
const { stylize } = require('../util/eval_colors')

const options = {
  timeout: 1000
}
let vm = new VM(options)

module.exports = {
  name: 'evaljsvm2',
hashOnly:true,
        consoleOnly:false,
        description:['old evaljs code'],
  execute (context) {
    const source = context.source
    const args = context.arguments
     const cmd = {
 translate: '[%s] ',
      bold: false,
      color: 'white',
      with: [
        { color: 'dark_green', text: 'EvalJS Cmd'},
              ]
    }
     if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
    switch (args[1]) {
      case 'run':
        try {
          const output = vm.run(args.slice(2).join(' '))

          source.sendFeedback([cmd, { text: util.inspect(output, { stylize }) }])
        } catch (e) {
          source.sendFeedback([cmd, { text: e.stack, color: 'black' }])
        }

        break
      case 'reset':
        vm = new VM(options)

       source.sendFeedback([cmd, { text: 'Successfully reset the eval context', color: 'green' }])

        break
        default:
        source.sendFeedback([cmd, { text: 'Invalid option!', color: 'dark_red' }])
        
    }
  }
}