const urban = require('urban-dictionary')

module.exports = {
  name: 'urban',
  description:['urban dictionary'],

  async execute (context) {
    const source = context.source
    const args = context.arguments
 const cmd = {
 translate: '[%s] ',
      bold: false,
      color: 'white',
      with: [
        { color: 'dark_red', text: 'Urban Cmd'},
              ]
    }

    try {
      const definitions = await urban.define(args.join(' '))
    
      for (const definition of definitions) {
         source.sendFeedback([cmd, { text: definition.word.replaceAll("\r", ""), color: 'white' }, { text: ' - ', color: 'white' }, { text: definition.definition.replaceAll("\r", ""), color: 'white' }])
      }//text: definition.word text: definition.definition
    } catch (e) {
    source.sendFeedback([cmd,{ text: e.toString(), color: 'red' }])
    }
  
  }
}
