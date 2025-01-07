const { VM } = require('vm2-fixed')
const util = require('util')
const { stylize } = require('../util/eval_colors')

const options = {
  timeout: 1000
}
let vm = new VM(options)

module.exports = {
  name: 'evaljs',
hashOnly:true, // null
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
    switch (args[0]) {
      case 'run':
        try {
          const output = vm.run(args.slice(1).join(' '))
        
          source.sendFeedback([cmd, { text: util.inspect(output, { stylize }) }])
        } catch (e) {
          source.sendFeedback([cmd, { text: String(e), color: 'white' }]) 
        }
        
        break
      case 'reset':
        vm = new VM(options)

       source.sendFeedback([cmd, { text: 'Successfully reset the eval context', color: 'green' }])
        
        break
    }
  }
}
