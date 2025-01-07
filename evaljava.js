const { VM }  = require('jvm')
const util = require('util')
const { stylize } = require('../util/eval_colors')

const options = {
  timeout: 1000
}
let vm = new VM(options)

module.exports = {
  name: 'evaljava',

  execute (context) {
    const source = context.source
    const args = context.arguments
    
    switch (args[0]) {
      case 'run':
        try {
          const output = vm.run(args.slice(1).join(' '))
        
          source.sendFeedback({ text: util.inspect(output, { stylize }) })
        } catch (e) {
          source.sendFeedback({ text: String(e), color: 'black' })
        }
        
        break
      case 'reset':
        vm = new VM(options)

        source.sendFeedback('Successfully reset the eval context')
        
        break
    }
  }
}
