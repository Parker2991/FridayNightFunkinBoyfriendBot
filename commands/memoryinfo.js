const CommandError = require('../CommandModules/command_error')
const os = require('os')

module.exports = {
  name: 'meminfo',

  execute (context) {    
    context.source.sendFeedback(`${os.cpus().length} cores cpu`, false)
    context.source.sendFeedback(`${Math.floor(os.totalmem() / 1024 / 1024)} MB of ram`, false)
    context.source.sendFeedback('32 GB of storage', false)
    context.source.sendFeedback('Running on Github Codespaces', false)
    context.source.sendFeedback('Device: Dell Chromebook 3100 with 2 GB of ram and 15 GB of storage and intel r celeron r dual core cpu :skull:', false)

}
}

// Math.floor(process.memoryUsage.heapUsed / 1024 / 1024)} / ${Math.floor(process.memoryUsage.heapTotal / 1024 / 1024)}