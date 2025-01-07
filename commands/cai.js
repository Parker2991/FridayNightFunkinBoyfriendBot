const CommandError = require('../CommandModules/command_error')
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI(); 
// won't work on server nodejs. only works on windows I guess :|

async function start() {
    await characterAI.authenticateAsGuest();
}

async function ask(key, message) {
        const characterId = key;

        const chat = await characterAI.createOrContinueChat(characterId);
        const response = await chat.sendAndAwaitResponse(message, true);

        return response.text
}

module.exports = {
    start,
    ask,
  name: 'cai',

  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')


   }
};
/*
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

async function start() {
    await characterAI.authenticateAsGuest();
}

async function ask(key, message) {
        const characterId = key;

        const chat = await characterAI.createOrContinueChat(characterId);
        const response = await chat.sendAndAwaitResponse(message, true);

        return response.text
}

module.exports = {
    start,
    ask
};
```*/