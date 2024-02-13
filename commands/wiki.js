const wiki = require('wikipedia') // 
module.exports = {
  name: 'wiki',
  description:['wikipedia'],
hashOnly:false,
        consoleOnly:false,
  async execute (context) {
       const source = context.source
    const args = context.arguments
     const cmd = {
          translate: '[%s] ',
               bold: false,
               color: 'white',
               with: [
                 { color: 'dark_green', text: 'Wiki Cmd'},
                       ]
             }
     try {
      const page = await wiki.page(args.join(' '))
     // const summary = await page.images()
      const summary2 = await page.intro()
   
   //const definitions = await urban.define(args.join(' '))
   /// console.log(summary)
   
  // source.sendFeedback({ text: JSON.stringify(summary), color: 'green' })
     source.sendFeedback([cmd,{ text:`${summary2}`, color: 'green' }])
    } catch (e) {
     source.sendFeedback([cmd, { text: `${e}`, color: 'red' }])
 }
  }
}
