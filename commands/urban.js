const urban = require('urban-dictionary')

module.exports = {
  name: 'urban',
  description:['urban dictionary'],
        aliases:['urbandictionary'],
trustLevel: 0,
  async execute (context) {
    const source = context.source
    const args = context.arguments
          const bot =  context.bot
 const cmd = {
 translate: '[%s] ',
      bold: false,
      color: 'white',
      with: [
        { color: 'dark_red', text: 'Urban Cmd'},
              ]
    }
    const example = {
     translate: '%s - ',
          bold: false,
          color: 'white',
          with: [
            { color: 'dark_gray', text: 'Example text'},
                  ]
        }
    const definition5 = {
       translate: '%s - ',
            bold: false,
            color: 'white',
            with: [
              { color: 'dark_gray', text: 'Definition text'},
                    ]
          }
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
    try {
      const definitions = await urban.define(args.join(' '))
      const definitions2 = await urban.define(args.join(' '))
      //const definitions2 = await urban.example(args.join(' '))
            //ChatMessage.fromNotch(await sleep(500) ?? player.displayName ?? player.profile.name ).toMotd().replaceAll('§', '&')
            if(!bot.options.Core.CorelessMode){
                    const ChatMessage = require('prismarine-chat')(bot.options.version)
      for (const definition of definitions) {
      
              
bot.chat(ChatMessage.fromNotch(await sleep(500) 
?? [cmd, example, { text: definition.example.replaceAll("\r", ""), color: 'gray' }, { text: ' - ', color: 'white' }]).toMotd().replaceAll('§', '&')) 
    await sleep(500) 
              bot.chat(ChatMessage.fromNotch(await sleep(1000) ?? [cmd, definition5,{ text: definition.definition.replaceAll("\r", ""), color: 'gray' } ]).toMotd().replaceAll('§', '&')) 
      }//oh
              }else{//??
                      
                for (const definition of definitions) {
      
              source.sendFeedback([cmd, example, { text: definition.example.replaceAll("\r", ""), color: 'gray' }, { text: ' - ', color: 'white' }])
        source.sendFeedback([cmd, definition5,{ text: definition.definition.replaceAll("\r", ""), color: 'gray' } ])
      }
      
            

        //source.sendFeedback(results[0].written_on)

//thumbs_down
        
        
        //source.sendFeedback(results[0].data)
     }
       //  source.sendFeedback([cmd, { text: definitions2.replaceAll("\r", ""), color: 'white' }, { text: ' - ', color: 'white' }, { text: definition.definition.replaceAll("\r", ""), color: 'white' }])
      //console.log(urban.define.definition.example(args.join(' ')))

      
      //text: definition.word text: definition.definition
            
            } catch (e) {
    if (!bot.options.Core.CorelessMode){
            const ChatMessage = require('prismarine-chat')(bot.options.version)
            bot.chat(ChatMessage.fromNotch([cmd,{ text: e.toString(), color: 'red' }]).toMotd().replaceAll('§', '&')) 
    }else {
            source.sendFeedback([cmd,{ text: e.toString(), color: 'red' }])
    }
    }
  }
}