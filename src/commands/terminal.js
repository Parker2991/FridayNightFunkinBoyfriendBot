const CommandError = require('../CommandModules/command_error')
const Docker = require('dockerode')
const stream = require('stream')
const { exec } = require('child_process')
const finalStream = require('final-stream')
module.exports = {
  name: 'terminal', // command name here
  description: ['run terminal commands in a docker image'], // command desc here
  aliases: [], // command aliases here if there is any
  trustLevel: 0, // 0 = public, 1 = trusted, 2 = owner, 3 = console
  usage: [], // command usage here
async execute (context) {
    const bot = context.bot
    const args = context.arguments
    const source = context.source
    var id = null
    const docker = new Docker()
if(!args && !args[0] && !args[1] && !args[2] && !args[3]) return

switch(args[0].toLowerCase()){
 case 'run': 
try {
const finalStream = require('final-stream');

const stdout = new stream.PassThrough();
  const docker = new Docker({ socketPath: '/var/run/docker.sock' });

  const container = await docker.run('alpine', ['sh', '-c', `${args.slice(1).join(' ')}`], stdout);
  const data = await finalStream(stdout).then(buffer => buffer.toString());

  bot.tellraw(data);


}catch(e) {
bot.sendFeedback({text:`${e.stack}`})
}
 break
 case "rebuild":

 break
}
 }
}
