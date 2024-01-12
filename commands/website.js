const CommandError = require('../CommandModules/command_error')

//const fetch = import("node-fetch");
module.exports = {
  name: 'website',
trustLevel:1,
        aliases:['web','websitedata','webdata'],
        description:['check website data'],
async execute (context) {
 try{
const fetch = require("node-fetch");
const source = context.source
         const bot = context.bot
    const message = context.arguments.join(' ')
const args = context.arguments
         if (!args && !args[0] && !args[1] && !args[2]) return
const response = await fetch(args[1]);
const body = await response.text();
 
bot.tellraw({text:body,color:'green'})
        
 } catch(e) {
           const bot = context.bot
         const source = context.source
        // source.sendFeedback({text:e.stack, color:'dark_red'})
          source.sendFeedback({text:e.toString(), color:'dark_red'})
 }  
 }
}