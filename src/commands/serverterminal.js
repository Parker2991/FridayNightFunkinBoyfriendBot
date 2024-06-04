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
    const command = spawn('sh' , ['-c', `${args.slice(1).join(' ')}`]);
    try {
    command.stdout.on('data', (data, err) => {
      bot.tellraw(`${bot.getMessageAsPrismarine(`${data}`)?.toMotd().replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')}`);
      console.log(err)
    });

    command.on('close', (data) => {
      console.log(`child process close all stdio with code ${data}`);
    });
    command.stderr.on('data', (data) => {
     bot.tellraw(data.toString());
    });
    command.on('exit', (code) => {
      console.log(`child process exited with code ${code}`);
    }); 
    } catch (e) {
      bot.sendError(e.toString())
    }
  }
}