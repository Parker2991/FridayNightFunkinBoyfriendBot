const wiki = require('wikipedia') // 
const CommandError = require('../CommandModules/command_error')
module.exports = {
  name: 'wiki',
  description:['wikipedia'],
  trustLevel: 0,
  aliases:['wikipedia'],
  usage:["<definition>"],
  async execute (context) {
    const source = context.source
    const args = context.arguments
    const bot = context.bot
      try {
	const page = await wiki.page(args.join(' '))
//		source.sendFeedback({text:`${page.html()}`,color:'dark_gray'})
	const summary = await page.intro();
	bot.sendFeedback({text:`${summary}`,color:'dark_gray'});
	} catch (error) {
	  if(error.toString() === "pageError: TypeError: Cannot read properties of undefined (reading 'pages')"){
	    bot.sendFeedback({text:'Definition not found!',color:'dark_red'})
	  } else {
	    bot.sendFeedback(`${error.toString()}`)
          }
//		source.sendFeedback(error.toString());
	}

}
}
