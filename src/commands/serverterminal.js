const CommandError = require('../CommandModules/command_error')
const { spawn } = require('node:child_process');
module.exports = {
  name: 'serverterminal', // command name here
  description: ['run commands unisolated'], // command desc here
  aliases: [], // command aliases here if there is any
  trustLevel: 2, // 0 = public, 1 = trusted, 2 = owner, 3 = console
  usage: [], // command usage here
  execute (context) {
    const bot = context.bot
    const args = context.arguments
    const source = context.source
    const ls = spawn('sh' , ['-c', `${args.slice(1).join(' ')}`]);
    try {
    ls.stdout.on('data', (data, err) => {
      bot.tellraw(`${bot.getMessageAsPrismarine(`${data}`)?.toMotd().replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')}`);
      console.log(err)
    });

    ls.on('close', (data) => {
      console.log(`child process close all stdio with code ${data}`);
    });

    ls.on('err', (err) => {
       console.log(err);
    })

    ls.on('exit', (code) => {
      console.log(`child process exited with code ${code}`);
    }); 
    } catch (e) {
      bot.tellraw(e.toString())
    }
  }
}
