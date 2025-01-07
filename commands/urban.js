const urban = require('urban-dictionary')

module.exports = {
  name: 'urban',
hashOnly: true,
  async execute (context) {
    const source = context.source
    const args = context.arguments
 const cmd = {
 translate: '[%s] ',
      bold: true,
      color: 'white',
      with: [
        { color: 'dark_red', text: 'Urban Cmd'},
              ]
    }

    try {
      const definitions = await urban.define(args.join(' '))
    
      for (const definition of definitions) {
         source.sendFeedback([cmd,{ text: definition.word, color: 'white' }, { text: ' - ', color: 'white' }, { text: definition.definition, color: 'white' }])
      }
    } catch (e) {
    source.sendFeedback([cmd,{ text: e.toString(), color: 'red' }])
    }
  
  }
}
