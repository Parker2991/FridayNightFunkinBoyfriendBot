exploits module was gitignored to prevent exploit leaks so the bot will not being able to run some commands without it
please make a file called exploits.js in modules and add this
```js 
function exploits (bot, options, context) {
  bot.exploits = {
    hoe: ''
  }
}
module.exports = exploits;
```
also src/commands/kick.js was gitignored so exploits wont be leaked
