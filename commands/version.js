const CommandError = require('../CommandModules/command_error')
const buildstring = process.env['buildstring']
const foundationbuildstring = process.env['FoundationBuildString']
const packageJSON = require("../package.json")
module.exports = {
  name: 'version',
  description:['check the bot version'],

  execute (context) {    
    const discordJSVersion = packageJSON.dependencies["discord.js"];
      const MinecraftProtocolVersion = packageJSON.dependencies["minecraft-protocol"];
   
    context.source.sendFeedback(`${buildstring}`, false)
    context.source.sendFeedback(`${foundationbuildstring}`)
      context.source.sendFeedback('BotEngine:Node-Minecraft-Protocol', false)
       
  }
}//idfk
//i cant get it to show the npm version
// where the fard are you gonna get that info from the process or whatever