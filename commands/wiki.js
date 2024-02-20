const wiki = require('wikipedia') // 
module.exports = {
  name: 'wiki',
  description:['wikipedia'],

  async execute (context) {
       const source = context.source
    const args = context.arguments
 try {
      const page = await wiki.page(args.join(' '))
      const summary = await page.summary()
      //const definitions = await urban.define(args.join(' '))
    
    
   source.sendFeedback({ text: summary.extract, color: 'green' })
    
    } catch (e) {
     source.sendFeedback({ text: `${e.stack} \n this isnt actually a error`, color: 'red' })
 }
  }
}
