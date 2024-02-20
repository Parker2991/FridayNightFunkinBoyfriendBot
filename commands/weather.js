module.exports = {
  name: 'weather',
  description:['test'],

  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
const source = context.source

    const weather = require('weather-js');

    // Options:
    // search:     location name or zipcode
    // degreeType: F or C

    weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
      if(err) console.log(err);

      source.sendFeedback(JSON.stringify(result, null, 2));
    });
    [
      ]
      }
  
}
