const CommandError = require('../CommandModules/command_error')


module.exports = {
 
  name: 'cai',
   description:['a broken asf command thats supposed to connect to beta.character.ai'],
   execute (context) {
    throw new CommandError('locked cuz of Error: Failed to fetch a lazy token')
     const bot = context.bot
  const source = context.source
    const args = context.arguments;
     const CharacterAI = require("node_characterai_edited");
     const characterAI = new CharacterAI();

     (async () => {
      // Authenticating as a guest (use `.authenticateWithToken()` to use an account)
      await characterAI.authenticateAsGuest();

      // Place your character's id here
      const characterId = "-LojS2FMmI6dLLG4cPzCm1xIIpgwVktHwjHRIImfXSE";

      const chat = await characterAI.createOrContinueChat(characterId);
      const response = await chat.sendAndAwaitResponse(message, true);
      try {
      source.sendFeedback(response)

      } catch (e) {
       source.sendFeedback({ text: e.stack, color: 'red' })
      }
      
      })();
  }
}

/* try {
      const page = await wiki.page(args.join(' '))
      const summary = await page.summary()
      //const definitions = await urban.define(args.join(' '))
    
    
   source.sendFeedback({ text: summary.extract, color: 'green' })
    
    } catch (e) {
     source.sendFeedback({ text: e.stack, color: 'red' })
     */
//https://beta.character.ai/chat?char=-LojS2FMmI6dLLG4cPzCm1xIIpgwVktHwjHRIImfXSE

/*const CharacterAI = require("node_characterai");
const characterAI = new CharacterAI();

(async () => {
  // Authenticating as a guest (use `.authenticateWithToken()` to use an account)
  await characterAI.authenticateAsGuest();

  // Place your character's id here
  const characterId = "8_1NyR8w1dOXmI1uWaieQcd147hecbdIK7CeEAIrdJw";

  const chat = await characterAI.createOrContinueChat(characterId);

  // Send a message
  const response = await chat.sendAndAwaitResponse("Hello discord mod!", true);

  console.log(response);
  // Use `response.text` to use it as a string
})();
*/