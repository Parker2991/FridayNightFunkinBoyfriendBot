const CommandError = require('../util/command_error');
const filterJSON = require('../../filter.json');
module.exports = {
  name: 'filter', // command name here
  description: ['filter players (work in progress)'], // command desc here
  aliases: ['blacklist'], // command aliases here if there is any
  trustLevel: 1, // 0 = public, 1 = trusted, 2 = owner, 3 = console
  usages: [], // command usage here
  execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    const source = context.source;
    const config = context.config;
     switch (args[1]) {
       case 'list':
         bot.sendFeedback(
                          [
                           {
                             text: 'Players ',
                             color: 'gray'
                           },
                           {
                             text: '(',
                             color: 'gray'
                           },
                           {
                             text: JSON.stringify(Object.keys(filterJSON.players).length),
                             color: 'gold'
                           },
                           {
                             text: ')',
                             color: 'gray'
                           }
                          ]
                         )
         bot.sendFeedback(Object.values(filterJSON)[0].map((player) => player.username + '\n'))
       break
    }
  }
}
