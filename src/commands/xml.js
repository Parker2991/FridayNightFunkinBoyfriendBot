const { parseString } = require('xml2js');
const CommandError = require('../util/command_error')
const util = require('util');
const fs = require('fs');
const path = require('path');
module.exports = {
  name: 'xml',
  trustLevel: 3,
  aliases: [
  ],
  description: 'eval xml shit',
  usages: [
    "<xml code>"
  ],
  execute (context) {
    const bot = context.bot;
    const args = context.arguments
//    fs.writeFileSync(path.join(__dirname, '../data/xmlEval.xml'), args.slice(1).join(' '))
      fs.appendFileSync(path.join(__dirname, '../data/xmlEval.xml'), args.slice(1).join(' '))
      parseString(args.slice(1).join(' '), function (err, result) {
        if (err) throw new CommandError(err.toString())
        bot.tellraw("@a", [
          {
            text: "Result \u203a \n",
            color: "gray"
          },
          {
            text: `${util.inspect(result)}`
          }
        ])
      });
  }
}
