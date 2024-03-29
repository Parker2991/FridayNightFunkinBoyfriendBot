module.exports = {
  name: 'weather',
   description:['check the weather in a location via zip code or city name'],
        aliases:[],
       trustLevel: 0,
usage:["redoing mabe"],
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
const args = context.arguments
const source = context.source
//  const script = args.slice(1).join(' ');
    const weather = require('weather-js')
 if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
weather.find({degreeType:args[0], search:args.slice(1).join(' ')}, function(err, result){
//"skytext" "feelslike"  "humidity" "winddisplay"  
//{search: args.join(' '), degreeType: 'F'}
  source.sendFeedback([{text:`Location: `,color:'gray'},{text:`${result[0].location.name}`,color:'dark_green'}])

source.sendFeedback([{text:`Temperature: `,color:'gray'},{text:`${result[0].current.temperature}${result[0].location.degreetype}`,color:'dark_green'}])
source.sendFeedback([{text:'Date: ',color:'gray'},{text:result[0].current.date,color:'dark_green'}])
// console.log(JSON.stringify(result, null, 2));
source.sendFeedback([{text:`${result[0].current.skytext}`,color:'dark_green'}])
source.sendFeedback([{text:`Feels like `,color:'gray'},{text:`${result[0].current.feelslike}${result[0].location.degreetype}`,color:'dark_green'}])
source.sendFeedback([{text:'Humidity ',color:'gray'},{text:`${result[0].current.humidity}`,color:'dark_green'}])
source.sendFeedback([{text:'Wind Speed ',color:'gray'},{text:`${result[0].current.winddisplay}`,color:'dark_green'}])
//if(result[0].location.alert === ''){
//source.sendFeedback('There is no alerts!')
//}else{
source.sendFeedback(result[0].location.alert)
//}
})

  }
}
