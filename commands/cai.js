const CommandError = require('../CommandModules/command_error')
const CharacterAI = require('node_characterai'); // im gonna push it to the main bot afterwards
const characterAI = new CharacterAI(); 
// ???
async function start() {
    await characterAI.authenticateAsGuest(); //well idk how to get the bot to sign into a account
}

async function ask(key, message) {
    const characterId = key;

    const chat = await characterAI.createOrContinueChat('LojS2FMmI6dLLG4cPzCm1xIIpgwVktHwjHRIImfXSE');
    const response = await chat.sendAndAwaitResponse(message, true);

    return response.text//lag real
console.debug(message)
  }

module.exports = {
    start,
    ask,
  name: 'cai',

  async execute (context) {
    const bot = context.bot
  const source = context.source
    const args = context.arguments
    
  //yfd idk what im doing 
context.source.sendFeedback(start, false)
context.source.sendFeedback(ask, false)
}
}